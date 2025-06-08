import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AIStylist - Wardrobe Assistant",
  description: "A web application that uses AI to help you manage your wardrobe and get styling suggestions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer style={{ textAlign: 'center', marginTop: '20px', padding: '10px', fontSize: '0.8em', color: '#555' }}>
          Developed by Igor Kan | 
          <a href="https://igorkan.com" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>igorkan.com</a> | 
          <a href="https://github.com/igor-kan" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>GitHub</a> | 
          <a href="https://x.com/1gor_kan" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>X (@1gor_kan)</a>
        </footer>
      </body>
    </html>
  )
}
