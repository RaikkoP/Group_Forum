import regex from "./regex_configuration";

function passRegex(username:string, password:string){
    if(
        !regex.userRegEx.test(username) ||
        !regex.passwordRegEx.test(password)
    ) {
        return false;
    } else {
        return true;
    }
}
export default passRegex;