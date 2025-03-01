const DIRECTUS_URL: string = import.meta.env.DIRECTUS_URL;

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
  newsPerPage?: number;
  projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: "LCDT",
  logo: { src: "/images/logo-path.svg", alt: "The LCDT logo" },
  description:
    "The official website of Lochwinnoch Community Development Trust, a non-profit organization supporting our vibrant village community in Renfrewshire.",
  image: {
    src: `${DIRECTUS_URL}/assets/3d8b2a93-c51a-468a-b020-1a92c2c3c364.jpg?key=seo-thumbnailize`,
    alt: "A brand collage of photos relating to projects worked on by the Lochwinnoch Community Development Trust"
  },
  headerNavLinks: [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "News",
      href: "/news"
    },
    {
      text: "Projects",
      href: "/projects"
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
  newsPerPage: 3,
  projectsPerPage: 3
};

export default siteConfig;
