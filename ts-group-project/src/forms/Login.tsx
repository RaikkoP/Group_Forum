import FormInput from "../components/form/FormInput";
import FormButton from "../components/form/FormButton";

const LoginForm = () => {
    return(
        <div>
            <div>
                <form>
                    <FormInput label="Username" placeholder="Username"/>
                    <FormInput label="Email" placeholder="Example@Email.com"/>
                    <FormButton>
                        <b>Sign in</b>
                    </FormButton>
                </form>
            </div>
            <div>
                <p>Don't have a account? <a href="/register"><b>Sign up</b></a></p>
            </div>
        </div>
    )
}

export default LoginForm;