import type { CollectionEntry } from "astro:content";

export const workTypeLabels: Record<CollectionEntry<"work">["data"]["workType"], string> = {
  ghostwritten: "Ghostwritten",
  bylined: "Bylined",
  "website-copy": "Website Copy",
  campaign: "Campaign",
  "sample-set": "Sample Set"
};

export const statusLabels: Record<CollectionEntry<"work">["data"]["status"], string> = {
  published: "Public link available",
  sample: "Source sample available",
  placeholder: "Placeholder from source deck"
};

export function withBase(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

export function absoluteUrl(path = "") {
  const cleanedPath = path.replace(/^\/+/, "");
  const baseUrl = new URL(import.meta.env.BASE_URL, import.meta.env.SITE);
  return new URL(cleanedPath, baseUrl).toString();
}

export function isVisibleWorkEntry(entry: CollectionEntry<"work">) {
  return entry.data.workType !== "sample-set";
}

export function sortWorkEntries(entries: CollectionEntry<"work">[], mode: "featured" | "newest" | "niche" = "featured") {
  const items = entries.filter(isVisibleWorkEntry);
  if (mode === "newest") {
    return items.sort((a, b) => {
      const aDate = a.data.date ? Date.parse(a.data.date) : 0;
      const bDate = b.data.date ? Date.parse(b.data.date) : 0;
      return bDate - aDate || a.data.title.localeCompare(b.data.title);
    });
  }
  if (mode === "niche") {
    return items.sort((a, b) => {
      const aNiche = a.data.niche[0] ?? "";
      const bNiche = b.data.niche[0] ?? "";
      return aNiche.localeCompare(bNiche) || a.data.title.localeCompare(b.data.title);
    });
  }
  return items.sort((a, b) => {
    if (a.data.featured === b.data.featured) {
      return a.data.title.localeCompare(b.data.title);
    }
    return a.data.featured ? -1 : 1;
  });
}

export function getRelatedWork(
  current: CollectionEntry<"work">,
  allEntries: CollectionEntry<"work">[],
  limit = 3
) {
  return allEntries
    .filter((entry) => entry.slug !== current.slug && isVisibleWorkEntry(entry))
    .map((entry) => {
      const sharedTags = entry.data.niche.filter((niche) => current.data.niche.includes(niche)).length;
      return { entry, score: sharedTags };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || (a.entry.data.featured === b.entry.data.featured ? 0 : a.entry.data.featured ? -1 : 1))
    .slice(0, limit)
    .map((item) => item.entry);
}
