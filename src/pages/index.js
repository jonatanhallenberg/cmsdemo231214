import { graphql } from "gatsby"
import * as React from "react"
import { Card } from "../components/Card"

const IndexPage = ({ data }) => {

  return (
    <main className="flex flex-row gap-3">
      {data.allContentfulEmployee.nodes.map(employee => (
        <Card title={employee.name} description="Kommer sen" imageUrl={employee.portrait.file.url} />
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
          file {
            url
          }
        }
      }
    }
  }
`



export default IndexPage

export const Head = () => <title>Home Page</title>
