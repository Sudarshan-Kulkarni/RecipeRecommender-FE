import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const CuisineSelector = ({ onCuisineSelected }) => {
    const [cuisines, setCuisines] = useState([]);

    useEffect(() => {
        const fetchCuisines = async () => {
            const response = {
                data: [
                    { id: 1, name: 'Italian' },
                    { id: 2, name: 'Chinese' },
                    { id: 3, name: 'Mexican' },
                    { id: 4, name: 'Indian' },
                    { id: 5, name: 'Japanese' },
                    { id: 6, name: 'Thai' },
                    { id: 7, name: 'French' },
                    { id: 8, name: 'Greek' },
                    { id: 9, name: 'Spanish' },
                    { id: 10, name: 'Korean' },
                    { id: 11, name: 'Vietnamese' },
                    { id: 12, name: 'Turkish' },
                    { id: 13, name: 'Moroccan' },
                    { id: 14, name: 'Ethiopian' },
                    { id: 15, name: 'Brazilian' },
                    { id: 16, name: 'Lebanese' },
                    { id: 17, name: 'Caribbean' },
                    { id: 18, name: 'German' },
                    { id: 19, name: 'Russian' },
                    { id: 20, name: 'American' }
                ]
            };
            setCuisines(
                response.data.map((cuisine) => ({
                    value: cuisine.id,
                    label: cuisine.name,
                }))
            );
        };
        fetchCuisines();
    }, []);

    const handleCuisineChange = (selectedOption) => {
        onCuisineSelected(selectedOption?.label || null);
    };

    return (
        <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cuisine">
                Select Cuisine
            </label>
            <Select
                name="cuisine"
                options={cuisines}
                className="basic-single"
                classNamePrefix="select"
                onChange={handleCuisineChange}
                isClearable
            />
        </div>
    );
};

export default CuisineSelector;