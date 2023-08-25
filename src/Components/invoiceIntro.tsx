import { Logo } from '@/Assets/Icons'
import React from 'react'

function InvoiceIntro() {
  return (
    <>
      <div className="invoice-intro__logo">
        <Logo />
      </div>
      <h1 className="invoice-intro__title headingM">Invoice App</h1>
      <p className="invoice-intro__description headingS">
        Effortlessly manage invoices and payments.
      </p>
    </>
  )
}

export default InvoiceIntro
