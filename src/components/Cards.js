import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardsData";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice"; // Import the new action

const Cards = () => {
  const [data] = useState(Cardsdata);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Projects</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => (
          <Card
            key={id}
            style={{ width: "22rem", border: "none" }}
            className="mx-2 mt-4 card_style"
          >
            <NavLink to={`/cart/${element.id}`}>
              <Card.Img
                variant="top"
                src={element.imgdata}
                style={{ height: "16rem" }}
                className="mt-3"
              />
            </NavLink>
            <Card.Body>
              <Card.Title>{element.rname}</Card.Title>
              <Card.Text>Price : $ {element.price}</Card.Text>
              <div className="button_div d-flex justify-content-center">
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(element)}
                  className="col-lg-12"
                >
                  Add to Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
