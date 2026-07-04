import React from 'react'
import './MovieList.css'
import './MovieCard'
import MovieCard from './MovieCard'

const MovieList = () => {
    return (
        <section className='movie_list'>
            <header className='align_center movie_list_header'>
                <h2 className='align_center movie_list_heading'>Popular</h2>

                <div className="align_center movie_list_fs">
                    <ul className="align_center movie_filter">
                        <list className="movie_filter_item active">8+ Star</list>
                        <list className="movie_filter_item">7+ Star</list>
                        <list className="movie_filter_item">6+ Star</list>
                    </ul>

                    <select name="" id="" className='movie_sorting'>
                        <option value="">SortBy</option>
                        <option value="">Date</option>
                        <option value="">Rating</option>
                    </select>

                    <select name="" id="" className='movie_sorting'>
                        <option value="">Ascending</option>
                        <option value="">Descending</option>
                    </select>
                </div>
            </header>
            <div className="movie_cards">
                <MovieCard />
            </div>
        </section>
    )
}

export default MovieList