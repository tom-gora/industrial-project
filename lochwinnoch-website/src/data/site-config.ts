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
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: "LCDT",
  logo: { src: "/images/logo-path.svg", alt: "The LCDT logo" },
  description:
    "Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com",
  image: {
    src: "/dante-preview.jpg",
    alt: "Dante - Astro.js and Tailwind CSS theme",
  },
  headerNavLinks: [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Projects",
      href: "/projects",
    },
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "Tags",
      href: "/tags",
    },
  ],
  footerNavLinks: [
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Terms",
      href: "/terms",
    },
    {
      text: "Download theme",
      href: "https://github.com/JustGoodUI/dante-astro-theme",
    },
  ],
  socialLinks: [
    {
      text: "Dribbble",
      href: "https://dribbble.com/",
    },
    {
      text: "Instagram",
      href: "https://instagram.com/",
    },
    {
      text: "X/Twitter",
      href: "https://twitter.com/",
    },
  ],
  hero: {
    title: "Lochwinnoch Community Development Trust",
    text: "Welcome to **LCDT**'s webpage. We're proud to be a non-profit organization supporting our vibrant village community in Renfrewshire.  With a rich history and a strong sense of community spirit, we aim to bring together the people living in our stunning natural surroundings of Lochwinnoch.",
    image: {
      src: "/images/hero-no-bg.png",
      alt: "A person sitting at a desk in front of a computer",
    },
    actions: [
      {
        text: "Get in Touch",
        href: "/contact",
      },
    ],
  },
  subscribe: {
    title: "Subscribe to Dante Newsletter",
    text: "One update per week. All the latest posts directly in your inbox.",
    formUrl: "#",
  },
  postsPerPage: 8,
  projectsPerPage: 8,
};

export default siteConfig;
