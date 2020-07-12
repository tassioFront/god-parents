import React from "react";
import { Button } from 'react-materialize';
import Popup from '../../components/popup/Popup.js'
import './god-parents.css'

const GodParents = () => (
    <div class="god-parents">
        <h5>GodParents</h5>
        <p class="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button>Confirmar!</Button>
        <Popup />
    </div>
);

export default GodParents;