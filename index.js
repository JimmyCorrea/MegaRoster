{
  const personForm = document.querySelector('form')

  const renderColor = (color) => {
    const colorDiv = document.createElement('div')
    colorDiv.style.width = '100px'
    colorDiv.style.height = '20px'
    colorDiv.style.backgroundColor = color
    return colorDiv.outerHTML
  }

  const buildListItem = (term, definition) => {
    const li = document.createElement('li')
    const dt = document.createElement('dt')
    const dd = document.createElement('dd')
    dt.textContent = term
    dd.innerHTML = definition
    li.appendChild(dt)
    li.appendChild(dd)
    return li
  }

  const buildList = (listValues) => {
    const dl = document.createElement('dl')
    dl.appendChild(buildListItem('Name', listValues.firstName))
    dl.appendChild(buildListItem('Hair Color', listValues.hairColor))
    dl.appendChild(buildListItem('Age', listValues.age))
    dl.appendChild(buildListItem('Birthplace', listValues.birthplace))

    return dl
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const formValues = {
      firstName: form.firstName.value,
      hairColor: renderColor(form.hairColor.value),
      age: form.age.value,
      birthplace: form.birthplace.value,
    }

    details.appendChild(buildList(formValues))
    form.reset()
  }

  personForm.addEventListener('submit', handleSubmit)
}