import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.carts);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qnty,
    0
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Home
          </NavLink>
          <Nav>
            <Badge
              badgeContent={cartItems.length}
              color="primary"
              onClick={handleClick}
            >
              <i
                className="fa-solid fa-cart-shopping text-light"
                style={{ cursor: "pointer" }}
              ></i>
            </Badge>
          </Nav>
        </Container>
      </Navbar>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {cartItems.length ? (
          <div style={{ width: "24rem", padding: 10, position: "relative" }}>
            <Table>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <NavLink to={`/cart/${item.id}`} onClick={handleClose}>
                        <img
                          src={item.imgdata}
                          style={{ width: "5rem" }}
                          alt={item.rname}
                        />
                      </NavLink>
                    </td>
                    <td>
                      <p>{item.rname}</p>
                      <p>Price: ${item.price}</p>
                      <p>Quantity: {item.qnty}</p>
                      <i
                        className="fas fa-trash"
                        onClick={() => dispatch(removeFromCart(item.id))}
                        style={{ color: "red", cursor: "pointer" }}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <p>Total: ${total.toFixed(2)}</p>
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </Menu>
    </>
  );
};

export default Header;
