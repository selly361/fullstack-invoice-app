import React from 'react'

export enum BUTTONTYPES {
  B1,
  B2,
  B3,
  B4,
  B5,
  B6
}

type ButtonProps = {
  buttonType: 0 | 1 | 2 | 3 | 4 | 5
  htmlType: 'submit' | 'button' | 'reset'
  children: React.ReactNode
}

function Button({ buttonType, htmlType, children }: ButtonProps) {
  let buttonClass = ''
  switch (buttonType) {
    case BUTTONTYPES.B1:
      buttonClass = 'button1'
      break
    case BUTTONTYPES.B2:
      buttonClass = 'button2'
      break
    case BUTTONTYPES.B3:
      buttonClass = 'button3'
      break
    case BUTTONTYPES.B4:
      buttonClass = 'button4'
      break
    case BUTTONTYPES.B5:
      buttonClass = 'button5'
      break
    case BUTTONTYPES.B6:
      buttonClass = 'button6'
      break
  }
  return (
    <button type={htmlType} className={`button ${buttonClass ?? ''}`}>
      {children}
    </button>
  )
}

export default Button
