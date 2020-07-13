import React from "react";
import { Button } from 'react-materialize';
import './options.css'

const Options = ({ choice, optionsArray, handle = () => null, chosed, history }) => {
    console.log("Options -> history", history)
    return (
        <div className="options">
            {optionsArray.map((option) => (
                <Button waves='light' onClick={() => handle(option)} className={option.color} key={option.name}>{option.name}</Button>
            ))}
        </div>
    )
}

export default Options