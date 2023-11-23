import FormInput from "../components/form/FormInput";
import FormButton from "../components/form/FormButton";

const SignUpForm = () => {
    return(
        <div>
            <div>
                <form>
                    <FormInput name="username" type="text" label="Username" placeholder="Username"/>
                    <FormInput name="email" type="text" label="Email" placeholder="Example@Email.com"/>
                    <FormInput name="password" type="password" label="Password" placeholder="***********"/>
                    <FormInput name="cPassword" type="password" label="Confirm Password" placeholder="***********"/>
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