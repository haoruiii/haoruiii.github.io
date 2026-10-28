
// Get the current URL path without the domain
let updatedUrl = window.location.pathname;

// Remove the configured baseurl, if present
const baseurl = "".replace(/\/$/, "");

if (baseurl && (updatedUrl === baseurl || updatedUrl.startsWith(baseurl + "/"))) {
  updatedUrl = updatedUrl.slice(baseurl.length) || "/";
}

// Remove the current language prefix
const currentLang = "zh-cn";

if (currentLang && (updatedUrl === "/" + currentLang || updatedUrl.startsWith("/" + currentLang + "/"))) {
  updatedUrl = updatedUrl.slice(currentLang.length + 1) || "/";
}

// Ensure the path begins with /
if (!updatedUrl.startsWith("/")) {
  updatedUrl = "/" + updatedUrl;
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-个人简介",
    title: "个人简介",
    section: "页面",
    handler: () => {
      window.location.href = "/zh-cn/";
    },
  },{id: "nav-简历",
          title: "简历",
          description: "",
          section: "页面",
          handler: () => {
            window.location.href = "/zh-cn/cv/";
          },
        },{id: "nav-发表",
          title: "发表",
          description: "个人发表及工作论文（倒序）",
          section: "页面",
          handler: () => {
            window.location.href = "/zh-cn/publications/";
          },
        },{id: "nav-项目",
          title: "项目",
          description: "个人研究及其他项目",
          section: "页面",
          handler: () => {
            window.location.href = "/zh-cn/projects/";
          },
        },{id: "nav-博客",
          title: "博客",
          description: "你好👋欢迎来我的花园",
          section: "页面",
          handler: () => {
            window.location.href = "/zh-cn/blogs/index.html";
          },
        },{id: "nav-教学",
          title: "教学",
          description: "",
          section: "页面",
          handler: () => {
            window.location.href = "/zh-cn/teachings/";
          },
        },{id: "dropdown-书架",
              title: "书架",
              description: "",
              section: "",
              handler: () => {
                window.location.href = "/zh-cn/books/";
              },
            },{id: "dropdown-简讯",
              title: "简讯",
              description: "",
              section: "",
              handler: () => {
                window.location.href = "/zh-cn/news/";
              },
            },{id: "post-我仍记得那天的夕阳",
        
          title: "我仍记得那天的夕阳",
        
        description: "关于哈佛、关于密歇根",
        section: "博客",
        handler: () => {
          
            window.location.href = "/zh-cn/blogs/2026/about-Michigan/";
          
        },
      },{id: "post-愿你的每一条路都繁花似锦",
        
          title: "愿你的每一条路都繁花似锦",
        
        description: "又是一年放榜时",
        section: "博客",
        handler: () => {
          
            window.location.href = "/zh-cn/blogs/2025/best-wishes/";
          
        },
      },{id: "post-向山去",
        
          title: "向山去",
        
        description: "重庆·暴雨之前",
        section: "博客",
        handler: () => {
          
            window.location.href = "/zh-cn/blogs/2025/Chongqing/";
          
        },
      },{id: "news-2025-csa-annual-meeting",
          title: '2025 CSA Annual Meeting',
          description: "",
          section: "简讯",handler: () => {
              window.location.href = "/zh-cn/news/2025-07-06_2025CSA/";
            },},{id: "news-it-is-officially-the-first-day-of-my-graduate-career",
          title: 'It is officially the first day of my graduate career!',
          description: "",
          section: "简讯",},{id: "projects-sociological-research-methods",
          title: 'Sociological Research Methods',
          description: "2026 Fall, GSI",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/gsi_fa26-soc-310/";
            },},{id: "projects-再见",
          title: '再见',
          description: "NFLS 2021 届高三毕业视频",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/personal_2106-Graduation/";
            },},{id: "projects-致青春",
          title: '致青春',
          description: "NFLS 2021 届高三留念视频",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/personal_2106-Memory/";
            },},{id: "projects-画笔下的回忆",
          title: '画笔下的回忆',
          description: "南京市科利华中学原创心理剧",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/personal_2306-Kelihua/";
            },},{id: "projects-城村烟火",
          title: '城村烟火',
          description: "记2023深圳高校联合工作坊",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/personal_2307-Shenzhen/";
            },},{id: "teachings-gsi-sociological-research-methods",
          title: 'GSI: Sociological Research Methods',
          description: "This course explores the basic methods of sociological research. Students will examine the relationship between social theory and research, the research process, choosing a sample, conditions for inferring causation, and methods of data collection, along with the applications and ethics of sociological research.",
          section: "教学",handler: () => {
              window.location.href = "/zh-cn/teachings/fa26-soc-310/";
            },},{
        id: 'social-email',
        title: '邮箱',
        section: '社交媒体',
        handler: () => {
          window.open("mailto:%68%61%6F%72%75%69%69%69@%75%6D%69%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: '社交媒体',
        handler: () => {
          window.open("https://bsky.app/profile/haoruiii.bsky.social", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: '领英',
        section: '社交媒体',
        handler: () => {
          window.open("https://www.linkedin.com/in/haoruiii", "_blank");
        },
      },{
        id: 'social-rednote',
        title: '小红书',
        section: '社交媒体',
        handler: () => {
          window.open("https://xhslink.cn/o/9L4s7c3YUDB", "_blank");
        },
      },{
        id: 'bilibili',
        title: '哔哩哔哩',
        section: '社交媒体',
        handler: () => {
          window.open("https://space.bilibili.com/148620914", "_blank");
        },
      },{
          id: 'lang-en-us',
          
            title: 'Switch to English',
          
          section: '语言',
          handler: () => {
            window.location.href = baseurl + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '浅色模式',
      description: '将页面主题切换至浅色',
      section: '页面主题',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '深色模式',
      description: '将页面主题切换至深色',
      section: '页面主题',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '系统默认',
      description: '将页面主题切换至系统默认',
      section: '页面主题',
      handler: () => {
        setThemeSetting("system");
      },
    },];


/* ============================================
   Custom Command-K search ordering
   ============================================ */

const getSearchPriority = (item) => {
  const id = item.id || "";

  // 1. Navigation
  if (id.startsWith("nav-")) {
    return 1;
  }

  // 2. Other Pages (Dropdown)
  if (id.startsWith("dropdown-")) {
    return 2;
  }

  // 3. Papers and Publications
  if (
    id.startsWith("papers-") ||
    id.startsWith("publications-")
  ) {
    return 3;
  }

  // 4. Teachings
  if (
    id.startsWith("teachings-") ||
    id.startsWith("teaching-") ||
    id.startsWith("courses-")
  ) {
    return 4;
  }

  // 5. Blogs
  if (id.startsWith("post-")) {
    return 5;
  }

  // 6. News
  if (id.startsWith("news-")) {
    return 6;
  }

  // 7. Projects
  if (id.startsWith("projects-")) {
    return 7;
  }

  // 8. Socials
  if (id.startsWith("social-")) {
    return 8;
  }

  // 9. Languages
  if (id.startsWith("lang-")) {
    return 9;
  }

  // 10. Theme
  if (
    id === "light-theme" ||
    id === "dark-theme" ||
    id === "system-theme"
  ) {
    return 10;
  }

  // Any other items
  return 11;
};

/* Stable sorting:
   Preserve original order within each category.
*/

ninja.data = ninja.data
  .map((item, index) => ({
    item,
    index,
    priority: getSearchPriority(item)
  }))
  .sort((a, b) => {
    // Sort categories first
    if (a.priority !== b.priority) {
      return a.priority - b.priority;
    }

    // Preserve original order within category
    return a.index - b.index;
  })
  .map(entry => entry.item);
