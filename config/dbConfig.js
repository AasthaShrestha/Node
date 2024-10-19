const databaseConfig = {
  db: process.env.DB,
  username: process.env.USERNAME1,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 20855,
  dialect: "mysql",
};

module.exports = databaseConfig;
