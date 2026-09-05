export type NicheDefinition = {
  slug: string;
  label: string;
  summary: string;
  audience: string;
  image: string;
};

export type SocialMediaItem = {
  title: string;
  brand: string;
  format: string;
  image: string;
  alt: string;
  note: string;
};

export type ProofOfWorkItem = {
  type: "AI Overview" | "Search performance";
  title: string;
  brand: string;
  image: string;
  alt: string;
  note: string;
  href?: string;
};

export const siteData = {
  name: "Atrayee Banerjee",
  title: "Content Strategist | SEO Writer | Editor",
  location: "Manali, Himachal",
  email: "banerjee.atrayee14@gmail.com",
  phone: "+91 82409 90936",
  linkedin: "https://www.linkedin.com/in/atrayee-banerjee/",
  instagram: "https://www.instagram.com/atrayee_appy/",
  resumePath: "/resume/RESUME-Atrayee.pdf",
  heroOptions: [
    {
      headline: "Strategic content that helps the right readers trust you faster.",
      subheadline:
        "Content that gets found, gets read, and gets people to act—showing up in search, AI Overviews, and everywhere your buyers look, across SaaS, finance, health, and beyond."
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
      step: "Step 1",
      title: "Research the intent",
      detail:
        "I start by understanding who's reading, what they need, and why they searched for it in the first place."
    },
    {
      step: "Step 2",
      title: "Map the structure",
      detail:
        "Every piece gets a clear flow and hierarchy before a single sentence is written—so the reader never gets lost."
    },
    {
      step: "Step 3",
      title: "Write for clarity",
      detail:
        "Simple, direct language that respects the reader's time, without losing the brand's voice."
    },
    {
      step: "Step 4",
      title: "Build for visibility",
      detail:
        "Structured to rank in search, surface in featured snippets, and show up in AI-generated answers."
    },
    {
      step: "Step 5",
      title: "Edit for results",
      detail:
        "A final pass for readability, tone, and conversion—so the content doesn't just read well, it performs."
    }
  ],
  aboutBio:
    "I'm Atrayee Banerjee, and I write and plan content for SaaS, B2B tech, finance, health, and lifestyle brands.\n\nI've been writing SEO blogs, website content, and campaigns for agencies and global brands for the past few years. These projects have helped them make complicated ideas easier to understand and act on.\n\nBut my work isn't tied to one place.\nI'm always moving around. I like to travel, meet new people, and work with a variety of brands. Travel is a big part of how I think and create. It shapes how I observe, how I structure ideas, and how I bring a more human, grounded tone into my work.\n\nSimply put, I know my audience, make things clear, and make content that actually works. Everything I write is structured, purposeful, and works well, from blogs that are based on search to brand messaging.\n\nI also work with AI-driven workflows to make research and structure better. Whatever I do, I make sure the end result is always clear, natural, and human.",
  aboutPerspective:
    "Travel and writing appear repeatedly across the source materials, and that perspective shows up in the work: curiosity, texture, and an instinct for making information feel human rather than mechanical.",
  industries: [
    "SaaS & B2B Tech",
    "Finance & Insurance",
    "Health & Wellness",
    "Automotive",
    "Fashion & Apparel",
    "Travel & Hospitality",
    "EdTech",
    "Beauty & Jewelry",
    "Home & Construction",
    "Agriculture",
    "Nonprofit & CSR",
    "Marketing & Web Growth"
  ],
  coreSkills: [
    "SEO Content Strategy",
    "Content Audits & Optimization",
    "Keyword Research & Topic Clustering",
    "On-Page SEO & Internal Linking",
    "Editorial Calendar Management",
    "Thought Leadership & Long-Form Writing",
    "Landing Page & Website Copy",
    "Backlink-Focused Content Planning",
    "Content Editing & Proofreading",
    "Social Media Content Strategy",
    "B2B & B2C Content Writing",
    "Funnel-Stage / Search-Intent Mapping",
    "Cross-Functional & Client Collaboration"
  ],
  tools: [
    "WordPress",
    "Yoast SEO",
    "Google Analytics (GA4)",
    "Google Search Console",
    "Ahrefs",
    "SEMrush",
    "Surfer SEO",
    "Clearscope",
    "MarketMuse",
    "Screaming Frog",
    "Similarweb",
    "Google PageSpeed Insights",
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
        "Built SEO blog strategies for international SaaS and tech brands.",
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
    slug: "saas-b2b-tech",
    label: "SaaS & B2B Tech",
    summary:
      "Search-led and product-focused writing for software companies, B2B platforms, and tech-led teams.",
    audience: "SaaS companies, B2B tech teams, and product-led brands",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "ai-emerging-tech",
    label: "AI & Emerging Tech",
    summary:
      "Content shaped around software workflows, digital tools, AI topics, and newer technology use cases.",
    audience: "AI products, automation tools, and emerging tech brands",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "finance-insurance",
    label: "Finance & Insurance",
    summary:
      "Risk, lending, insurance, and trust-building finance content written for clarity.",
    audience: "Financial services, insurance, and advisory brands",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "marketing-growth",
    label: "Marketing & Growth",
    summary:
      "SEO-minded articles and growth content built around traffic, conversion, and visibility.",
    audience: "Marketing teams, agencies, and growth-focused service brands",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "website-brand-copy",
    label: "Website & Brand Copy",
    summary:
      "Homepage, service, brand, and landing-page copy designed to make the offer clearer.",
    audience: "Founders and businesses refreshing web presence and messaging",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "thought-leadership",
    label: "Thought Leadership",
    summary:
      "Opinion-led, perspective-driven, and authority-building writing with a more editorial voice.",
    audience: "Founders, experts, and brands building authority through perspective",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "web3-blockchain",
    label: "Web3 & Blockchain",
    summary:
      "Technology writing relevant to blockchain, crypto, and decentralized digital products.",
    audience: "Web3 companies and blockchain-focused platforms",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "travel-lifestyle",
    label: "Travel & Lifestyle",
    summary:
      "Travel, migration, and lifestyle writing shaped by observation, voice, and curiosity.",
    audience: "Travel brands, lifestyle publishers, and migration services",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "health",
    label: "Health",
    summary:
      "Readable health education and caregiving content with a practical, empathetic voice.",
    audience: "Health publishers, clinics, and care brands",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "fashion",
    label: "Fashion",
    summary:
      "Style, apparel, and trend-led editorial content built for fashion and beauty audiences.",
    audience: "Fashion labels, apparel brands, and style-led publishers",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "automobile",
    label: "Automobile",
    summary:
      "Transport- and auto-adjacent content written to answer practical reader questions clearly.",
    audience: "Mobility brands, transport services, and automotive-adjacent publishers",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "miscellaneous",
    label: "Miscellaneous",
    summary:
      "Flexible editorial work that shows range, voice, and adaptability beyond a single category.",
    audience: "Editors, agencies, and clients evaluating range and narrative depth",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
  }
];

export const socialMediaGallery: SocialMediaItem[] = [
  {
    title: "Sale announcement caption",
    brand: "Nilis Jewellery",
    format: "Instagram caption sample",
    image: "/images/deck-media/image19.png",
    alt: "Instagram caption screenshot for a Nilis Jewellery sale announcement",
    note: "A caption-led promotional post with offer details, timing, location, and hashtag treatment."
  },
  {
    title: "Festive jewellery creative",
    brand: "Nilis Jewellery",
    format: "Promotional feed creative",
    image: "/images/deck-media/image41.png",
    alt: "Promotional jewellery graphic for Nilis Jewellery with festive styling",
    note: "A visual-first social tile built around occasion-driven messaging and brand recall."
  },
  {
    title: "Wellness caption post",
    brand: "VitSupp",
    format: "Instagram caption sample",
    image: "/images/deck-media/image20.png",
    alt: "Instagram-style caption screenshot about castor oil benefits by VitSupp",
    note: "An educational caption format that blends product relevance, readability, and platform-style hashtags."
  },
  {
    title: "Haircare educational creative",
    brand: "VitSupp",
    format: "Feed visual",
    image: "/images/deck-media/image50.png",
    alt: "Haircare promotional graphic about castor oil and dandruff from VitSupp",
    note: "An informational social graphic that packages a benefit-led hook into a more visual post format."
  },
  {
    title: "Engagement ring visual",
    brand: "Fabulously.in",
    format: "Lifestyle product creative",
    image: "/images/deck-media/image44.png",
    alt: "Lifestyle social creative for diamond engagement rings by Fabulously.in",
    note: "A softer editorial-style jewellery creative designed for scroll appeal and product mood."
  },
  {
    title: "Engagement ring caption",
    brand: "Fabulously.in",
    format: "Instagram caption sample",
    image: "/images/deck-media/image27.png",
    alt: "Instagram caption screenshot for a Fabulously.in engagement ring post",
    note: "A copy-led caption sample focused on elegance, symbolism, and a clear brand voice."
  },
  {
    title: "Product benefit ad creative",
    brand: "Homesure TileEx",
    format: "Campaign visual",
    image: "/images/deck-media/image14.png",
    alt: "Tile adhesive promotional creative for Homesure TileEx",
    note: "A promotional social asset that pairs a product shot with a direct benefit-led message."
  },
  {
    title: "Construction brand visual",
    brand: "MSP Premium",
    format: "Brand campaign creative",
    image: "/images/deck-media/image21.png",
    alt: "Promotional creative for MSP Premium TMT bars",
    note: "A campaign-style social creative built around category relevance and brand visibility."
  }
];

export const proofOfWork: ProofOfWorkItem[] = [
  {
    type: "AI Overview",
    title: "Cited in Google's AI Overview",
    brand: "Barossa Valley Seeds",
    image: "/images/proof-of-work/ai-overview-healthiest-seeds.png",
    alt: "Google AI Overview citing Barossa Valley Seeds for the search 'what are the healthiest seeds to eat'",
    note: "Referenced as a top source for the search \"what are the healthiest seeds to eat.\""
  },
  {
    type: "AI Overview",
    title: "Cited in Google's AI Overview",
    brand: "AE.R Skinlab",
    image: "/images/proof-of-work/ai-overview-vitamin-b12-fruits.png",
    alt: "Google AI Overview citing AE.R Skinlab for the search 'vitamin b12 fruits list'",
    note: "Referenced as a top source for the search \"vitamin b12 fruits list.\"",
    href: "https://aerskinlab.com/blogs/journal/vitamin-b12-rich-fruits"
  },
  {
    type: "AI Overview",
    title: "Cited in Google's AI Overview",
    brand: "Barossa Valley Seeds",
    image: "/images/proof-of-work/ai-overview-king-of-herbs.png",
    alt: "Google AI Overview citing Barossa Valley Seeds for the search 'king of herbs'",
    note: "Referenced as a top source for the search \"king of herbs.\""
  },
  {
    type: "Search performance",
    title: "Ranking and driving clicks",
    brand: "Astrologer Maa Kalyani",
    image: "/images/proof-of-work/gsc-love-marriage-prediction.png",
    alt: "Google Search Console screenshot showing the Astrological Love Marriage Prediction article gaining clicks from a previous position of zero",
    note: "\"Astrological Love Marriage Prediction by Birth Date\" went from zero clicks to 103 in 28 days.",
    href: "https://astrologermaakalyani.com/love-marriage-prediction-by-date-of-birth/"
  },
  {
    type: "Search performance",
    title: "Ranking and driving clicks",
    brand: "AE.R Skinlab",
    image: "/images/proof-of-work/gsc-botox-vs-skin-tightening.png",
    alt: "Google Search Console screenshot showing the Botox vs Skin Tightening article up 205 percent in clicks",
    note: "\"Botox vs Skin Tightening: Which Fights Aging Better?\" grew clicks by 205% in 28 days.",
    href: "https://aerskinlab.com/blogs/journal/skin-tightening-vs-botox"
  },
  {
    type: "Search performance",
    title: "Ranking and driving clicks",
    brand: "Barossa Valley Seeds",
    image: "/images/proof-of-work/gsc-seeds-trending.png",
    alt: "Google Search Console screenshot showing the Which 7 Seeds Are Best for Good Health and Fitness article up 500 percent in clicks",
    note: "\"Which 7 Seeds Are Best for Good Health and Fitness\" grew clicks by 500% in 28 days."
  }
];
