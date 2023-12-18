import { Toaster } from "sonner";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Home />
      <Toaster duration={3000} position="bottom-center" richColors />
    </>
  );
}

export default App;
