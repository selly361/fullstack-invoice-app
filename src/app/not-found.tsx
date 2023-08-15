import notFoundAnimation from '@/Assets/Animations/notFoundAnimation.json'
import { Logo } from '@/Assets/Icons'
import Lottie from 'lottie-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="form__logo">
        <Logo />
      </div>
      <h1 className="form__title headingM">Invoice App</h1>
      <p className="form__description headingS">
        Effortlessly manage invoices and payments.
      </p>
      <div className="not-found__animation-wrapper">
        <Lottie animationData={notFoundAnimation} />
      </div>
      <aside className="not-found__anchor-wrapper">
        <p className="not-found__anchor--question headingL">
          Where are you looking buddy?
        </p>
        <Link href="/">
          <div className="not-found__anchor--link headingL">Home.</div>
        </Link>
      </aside>
    </main>
  )
}
