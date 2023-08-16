import { Logo } from '@/Assets/Icons'
import Link from 'next/link'

export default function Page() {
  return (
    <form className="form">
      <div className="form__logo">
        <Logo />
      </div>
      <h1 className="form__title headingM">Invoice App</h1>
      <p className="form__description headingS">
        Effortlessly manage invoices and payments.
      </p>
      <div className="form__social-logins-wrapper">
        <div>Continue with google</div>
        <div>Continue with github</div>
      </div>
      <div className="form__divider">
        <div className="form__divider--lines" />
        <p className="form__divider--text">Or</p>
        <div className="form__divider--lines" />
      </div>
      <section className="form__labels-group">
        <label className="label bodyL">
          Email
          <input type="text" name="email" className="input" />
        </label>
        <label className="label bodyL">
          Password
          <input type="text" name="password" className="input" />
        </label>
      </section>
      <button className="form__submit headingL">Sign Up</button>
      <aside className="form__alt-option-wrapper">
        <p className="form__alt-option-question bodyL">
          Already have an account?
        </p>
        <Link href="/auth/signup">
          <div className="form__alt-option-link bodyL">Log In</div>
        </Link>
      </aside>
    </form>
  )
}
