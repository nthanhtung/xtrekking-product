import React from 'react'
import '../browse/index.css';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AppBrowseMultiRow from '../browse/AppBrowseMultiRow'
import { filterPostEvery , filterPostSome} from './filter-post.js'
import Footer from '../components/Footer'


const BrowsePage = ({ data }) => {
  const { allMarkdownRemark: post } = data
  var allPost = post.edges
  console.log(allPost[0]);
  console.log(allPost[0]);

  const x0 = filterPostEvery(allPost, ["banner"]);
  const x1 = filterPostEvery(allPost, ["tour"]);

  const x2 = filterPostEvery(allPost, ["north", "tour"]);
  const x3 = filterPostEvery(allPost, ["central","tour"]);
  const x4 = filterPostEvery(allPost, ["south", "tour"]);

  const x5 = filterPostEvery(allPost, ["north", "agency"]);
  const x6 = filterPostEvery(allPost, ["central","agency"]);
  const x7 = filterPostEvery(allPost, ["south", "agency"]);

  const x8 = filterPostEvery(allPost, ["north", "tran"]);
  const x9 = filterPostEvery(allPost, ["central","tran"]);
  const x10 = filterPostEvery(allPost, ["south", "tran"]);


  return (
    <div>
      <AppBrowseMultiRow  
        x0 = {x0}
        x1 = {x1}

        x2 = {x2}
        x3 = {x3}
        x4 = {x4}

        x5 = {x5}
        x6 = {x6}
        x7 = {x7}

        x8 = {x8}
        x9 = {x9}
        x10 = {x10}

      />
      <Footer></Footer>
    </div>

  )
}

BrowsePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BrowsePage

export const BrowsePageQuery = graphql`
  query BrowsePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            id
            title
            description
            tags
            poster_path {
              publicURL
            }
            backdrop_path {
              publicURL
            }
            featuredimage {
              publicURL
            }              
              
            
          }
        }
      }
    }    
  }
`
