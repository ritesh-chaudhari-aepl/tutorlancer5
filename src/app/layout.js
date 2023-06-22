// import Header from '@/pages/header'
import './globals.css'

export const metadata = {
  title: 'Good Grades',
  description: 'Solve you homework issues in a minute',
}

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body>
        {/* <Header/> */}
        <main>{children}</main>
      </body>
    </html>
    </>
  )
}
