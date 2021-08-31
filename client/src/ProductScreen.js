import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup } from "react-bootstrap";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    try {
      const res = await fetch(`/products/${match.params.id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setProduct(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>
                {product.rating} from {product.numReviews} reviews
              </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Price:${product.price}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>description:{product.description}</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};
export default ProductScreen;
