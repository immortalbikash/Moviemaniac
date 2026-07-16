import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import './MovieList.css'
import './MovieCard'
import MovieCard from './MovieCard'
import FilterGroup from './FilterGroup'

const MovieList = () => {

    const [movies, setMovies] = useState([]);
    const [filterMovies, setFilterMovies] = useState([]);
    const [minRating, setMinRating] = useState(0);
    const [sort, setSort] = useState({
        by: "default",
        order: "asc"
    })

    useEffect(() => {
        fetchMovies();
    }, []);

    useEffect(() => {
        if (sort.by !== "default") {
            const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order])
            setFilterMovies(sortedMovies);
        }
    }, [sort])

    const fetchMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=7a24d1644bb8fe009ade12541783834a");
        const data = await response.json();
        // console.log(data.results);
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

    const hanldeSort = e => {
        const { name, value } = e.target;
        setSort(prev => ({ ...prev, [name]: value }))
    }

    console.log(sort);

    return (
        <section className='movie_list'>
            <header className='align_center movie_list_header'>
                <h2 className='align_center movie_list_heading'>Popular</h2>

                <div className="align_center movie_list_fs">

                    <FilterGroup minRating={minRating} onRatingClick={handleFilter} />

                    <select name="by" id="" onChange={hanldeSort} value={sort.by} className='movie_sorting'>
                        <option value="default">SortBy</option>
                        <option value="release_date">Date</option>
                        <option value="vote_average">Rating</option>
                    </select>

                    <select name="order" id="" onChange={hanldeSort} value={sort.order} className='movie_sorting'>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
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