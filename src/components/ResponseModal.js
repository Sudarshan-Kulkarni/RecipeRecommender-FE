import React from 'react';

const ResponseModal = ({ isOpen, onClose, response }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Recipe Recommendations</h2>
                <pre>{JSON.stringify(response, null, 2)}</pre>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ResponseModal;