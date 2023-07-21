const AbstractManager = require("./AbstractManager");

class BookManager extends AbstractManager {
  constructor() {
    super({ table: "books" });
  }

  find(id) {
    return this.database.query(
      `select id, name, author, released_date, genre, publisher, opinion, summary, picture from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  insert(book) {
    return this.database.query(
      `insert into ${this.table} (name, author, released_date, genre, publisher, opinion, summary, picture) 
        values (?, ?, ?, ?, ?, ?, ?, ?) `,
      [
        book.name,
        book.author,
        book.released_date,
        book.genre,
        book.publisher,
        book.opinion,
        book.summary,
        book.picture,
      ]
    );
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = BookManager;
