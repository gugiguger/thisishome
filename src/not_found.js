import React from 'react';

export default class NotFound extends React.Component {
    render() {
        return (
            <div className='error-not-found'>
                <h1>404 PAGE NOT FOUND</h1>
                <a href="./"><h3>Go to main page</h3></a>
            </div>
        );
    }
