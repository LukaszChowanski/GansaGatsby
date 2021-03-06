import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import LeftColumn from '../components/FrontPage/LeftColumn'
import RightColumn from '../components/FrontPage/RightColumn'

export const pageQuery = graphql`
{
  wpgraphql {
    pageBy(uri: "/") {
      content(format: RENDERED)
      title
    }
  }
}
`

const IndexPage = ({data}) => {

  const {title, content} = data.wpgraphql.pageBy

  return(
    <Layout>
      <SEO title="Home Page" />
      <StyledMain>
        <LeftColumn title={title} content={content}/>
        <RightColumn/>
      </StyledMain>
    </Layout>
  )
}

export default IndexPage

const StyledMain = styled.main`
    display: grid;
    grid-template-columns: 70% 30%; 
    margin: 0 auto;
    max-width: 1140px;
    & h1 {
        font-size: 62px;
    }
`
