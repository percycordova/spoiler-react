export const Combobox = ({_class,value, id, label = "",name, options = []}) => {
    return <div className="flex-d-column" style={{color: "#868686"}}>
        {/* <label htmlFor={name}>{label}</label> */}
            <select name={name} id={id} required className={_class}>
                <option value="">{`Seleccionar ${label}`}</option>
                {options.map( val => (
                    <option key={val} value={val}>{val}</option>
                ))}
            </select>
    </div>
}
