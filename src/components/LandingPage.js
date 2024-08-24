import React, { useState } from 'react';
import axios from 'axios';
import IngredientSelector from './IngredientSelector';
import CuisineSelector from './CuisineSelector';
import ResponseModal from './ResponseModal';

const LandingPage = () => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [selectedCuisine, setSelectedCuisine] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/recipes/', {
                ingredients: selectedIngredients,
                cuisine_type: selectedCuisine
            });
            setResponse(response.data.text);
            setModalIsOpen(true);
        } catch (error) {
            console.error('Error fetching recipe recommendations:', error);
            setResponse({ error: 'Failed to fetch recommendations' });
            setModalIsOpen(true);
        }
    };

    return (
        <div className="landing-page">
            <form onSubmit={handleSubmit}>
                <IngredientSelector onIngredientsSelected={setSelectedIngredients} />
                <CuisineSelector onCuisineSelected={setSelectedCuisine} />
                <button type="submit">Get Recommendations</button>
            </form>
            <ResponseModal
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                response={response}
            />
        </div>
    );
};

export default LandingPage;