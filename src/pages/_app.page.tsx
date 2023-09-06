import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Kanit } from "next/font/google";

//Fonts
const kanit = Kanit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    fonts: {
      heading: `${kanit.style.fontFamily}, sans-serif`,
      body: `${kanit.style.fontFamily}, sans-serif`,
    },
    colors: {
      muni: {
        verde: "#95c840",
        celeste: "#4093C8",
        gris: "#6F7484"
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}