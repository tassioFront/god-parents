import React, { Component, setState, useState } from "react";
import { Switch, Route, withRouter, Link, } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Popup from './components/Popup.js'
import Options from './components/Options'
import PassWord from './components/PassWord'
import Invite from './components/Invite'
import './god-parents.css'

const GodParents = ({ history }) => {
    const [{ currentStep, chosed, isValid }, setState] = useState({
        currentStep: 0,
        chosed: null,
        isValid: ''
    })
    const validatePass = (inputed, pass) => {
        return pass === inputed
    }
    const handled = (selected, isToClean) => {
        setState({ chosed: !isToClean ? selected : null })
    }

    const double = "purple darken-1"
    const godfather = 'cyan darken-1'
    const godmother = 'pink darken-1'
    const GodParentsOptions = [
        { name: 'Alone', color: godmother, myPass: '12' },
        { name: 'Débora', color: godmother },
        { name: 'Be (Xu)', color: godmother },
        { name: 'Karina', color: godmother },
        { name: 'Rogerio e Ana Lúcia', color: double },
        { name: 'Lucas e Amandinha', color: double },
        { name: 'Eu sou o Huill', color: godfather },
        { name: 'Bruno', color: godfather },
        { name: 'Bruno (cabeça)', color: godfather },
        { name: 'Rafa <3', color: godfather },
    ]

    return (
        <Switch>
            <Route exact path='/invite'>
                <div className="god-parents" >
                    <h5>GodParents</h5>
                    <div className="god-parents-context">
                        <p className="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

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