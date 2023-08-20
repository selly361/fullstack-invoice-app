import React from 'react'

function LabelInput({ register, name }: { register: any; name: string }) {
  return (
    <label>
      <input type="text" {...register(name)} />
    </label>
  )
}

export default LabelInput
