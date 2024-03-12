import { OMDB_API_KEY } from "$env/static/private";
import type { PageServerLoad } from "../../$types";

const apiKey = OMDB_API_KEY;

export const load = (async ({ params }) => {

    const param = params.slug;
    console.log(param);

    const apiCall = async (param: any) => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?s=${param}&apikey=${apiKey}`);
            const data = await response.json();
    
            if(data.Response === 'True') {
                
                const res = {movies: data.Search}
                console.log('Test: ',res);
                return res;
            } else {
                return {
                    movies: []
                };
            }
        } catch(error) {
            console.error('Error fetching random Movies');
            return {
                status: 500,
                error: new Error('Failed to fetch random movies.')
            };
        }
    }

    const res = await apiCall(param);
    return {...res};
    

}) satisfies PageServerLoad;