import localFont from 'next/font/local';

export const localPoppins = localFont({
  src: [
    {
      path: '../public/fonts/Poppins-Light.ttf',
      weight: '300'
    },
    {
      path: '../public/fonts/Poppins-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/Poppins-Medium.ttf',
      weight: '500'
    },
    {
      path: '../public/fonts/Poppins-SemiBold.ttf',
      weight: '600'
    },
    {
      path: '../public/fonts/Poppins-Bold.ttf',
      weight: '700'
    },
    {
      path: '../public/fonts/Poppins-ExtraBold.ttf',
      weight: '800'
    }
  ],
  variable: '--font-poppins'
});
