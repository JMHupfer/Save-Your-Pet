import { useState, useEffect } from 'react';

import search from '../utils/API';
import ResultList from './resultlist';

const searchResults = () => {

    const [results, setResults] = useState([]);

    const searchPets = async (query) => {
        const response = await search(query);
        setResults(response.data.data)
    };
useEffect(() => {
    searchPets('')
}, []);

return(
    <div>

        <ResultList results={results}/>
    </div>
);
};

export default searchResults;