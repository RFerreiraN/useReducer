import { useState } from 'react'

export const ComponentForm = () => {

  const [inputValue, setInputValue] = useState({
    email: ''
  });
  const { email } = inputValue;

  const handleInput = ({ target }) => {
    const { name, value } = target
    setInputValue({
      ...inputValue,
      [name]: value
    })
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(inputValue)
  }

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder='Introduce Datos'
            name="email"
            value={email}
            onChange={handleInput}

          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
