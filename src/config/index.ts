const env = process.env.NODE_ENV || "development";

type IConfig = {
  env: string;
  isDev: boolean;
  isTest: boolean;
  port: string | undefined;
  dbUrl: string;
};

const baseConfig: IConfig = {
  env,
  isDev: env === "development",
  isTest: env === "testing",
  port: process.env.PORT,
  dbUrl: "",
};

let envConfig = {};

switch (env) {
  case "dev":
  case "development":
    envConfig = require("./dev").config;
    break;
  // case "test":
  // case "testing":
  //   envConfig = require("./testing").config;
  //   break;
  default:
    envConfig = require("./dev").config;
}

export default { ...baseConfig, ...envConfig };
