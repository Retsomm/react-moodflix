import React from 'react'

const MovieCard = ({movie:{title, vote_average,poster_path, release_date, original_language}}) => {
  return (
    <div className="movie-card">
        <img src={poster_path ? `https://media.themoviedb.org/t/p/w500/${poster_path}`: '/no-movie.png'} alt={title} />
        <div className="mt-2 justify-items-start">
          <h3 className="mt-2">{title}</h3>
          <div className="mt-2 mb-4 content">
            <div className="rating">
              <img className="star" src="star.svg" alt="Star Icon" />
              <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
            </div>
            <span className="mx-1">•</span>
            <p className="lang mx-1">{original_language}</p>
            <span className="mx-1">•</span>
            <p className="year mx-1">
              {release_date ? release_date.split('-')[0] : 'N/A'}
            </p>
          </div>
        </div>
    </div>
  )
}

export default MovieCard