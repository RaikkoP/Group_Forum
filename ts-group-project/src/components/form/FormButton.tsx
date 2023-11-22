interface buttonProps {
    children: JSX.Element | string;
}

const FormButton = ({children}: buttonProps) => {
    return( 
        <div>
            <button>
                {children}
            </button>
        </div>
    )
}

export default FormButton;