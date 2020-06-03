import React from "react"

const Poem = ({ pageContext: { poem } }) => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <p
      style={{
        whiteSpace: "pre-line",
      }}
    >
      {poem}
    </p>
  </div>
)

export default Poem
