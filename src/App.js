import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems, fruits } from "./storeItems";
import "./styles.css";
// get our fontawesome imports
// import { fa-cart-plus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCartPlus } from "react-icons/fa";

export default function GroceryCart() {
  // declare and initialize state
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prev) => {
      return [item, ...prev];
    });
  };

  const removeItem = (targetIndex) => {
    setCart((prev) => {
      // setCount(++count);
      return prev.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <div className="displayItems">
      <h1>Groceries</h1>
      <h2>
        Cart
        <FaCartPlus color="red" size="2rem" />
      </h2>

      <ol>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ol>
      <div className="itemOptions">
        <h2>Vegetables</h2>
        <ItemList items={produce} onItemClick={addItem} />
        <h2>Fruits</h2>

        <ItemList items={fruits} onItemClick={addItem} />

        <h2>Pantry Items</h2>
        <ItemList items={pantryItems} onItemClick={addItem} />
      </div>
    </div>
  );
}
