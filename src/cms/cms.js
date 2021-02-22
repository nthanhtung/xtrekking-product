import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import AboutJumboPagePreview from './preview-templates/AboutJumboPagePreview'


CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('tour-north', BlogPostPreview)
CMS.registerPreviewTemplate('tour-central', BlogPostPreview)
CMS.registerPreviewTemplate('tour-south', BlogPostPreview)

CMS.registerPreviewTemplate('agency-north', BlogPostPreview)
CMS.registerPreviewTemplate('agency-central', BlogPostPreview)
CMS.registerPreviewTemplate('agency-south', BlogPostPreview)

CMS.registerPreviewTemplate('tran-north', BlogPostPreview)
CMS.registerPreviewTemplate('tran-central', BlogPostPreview)
CMS.registerPreviewTemplate('tran-south', BlogPostPreview)

CMS.registerPreviewTemplate('about-jumbo', AboutJumboPagePreview)
