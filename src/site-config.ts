/**
 * astro-theme-ink · site configuration
 * Everything the theme needs in one typed object — no virtual modules,
 * just import { config } from '@/site-config' where needed.
 */

export interface NavItem {
  title: string
  link: string
}

export interface FriendLink {
  name: string
  desc: string
  url: string
  /** Absolute URL of the avatar image. Optional. */
  avatar?: string
}

export interface EducationItem {
  school: string
  /** e.g. "计算机技术" */
  major?: string
  /** e.g. "硕士" */
  degree?: string
  /** e.g. "August 2021 - July 2024" */
  date: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface HomeHeroConfig {
  /** Tagline chip above the name, e.g. "Developer / Designer / Photographer" */
  tagline?: string
  /** Location label, e.g. "China / QingDao" */
  location?: string
  /** About paragraph under the name */
  about: string
  /** Short homepage introduction; falls back to the first paragraph of about. */
  summary?: string
  /** Action buttons */
  buttons?: { title: string; link: string }[]
}

/** Home page content — edit this file and sections appear/disappear automatically. */
export interface HomeConfig {
  hero: HomeHeroConfig
  /** How many recent posts to show; capped at 5 (0 hides the section). */
  recentPosts: number
  /** Education timeline; renders when non-empty */
  education?: EducationItem[]
  /** Skill groups; renders when non-empty */
  skills?: SkillGroup[]
  /** Show the tag cloud on the home page */
  showTags: boolean
  /** Show friend links on the home page */
  showFriends: boolean
}

export interface Config {
  /** Site identity */
  site: {
    title: string
    /** Shown on the home page hero and in the footer copyright */
    author: string
    description: string
    lang: string
    favicon: string
    /** Avatar image shown on the home page hero; a path under `public/` */
    avatar: string
    /** Open-graph image path under `public/` */
    ogImage: string
    /** Founding year of the blog — used by the console easter egg */
    since: number
    /** Default color palette for first-time visitors: 'ink' (warm) | 'fresh' (mint) */
    palette: 'ink' | 'fresh'
    /** Default theme for first-time visitors */
    theme: 'light' | 'dark'
    /** e.g. " · " */
    titleDelimiter: string
  }
  header: {
    menu: NavItem[]
  }
  /** Article page views — Waline server URL; leave empty to disable.
   *  Waline 3 counts via POST `/article` (v2 counted on GET); the theme
   *  handles both. The same server also powers the site-wide counter below. */
  pageview: {
    server: string
    /** Site-wide total-visits counter in the footer (shares the same server) */
    siteWide: boolean
  }
  footer: {
    /** Show a quote selected at build time; omitted or false keeps the footer quiet. */
    showQuote?: boolean
    /** Shown as `© <year> <author>`; set a custom string to override entirely */
    copyright?: string
    /** Extra plain-text links rendered next to the copyright */
    links?: { title: string; url: string }[]
    social?: Record<string, { label: string; url: string }>
  }
  blog: {
    pageSize: number
  }
  /** Home page content (config-driven sections) */
  home: HomeConfig
  /** Lightweight client-side search (no external indexer) */
  search: {
    enabled: boolean
  }
  /**
   * Waline comment system. Leave `server` empty to disable.
   * See https://waline.js.org to deploy your own Waline instance.
   */
  comment: {
    provider: 'waline'
    server: string
  }
  friends: FriendLink[]
}

export const config: Config = {
  site: {
    title: 'burdock129',
    author: 'YuYoung Sung',
    description:
      'Security research, CVE analysis, web exploitation, forensics and cryptography.',
    lang: 'en',
    favicon: '/favicon.svg',
    avatar: '/avatar.jpg',
    ogImage: '/favicon.svg',
    since: 2025,
    palette: 'ink',
    theme: 'light',
    titleDelimiter: ' · ',
  },

  header: {
    menu: [
      { title: 'Blog', link: '/blog' },
      { title: 'Archives', link: '/archives' },
      { title: 'Tags', link: '/tags' },
      { title: 'About', link: '/about' },
    ],
  },

  // Set your own Waline server URL to enable visit counters.
  pageview: {
    server: '',
    siteWide: false,
  },

  footer: {
    showQuote: false,
    copyright: `© 2025 - ${new Date().getFullYear()} YuYoung Sung`,
    links: [{ title: 'RSS', url: '/rss.xml' }],
    social: {
      github: { label: 'GitHub', url: 'https://github.com/YuYoung06129' },
      linkedin: { label: 'LinkedIn', url: 'https://www.linkedin.com/in/burdock129' },
      mail: { label: 'Email', url: 'mailto:me@burdock129.kr' },
    },
  },

  blog: {
    pageSize: 8,
  },

  // Home page content — edit this and the sections render automatically
  home: {
    hero: {
      tagline: 'Security Researcher',
      location: 'Seoul, South Korea',
      about:
        'Hello! I’m YuYoung Sung from Korea, also known as burdock129.\n\nI’m interested in network security, forensics, web hacking and cryptography.',
      buttons: [{ title: 'More about me', link: '/about' }],
    },
    recentPosts: 5,
    education: [],
    skills: [
      {
        title: 'Security',
        items: ['Network Security', 'Digital Forensics', 'Web Hacking', 'Cryptography'],
      },
      { title: 'Research', items: ['CVE Analysis', 'Vulnerability Research', 'CTF'] },
    ],
    showTags: false,
    showFriends: false,
  },

  search: {
    enabled: true,
  },

  comment: {
    provider: 'waline',
    // Fill in your Waline server URL to enable comments, e.g. deployed on
    // Vercel + LeanCloud: https://your-waline.vercel.app/
    server: '',
  },

  friends: [],
}
