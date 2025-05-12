// src/context/CartContext.tsx

"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_ITEM"; product: Product }
  | { type: "REMOVE_ITEM"; id: number }
  | { type: "CLEAR_CART" }
  | { type: "SET_CART"; items: CartItem[] };

const CartContext = createContext<{
  cart: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({ cart: { items: [] }, dispatch: () => {} });

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.id === action.product.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return {
        items: [...state.items, { ...action.product, quantity: 1 }],
      };
    }
    case "REMOVE_ITEM": {
      return {
        items: state.items.filter((item) => item.id !== action.id),
      };
    }
    case "CLEAR_CART": {
      return { items: [] };
    }
    case "SET_CART": {
      return { items: action.items };
    }
    default:
      return state;
  }
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  // Persisti su localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      dispatch({ type: "SET_CART", items: JSON.parse(saved) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart.items));
  }, [cart.items]);

  return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
