

interface formProps {
    type: string;
    name: string;
    label: string;
    placeholder: string;
    onChange: Function;
}

const FormInput = ({type, name, label, placeholder, onChange}: formProps) => {

    return (
        <div>
            <label>
                {label}
                <input onChange={(e) => onChange(e)} type={type} name={name} placeholder={placeholder}></input>
            </label>
        </div>
    )
};

export default FormInput;