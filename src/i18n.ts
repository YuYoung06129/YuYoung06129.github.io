export const locales = ['en', 'ko'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'
export const prefixedLocales = ['ko'] as const satisfies readonly Locale[]

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale)
}

export function localeFromPath(pathname: string): Locale {
  const firstSegment = pathname.split('/').filter(Boolean)[0]
  return firstSegment === 'ko' ? 'ko' : defaultLocale
}

export function localePath(locale: Locale, path = '/'): string {
  const normalized = path === '/' ? '' : `/${path.replace(/^\/+|\/+$/g, '')}`
  return locale === defaultLocale ? normalized || '/' : `/${locale}${normalized}`
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  const segments = pathname.split('/').filter(Boolean)
  if (segments[0] === 'ko') segments.shift()
  if (locale === 'ko') segments.unshift('ko')
  const path = `/${segments.join('/')}` || '/'
  return `${path}${pathname.endsWith('/') && path !== '/' ? '/' : ''}`
}

export const copy = {
  en: {
    nav: { blog: 'Blog', archives: 'Archives', tags: 'Tags', about: 'About' },
    search: 'Search',
    skip: 'Skip to content',
    home: {
      tagline: 'Security Researcher',
      location: 'Seoul, South Korea',
      intro:
        'Hello! I’m YuYoung Sung from Korea, also known as burdock129. I’m interested in network security, forensics, web hacking and cryptography.',
      moreAbout: 'More about me',
      posts: 'Posts',
      morePosts: 'More posts →',
      skills: 'Interests',
    },
    blog: 'Blog',
    archives: 'Archives',
    tags: 'Tags',
    about: 'About',
    posts: 'posts',
    page: 'page',
    of: 'of',
    noPosts: 'No posts yet.',
    noTags: 'No tags yet.',
    noTaggedPosts: 'No posts with this tag.',
    previous: 'Previous',
    next: 'Next',
    minRead: 'min read',
    updated: 'Updated',
    endArticle: '— End of article. Thanks for reading.',
    backBlog: 'Back to blog',
    backTop: 'Back to top',
    searchDescription: 'Search all posts from a local index (no external service)',
    searchPlaceholder: 'Search posts, e.g. CVE, web security…',
    searchPrompt: 'Type to search…',
    searchLoading: 'Loading index…',
    searchFailed: 'Failed to load search index. Please reload to try again.',
    resultsFound: 'results found',
    noResults: 'No matching posts',
  },
  ko: {
    nav: { blog: '글', archives: '아카이브', tags: '태그', about: '소개' },
    search: '검색',
    skip: '본문으로 이동',
    home: {
      tagline: '보안 연구자',
      location: '대한민국 서울',
      intro:
        '안녕하세요. burdock129라는 이름으로 활동하고 있는 성유영입니다. 네트워크 보안, 포렌식, 웹 해킹과 암호학에 관심이 있습니다.',
      moreAbout: '더 알아보기',
      posts: '최근 글',
      morePosts: '글 더 보기 →',
      skills: '관심 분야',
    },
    blog: '글',
    archives: '아카이브',
    tags: '태그',
    about: '소개',
    posts: '개의 글',
    page: '페이지',
    of: '/',
    noPosts: '아직 작성된 글이 없습니다.',
    noTags: '아직 태그가 없습니다.',
    noTaggedPosts: '이 태그로 작성된 글이 없습니다.',
    previous: '이전',
    next: '다음',
    minRead: '분',
    updated: '수정',
    endArticle: '— 글을 읽어주셔서 감사합니다.',
    backBlog: '글 목록으로',
    backTop: '맨 위로',
    searchDescription: '외부 서비스 없이 블로그 글을 검색합니다.',
    searchPlaceholder: 'CVE, 웹 보안 등을 검색하세요…',
    searchPrompt: '검색어를 입력하세요…',
    searchLoading: '검색 목록을 불러오는 중…',
    searchFailed: '검색 목록을 불러오지 못했습니다. 새로고침 후 다시 시도해 주세요.',
    resultsFound: '개의 검색 결과',
    noResults: '일치하는 글이 없습니다.',
  },
} as const

export function t(locale: Locale) {
  return copy[locale]
}
