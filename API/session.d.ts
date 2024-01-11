declare module 'express-session' {
    interface SessionData {
      username: string;
      authorized: boolean;
    }
   }
   
export {};