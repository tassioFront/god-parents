import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Input, Button } from "react-materialize";

import "./popup.css";
import storage from "../../../helpers/localStorage";
import Popup from "./Popup.js";

const PopupPassword = ({ chosed, validatePass, handle, history }) => {
  const [pass, setState] = useState("");
  const inputing = (event) => {
    setState(event.target.value);
    pass && validatePass(pass, chosed.myPass);
  };
  const clean = true;
  const goToInvite = () => {
    if (!validatePass(pass, chosed.myPass)) return;

    history.push("/invite/" + chosed.name);
    storage.set("gp", chosed);
  };

  const context = chosed.isDouble ? "vocês, " : "você, ";
  return (
    <Popup key={"popup"} handle={() => handle(chosed, clean)}>
      <p>
        {"Fizemos uma coisinha especialmente pra " +
          context +
          chosed.name +
          " ❤️ Só digite a senha e lhe mostramos hehe"}
      </p>
      <Input
        onChange={inputing}
        label="Senha marota"
        s={12}
        defaultValue={pass || ""}
      />
      <Button
        onClick={goToInvite}
        disabled={!(pass && validatePass(pass, chosed.myPass))}
        waves="light"
      >
        Me mostra logo!!!
      </Button>
    </Popup>
  );
};
export default withRouter(PopupPassword);
