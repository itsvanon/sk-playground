import { OMDB_API_KEY } from "$env/static/private";

const apiKey = OMDB_API_KEY;

export const load = async () => {
    try {

        const response = await fetch(`https://www.omdbapi.com/?s=RANDOM&apikey=${apiKey}`);
        const data = await response.json();

        if(data.Response === 'True') {
            return {
                randomMovies: data.Search
            };
        } else {
            return {
                randomMovies: []
            }
        }

    } catch(error) {
        console.error('Error fetching random Movies');
        return {
            status: 500,
            error: new Error('Failed to fetch random movies.')
        };
    }
}