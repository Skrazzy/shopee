import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Shopee | Melhores descontos',
  description: 'Melhores descontos de black friday!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {children}
        
        {/* Meta Pixel Code */}
        <Script strategy="afterInteractive" id="facebook-pixel">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1086198906075054');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1086198906075054&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Utmify Script */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-subids
          strategy="afterInteractive"
          id="utmify"
        />
      </body>
    </html>
  )
}
