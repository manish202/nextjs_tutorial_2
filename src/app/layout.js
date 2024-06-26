import Navbar from "@/app/components/Navbar";
import { Mulish } from 'next/font/google';
import "@/app/styles/globals.css";
 
const mulish = Mulish({
  weight: ['300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display:'swap'
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return(
    <html lang="en">
      <body className={mulish.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
