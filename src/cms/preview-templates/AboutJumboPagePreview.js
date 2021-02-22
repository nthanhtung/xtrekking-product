import React from 'react'
import PropTypes from 'prop-types'
import { AboutJumboPageTemplate } from '../../templates/about-jumbo-page'

const AboutJumboPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []
  return (
    <AboutJumboPageTemplate
      intro={{ blurbs }}
    />
  )
}

AboutJumboPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AboutJumboPagePreview
