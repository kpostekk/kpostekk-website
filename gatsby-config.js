// require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: "https://kpostek.dev",
    title: "kpostekk website",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    /* "gatsby-plugin-sitemap", */
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    // {
    //   resolve: "gatsby-plugin-mdx",
    //   options: {
    //     defaultLayouts: {
    //       default: require.resolve('./src/components/layout.js')
    //     }
    //   }
    // },
    /* {
      resolve: 'gatsby-source-cosmicjs',
      options: {
        bucketSlug: 'my-website-staging',
        objectTypes: ['notes'],
        apiAccess: {
          read_key: process.env.COSMIC_READ
        },
      }
    } */
  ],
};
