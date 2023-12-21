/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `CMSDemo231214`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
    options: {
      // Fields to index
      fields: [`name`, `title`],
      // How to resolve each field`s value for a supported node type
      resolvers: {
        // For any node of type MarkdownRemark, list how to resolve the fields` values
        ContentfulEmployee: {
          name: node => node.name,
          title: node => node.frontmatter.title,
        }
      },
      // Optional filter to limit indexed nodes
      //filter: (node, getNode) => node.frontmatter.tags !== "exempt",
    },
  },
  {
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "KxINCAn7reMuhcejy0WEd1MxciIiR0wzFCF6Pk-5FkI",
      "spaceId": "m266108no8p1"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss"]
};