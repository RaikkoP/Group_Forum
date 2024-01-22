declare module 'express-session' {
    interface SessionData {
      userId: string;
      username: string;
      authorized: boolean;
    }
   }
   
export {};