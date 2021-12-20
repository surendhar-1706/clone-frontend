import "../styles/globals.css";
import AuthContextProvider from "../context/AuthContext";
import ModalContext from "../context/ModalContext";
import { QueryClient, QueryClientProvider } from "react-query";
function MyApp({ Component, pageProps, router }) {
  const queryClient = new QueryClient();
  return (
    <AuthContextProvider>
      <ModalContext>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} key={router.key} />
        </QueryClientProvider>
      </ModalContext>
    </AuthContextProvider>
  );
}

export default MyApp;
