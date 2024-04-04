/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: "Zenon.Blog",
  author: "Jesus Herman-Marina",
  headerTitle: "Zenon.Blog",
  description:
    "Blog personal de Jesus Herman Marina. Dedicado a mi exploración de ideas y a compartir mis descubrimientos, especialmente en el ámbito del desarrollo personal, tecnología, economía y emprendimiento",
  language: "en-us",
  siteUrl: "https://www.zenon.blog",
  siteRepo: "https://github.com/jhmarina/zenon.blog/",
  image: "/static/img/avatar.jpeg",
  socialBanner: "/static/img/twitter-card.png",
  email: "jhmarina@gmail.com",
  github: "https://github.com/jhmarina",
  twitter: "https://twitter.com/jhmarina2",
  linkedin: "https://www.linkedin.com/in/jesushermanmarina",
  locale: "es-ES",
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: "G-PP9TE9C1QV", // e.g. G-XXXXXXX
    },
  },
  newsletter: {
    // Please add your .env file and modify it according to your selection
    //provider: 'emailoctopus',
  },
  comment: {
    provider: "", // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: "", // username/repoName
      // Visit the link below, enter your repo in the configuration section and copy the script data parameters
      // Before that you should create a new Github discussions category with the Announcements type so that new discussions can only be created by maintainers and giscus
      // https://giscus.app/
      repositoryId: "",
      category: "",
      categoryId: "",
      mapping: "", // supported options: pathname, url, title
      reactions: "", // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: "",
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: "",
      // theme when dark mode
      darkTheme: "",
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: "",
    },
    utterancesConfig: {
      repo: "", // username/repoName
      issueTerm: "", // supported options: pathname, url, title
      label: "", // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: "",
      // theme when dark mode
      darkTheme: "",
    },
    disqus: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: "",
    },
  },
  search: {
    provider: "kbar", // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: "search.json", // path to load documents to search
    },
  },
};

module.exports = siteMetadata;
