module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ck-personal-site-v2",
  },
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-less",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
