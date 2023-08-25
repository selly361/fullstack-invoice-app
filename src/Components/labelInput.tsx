import React from 'react'

function LabelInput({
  register,
  name,
  children,
  required
}: {
  register: any
  name: string
  children: React.ReactNode
  required: boolean
}) {
  return (
    <label class="label">
      {children}
      <input type="text" {...(register(name), { required })} />
    </label>
  )
}

export default LabelInput
