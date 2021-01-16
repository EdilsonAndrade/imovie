import React, {
  useState, createContext, useCallback, useContext,
} from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

export interface IMovieData{
    id:number;
    backdrop_path:string;
    overview:string;
    poster_path:string;
    title:string;
    vote_average:number;
    vote_count:number;
    adult:boolean;
    showDetail:boolean;
    release_date:string;
}

interface AuthMovieData{
  movie?:IMovieData[];
  getMovies():Promise<void>;
  searchMovies(title:string):void;
  filterByRate(starId:number):void;

}

const MovieContext = createContext<AuthMovieData>({} as AuthMovieData);

const MovieProvider:React.FC = ({ children }) => {
  const [movieData, setMovieData] = useState<IMovieData[]>();
  const [originalMovieData, setOriginalMovieData] = useState<IMovieData[]>();
  const getMovies = useCallback(async () => {
    const response = await api.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`);

    const movies:IMovieData[] = [];
    const { results } = response.data;
    const options = {
      month: 'long', day: 'numeric',
    };
    if (results) {
      results.forEach((m:IMovieData) => {
        movies.push({
          ...m,
          release_date: new Intl.DateTimeFormat('en-US', options).format(new Date(m.release_date)),
        });
      });
    }
    setMovieData(movies);
    setOriginalMovieData(movies);
  }, []);

  const searchMovies = useCallback((title:string) => {
    if (title.length > 0) {
      const movieFiltered = originalMovieData?.filter((m) => m.title.toLowerCase()
        .includes(title.toLowerCase()));

      setMovieData(movieFiltered);
    } else {
      setMovieData(originalMovieData);
    }
  }, [originalMovieData]);

  const filterByRate = useCallback((starId:number) => {
    const movieRates = [2, 4, 6, 8, 10];

    if (starId > 0) {
      const movieFiltered = originalMovieData?.filter(
        (m) => (Number(m.vote_average.toFixed()) >= movieRates[starId - 1] - 2
           && Number(m.vote_average.toFixed()) <= movieRates[starId - 1]),
      );

      setMovieData(movieFiltered);
    } else {
      setMovieData(originalMovieData);
    }
  }, [originalMovieData]);
  return (
    <MovieContext.Provider value={{
      getMovies, searchMovies, movie: movieData, filterByRate,
    }}
    >
      {children}
    </MovieContext.Provider>
  );
};

function useMovie():AuthMovieData {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovie must be used within an MovieProvider');
  }
  return context;
}
MovieProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export { MovieProvider, useMovie };
