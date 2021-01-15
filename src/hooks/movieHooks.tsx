import React, {
  useState, createContext, useCallback, useContext,
} from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

interface ApiResponse{
results:IMovieData[]
}

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
  search(title:string):void;

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

  const search = useCallback((title:string) => {
    if (title.length > 0) {
      const movieFiltered = originalMovieData?.filter((m) => m.title.includes(title));
      setMovieData(movieFiltered);
    }
  }, []);
  return (
    <MovieContext.Provider value={
      {
        getMovies,
        movie: movieData,
        search,
      }
    }
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
