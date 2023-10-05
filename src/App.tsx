import AdviceTile from "./components/AdviceTile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

  return (
    <QueryClientProvider client={client}>
      <>
        <AdviceTile />
      </>
    </QueryClientProvider>
  );
}

export default App;
