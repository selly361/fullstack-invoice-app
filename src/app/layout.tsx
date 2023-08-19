import "Styles"

import { League_Spartan } from 'next/font/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Invoice App',
  description:
    'Effortlessly manage invoices and payments with our intuitive Invoice App. Ideal for businesses and freelancers. Generated by create next app.'
}

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>{children}</body>
    </html>
  )
}
