import React from 'react'
import PropTypes from 'prop-types'
// import PreviewCompatibleImage from './PreviewCompatibleImage'
import { Jumbotron } from '.';
import { Link } from 'gatsby'


const FeatureGrid = ({ item }) => (
  <Jumbotron.Container>
    <Jumbotron key={item.node.frontmatter.id} direction="row">
      <Jumbotron.Pane>
        <Jumbotron.Title>{item.node.frontmatter.title}</Jumbotron.Title>
        <Jumbotron.SubTitle>{item.node.frontmatter.description}</Jumbotron.SubTitle>
        <br></br>
        <Link className="button" to={item.node.fields.slug}>
          Keep Reading →
        </Link>
      </Jumbotron.Pane>
      <Jumbotron.Pane>
        <div style={{padding:"20px"}}>
          <img src={item.node.frontmatter.featuredimage.publicURL} alt={item.node.frontmatter.title}/>
        </div>
      </Jumbotron.Pane>
    </Jumbotron>
  </Jumbotron.Container>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      subTitle: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      alt: PropTypes.string,
      direction: PropTypes.string,
      text: PropTypes.string,

    })
  ),
}

export default FeatureGrid
