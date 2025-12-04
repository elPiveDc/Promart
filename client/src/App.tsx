import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartProvider";
import AppRoutes from "./routes/Approutes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
