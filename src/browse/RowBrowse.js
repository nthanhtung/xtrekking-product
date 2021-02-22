import React, { useState } from 'react';
import "./Row.css";
import FeaturesJumboBrowse from '../components/FeaturesJumboBrowse'


const base_url = ""

function Row({ title, movies, isLargeRow }) {
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      setTrailerUrl(movie);
    }    
  }  

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(movie => {
          return <img
            key={movie.node.frontmatter.id }
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.node.frontmatter.poster_path.publicURL  : movie.node.frontmatter.backdrop_path.publicURL }`}
            alt={movie.node.frontmatter.title } />
        })}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <FeaturesJumboBrowse item={trailerUrl}/>}
      </div>
    </div>
  );
}

export default Row;
