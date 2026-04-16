export type NicheDefinition = {
  slug: string;
  label: string;
  summary: string;
  audience: string;
};

export const siteData = {
  name: "Atrayee Banerjee",
  title: "Content Strategist | SEO Writer | Editor",
  location: "Kolkata, India",
  email: "banerjee.atrayee14@gmail.com",
  phone: "+91 82409 90936",
  linkedin: "https://www.linkedin.com/in/atrayee-banerjee/",
  instagram: "https://www.instagram.com/atrayee_appy/",
  resumePath: "/resume/RESUME-Atrayee.pdf",
  heroOptions: [
    {
      headline: "Strategic content that helps the right readers trust you faster.",
      subheadline:
        "Atrayee writes SEO blogs, thought leadership, website copy, and campaign content for SaaS teams, service businesses, and agencies that need clarity, credibility, and growth-minded messaging."
    },
    {
      headline: "Editorial-grade content for brands that need sharper positioning and stronger search visibility.",
      subheadline:
        "From search-led blog strategy to conversion-minded website copy, Atrayee turns complex offers into content people can find, understand, and act on."
    },
    {
      headline: "Content strategy and writing for brands that want more than generic SEO.",
      subheadline:
        "Atrayee blends editorial judgment, search intent, and practical buyer insight across SaaS, finance, health, beauty, travel, and service-led brands."
    }
  ],
  selectedHeroOption: 0,
  leadTargets: [
    "SaaS and B2B tech teams",
    "Growth-stage service brands",
    "Agencies needing freelance writing support",
    "Finance, health, beauty, and travel brands"
  ],
  howIWork: [
    {
      title: "Start with search, audience, and offer clarity",
      detail:
        "Every project begins with intent, positioning, and what the reader actually needs to understand next."
    },
    {
      title: "Write with structure, voice, and conversion in mind",
      detail:
        "That means crisp narratives, editorial discipline, and copy that respects both brand tone and user behavior."
    },
    {
      title: "Refine for publish-readiness",
      detail:
        "Atrayee brings experience with audits, content refreshes, SEO alignment, and feedback loops across agencies and in-house teams."
    }
  ],
  aboutBio:
    "Atrayee Banerjee is a Kolkata-based content strategist, SEO writer, and editor with 10+ years of experience across SaaS, B2B tech, finance, beauty, health, travel, and brand-led service businesses. Her work spans long-form articles, landing pages, website copy, email and campaign content, and editorial strategy shaped by real search behavior and a strong sense of voice.",
  aboutPerspective:
    "Travel and writing appear repeatedly across the source materials, and that perspective shows up in the work: curiosity, texture, and an instinct for making information feel human rather than mechanical.",
  tools: [
    "WordPress",
    "Yoast SEO",
    "Basecamp",
    "Slack",
    "Trello",
    "Keyword clustering",
    "Content audits",
    "AI-assisted research workflows"
  ],
  timeline: [
    {
      company: "Gushwork",
      location: "Bangalore",
      role: "Content Strategist",
      period: "August 2024 - February 2026",
      points: [
        "Built SEO blog strategies for international SaaS and tech brands including Forest Hill, Inventive, and Akiflow.",
        "Wrote thought leadership, landing pages, and web content aligned with search intent and funnel stages.",
        "Supported AI-enhanced research, keyword clustering, internal linking, audits, and optimization workflows."
      ]
    },
    {
      company: "BrandLoom Consulting",
      location: "Gurgaon",
      role: "Content Strategist",
      period: "October 2022 - July 2024",
      points: [
        "Created SEO blogs, website content, and digital assets.",
        "Developed social media content calendars and copy.",
        "Audited websites and social accounts for client onboarding and optimization planning."
      ]
    },
    {
      company: "Creativomatic Media",
      location: "Kolkata",
      role: "Content Developer",
      period: "January 2020 - October 2022",
      points: [
        "Wrote blogs across topics from real estate to fashion technology.",
        "Worked across B2B and B2C audiences while coordinating with internal teams."
      ]
    },
    {
      company: "Igrowth Media",
      location: "Gujarat",
      role: "Content Writer / Editor",
      period: "January 2020 - October 2022",
      points: [
        "Delivered blogs, articles, and web copy for architecture and an Australian health brand.",
        "Edited for clarity, SEO alignment, and brand fit."
      ]
    },
    {
      company: "Bartleby",
      location: "US",
      role: "Content Editor",
      period: "April 2014 - April 2017",
      points: [
        "Edited summaries, research papers, case studies, and academic content.",
        "Worked as an SME on research-heavy assignments under tight editorial timelines."
      ]
    }
  ],
  education: [
    "MCA, Indira Gandhi National Open University (2022)",
    "B.Ed, MAKATTC (2023)",
    "B.Sc. (Hons) Computer Sciences, West Bengal State University (2017)"
  ],
  languages: ["English", "Hindi", "Bengali"],
  testimonialPlaceholder:
    "Source files do not include testimonials. This section is intentionally marked as a placeholder for future client quotes or endorsements."
};

export const nicheDefinitions: NicheDefinition[] = [
  {
    slug: "saas-ai-productivity",
    label: "SaaS",
    summary:
      "Comparison posts, workflow articles, and search-led software writing for SaaS products.",
    audience: "SaaS teams, AI products, and productivity brands"
  },
  {
    slug: "b2b-operations-procurement-compliance",
    label: "Tech & Ops",
    summary:
      "RFP, RFI, sourcing, procurement, and compliance-heavy content for operational buyers.",
    audience: "B2B operations, procurement, and compliance teams"
  },
  {
    slug: "finance-insurance-risk",
    label: "Finance & Insurance",
    summary:
      "Risk, lending, insurance, and trust-building finance content written for clarity.",
    audience: "Financial services, insurance, and advisory brands"
  },
  {
    slug: "health-caregiving",
    label: "Health",
    summary:
      "Readable health education and caregiving content with a practical, empathetic voice.",
    audience: "Health publishers, clinics, and care brands"
  },
  {
    slug: "marketing-seo-web-growth",
    label: "Marketing & Growth",
    summary:
      "Search-minded brand content, web growth writing, and agency-friendly execution.",
    audience: "Marketing teams, agencies, and growth-focused service brands"
  },
  {
    slug: "travel-migration-lifestyle",
    label: "Travel & Lifestyle",
    summary:
      "Travel, migration, and lifestyle writing shaped by observation, voice, and curiosity.",
    audience: "Travel brands, lifestyle publishers, and migration services"
  },
  {
    slug: "website-copy-brand-content",
    label: "Website Copy & Brand Content",
    summary:
      "Homepage, about, service, and product copy for brands that need a clearer story.",
    audience: "Founders and brand-led businesses refreshing their web presence"
  },
  {
    slug: "bylines-personal-essays",
    label: "Misc",
    summary:
      "Public-facing essays, bylines, and flexible editorial work that show voice and range.",
    audience: "Editors, agencies, and clients evaluating voice and narrative depth"
  },
  {
    slug: "social-email-campaigns",
    label: "Campaigns & Newsletters",
    summary:
      "Campaign support for social posts, calendars, newsletter drafts, and launch-oriented copy.",
    audience: "Brands needing recurring campaign support"
  }
];
