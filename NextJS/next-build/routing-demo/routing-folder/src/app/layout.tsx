import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: 'NextJS Tutorial',
    template: '%s | Fahri Maulana',
  },
  description: 'Generate by NextJS'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{
          backgroundColor: "lightblue",
          padding: '1rem'
        }}>
          <p>Header</p>
        </header>

        {children}
      
        <footer style={{
          backgroundColor: "yellow",
          padding: '1rem'
        }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}
