import { useState } from 'react';
import PropTypes from "prop-types"; // Importa PropTypes

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-bar">
            <input  
                type='text'
                placeholder='Buscar recetas por nombres...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
};

// Agrega la definición de tipo para el prop 'onSearch'
SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
