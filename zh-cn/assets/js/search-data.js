
const currentUrl = window.location.href;
const siteUrl = "https://haoruiii.github.io"; 
let updatedUrl = currentUrl.replace("https://haoruiii.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("zh-cn".length > 0) {
  updatedUrl = updatedUrl.replace("/zh-cn", "");
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
          description: "um tema simples para acadêmicos",
          section: "页面",
          handler: () => {
            window.location.href = "/zh-cn/blog/";
          },
        },{id: "nav-教学",
          title: "教学",
          description: "",
          section: "页面",
          handler: () => {
            window.location.href = "/zh-cn/teaching/";
          },
        },{id: "dropdown-书架",
              title: "书架",
              description: "",
              section: "其他",
              handler: () => {
                window.location.href = "/zh-cn/books/";
              },
            },{id: "dropdown-简讯",
              title: "简讯",
              description: "",
              section: "其他",
              handler: () => {
                window.location.href = "/zh-cn/news/";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/zh-cn/books/en-us/the_godfather%20copy%202/";
            },},{id: "books-2",
          title: '2',
          description: "",
          section: "",handler: () => {
              window.location.href = "/zh-cn/books/en-us/the_godfather%20copy%203/";
            },},{id: "books-2",
          title: '2',
          description: "",
          section: "",handler: () => {
              window.location.href = "/zh-cn/books/en-us/the_godfather%20copy%204/";
            },},{id: "books-3",
          title: '3',
          description: "",
          section: "",handler: () => {
              window.location.href = "/zh-cn/books/en-us/the_godfather%20copy/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/zh-cn/books/zh-cn/the_godfather/";
            },},{id: "projects-试论当代中国的教育与流动性变迁",
          title: '试论当代中国的教育与流动性变迁',
          description: "来自CGSS的一些结果",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/project_1/";
            },},{id: "projects-当代中国的教育流动性及其变化",
          title: '当代中国的教育流动性及其变化',
          description: "关于年龄组、性别、户口和地域",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/project_2/";
            },},{id: "projects-本科期间的其他研究经历",
          title: '本科期间的其他研究经历',
          description: "",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/project_3/";
            },},{id: "projects-城村烟火",
          title: '城村烟火',
          description: "记2023深圳高校联合工作坊",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/project_4/";
            },},{id: "projects-画笔下的回忆",
          title: '画笔下的回忆',
          description: "南京市科利华中学原创心理剧",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/project_5/";
            },},{id: "projects-致青春",
          title: '致青春',
          description: "NFLS 2021届高三留念视频",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/project_6/";
            },},{id: "projects-再见",
          title: '再见',
          description: "NFLS 2021届高三毕业视频",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/project_7/";
            },},{
        id: 'social-email',
        title: '发邮件',
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
        title: 'LinkedIn',
        section: '社交媒体',
        handler: () => {
          window.open("https://www.linkedin.com/in/haoruiii", "_blank");
        },
      },{
        id: 'social-red_note',
        title: 'Red_note',
        section: '社交媒体',
        handler: () => {
          window.open("https://www.xiaohongshu.com/user/profile/61309a24000000000201b7dd", "_blank");
        },
      },{
        id: 'social-bilibili_url',
        title: 'Bilibili_url',
        section: '社交媒体',
        handler: () => {
          window.open("", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: '语言',
          handler: () => {
            window.location.href = "" + updatedUrl;
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
