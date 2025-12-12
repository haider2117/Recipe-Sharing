// In-memory user storage (replace with database in production)
let users = [];

class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = new Date();
  }

  static findByEmail(email) {
    return users.find(user => user.email === email);
  }

  static findById(id) {
    return users.find(user => user.id === id);
  }

  static create(userData) {
    const user = new User(
      Date.now().toString(),
      userData.name,
      userData.email,
      userData.password
    );
    users.push(user);
    return user;
  }

  static getAll() {
    return users;
  }
}

module.exports = User;
