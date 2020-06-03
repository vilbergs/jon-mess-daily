/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const axios = require("axios").default

exports.createPages = async ({ actions: { createPage } }) => {
  const poem = await (await axios("http://localhost:8080")).data

  console.log(poem)

  createPage({
    path: "/",
    component: require.resolve("./src/templates/poem.js"),
    context: { poem },
  })
}
