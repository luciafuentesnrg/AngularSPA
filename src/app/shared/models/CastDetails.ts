import { Movie } from './Movie';

export interface CastDetails {
  id: number;
  name: string;
  gender: boolean;
  tmbdUrl: string;
  profilePath: string;
  movies: Movie[];
}
