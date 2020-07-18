import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-materialize";

import "./invite.css";
import "./popup.css";
import storage from "../../../helpers/localStorage";
import { update } from "../../../services/godParents.service";

const Invite = ({ history, chosed }) => {
  const [{ hasChosed }, setState] = useState({
    hasChosed: storage.get("gp") || chosed,
  });

  const toTitle = () => {
    const invited = document.querySelector("#invited");
    invited &&
      invited.scrollIntoView({
        behavior: "smooth",
      });
  };
  const sendResponse = async (value) => {
    hasChosed.hasAccepted = value;
    await update({ data: hasChosed, id: hasChosed.id });
    setState({ hasChosed: { ...hasChosed } });
    storage.set("gp", hasChosed);
  };
  const reset = () => {
    hasChosed.hasAccepted = null;
    setState({ hasChosed: { ...hasChosed } });
    storage.set("gp", hasChosed);
  };

  useEffect(() => {
    setState({ hasChosed: storage.get("gp") || chosed });

    setTimeout(() => {
      toTitle();
    }, 100);
  }, []);

  return (
    <div id="invited" className="invite">
      <h2>{hasChosed.name}</h2>
      {hasChosed.message.map((row, index) => (
        <p key={index} className={`${row.style || "near"} message`}>
          {row.text}
        </p>
      ))}
      {hasChosed.hasAccepted === null && (
        <div className="response">
          <Button onClick={() => sendResponse(true)}>
            Eu aceito!!{" "}
            <span role="img" aria-label="hidden">
              ❤️❤️
            </span>
          </Button>
          <p
            style={{ color: "#26a69a" }}
            role="button"
            onClick={() => sendResponse(false)}
          >
            Desculpe pessoal, não posso :/
          </p>
        </div>
      )}
      {hasChosed.hasAccepted && (
        <div className="celebrate">
          <img
            alt="Fogos de artificio para comemorar!!!"
            style={{ maxWidth: "476px" }}
            src="https://i.pinimg.com/originals/00/ed/7e/00ed7ea3401fe1605ecaffeca76dc7ec.gif"
          />
          <h4>Obrigado por aceitaaaaar !!!!</h4>
        </div>
      )}
      {hasChosed.hasAccepted === false && (
        <h6
          style={{ fontFamily: "Roboto", color: "#26a69a" }}
          role="button"
          onClick={() => reset()}
        >
          Clique aqui, caso queira <strong>responder novamente :)</strong>
        </h6>
      )}
    </div>
  );
};

export default withRouter(Invite);
