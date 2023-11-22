import FormInput from "../components/form/FormInput";
import FormButton from "../components/form/FormButton";

const SignUpForm = () => {
    return(
        <div>
            <div>
                <form>
                    <FormInput label="Username" placeholder="Username"/>
                    <FormInput label="Email" placeholder="Example@Email.com"/>
                    <FormButton>
                        <b>Sign up</b>
                    </FormButton>
                </form>
            </div>
            <div>
                <p>Already have a account? <a href="/login"><b>Sign in</b></a></p>
            </div>
        </div>
    )
}

export default SignUpForm;