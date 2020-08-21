module.exports = {
  siteMetadata: {
    title: `Typing console.log Everywhere`,
    name: `Duakoma Dev`,
    siteUrl: `https://blog.iqbal.dev`,
    description: `sharing all things about javascript: Study case, problem-solving, daily use. Start from beginner being an expert`,
    hero: {
      heading: `Talk about javascript, Updates on Saturdays every week.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/miqbalhamdani`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/m.iqbal.hamdani/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/iqbalhamdani/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
