module.exports = {
  HOST: "192.168.50.112",
  PORT: "5432",
  USER: "postgres",
  PASSWORD: "postgres",
  DB: "groceries",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
