module.exports = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
  entities: ['dist/entities/*.{js,ts}'],
  migrations: ['dist/migrations/*.{js,ts}'],
  cli: {
    migrationsDir: 'dist/migrations',
  },
  synchronize: false,
};
