module.exports = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
  entities: ['src/**/*.entity.{js,ts}'],
  migrations: ['src/migrations/*.migration.{js,ts}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  synchronize: false,
};
