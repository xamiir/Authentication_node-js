const db = require('../../database/db-config.js')

module.exports = {
  add,
  find,
  findBy,
  findById,
}
function find() {
  return db('users')
}
function findBy(filter) {
  return db('users').where(filter)
}
function findById(id) {
  return db('users').where({ id }).first()
}
function add(user) {
  return db('users').insert(user)
}
function update(id, changes) {
  return db('users').where({ id }).update(changes)
}
function remove(id) {
  return db('users').where({ id }).del()
}
