// src/app/layout.js
import './globals.css'

export const metadata = {
  title: 'Shopee | Melhores descontos',
  description: 'Melhores descontos de black friday!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        {/* Fonte Inter */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Fonte Montserrat */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Font Awesome */}
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
          rel="stylesheet" 
        />
      </head>
      <body>{children}</body>
    </html>
  )
}