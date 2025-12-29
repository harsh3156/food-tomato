import React, { useState, useEffect } from "react";
import "./Orders.css";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Failed to fetch orders.");
      console.error(error);
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order container">
      <h3
        className="text-center my-3"
        style={{ fontSize: "25px", fontWeight: "700" }}
      >
        Order Page
      </h3>
      <div className="order-list row">
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div
              key={index}
              className="order-item d-flex align-items-start border p-3 mb-3 col-md-12"
            >
              <img
                src={assets.profile_image}
                alt="Profile"
                className="img-fluid rounded"
                style={{ width: "60px" }}
              />
              <div className="ms-3">
                <p className="order-item-food">
                  {order.items.map(
                    (item, itemIndex) =>
                      item.name +
                      " x " +
                      item.quantity +
                      (itemIndex === order.items.length - 1 ? "" : ", ")
                  )}
                </p>
                <p className="order-item-name">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div className="order-item-address">
                  <p>{order.address.street + ","}</p>
                  <p>
                    {order.address.city +
                      ", " +
                      order.address.state +
                      ", " +
                      order.address.country +
                      ", " +
                      order.address.zipcode}
                  </p>
                </div>
                <p className="order-item-phone">{order.address.phone}</p>
              </div>

              <div
                className="ms-auto d-flex justify-content-between align-items-center"
                style={{ width: "50%" }}
              >
                <p className="me-3 mb-0">Items: {order.items.length}</p>
                <p className="me-3 mb-0">Total: ₹{order.amount}</p>
                <select
                  onChange={(event) => statusHandler(event, order._id)}
                  value={order.status}
                  className="form-select"
                >
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out For delivery">Out For delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          ))
        ) : (
          <p
            className="text-center pt-1 text-danger"
            style={{ fontWeight: "600" }}
          >
            No orders found!
          </p>
        )}
      </div>
    </div>
  );
};

export default Orders;
