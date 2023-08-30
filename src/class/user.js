class User {
  static USER_ROLE = {
    USER: 1,
    ADMIN: 2,
    DEVELOPER: 3,
  }
  static #list = []

  constructor({ email, password, role }) {
    this.email = String(email).toLowerCase()
    this.password = password
    //визиваємо через User бо статичний метод
    this.role = User.#convertRole(role)
  }

  static #convertRole = (role) => {
    //конвертуємо роль в число
    role = Number(role)

    //перевіряємо чи є роль числом, якщо не має то за замовчув ставимо роль User
    if (isNaN(role)) {
      role = this.USER_ROLE.USER
    }

    //Отримуємо список наших значень USER_ROLE і дивимся чиє наша роль в списку, якщо є то записуєм, ні ставим User
    role = Object.values(this.USER_ROLE).includes(role)
      ? role
      : this.USER_ROLE.USER

    return role
  }

  static create(data) {
    const user = new User(data)
    this.#list.push(user)
    console.log(this.#list)
  }

  static getByEmail(email) {
    return (
      this.#list.find(
        (user) =>
          user.email === String(email).toLowerCase(),
      ) || null
    )
  }
}

module.exports = {
  User,
}
