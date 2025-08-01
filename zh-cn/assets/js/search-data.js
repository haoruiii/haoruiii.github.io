
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
    section: "Menu de navegação",
    handler: () => {
      window.location.href = "/zh-cn/";
    },
  },{id: "nav-简历",
          title: "简历",
          description: "",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/zh-cn/cv/";
          },
        },{id: "nav-发表",
          title: "发表",
          description: "个人发表及工作论文（倒序）",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/zh-cn/publications/";
          },
        },{id: "nav-项目",
          title: "项目",
          description: "个人研究及其他项目",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/zh-cn/projects/";
          },
        },{id: "nav-博客",
          title: "博客",
          description: "um tema simples para acadêmicos",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/zh-cn/blog/";
          },
        },{id: "nav-教学",
          title: "教学",
          description: "",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/zh-cn/teaching/";
          },
        },{id: "dropdown-书架",
              title: "书架",
              description: "",
              section: "Outras opções",
              handler: () => {
                window.location.href = "/zh-cn/books/";
              },
            },{id: "dropdown-简讯",
              title: "简讯",
              description: "",
              section: "Outras opções",
              handler: () => {
                window.location.href = "/zh-cn/news/";
              },
            },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Postagens",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Postagens",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/assets/pdf/pt-br/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2021/diagrams/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2020/twitter/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2018/distill/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2015/math/";
          
        },
      },{id: "post-uma-postagem-com-código",
        
          title: "uma postagem com código",
        
        description: "um exemplo de uma postagem em um blog com código",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/zh-cn/blog/2015/formatting-and-links/";
          
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
            },},{id: "news-um-anúncio-simples-em-uma-linha",
          title: 'Um anúncio simples em uma linha.',
          description: "",
          section: "Novidades",},{id: "news-um-anúncio-longo-com-detalhes",
          title: 'Um anúncio longo com detalhes',
          description: "",
          section: "Novidades",handler: () => {
              window.location.href = "/zh-cn/news/zh-cn/announcement_2/";
            },},{id: "news-um-anúncio-simples-em-uma-linha-com-markdown-emoji-sparkles-smile",
          title: 'Um anúncio simples em uma linha com Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "Novidades",},{id: "projects-试论当代中国的教育与流动性变迁",
          title: '试论当代中国的教育与流动性变迁',
          description: "来自CGSS的一些结果",
          section: "Projetos",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/project_1/";
            },},{id: "projects-当代中国的教育流动性及其变化",
          title: '当代中国的教育流动性及其变化',
          description: "关于年龄组、性别、户口和地域",
          section: "Projetos",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/project_2/";
            },},{id: "projects-本科期间的其他研究经历",
          title: '本科期间的其他研究经历',
          description: "",
          section: "Projetos",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/project_3/";
            },},{id: "projects-城村烟火",
          title: '城村烟火',
          description: "记2023深圳高校联合工作坊",
          section: "Projetos",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/project_4/";
            },},{id: "projects-画笔下的回忆",
          title: '画笔下的回忆',
          description: "南京市科利华中学原创心理剧",
          section: "Projetos",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/project_5/";
            },},{id: "projects-致青春",
          title: '致青春',
          description: "NFLS 2021届高三留念视频",
          section: "Projetos",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/project_6/";
            },},{id: "projects-再见",
          title: '再见',
          description: "NFLS 2021届高三毕业视频",
          section: "Projetos",handler: () => {
              window.location.href = "/zh-cn/projects/zh-cn/project_7/";
            },},{
        id: 'social-email',
        title: 'Enviar um email',
        section: 'Redes sociais',
        handler: () => {
          window.open("mailto:%68%61%6F%72%75%69%69%69@%75%6D%69%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://bsky.app/profile/haoruiii.bsky.social", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://www.linkedin.com/in/haoruiii", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://www.xiaohongshu.com/user/profile/61309a24000000000201b7dd", "_blank");
        },
      },{
        id: 'social-bilibili_url',
        title: 'Bilibili_url',
        section: 'Redes sociais',
        handler: () => {
          window.open("", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Idiomas',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Muda o tema para claro',
      description: 'Muda o tema do site para claro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Muda o tema para escuro',
      description: 'Muda o tema do site para escuro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Usa o tema padrão do sistema',
      description: 'Muda o tema do site para o padrão do sistema',
      section: 'Tema',
      handler: () => {
        setThemeSetting("system");
      },
    },];
