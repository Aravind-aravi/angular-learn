import { Star } from './star';
import { Genre } from './genre';
export interface Movie{
    title:string,
    stars:Star[],
    releaseDate:Date,
    genre:Genre,
    durationInMinutes:number,
    poster:string,
    boxOffice:number


}