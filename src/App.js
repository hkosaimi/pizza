import Home from "./components/Home";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Base from "./components/Base";
import Header from "./components/Header";
import { useState } from "react";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import { AnimatePresence } from "framer-motion";
import Model from "./components/Model";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const location = useLocation();
  const [showModel, setShowModel] = useState(false);

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };
  return (
    <>
      <Header />
      <Model showModel={showModel} setShowModel={setShowModel} />
      <AnimatePresence onExitComplete={() => setShowModel(false)}>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} />
          <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />} />
          <Route path="/order" element={<Order pizza={pizza} setShowModel={setShowModel} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
