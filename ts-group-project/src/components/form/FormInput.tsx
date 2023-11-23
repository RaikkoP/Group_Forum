

interface formProps {
    type: string;
    name: string;
    label: string;
    placeholder: string;
}

const FormInput = ({type, name, label, placeholder}: formProps) => {

    return (
        <div>
            <label>{label}</label>
            <input type={type} name={name} placeholder={placeholder}></input>
        </div>
    )
};

export default FormInput;