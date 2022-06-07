import CustomThemeProvider from "./components/CustomThemeProvider";
import HomePage from './pages/HomePage';
import CartPage from "./pages/CartPage";

function App() {
  return (
    <CustomThemeProvider>
      <CartPage />
    </CustomThemeProvider>
  );
}

export default App;
