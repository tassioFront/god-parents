import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-materialize";

import "./invite.css";
import storage from "../../../helpers/localStorage";

const Invite = ({ history, chosed }) => {
  const hasChosed = storage.get("gp") || chosed;
  const toTitle = () => {
    const invited = document.querySelector("#invited");
    invited &&
      invited.scrollIntoView({
        behavior: "smooth",
      });
  };
  useEffect(() => {
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
      <div className="response">
        <Button>
          Eu aceito!!{" "}
          <span role="img" aria-label="hidden">
            ❤️❤️
          </span>
        </Button>
        <p>Desculpe pessoal, não posso :/</p>
        {/* <p>PS: Não se preocupe se não puder aceitar, entenderemos ;)</p> */}
      </div>
    </div>
  );
};

export default withRouter(Invite);
