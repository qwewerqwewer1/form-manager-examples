import React from 'react'
import {useForm} from 'react-hook-form'

export default function Tested() {
  
  //React hooks
  const {register, handleSubmit} = useForm()

  // functions
  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} />
        <input type='submit' />
      </form>
    </div>
  )
}
