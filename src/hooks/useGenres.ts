import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genres{
    id: string;
    name: string;
}

interface FetchGenre{
    count: number;
    results: Genres[];
}

const useGenres = ()=>{
    const [genres , setGenres] = useState<Genres[]>([]);
    const [error , setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    useEffect(()=>{
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FetchGenre>('/genres', {signal: controller.signal})
        .then(res => {
            setGenres(res.data.results)
            setLoading(false);
        })
        .catch(err => {
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        });
        return ()=> controller.abort();
    },[])

    return {genres , error, isLoading};
};

export default useGenres;