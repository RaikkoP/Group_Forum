import regex from "./regex_configuration";

function passRegex(username:string, password:string){
    if(
        !regex.userRegEx.test(username) ||
        !regex.passwordRegEx.test(password)
    ) {
        return false;
    }
}
export default passRegex;