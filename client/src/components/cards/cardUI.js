import React from 'react';

const imgStyle = {
    height: '100%',
    width: '100%',
};

const textstyle = {
    fontSize: '20px',
    textAlign: 'center',
    color: 'black', 
}

const cardStyle = {
    width: '90%',
}

const cardBody = {
    padding: '3rem' 
}

const Card = props => {
    return(
        <div className="card text-center" style={cardStyle}>
            <div className="overflow">
                <img src={props.imgsrc} style={imgStyle} alt="images" className="card-img-top"/>
            </div>

        <div className="card-body text-dark" style={cardBody}>
            <h4 style={textstyle} className="card-title">{props.title}</h4>
            <p className="card-text text-secondary" style={textstyle}>
            {props.text}            
            </p>

        </div>

        </div>
        );
}

export default Card;