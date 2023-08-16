'use client'

import notFoundAnimation from '@/Assets/Animations/notFoundAnimation.json'
import InvoiceIntro from '@/Components/invoiceIntro'
import Lottie from 'lottie-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="not-found">
      <InvoiceIntro />
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
