/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const axios = require("axios").default

exports.createPages = async ({ actions: { createPage } }) => {
  const poem = await (
    await axios("https://jon-mess-poetry-nr32rwi3ua-lz.a.run.app")
  ).data

  console.log(poem)

  createPage({
    path: "/",
    component: require.resolve("./src/templates/poem.js"),
    context: { poem },
  })
}
