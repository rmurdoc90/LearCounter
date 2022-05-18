module.exports = {
  pgConnection:
  {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnautorized: false },
  } || "postgres://postgres:s115115744@localhost:5432/my_counter"
}
