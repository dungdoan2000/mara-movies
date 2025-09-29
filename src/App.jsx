import Header from './components/Header';
import Banner from './components/Banner';
import MovieList from './components/MovieList';

function App() {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <MovieList title={'Phim hot'}/>
      </div>
    </>
  )
}

export default App
