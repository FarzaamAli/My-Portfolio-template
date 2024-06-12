import Header from './Header'
import Home1 from './Home1'
import Icons from './Icons'
import './globals.css'

export const metadata = {
  title: 'Farzaam Portfolio',
  description: 'My Resume',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      
      
      <body className="bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
        {children}</body>
    </html>
  )
}
