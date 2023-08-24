class FieldSelect {
  static toggle = (target) => {
    const options = target.nextElementSibling

    options.toggleAttribute('active')

    setTimeout(() => {
      window.addEventListener(
        'click',
        (e) => {
          //перевірка чи клікнув я не в середині батьківського тега кнопки
          if (!options.parentElement.contains(e.target))
            options.removeAttribute('active')
        },
        { once: true },
      )
    })
  }

  static change = (target) => {
    //шукаємо активну опцію, якщо вусона є
    const active =
      target.parentElement.querySelector('*[active]')

    //якщо вона є, то ми її вирубаємо
    if (active) active.toggleAttribute('active')

    //додаємо позначку активний до атрибута target який прийшов як аргумент
    target.toggleAttribute('active')

    // ми виходи на field__container
    const parent = target.parentElement.parentElement

    //і в ньому шукаємо field__value
    const value = parent.querySelector('.field__value')

    if (value) {
      //кладемо такий самий текст як в опції
      value.innerText = target.innerText
      //прибираємо вказаний клас
      value.classList.remove('field__value--placeholder')
    }

    //отримуємо список наших опцій
    const list = target.parentElement

    //прибираєм active атрибут щоб закрити список
    list.toggleAttribute('active')
  }
}

window.fieldSelect = FieldSelect
