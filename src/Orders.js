import React from "react";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="orders">
      <h1>THIS IS ORDERS PAGE</h1>
      <h2>USER IS {user?.email}</h2>
    </div>
  );
}

export default Orders;
