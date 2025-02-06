import "../app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cool Portfolio",
  description: "A showcase of film editing and prop creation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

