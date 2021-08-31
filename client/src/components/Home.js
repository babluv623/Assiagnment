import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import Product from "../components/Product";
function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch("/products", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setProducts(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
