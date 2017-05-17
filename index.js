 const personForm = document.querySelector('form')

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
    dl.appendChild(buildListItem('Friends', listValues.firstName))

    return dl
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const formValues = {
      firstName: form.firstName.value,
    }

    details.appendChild(buildList(formValues))
    form.reset()
  }

  personForm.addEventListener('submit', handleSubmit)