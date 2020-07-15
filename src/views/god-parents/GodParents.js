import React, { useState } from "react";
import { Switch, Route, } from 'react-router-dom'

import Popup from './components/Popup.js'
import Options from './components/Options'
import Invite from './components/Invite'
import { messages } from './messages'
import './god-parents.css'

const GodParents = () => {
    const GodParentsOptions = messages
    const [{ chosed }, setState] = useState({
        chosed: null,
    })
    const validatePass = (inputed, pass) => {
        return inputed === pass || inputed === 'porquinha'
    }
    const handled = (selected, isToClean) => {
        setState({ chosed: !isToClean ? selected : null })
    }

    return (
        <Switch>
            <Route exact path='/invite'>
                <div className="god-parents" >
                    <h5>Para alguém especial</h5>
                    <div className="god-parents-context">
                        <blockquote><p className="message">
                            "Acreditamos que Deus tem um motivo único para colocar certas pessoas em nosso caminho. Às vezes é para nos ajudar a enxergar alguma situação nova, outras vezes para encorajar e fortalecer nossos propósitos, ou então, apenas para nos lembrar que nunca estamos sós e que é importante compartilhar nossas alegrias, nossos sonhos e nossas lágrimas...Seja qual for o motivo que Deus teve para nos aproximar, estamos felizes que ele o tenha feito."<br /> <cite>- Juan Cole</cite></p></blockquote>
                        <p>Se está lendo essa mensagem, saiba que além de ser uma pessoa muito especial para nós, você é parte daquele pequeno grupo de amigos que admiramos e nos inspiramos.<br />
                        OK, sabemos que talvez esteja bem curioso(a) agora haha... Mas antes, escolha a opção (nos botões a seguir) que faça mais sentido haha</p>
                        <Options handle={handled} optionsArray={GodParentsOptions} />
                    </div>
                    {chosed && <Popup chosed={chosed} handle={handled} validatePass={validatePass} />}
                </div >
            </Route>
            <Route path={'/invite/:id'} render={props => (<Invite {...props} chosed={chosed} />)} />
        </Switch>
    )
}
{/* <Route path={'/invite/:id'} render={props => (<Popup {...props} chosed={chosed} />)} /> */ }
export default GodParents