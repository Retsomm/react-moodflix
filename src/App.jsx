import React, { useEffect, useState } from 'react'
import { useDebounce } from 'react-use';
import './App.css'
import Search from './components/Search.jsx'
import Spinner from './components/Spinner.jsx';
import MovieCard from './components/MovieCard.jsx';
import { getTrendingMovies, updateSearchCount } from './appwrite.js';

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_POTIONS = {
  method: 'GET',
  headers:{
    accept:'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm,setDebouncedSearchTerm] = useState('');

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm])

  const fetchMovie = async(query = '')=> {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}`
        : `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

      const response = await fetch(endpoint, API_POTIONS);
      if(!response.ok){
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      if(data.Response === 'False') {
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);
      if(query && data.results.length > 0 ) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch(error){
      console.error(`Error fetching movie: ${error}`);
      setErrorMessage('Failed to fetch movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    } catch(error) {
      console.error(`Error fetching trending movies: ${error}`);
    }
  }
  useEffect(() => {
    fetchMovie(debouncedSearchTerm)
    }, [debouncedSearchTerm]);
  useEffect(()=> {
    loadTrendingMovies();
  },[]);
  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span>Movies</span> You'll Enjoy Without the Hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>
        { trendingMovies.length > 0 && (
          <>
            <h2>Trending Movies</h2>
            <section className='trending'>
              <ul className='flex trendUl'>
                {trendingMovies.map((movie, index) => (
                  <li key={movie.$id} className=' flex trendLi'>
                    <p className='trendIndex'>{index + 1}</p>
                    <img src={movie.poster_url} alt={movie.title} />
                  </li>
                ))}
              </ul>
            </section>
          </>
          
        )}

        <section className='all-movies'>
          <h2>All Movies</h2>
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className='text-white'>{errorMessage}</p>
          ) : (
            <ul className='movies'>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}

export default App