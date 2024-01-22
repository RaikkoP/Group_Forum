export {};

declare global {
 namespace NodeJS {
    interface ProcessEnv {
        DB_HOST: string,
        DB_USER: string,
        DB_PASSWORD: string,
        DB_DATABASE: string,
        USERNAME_REGEX: string,
        PASSWORD_REGEX: string,
        SECRET_KEYS: string[],
    }
 }
}