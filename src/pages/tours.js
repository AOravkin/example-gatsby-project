import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const tours = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.toursBcg.childImageSharp.fluid} />
    </Layout>
  )
}

export const query = graphql`
  query {
    toursBcg: file(relativePath: { eq: "seashoreBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default tours
