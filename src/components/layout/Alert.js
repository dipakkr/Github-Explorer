import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({alert}) => {
    return (
        alert !== null && (
            <div>
                {alert.message}
            </div>
        )
    );
};



export default Alert;