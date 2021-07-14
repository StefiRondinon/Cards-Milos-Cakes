import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';


function Card({title, imageSource, description, url}) {
    return (
        <div className="card text-center" >
            <img className="imagenes" src={imageSource}></img>
            <div className="card-body text-ligth">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">{description}</p>
                <a href={url} className="btn btn-outline-secondary" target="_blank">
                    Go 
                </a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string
}

export default Card
