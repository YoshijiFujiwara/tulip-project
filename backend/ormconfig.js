module.exports = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
  entities: [__dirname + '/**/*.entity.{js,ts}'],
  migrations: ['dist/migrations/*.{js,ts}'],
  seeds: ['src/migrations/seeds/*.{js,ts}'],
  factories: ['src/migrations/factories/*.{js,ts}'],
  cli: {
    migrationsDir: 'dist/migrations',
    entitiesDir: __dirname + '/**/*.entity.{js,ts}',
    seedersDir: 'src/migrations/seeds',
    factoriesDir: 'src/migrations/factories',
  },
  synchronize: false,
};
