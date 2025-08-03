
const currentUrl = window.location.href;
const siteUrl = "https://haoruiii.github.io"; 
let updatedUrl = currentUrl.replace("https://haoruiii.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Pages",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Pages",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-papers",
          title: "Papers",
          description: "My publications / working papers in reversed chronological order.",
          section: "Pages",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of my academic and personal projects.",
          section: "Pages",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "a simple whitespace theme for academics",
          section: "Pages",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Pages",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-bookshelf",
              title: "Bookshelf",
              description: "",
              section: "Other Pages",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-news",
              title: "News",
              description: "",
              section: "Other Pages",
              handler: () => {
                window.location.href = "/news/";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/en-us/the_godfather%20copy%202/";
            },},{id: "books-2",
          title: '2',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/en-us/the_godfather%20copy%203/";
            },},{id: "books-2",
          title: '2',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/en-us/the_godfather%20copy%204/";
            },},{id: "books-3",
          title: '3',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/en-us/the_godfather%20copy/";
            },},{id: "books-4",
          title: '4',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/en-us/the_godfather/";
            },},{id: "projects-education-s-role-in-intergenerational-persistence",
          title: 'Education’s Role in Intergenerational Persistence',
          description: "The Experiences of China",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/project_1/";
            },},{id: "projects-educational-mobility-and-its-variation",
          title: 'Educational Mobility and Its Variation',
          description: "The Experiences of China",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/project_2/";
            },},{id: "projects-undergraduate-research-experiences",
          title: 'Undergraduate Research Experiences',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/project_3/";
            },},{id: "projects-life-in-the-cities-and-villages",
          title: 'Life in the Cities and Villages',
          description: "A Workshop in Shenzhen, China",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/project_4/";
            },},{id: "projects-画笔下的回忆",
          title: '画笔下的回忆',
          description: "南京市科利华中学原创心理剧",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/project_5/";
            },},{id: "projects-致青春",
          title: '致青春',
          description: "NFLS 2021届高三留念视频",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/project_6/";
            },},{id: "projects-再见",
          title: '再见',
          description: "NFLS 2021届高三毕业视频",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/project_7/";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%61%6F%72%75%69%69%69@%75%6D%69%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/haoruiii.bsky.social", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/haoruiii", "_blank");
        },
      },{
        id: 'social-red_note',
        title: 'Red_note',
        section: 'Socials',
        handler: () => {
          window.open("https://www.xiaohongshu.com/user/profile/61309a24000000000201b7dd", "_blank");
        },
      },{
        id: 'social-bilibili_url',
        title: 'Bilibili_url',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
          id: 'lang-zh-cn',
          title: 'zh-cn',
          section: 'Languages',
          handler: () => {
            window.location.href = "/zh-cn" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
