module.exports = {
  input: 'apis', // outputディレクトリ,
  openapi: {
    inputFile: `http://localhost:${process.env.BACKEND_PORT}/swagger-json`,
  },
}
