import React from "react";
import { withRouter, } from 'react-router-dom'
import { Input, Button } from 'react-materialize';

// import { TransitionGroup, CSSTransition } from "react-transition-group";

import './invite.css'
import storage from '../../../helpers/localStorage'

const Invite = ({ history, chosed }) => {
    const hasChosed = storage.get('gp') || chosed

    return (<div className="invite" >
        <h2>{hasChosed.name}</h2>
        {hasChosed.message.map((row, index) => (
            <p key={index} className={`${row.style || 'near'} message`}>{row.text}</p>
        ))}
        <div className="response">
            <Button>Eu aceito!! ❤️❤️</Button>
            <p>Desculpe pessoal, não posso :/</p>
            {/* <p>PS: Não se preocupe se não puder aceitar, entenderemos ;)</p> */}
        </div>

    </div >
    )
}

export default withRouter(Invite);