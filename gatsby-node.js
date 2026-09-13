exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const contentFilePath = node.internal.contentFilePath
    if (contentFilePath) {
      const match = contentFilePath.match(/\/src\/pages(\/.*?)\.mdx$/)
      if (match) {
        createNodeField({ node, name: "slug", value: match[1] })
      }
    }
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  if (page.component && page.component.endsWith(".mdx")) {
    deletePage(page)
    createPage({
      ...page,
      context: {
        ...page.context,
        isMdxPage: true,
      },
    })
  }
}
