

interface formProps {
    label: string;
    placeholder: string;
}

const FormInput = ({label, placeholder}: formProps) => {

    return (
        <div>
            <label>{label}</label>
            <input type="text" placeholder={placeholder}></input>
        </div>
    )
};

export default FormInput;