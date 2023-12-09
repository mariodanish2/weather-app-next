import { Jost } from 'next/font/google'
import '../styles/globals.css';
import Header from '@/components/Header';

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Weather Cast',
  description: 'Weather Info App created by Mario Danish'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
