export const REG_EXP_EMAIL = new RegExp(
  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/,
)
export const REG_EXP_PASSWORD = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
)

export class Form {
  FIELD_NAME = {}
  FIELD_ERROR = {}

  //записує значення в середині обєкта
  value = {}
  error = {}
  disabled = true

  //змінює значення поля вводу
  change = (name, value) => {
    console.log(name, value)
    //якщо валідація проходить то з-ня буде записуватися
    const error = this.validate(name, value)
    this.value[name] = value
    console.log(error)

    if (error) {
      this.setError(name, error)
      this.error[name] = error
    } else {
      this.setError(name, null)
      delete this.error[name]
    }

    this.checkDisabled()
  }

  setError = (name, error) => {
    let span = document.querySelector(
      `.form__error[name="${name}"]`,
    )

    const field = document.querySelector(
      `.validation[name="${name}"]`,
    )

    if (span) {
      span.classList.toggle(
        'form__error--active',
        Boolean(error),
      )
      span.innerText = error || ''
    }

    if (field) {
      field.classList.toggle(
        'validation--active',
        Boolean(error),
      )
    }
  }

  checkDisabled = () => {
    let disabled = false

    Object.values(this.FIELD_NAME).forEach((name) => {
      if (
        this.error[name] ||
        this.value[name] === undefined
      ) {
        disabled = true
      }
    })

    const el = document.querySelector(`.button`)

    if (el) {
      el.classList.toggle(
        'button--disabled',
        Boolean(disabled),
      )
    }

    this.disabled = disabled
  }

  validateAll = () => {
    let disabled = false
    Object.values(this.FIELD_NAME).forEach((name) => {
      const error = this.validate(name, this.value[name])

      if (error) {
        this.setError(name, error)
        disabled = true
      }
    })
    this.disabled = disabled
  }

  setAlert = (status, text) => {
    const el = document.querySelector('.alert')

    if (status === 'progress') {
      el.className = 'alert alert--progress'
    } else if (status === 'success') {
      el.className = 'alert alert--success'
    } else if (status === 'error') {
      el.className = 'alert alert--error'
    } else {
      el.className = 'alert alert--disabled'
    }

    if (text) el.innerText = text
  }
}
