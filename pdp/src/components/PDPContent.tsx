import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById, currency } from "home/products";
import { CartItem } from "@/types";

export default function PDPContent() {
  const { id } = useParams();
  const [product, setProduct] = useState<CartItem | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const productData = await getProductById(id);
        setProduct(productData);
      } else {
        setProduct(null);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return null;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="text-3xl font-bold">
            {currency.format(product.price)}
          </div>
        </div>
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
}
