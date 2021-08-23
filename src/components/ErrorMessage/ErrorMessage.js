
import React from 'react';

const ErrorMessage = ({children}) => {
    return (
        <div
            style={{
                width: '100%',
                padding:10,
                boderRadius:4,
                backgroundColor:'orangered',
                textAlign:'center',
                color:'white',
                textTransform: 'capitalize'
            }}
        >
            {children}
        </div>
    );
}

export default ErrorMessage;