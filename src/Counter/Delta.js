import React from 'react';

const Delta = props => {
    return (
        <div>
            <input value={props.delta} onChange={props.handleChange}/>
        </div>
    );
};

Delta.propTypes = {

};

export default Delta;