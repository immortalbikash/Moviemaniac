import React from 'react'
import './MovieCard.css'
import { AiOutlineStar } from "react-icons/ai";

const MovieCard = () => {
    return (
        <a href="" className='movie_card'>
            <img src="https://m.media-amazon.com/images/I/71eHZFw+GlL._AC_UF894,1000_QL80_.jpg" alt="movie poster" className='movie_poster' />

            <div className="movie_details">
                <div className="movie_details_heading">Movie Name</div>
                <div className="align_center movie_date_rate">10-20-2026</div>
                <p>8.0 <AiOutlineStar /></p>
                <p className="movie_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestiae fugit obcaecati quas optio asperiores.
                </p>
            </div>
        </a>
    )
}

export default MovieCard