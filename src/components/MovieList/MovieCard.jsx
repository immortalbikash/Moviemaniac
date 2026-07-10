import React from 'react'
import './MovieCard.css'
import { AiOutlineStar } from "react-icons/ai";

const MovieCard = ({ movie }) => {
    return (
        <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank' className='movie_card'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}}`} alt="movie poster" className='movie_poster' />

            <div className="movie_details">
                <div className="movie_details_heading">{movie.original_title}</div>
                <div className="align_center movie_date_rate">{movie.release_date}</div>
                <p>{movie.vote_average} <AiOutlineStar /></p>
                <p className="movie_description">
                    {movie.overview.slice(0, 90) + "..."}
                </p>
            </div>
        </a>
    )
}

export default MovieCard