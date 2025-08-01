import { useState } from 'react'
import { UseFormHook } from '../Hooks/UseFormHook'

export const ComponentForm = () => {

   const {initialForm, inputValue, handleInput, resetForm, onSubmitForm} = UseFormHook()

   const {email } = inputValue

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

        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
    </>
  )
}
