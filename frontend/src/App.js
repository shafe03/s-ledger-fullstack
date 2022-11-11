import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sales from "./components/Sales";
import Collections from "./components/Collections";
import Reports from "./components/Reports";
import Dashboard from "./components/Dashboard";
import Purchases from "./components/Purchases";
import Customers from "./components/Customers";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="sales" element={<Sales />} />
          <Route path="collections" element={<Collections />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
          <Route path="reports" element={<Reports />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
