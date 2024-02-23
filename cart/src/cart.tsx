import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const API_SERVER = "http://localhost:8080";

export const jwt = new BehaviorSubject(null);
export const cart = new BehaviorSubject(null);

export const getCart = async () => {
  try {
    const res = await fetch(`${API_SERVER}/cart`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt.value}`,
      },
    });
    const data = await res.json();
    cart.next(data);
    return data;
  } catch (error) {
    console.error("Error getting cart:", error);
  }
};

export const addToCart = async (id: number) => {
  try {
    const res = await fetch(`${API_SERVER}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt.value}`,
      },
      body: JSON.stringify({ id }),
    });
    await res.json();
    await getCart();
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};

export const clearCart = async () => {
  try {
    const res = await fetch(`${API_SERVER}/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt.value}`,
      },
    });
    await res.json();
    await getCart();
  } catch (error) {
    console.error("Error clearing cart:", error);
  }
};

export const login = async (username: string, password: string) => {
  try {
    const res = await fetch(`${API_SERVER}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    jwt.next(data.access_token);
    await getCart();
    return data.access_token;
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(() => !!jwt.value);

  useEffect(() => {
    const subscription = jwt.subscribe(() => {
      setLoggedIn(!!jwt.value);
    });
    return () => subscription.unsubscribe();
  }, []);

  return loggedIn;
};
