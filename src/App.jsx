import { useState } from 'react';
import { useEffect } from 'react';

import Banner from './components/Banner';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieSearch from './components/MoiveSearch';

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchVal) => {
    setMovieSearch([]);

    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi-US&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };

      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results)
    } catch (error) {
      console.log('error', error);
    }
  }

  // useEffect này được chạy sau khi component được render lần đầu tiên và mỗi khi dependencies thay đổi. Nếu dependencies là một mảng rỗng, useEffect sẽ chỉ chạy một lần sau khi component được mount. 
  useEffect(() => {
    const fechMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const urlHotList = 'https://api.themoviedb.org/3/movie/popular?language=vi-US&page=1';
      const urlTopRate = 'https://api.themoviedb.org/3/movie/top_rated?language=vi-US&page=1';

      const [res1, res2] = await Promise.all([
        fetch(urlHotList, options),
        fetch(urlTopRate, options)
      ])

      const data1 = await res1.json();
      const data2 = await res2.json();

      setMovie(data1.results);
      setMovieRate(data2.results);
    }

    fechMovie();
  }, [])

  return (
    <>
      <div>
        <Header onSearch={handleSearch} />
        <Banner />
        {movieSearch.length > 0 ?
          <MovieSearch title={'Kết quả tìm kiếm'} data={movieSearch} />
          : (
            <>
              <MovieList title={'Phim hot'} data={movie} />
              <MovieList title={'Phim đề cử'} data={movieRate} />
            </>
          )}

      </div>
    </>
  )
}

export default App
