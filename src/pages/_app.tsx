import AOS from 'aos';
import React from 'react';
import type { AppProps } from 'next/app';
import PopupWrapper from '@/contexts/Popup.context';
import AlertPopup from '@/components/popups/Alert.popup';
import LanguageWrapper from '@/contexts/Language.context';
import ConfirmPopup from '@/components/popups/Confirm.popup';

// ? Global styles
import 'aos/dist/aos.css';
import '@/styles/globals.css';
import AppWrapper from '@/contexts/App.context';

// * Local font implementation with @next/font/local - #1
//
// import localFont from '@next/font/local';
//
// const Inter = localFont({
//   src: [
//     {
//       path: '../../public/assets/fonts/Inter-Thin.otf',
//       weight: '100',
//     },
//    ...
//   ],
//   variable: '--font-inter',
//   fallback: ['ui-sans-serif'],
// });

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      {/* 
      //* Local font implementation with @next/font/local - #2
      //? eslint-disable-next-line react/no-unknown-property 
      //  <style jsx global> 
      //  {`
      //     :root {
      //       --font-poppins: ${Inter.style.fontFamily};
      //     }
      //  `} 
      //  </style>
      //  <Script id="google-analytics" strategy="afterInteractive">
      //     {`
      //       (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      //       (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      //       m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      //       })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      //!      ga('create', 'YOUR-GA-CODE', 'auto');
      //       ga('send', 'pageview');
      //     `}
      //  </Script> 
      */}
      <AppWrapper>
        <LanguageWrapper>
          <PopupWrapper>
            <AlertPopup />
            <ConfirmPopup />
            <Component {...pageProps} />
          </PopupWrapper>
        </LanguageWrapper>
      </AppWrapper>
    </>
  );
}
