const AbstractManager = require("./AbstractManager");

class CommentaryManager extends AbstractManager {
  constructor() {
    super({ table: "commentary" });
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  insert(commentary) {
    return this.database.query(
      `insert into ${this.table} 
         set ?`,
      [commentary]
    );
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = CommentaryManager;
