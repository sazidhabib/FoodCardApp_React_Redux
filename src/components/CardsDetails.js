import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, removeOne } from "../redux/cartSlice";
import Cardsdata from "./CardsData";

const CardsDetails = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.carts);

  useEffect(() => {
    const item = Cardsdata.find((item) => item.id === Number(id));
    setData(item);
  }, [id]);

  if (!data) {
    return <h3 className="text-center">Item not found</h3>;
  }

  const itemInCart = cartItems.find((cartItem) => cartItem.id === data.id);

  return (
    <div className="container mt-2">
      <h2 className="text-center">Item Details Page</h2>
      <section className="container mt-3">
        <div className="iteamsdetails">
          <div className="items_img">
            <img src={data.imgdata} alt={data.rname} />
          </div>
          <div className="details">
            <Table>
              <tr>
                <td>
                  <p>
                    <strong>Restaurant:</strong> {data.rname}
                  </p>
                  <p>
                    <strong>Price:</strong> ${data.price}
                  </p>
                  <p>
                    <strong>Dishes:</strong> {data.address}
                  </p>
                  <p>
                    <strong>Total:</strong> $
                    {(data.price * (itemInCart?.qnty || 1)).toFixed(2)}
                  </p>
                  {itemInCart ? (
                    <div className="mt-5 d-flex justify-content-between align-items-center">
                      <button onClick={() => dispatch(removeOne(data.id))}>
                        -
                      </button>
                      <span>{itemInCart.qnty}</span>
                      <button onClick={() => dispatch(addToCart(data))}>
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="btn btn-primary bg-primary mt-3"
                      onClick={() => dispatch(addToCart(data))}
                    >
                      Add to Cart
                    </button>
                  )}
                </td>
                <td>
                  <p>
                    <strong>Rating:</strong>
                    <span style={{ background: "green", color: "#fff" }}>
                      {data.rating} ★
                    </span>
                  </p>
                  <p>
                    <strong>Order Review:</strong> {data.somedata}
                  </p>
                  <p>
                    <strong>Remove:</strong>
                    <span>
                      <i
                        className="fas fa-trash"
                        onClick={() => {
                          dispatch(removeFromCart(data.id));
                          navigate("/");
                        }}
                        style={{ color: "red", cursor: "pointer" }}
                      ></i>
                    </span>
                  </p>
                </td>
              </tr>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardsDetails;
