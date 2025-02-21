export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  aboutHero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: "LCDT",
  logo: { src: "/images/logo-path.svg", alt: "The LCDT logo" },
  description:
    "The official website of Lochwinnoch Community Development Trust, a non-profit organization supporting our vibrant village community in Renfrewshire.",
  image: {
    src: "/dante-preview.jpg",
    alt: "Dante - Astro.js and Tailwind CSS theme"
  },
  headerNavLinks: [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Projects",
      href: "/projects"
    },
    {
      text: "News",
      href: "/news"
    },
    {
      text: "About",
      href: "/about"
    },
    {
      text: "Contact",
      href: "/contact"
    }
  ],
  footerNavLinks: [
    {
      text: "About",
      href: "/about"
    },
    {
      text: "Contact",
      href: "/contact"
    },
    {
      text: "Terms",
      href: "/terms"
    },
    {
      text: "Download theme",
      href: "https://github.com/JustGoodUI/dante-astro-theme"
    }
  ],
  socialLinks: [
    {
      text: "Dribbble",
      href: "https://dribbble.com/"
    },
    {
      text: "Instagram",
      href: "https://instagram.com/"
    },
    {
      text: "X/Twitter",
      href: "https://twitter.com/"
    }
  ],
  hero: {
    title: "Lochwinnoch Community Development Trust",
    text: "Welcome to **LCDT**'s webpage."
  },
  aboutHero: {
    title: "About Lochwinnoch Community Development Trust",
    image: {
      src: "/images/hero-no-bg.png",
      alt: "A collage of four photographs. The images depict gardening beds, two children walking through the woods, an evening lakeside scene with swans and a playground area."
    },
    actions: [
      {
        text: "Get in Touch",
        href: "/contact"
      }
    ]
  },
  subscribe: {
    title: "Subscribe to Dante Newsletter",
    text: "One update per week. All the latest posts directly in your inbox.",
    formUrl: "#"
  },
  postsPerPage: 8,
  projectsPerPage: 8
};

export default siteConfig;
