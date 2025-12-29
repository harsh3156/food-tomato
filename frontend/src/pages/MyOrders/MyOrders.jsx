import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [orders, setOrders] = useState([]);
  const [trackingOrder, setTrackingOrder] = useState(null);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        url + "/api/order/userorders",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Ensure orders is always an array
      setOrders(response.data.data || []);
      console.log("Orders fetched:", response.data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
      setOrders([]); // fallback to empty array
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  const handleTrackOrder = (orderId) => {
    setTrackingOrder(trackingOrder === orderId ? null : orderId);
  };

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="parcel icon" />
              <p>
                {order.items?.map((item, idx) =>
                  idx === order.items.length - 1
                    ? `${item.name} x${item.quantity}`
                    : `${item.name} x${item.quantity}, `
                )}
              </p>
              <p>₹{order.amount || 0}.00</p>
              <p>Items: {order.items?.length || 0}</p>
              <p>
                <span>&#x25cf;</span> <b>{order.status || "N/A"}</b>
              </p>
              <button onClick={() => handleTrackOrder(order._id)}>
                {trackingOrder === order._id ? "Hide Tracking" : "Track Order"}
              </button>

              {trackingOrder === order._id && (
                <div className="order-tracking-details">
                  <p>Order ID: {order._id}</p>
                  <p>Delivery Status: {order.status || "N/A"}</p>
                  <p>
                    Estimated Delivery:{" "}
                    {order.estimatedDelivery || "N/A"}
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
