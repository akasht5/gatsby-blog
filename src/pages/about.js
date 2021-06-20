import React from 'react'

import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Seo from '../components/seo'

const Title = styled.div`
  text-decoration: none;
  font-size: 35px;
  margin:50px 0;
  margin-top:100px;
`

const NavLink = styled(Link)`
  color:gray !important;
  margin-left:90%;
`

const Container = styled.div`
  font-size:20px;
  font-family: sans-serif;
  margin-top: 30px;
`

const About = () => {
    return(
        <Layout>
            <Seo title="About" />
            <Title><h2>About</h2></Title>
            <NavLink to='/'>Home</NavLink>
            <Container>
              <p>
              Hey, I’m Lee. I'm a developer, writer, and the creator of Mastering Next.js and React 2025. I work at ▲Vercel as the Head of Developer Relations.
              </p>
              <p>
              I’ve spoken across the country at conferences and meet-ups about front-end development, design, and recruiting. I write about development, tech careers, and my personal life on my newsletter.
              </p>
              <p>
              I grew up in small-town Iowa and went to school at Iowa State, graduating with a degree in Computer Engineering. I spend my free time playing music, creating videos, and enjoying time with friends and family in Des Moines, IA.
              </p>

              
            </Container>
            <div style={{ margin:`30px 0` }}>
                <span>Twitter : </span><a href="https://twitter.com/leerob">@leerob</a><br />
                <span>Github : </span><a href="https://github.com/leerob">@leerob</a>
            </div>
        </Layout>
    )
}

export default About