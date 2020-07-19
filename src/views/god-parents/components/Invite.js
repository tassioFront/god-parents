import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-materialize";

import "./invite.css";
import "./popup.css";
import storage from "../../../helpers/localStorage";
import scroll from "../../../helpers/scroll";
import { update } from "../../../services/godParents.service";

const userExp = (selector) => {
  //just to UX perception time
  setTimeout(() => {
    scroll.toId(selector);
  }, 100);
};

const Invite = ({ history, chosed }) => {
  const [{ hasChosed }, setState] = useState({
    hasChosed: storage.get("gp") || chosed,
  });
  useEffect(() => {
    setState({ hasChosed: storage.get("gp") || chosed });
    userExp("#invited");
  }, []);

  const sendResponse = async (value) => {
    hasChosed.hasAccepted = value;
    await update({ data: hasChosed, id: hasChosed.id });
    setState({ hasChosed: { ...hasChosed } });
    storage.set("gp", hasChosed);
    hasChosed.hasAccepted && userExp("#accepted");
  };
  const reset = () => {
    hasChosed.hasAccepted = null;
    setState({ hasChosed: { ...hasChosed } });
    storage.set("gp", hasChosed);
  };

  return (
    <div id="invited" className="invite">
      <Button
        onClick={() => window.print()}
        className="btn-floating btn-floating--custom btn-large waves-effect waves-light orange lighten-1 no-print"
      >
        <i className="material-icons">print</i>
      </Button>

      <h2>{hasChosed.name}</h2>

      {!hasChosed.message ? (
        <p>
          Nos desculpe, ocorreu um erro algo carregar a mensagem. Poderia tentar
          novamente?
        </p>
      ) : (
        hasChosed.message.map((row, index) => (
          <p key={index} className={`${row.style || "near"} message`}>
            {row.text}
          </p>
        ))
      )}

      {hasChosed.hasAccepted === null && (
        <div className="response no-print">
          <Button onClick={() => sendResponse(true)}>
            {hasChosed.isDouble ? "Nós aceitamos!! " : "Eu aceito!! "}
            <span role="img" aria-label="hidden">
              ❤️❤️
            </span>
          </Button>

          <p
            className="pointer"
            style={{ color: "#26a69a" }}
            role="button"
            onClick={() => sendResponse(false)}
          >
            {`Desculpe pessoal,  ${
              hasChosed.isDouble ? "não podemos :/" : "não posso :/"
            }`}
          </p>
        </div>
      )}

      {hasChosed.hasAccepted && (
        <div id="accepted" className="celebrate no-print">
          <img
            alt="Fogos de artificio para comemorar!!!"
            style={{ maxWidth: "476px" }}
            src="https://i.pinimg.com/originals/00/ed/7e/00ed7ea3401fe1605ecaffeca76dc7ec.gif"
          />
          <h4>Obrigado por aceitaar !!!!</h4>
        </div>
      )}

      {hasChosed.hasAccepted === false && (
        <h6
          className="no-print"
          style={{ fontFamily: "Roboto", color: "#26a69a" }}
          role="button"
          onClick={() => reset()}
        >
          Clique aqui, caso queira{" "}
          <strong className="pointer">responder novamente :)</strong>
        </h6>
      )}
    </div>
  );
};

export default withRouter(Invite);
