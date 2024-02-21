const API_SERVER = "http://localhost:8080";

export const getProducts = async () => {
  const response = await fetch(`${API_SERVER}/products`);
  return response.json();
};

export const getProductById = async (id: string) => {
  const response = await fetch(`${API_SERVER}/products/${id}`);
  return response.json();
};

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
