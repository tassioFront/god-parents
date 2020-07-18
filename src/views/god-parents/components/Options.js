import React from "react";
import { Button } from "react-materialize";
import "./options.css";

const Options = ({
  choice,
  optionsArray,
  handle = () => null,
  chosed,
  history,
}) => {
  const decreasing = (current, compare) => current.position - compare.position;
  return (
    <div className="options">
      {optionsArray.sort(decreasing).map(
        (option) =>
          option.name && (
            <Button
              waves="light"
              onClick={() => handle(option)}
              className={option.color}
              key={option.id}
            >
              {option.name}
            </Button>
          )
      )}
    </div>
  );
};

export default Options;
