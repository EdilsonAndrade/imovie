import React, {
  useState, createContext, useCallback, useContext,
} from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

interface ApiResponse{
results:IMovieData[]
}

interface IMovieData{
    backdrop_path:string,
    overview:string,
    poster_path:string,
    title:string,
    vote_average:number,
    vote_count:number,
    adult:boolean,
}

interface AuthMovieData{
  movie?:IMovieData[];
  getMovies():Promise<void>;

}

const MovieContext = createContext<AuthMovieData>({} as AuthMovieData);

const MovieProvider:React.FC = ({ children }) => {
  const [movieData, setMovieData] = useState<IMovieData[]>([]);

  const getMovies = useCallback(async () => {
    const response = await api.get<ApiResponse>(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`);
    setMovieData(response.data.results);
  }, []);

  return (
    <MovieContext.Provider value={
      {
        getMovies,
        movie: movieData,
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
