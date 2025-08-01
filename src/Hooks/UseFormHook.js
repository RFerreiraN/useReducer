import { useState } from "react";

export const UseFormHook = () => {
  const initialForm = {
    email : ''
  }

  const [inputValue, setInputValue] = useState({
    ...initialForm
  });
  

  const handleInput = ({ target }) => {
    const { name, value } = target
    setInputValue({
      ...inputValue,
      [name]: value
    })
  }

  const resetForm = () => {
    setInputValue({
      ...initialForm
    })
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    if(inputValue.email.trim().length === 0) return
    console.log(inputValue)
    resetForm()
  }

  return {
    initialForm,
    inputValue,
    handleInput,
    resetForm,
    onSubmitForm
  }
}
