// Lets typescript use enviroment variables declared in .env

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    PORT: string;
    MONGO_URL: string;
  }
}
