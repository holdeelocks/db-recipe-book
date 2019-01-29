// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/db_recipes.sqlite3"
    },
    useNullAsDefault: true
  }
};
