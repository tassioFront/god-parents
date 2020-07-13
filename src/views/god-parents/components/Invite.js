import React from "react";
import { withRouter, } from 'react-router-dom'
// import { TransitionGroup, CSSTransition } from "react-transition-group";

import '../god-parents.css'

const Invite = ({ history, chosed }) => {
    console.log("Invite -> chosed", chosed.name)
    console.log("GodParents -> history", history)
    // const [{ currentStep, chosed }, setState] = useState({
    //     currentStep: 0,
    //     chosed: null
    // })

    return (<div className="god-parents" >
        <h2>{chosed.name}</h2>
        <div className="god-parents-context">
            <p className="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div >
    )
}

export default withRouter(Invite);