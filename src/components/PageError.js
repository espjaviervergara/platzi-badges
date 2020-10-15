import React from 'react';
import './styles/PageError.css';

function PageError (props) {
    return <div className="PageError">
        <span role="img" aria-label="No se">🤷‍♂️</span>{props.error.message} 
            </div>
}

export default PageError;