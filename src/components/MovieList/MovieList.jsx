import React, { useEffect, useState } from 'react'
import './MovieList.css'
import './MovieCard'
import MovieCard from './MovieCard'

const MovieList = () => {

    const [movies, setMovies] = useState([]);
    const [filterMovies, setFilterMovies] = useState([]);
    const [minRating, setMinRating] = useState(0);

    useEffect(() => {
        fetchMovies();
    }, [])

    const fetchMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=7a24d1644bb8fe009ade12541783834a");
        const data = await response.json();
        console.log(data.results);
        setMovies(data.results);
        setFilterMovies(data.results);

    }

    const handleFilter = rate => {

        if (rate === minRating) {
            setMinRating(0)
            setFilterMovies(movies);
        }
        else {
            setMinRating(rate);
            const filtered = movies.filter((movie) => movie.vote_average >= rate);
            setFilterMovies(filtered);
        }
    };

    return (
        <section className='movie_list'>
            <header className='align_center movie_list_header'>
                <h2 className='align_center movie_list_heading'>Popular</h2>

                <div className="align_center movie_list_fs">
                    <ul className="align_center movie_filter">
                        <list className={minRating === 8 ? 'movie_filter_item active' : 'movie_filter_item'} onClick={() => handleFilter(8)}>8+ Star</list>
                        <list className={minRating === 7 ? 'movie_filter_item active' : 'movie_filter_item'} onClick={() => handleFilter(7)}>7+ Star</list>
                        <list className={minRating === 6 ? 'movie_filter_item active' : 'movie_filter_item'} onClick={() => handleFilter(6)}>6+ Star</list>
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
                {
                    filterMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                }

            </div>
        </section>
    )
}

export default MovieList