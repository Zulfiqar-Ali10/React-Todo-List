import React from "react";

const Card = ({heading, describtion, image}) => {
    return (
        <>
            <div className="card">
                <img src={image} alt="picture" />
                <h2>{heading}</h2>
                <p>{describtion}</p>
            </div>
            </>
    )
}


export default Card;