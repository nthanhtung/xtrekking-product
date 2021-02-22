import React from 'react'
import "./Banner.css"
import { Link } from 'gatsby'

function Banner({movies}) {
  const r = Math.floor((movies.length - 1)*Math.random()) 
  const n = r < 0 ? 0 : r
  const movie = movies[n].node.frontmatter
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "${movie?.backdrop_path.publicURL}"
        )`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title}
        </h1>

        <div className="banner_buttons">
        
          <Link to={movies[n].node.fields.slug}>
            <button className="banner_button">Read More</button>
          </Link>          

          <Link to="/contact">
            <button className="banner_button">Book Now</button>
          </Link>  

        </div>
        <h1 className="banner_description">{truncate(movie?.description, 150)}</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>

  )
}

export default Banner
