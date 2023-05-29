import React, { useState } from "react";
import { InputText } from "./InputText";
import { Loader } from "component/Newsletters/Loader/Loader";
import { Combobox } from "component/Newsletters/FormNewsLetter/Combobox";
import style from "component/Newsletters/FormNewsLetter/style.module.scss"

const academic_degrees = ["Primaria","Secundaria","Superior","Técnica"];
const departament = ["Amazonas","Ancash","Apurimac","Arequipa","Ayacucho","Cajamarca","Callao","Cusco","Huancavelica","Huánuco","Ica","Junín","La Libertad","Lambayeque","Lima","Loreto","Madre de Dios","Moquegua","Pasco","Piura","Puno","San Martín","Tacna","Tumbes","Ucayali"];

export const FormNewsLetter = ({ data }) => {
  let [sucessRegister, setSucessRegister] = useState(false);
  let [hasLoader, setHasLoader] = useState(false);
  let [msmSucess, setMsmSucess] = useState("");
  const [messageForm, setMessageForm] = useState(false);
  
  let dataForm = [];
  
   window.scrollTo(0,0);  
  

  const handleSendForm = (event) => {
    event.preventDefault();
    event.persist();
    
    let inputFirstName = document.getElementById("firstName").value,
      inputLastName = document.getElementById("lastName").value,
      inputEmail = document.getElementById("email").value,
      inputAge = document.getElementById("age").value,
      comboboxAcademicDegrees = document.getElementById("academicDegrees").value || "",
      comboboxDepartament = document.getElementById("departament").value || "",
      inputCelular = document.getElementById("celular").value,
      inputTermsConditions = document.getElementById("terms-conditions")
        .checked,
      inputCheckbox = document
        .querySelectorAll("input:checked")[0]
        .getAttribute("value");
    let validateInput = document.querySelectorAll("input[type=text]");
    const found = Array.from(validateInput).reduce(function (
      beforeValue,
      currentValue
    ) {
      return beforeValue * currentValue.getAttribute("statusvalid") * 1;
    },
    1);
    const isValidComboboxAcademicDegrees = academic_degrees.includes(comboboxAcademicDegrees);
    const isValidDepartament = departament.includes(comboboxDepartament);
    let result = found && inputTermsConditions && isValidComboboxAcademicDegrees && isValidDepartament;
    
    
    if (result) {
      let setField = {
        medio: "larepublica",
        firstname: inputFirstName,
        lastname: inputLastName,
        email: inputEmail,
        dni: "",
        celular: inputCelular,
        gender: inputCheckbox,
        edad: inputAge,
        nivel_educativo: comboboxAcademicDegrees,
        departamento : comboboxDepartament
      };
     
      if (data && data.length) {
        data.forEach(function (category) {
          dataForm.push({
            category,
            ...setField
          });
        });
      }
      
      setHasLoader(true);
      fetch("https://promociones.larepublica.pe/api/newsletter/save", {
        method: "POST",
        body: JSON.stringify(dataForm),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.text())
        .then((response) => {
          let res = JSON.parse(response);
          setSucessRegister(true);
          setHasLoader(false);
          
          if (res.code === 200) {
            
            setMsmSucess(
              <div
                className="sms-post-newsletter"
                style={{
                  color: "#468847",
                  backgroundColor: "#dff0d8",
                  borderColor: "#d6e9c6",
                  padding: "1.5rem"
                }}
              >
                <strong>¡Bien hecho!</strong> Gracias por registrarte.
              </div>
            );
          } else if (res.code === 404 || res.code === 403) {
            setMsmSucess(
              <div
                className="sms-post-newsletter"
                style={{
                  color: "#b94a48",
                  backgroundColor: "#f2dede",
                  borderColor: "#ebccd1",
                  padding: "1.5rem"
                }}
              >
                <strong>¡Atento!</strong> {res.message}
              </div>
            );
          }
        }).catch(function (error) {
          console.log("Looks like there was a problem: \n", error);
        });
    } else {
      setSucessRegister(false);
      setMessageForm(true);
      clearTimeout(timer);
      let timer = setTimeout(() => setMessageForm(false), 3000);
    }
  };

  let content = (
    <>
      <div className="container-popup">
        <div>
          {sucessRegister ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "90px",
                height: "100vh"
              }}
            >
              <div>
                {msmSucess}
                <div style={{ textAlign: "left", margin: "36px 0 15px", fontSize: "20px" }}>
                  Síguenos:
                </div>
                <div
                  style={{
                    justifyContent: "space-around",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <a
                    href="https://podcast.larepublica.pe"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="LR Podcast"
                  >
                    <img
                      src="https://cdn.larepublica.pe/images/content/default/newHome/LR_Podcast_.svg"
                      alt="LR Podcast"
                    />
                  </a>
                  <a
                    href="https://news.google.com/publications/CAAqBwgKMP6OigMwlqo8?hl=es-419&gl=PE&ceid=PE:es-419"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{
                      color: "#5A5A5A",
                      fontSize: "14px",
                      textDecoration: "none",
                      fontWeight: "bold" 
                    }}
                  >
                    <img
                      src="https://files.larepublica.pe/Larepublica/2021/07/09/google-news-icon-1625858162.svg"
                      alt="LR en Google News"
                      style={{ verticalAlign: "middle" }}
                    />
                    LR en Google News
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <form className={style["card-form-register"]} autoComplete="off">
              {messageForm && <span style={{position: "absolute", top: "-3px", letf: 0,fontSize: "12px",color: "#ff0000"}}>* Recuerde llenar y seleccionar los datos solicitados para suscribirse.</span>}
              <h2 style={{ textAlign: "left", paddingLeft: "0.75rem", borderLeft: "5px solid rgb(255, 11, 11)",fontSize:'3rem' }}>NEWSLETTERS</h2>
              <InputText
                _id="firstName"
                _name="firstName"
                _placeholder="Nombres"
                _class={style.input_item}
                _type="text"
              />
              <InputText
                _id="lastName"
                _name="lastName"
                _placeholder="Apellidos"
                _class={style.input_item}
                _type="text"
              />
              <InputText
                _id="email"
                _name="email"
                _placeholder="Correo electrónico"
                _class={style.input_item}
                _type="email"
              />
              <Combobox 
                id="academicDegrees" 
                label="Nivel Educativo" 
                name="academicDegrees" 
                _class={style.select_item}
                options={academic_degrees} 
              />
              <Combobox 
                id="departament"  
                label="Procedencia" 
                name="departament" 
                _class={style.select_item}
                options={departament} 
              />
              <InputText
                _id="age"
                _name="age"
                _placeholder="Edad"
                _class={style.input_item}
                _type="number"
              />
              <InputText
                _id="celular"
                _name="celular"
                _placeholder="Celular"
                _type="number"
                _class={style.input_item}
              />
           
              <div className={style["container-btn"]}>
                <input
                  type="radio"
                  id="male"
                  defaultChecked
                  name="radio"
                  value="hombre"
                  className={style["input-radio"]}
                />
                <label className={style["newsletter__label"]} htmlFor="male">Hombre</label>
                <input
                  type="radio"
                  id="female"
                  name="radio"
                  value="mujer"
                  className={style["input-radio"]}
                />
                <label className={style["newsletter__label"]} htmlFor="female">Mujer</label>
              </div>
              <label style={{ display: "block" }}>
                <input type="checkbox" id="terms-conditions" defaultChecked />
                <span style={{paddingLeft: "10px",fontSize:'1.5rem'}}>
                  Acepto los <a href="https://larepublica.pe/terminos-de-uso" target="_blank"><strong style={{color: "#868686"}}>Términos y condiciones y Política de privacidad</strong></a>
                </span>
              </label>

              <button
                onClick={handleSendForm}
                className={style["form__button"]}
                style={{
                  backgroundColor: "#ff0b0b",
                  color: "#FFF",
                  padding: "10px",
                  border: "none",
                  display: "table",
                  borderRadius: "4px",
                  margin: "30px auto 0",
                  
                }}
              
              >
                Suscribirme
              </button>
            </form>
          )}
          {hasLoader ? <Loader /> : ""}
        </div>
      </div>

    </>
  );

  return content;
};

