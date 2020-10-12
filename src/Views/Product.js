import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Component/Loader";

function Product() {
  const { id } = useParams();
  const url = `https://5f31afcc373bc7001635fd8f.mockapi.io/api/v1/products/${id}`;
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });

  let content = null;

  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setProduct({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setProduct({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  if (product.loading) {
    content = <Loader></Loader>;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.images[0].imageUrl} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }

  return <div className="container mx-auto">{content}</div>;
}

export default Product;
