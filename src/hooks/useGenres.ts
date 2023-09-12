
import useData from "./useData";

export interface Genres{
    id: string;
    name: string;
    image_background: string;
}


const useGenres = ()=> useData<Genres>('/genres');

export default useGenres;