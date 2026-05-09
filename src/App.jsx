import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'


const products = [
  { id: 1, name: "Apple", price: 'ksh50', category: "Fruits", inStock: "true" },
  { id: 2, name: "Milk", price: 'ksh 45', category: "Dairy", inStock: "true" },
  { id: 3, name: "Carrot", price: 'ksh 20', category: "Vegetables", inStock: "true" },
  { id: 4, name: "Banana", price: 'ksh 10', category: "Fruits", inStock: "true" },
  { id: 5, name: "Bread", price: "ksh60", category: "Bakery", inStock: true }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(p => p.category === category);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Grocery App</h1>

      {/* Dark Mode */}
      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Category Filter */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
      </select>

      {/* Products */}
      <ProductList
        products={filteredProducts}
        addToCart={handleAddToCart}
      />

      {/* Cart */}
      <Cart cart={cart} />
    </div>
  );
}

export default App;