import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"

const Title = styled.div`
  text-decoration: none;
  font-size: 35px;
  margin:50px 0;
`

const NavLink = styled(Link)`
  color:gray !important;
  margin-left:90%;
`

const Container = styled.div`
  margin-top:100px;
  font-size:20px;
  font-family:sans-serif;
`

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Container>
        <Title><h2>{post.frontmatter.title}</h2></Title>
        <NavLink to='/'>Back</NavLink> 
        <div style={{ marginTop:`30px` }} dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default BlogPost
