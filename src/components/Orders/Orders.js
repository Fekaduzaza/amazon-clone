import React, { useEffect, useState } from "react";
import "../Orders/Orders.css";
import { useStateValue } from "../../StateProvider";
import Order from "../Order/Order";
import { db } from "../../firebase";

function Orders() {
  // eslint-disable-next-line no-unused-vars
  const [{ user, basket }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs?.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            })),
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1> Your Orders</h1>
      <div>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
