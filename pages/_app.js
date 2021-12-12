import "../styles/globals.css";
import AuthContextProvider from "../context/AuthContext";
import ModalContext from "../context/ModalContext";
function MyApp({ Component, pageProps, router }) {
  return (
    <AuthContextProvider>
      <ModalContext>
        <Component {...pageProps} key={router.key} />
      </ModalContext>
    </AuthContextProvider>
  );
}

export default MyApp;
