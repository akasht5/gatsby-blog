import * as React from "react"

import { graphql,Link } from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/layout"
import Seo from "../components/seo"

const Title = styled.div`
  text-decoration: none;
  margin:50px 0;
  margin-top:100px;
`

const NavLink = styled(Link)`
  color:gray !important;
  margin-left:90%;
`
const BlogLink = styled(Link)`
  text-decoration: none;
  color: black !important;
  font-size: 24px;
  
`

const BlogItem = styled.div`
  font-family: sans-serif;
  margin-bottom:50px;
`

const BlogContent = styled.div`
  font-size: 20px;
`

const BlogDate = styled.div`
  color: grey;
  font-size:16px;
`

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {fields: frontmatter___publishedAt, order: DESC}) {
    edges {
      node {
        fields {
          slug
        }
        id
        frontmatter {
          title
          publishedAt
        }
        excerpt
      }
    }
  }
}
`

const IndexPage = ({ data }) => {
  return(
    <Layout>
    <Seo title="Home" />
    <Title><h2>Leerob's Thoughts</h2></Title>
    <NavLink to='/about'>About</NavLink>
    <div style={{ marginTop:`30px` }}>
    {
      data.allMarkdownRemark.edges.map(({node}) => (
        <BlogItem key={node.id}>
          <BlogLink to={node.fields.slug}>{node.frontmatter.title}</BlogLink>
          <BlogDate>{node.frontmatter.publishedAt}</BlogDate>
          <BlogContent>{node.excerpt}</BlogContent>
        </BlogItem>
      )
      )
    }
    </div>
  </Layout>
  )
}

export default IndexPage
