class SignupForm {
  //записує значення в середині обєкта
  static value = {}

  //перевірка по коректному зню
  static validate = (name, value) => {
    return true
  }

  //відправляємо дані на сервер
  static submit = () => {
    console.log(this.value)
  }

  //
  static change = (name, value) => {
    console.log(name, value)
    //якщо валідація проходить то з-ня буде записуватися
    if (this.validate(name, value)) this.value[name] = value
  }
}

window.signupForm = SignupForm
