import { graphql } from "gatsby"
import * as React from "react"
import { Card } from "../components/Card"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {

  return (
    <main className="flex flex-row gap-3">
      <StaticImage src="../images/blog-logo-starbucks.jpg" alt="Starbucks logo" />
      {data.allContentfulEmployee.nodes.map(employee => (
        <Card title={employee.name} description="Kommer sen" imageData={employee.portrait} />
      ))}
    </main>
  )
}

export const query = graphql`
  query IndexPageQuery {
    allContentfulEmployee(limit: 3) {
      nodes {
        id,
        name,
        portrait {
          gatsbyImageData
        }
      }
    }
  }
`



export default IndexPage

export const Head = () => <title>Home Page</title>
