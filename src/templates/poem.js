import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Poem = ({ pageContext: { poem } }) => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        height: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4
        style={{
          whiteSpace: "pre-line",
        }}
      >
        {poem}
      </h4>
    </div>
  </Layout>
)

export default Poem
