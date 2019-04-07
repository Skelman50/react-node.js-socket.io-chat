class Users {
  constructor() {
    this.users = [];
  }

  add(id, name, room) {
    this.users.push({ id, name, room });
  }

  get(id) {
    const user = this.users.find(user => user.id === id);
    return user;
  }

  remove(id) {
    const user = this.get(id);
    if (user) {
      this.users.filter(u => u.id !== user.id);
    }
    return user;
  }

  getByRoom(room) {
    const users = this.users.filter(user => user.room === room);
    return users;
  }
}

module.exports = function () {
  return new Users();
};
