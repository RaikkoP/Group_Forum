import './../../style/style.css'

interface buttonProps {
    children: JSX.Element | string;
    type: "button" | "submit" | "reset";
    className?: string;
}

const FormButton = ({children, type, className}: buttonProps) => {
    const combinedClassName = `button ${className || ''}`;
    return(
        <div>
            <button type={type} className={combinedClassName}>
                {children}
            </button>
        </div>
    )
}

export default FormButton;