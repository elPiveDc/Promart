import { CartProvider } from "./context/CartProvider";
import AppRoutes from "./routes/Approutes";

const App: React.FC = () => {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
};

export default App;
