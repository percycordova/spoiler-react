import style from "component/Newsletters/FormInputCheckboxNewsLetter/FormInputCheckboxNewsLetter.module.scss";

export const FormInputCheckboxNewsLetter = ({ category }) => {
  return (
    <>
      <label className={style["container-checkbox"]}>
        <input type="checkbox" className="input-checkbox" category={category} />
        <span className={style["checkmark"]} />
        <span className={style["checkmarklabel"]}>Seleccionado</span>
      </label>
    </>
  );
};

