import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const IngredientSelector = ({ onIngredientsSelected }) => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const fetchIngredients = async () => {
            const response = {
                data: [
                    { id: 1, name: 'Onions' },
                    { id: 2, name: 'Tomatoes' },
                    { id: 3, name: 'Bell Peppers' },
                    { id: 4, name: 'Garlic' },
                    { id: 5, name: 'Carrots' },
                    { id: 6, name: 'Potatoes' },
                    { id: 7, name: 'Spinach' },
                    { id: 8, name: 'Mushrooms' },
                    { id: 9, name: 'Broccoli' },
                    { id: 10, name: 'Cilantro' },
                    { id: 11, name: 'Ginger' },
                    { id: 12, name: 'Basil' },
                    { id: 13, name: 'Thyme' },
                    { id: 14, name: 'Rosemary' },
                    { id: 15, name: 'Parsley' },
                    { id: 16, name: 'Chili Peppers' },
                    { id: 17, name: 'Zucchini' },
                    { id: 18, name: 'Eggplant' },
                    { id: 19, name: 'Cucumber' },
                    { id: 20, name: 'Lettuce' }
                ]
            };
            setIngredients(
                response.data.map((ingredient) => ({
                    value: ingredient.id,
                    label: ingredient.name,
                }))
            );
        };
        fetchIngredients();
    }, []);

    const handleIngredientsChange = (selectedOptions) => {
        onIngredientsSelected(selectedOptions.map((option) => option.label));
    };

    return (
        <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ingredients">
                Select Ingredients
            </label>
            <Select
                isMulti
                name="ingredients"
                options={ingredients}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleIngredientsChange}
            />
        </div>
    );
};

export default IngredientSelector;