import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// import Features from '../components/Features'
import FeaturesJumbo from '../components/FeaturesJumbo'
// import Testimonials from '../components/Testimonials'
// import Pricing from '../components/Pricing'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
// import { JumbotronContainer } from '../containers/jumbotron'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


export const AboutJumboPageTemplate = ({
  intro,
}) => (
        <FeaturesJumbo gridItems={intro.blurbs} />
      )

AboutJumboPageTemplate.propTypes = {
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  })
}

const AboutJumboPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <div style={{"background-color" : "black"}}>
      <Navbar></Navbar>
      <AboutJumboPageTemplate
        intro={frontmatter.intro}
      />
      <Footer></Footer>
    </div>
  )
}

AboutJumboPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutJumboPage

export const AboutJumboPageQuery = graphql`
  query AboutJumboPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            id
            title
            subTitle
            alt
            direction
          }
          heading
          description
        }
      }
    }
  }
`
