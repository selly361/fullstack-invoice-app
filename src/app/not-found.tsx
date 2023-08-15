import notFoundAnimation from '@/Assets/Animations/notFoundAnimation.json'
import { Logo } from '@/Assets/Icons'
import Lottie from 'lottie-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main>
      <div className="form__logo">
        <Logo />
      </div>
      <h1 className="form__title headingM">Invoice App</h1>
      <p className="form__description headingS">
        Effortlessly manage invoices and payments.
      </p>
      <Lottie animationData={notFoundAnimation} />
      <aside className="not-found__anchor-wrapper">
        <p className="not-found__anchor--question"></p>
        <Link href="/" className="not-found__anchor--link">
          Home.
        </Link>
      </aside>
    </main>
  )
}
