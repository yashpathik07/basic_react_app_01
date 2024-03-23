import React from "react";

export default function Language(props) {
    return (
        <li>
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </li>
    );
}
