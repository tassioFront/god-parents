import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Popup from "./components/old__Popup.js";
import Options from "./components/Options";
import Invite from "./components/Invite";
import Loading from "../../components/loading/loading.js";

import "./god-parents.css";
import { get } from "../../services/godParents.service";
// import PopupPassword from "./components/Popup-password.js";

// import { messages } from "./mockMessage";

// const data = {
//   color: "purple darken-1",
//   isDouble: true,
//   name: "Lucas e Amandinha",
//   position: "2",
//   message: [
//     {
//       text:
//     }
//   ],
// };

const GodParents = () => {
  const [GodParentsOptions, setData] = useState([]);
  useEffect(() => {
    get().then((result) => {
      setData(result);
    });
    // setData(messages);
  }, []);

  const [{ chosed }, setState] = useState({
    chosed: null,
  });

  const validatePass = (inputed, pass) => {
    return inputed === pass || inputed === process.env.REACT_APP_JOKE_PASSWORD;
  };
  const handled = (selected, isToClean) => {
    setState({ chosed: !isToClean ? selected : null });
  };

  const Component = () => (
    <div className="god-parents">
      <h5>Para alguém especial</h5>
      <div className="god-parents-context">
        <blockquote>
          <p className="message">
            "Acreditamos que Deus tem um motivo único para colocar certas
            pessoas em nosso caminho. Às vezes é para nos ajudar a enxergar
            alguma situação nova, outras vezes para encorajar e fortalecer
            nossos propósitos, ou então, apenas para nos lembrar que nunca
            estamos sós e que é importante compartilhar nossas alegrias, nossos
            sonhos e nossas lágrimas...Seja qual for o motivo que Deus teve para
            nos aproximar, estamos felizes que ele o tenha feito."
            <br /> <cite>- Juan Cole</cite>
          </p>
        </blockquote>
        <p>
          Se está lendo essa mensagem, saiba que além de ser uma pessoa muito
          especial para nós, você é parte daquele pequeno grupo de amigos que
          admiramos e nos inspiramos.
          <br />
          OK, sabemos que talvez esteja bem curioso(a) agora haha... Mas antes,
          escolha a opção (nos botões a seguir) que faça mais sentido haha
        </p>

        {!GodParentsOptions.length ? (
          <Loading />
        ) : (
          <Options handle={handled} optionsArray={GodParentsOptions} />
        )}
      </div>
      {chosed && (
        // <PopupPassword
        //   key={"pass"}
        //   chosed={chosed}
        //   handle={handled}
        //   validatePass={validatePass}
        // />
        <Popup
          key={"pass"}
          chosed={chosed}
          handle={handled}
          validatePass={validatePass}
        />
      )}
    </div>
  );
  return (
    <Switch>
      <Route exact path="/invite" render={() => <Component key={"god"} />} />
      <Route
        path={"/invite/:id"}
        render={(props) => <Invite {...props} chosed={chosed} />}
      />
    </Switch>
  );
};

export default GodParents;
