import React, { useState } from "react";
import style from "component/Newsletters/FormNewsLetter/style.module.scss";

const InputText = ({ _id, _name, _placeholder, _class, _type }) => {
  const [valid, setValid] = useState(false);
  const [status, setStatus] = useState(false);
  const validateString = (event) => {
    event.persist();
    const regex = /^[a-zA-Z ]*$/;
    const regexEmail = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    const regexNumber = _id === "age" ? /^(?:1[8-9]|[2-9][0-9]|90)$$/ : /^[0-9]*$/;
    
    let result = "";
    let r = event.target.value.match(/^[a-zA-Z]+$/);
    if (_type === "text") result = regex.test(event.target.value);
    if (_type === "email") result = regexEmail.test(event.target.value);
    if (_type === "number") result = regexNumber.test(event.target.value);
    
    if (result) {
      setValid(false);
      setStatus(true);
    } else {
      setValid(true);
      setStatus(false);
    }
    return event.target.value;
  };
  const handleChange = (event) => {
    event.persist();
    validateString(event);
  };
  
  return (
    <div className={style["form__newsletter"]}>
      <input
        type="text"
        id={_id}
        name={_name}
        placeholder={_placeholder}
        className={_class}
        onChange={handleChange}
        statusvalid={status ? 1 : 0}
      />
      {valid && (
        <span
          className="sms-validation"
          style={{
            position: "absolute",
            bottom: "-17px",
            left: 0,
            fontSize: "12px",
            color: "#ff0000"
          }}
        >{`* ${_placeholder} no válido`}</span>
      )}
    </div>
  );
};
export {InputText};
