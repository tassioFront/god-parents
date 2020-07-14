import React, { useState, setState } from "react";
import { withRouter } from 'react-router-dom'
import { Input, Button } from 'react-materialize';

import './popup.css'
import storage from '../../../helpers/localStorage'

const Popup = ({ chosed, validatePass, handle, history }) => {
    console.log("Popup -> history", history)
    const [{ pass }, setState] = useState('')
    const inputing = (event) => {
        setState({ pass: event.target.value })
        pass && validatePass(pass, chosed.myPass)
    }
    const clean = true
    const goToInvite = () => {
        if (!validatePass(pass, chosed.myPass)) return

        history.push('/invite/' + chosed.name)
        storage.set('gp', chosed)
    }

    return (<div className="popup" onClick={() => handle(chosed, clean)}>
        <span className="popup-background black"></span>
        <div className="popup-content" onClick={event => event.stopPropagation()}>
            <p>{"Fizemos uma coisinha especialmente pra você, " + chosed.name + ' ❤️ Só coloca sua senha e te mostramos hehe'}</p>
            <Input onChange={inputing} placeholder="digite sua senha hehe" label="Senha marota" s={12} value={pass || ''} />
            <Button onClick={goToInvite} disabled={!(pass && validatePass(pass, chosed.myPass))} waves='light'>Me mostra logo!!!</Button>
        </div>
    </div>)
}
export default withRouter(Popup);