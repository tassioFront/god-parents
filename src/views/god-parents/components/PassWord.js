import React, { useEffect } from "react";
import { Input } from 'react-materialize';
import './password.css'

import Popup from '../../../components/popup/Popup.js'

const Password = ({ chosed = null }) => {
    // useEffect(() => {
    // }, []);
    return (
        <div className="password">
            <h2 id="pass" >Inserir senha</h2>
            <Input placeholder="digite sua senha hehe" label="Senha" s={12} />
        </div>
    )
}

export default Password

// const passPlace = document.querySelector('#pass')
        // const container = document.querySelector('.container')
        // if (container) container.style.height = 'fit-content'

        // history.push('/invite/' + selected)
        // setTimeout(() => {
        // passPlace && passPlace.scrollIntoView({
        //     behavior: 'smooth',
        // })