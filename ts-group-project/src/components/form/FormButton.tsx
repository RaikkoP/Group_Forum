interface buttonProps {
    children: JSX.Element | string;
    type: "button" | "submit" | "reset";
}

const FormButton = ({children, type}: buttonProps) => {
    return( 
        <div>
            <button type={type}>
                {children}
            </button>
        </div>
    )
}

export default FormButton;