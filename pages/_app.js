import "../styles/globals.css";
import AuthContextProvider from "../context/AuthContext";
import ModalContext from "../context/ModalContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
function MyApp({ Component, pageProps, router }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ModalContext>
          <Component {...pageProps} key={router.key} />
        </ModalContext>
      </AuthContextProvider>
      <ReactQueryDevtools initialisOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default MyApp;
