import React from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const OrderTrackingPage = () => {
  // Sample map coordinates for the package route
  const routeCoordinates = [
    [35.1495, -90.049], // Memphis, TN (Start)
    [36.1627, -86.7816], // Nashville, TN
    [39.9526, -75.1652], // Philadelphia, PA (End)
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          {/* Order Tracking Header */}
          <h3 className="mb-4">Order Tracking</h3>

          {/* Progress Bar */}
          <div className="progress mb-4" style={{ height: "20px" }}>
            <div className="progress-bar" style={{ width: "50%" }}>
              On Its Way
            </div>
          </div>

          {/* Estimated Delivery Date */}
          <h5 className="mb-3">Estimated Delivery Date</h5>
          <p className="fw-bold">27 Jan (Wed)</p>

          {/* Map Section */}
          <div className="mb-4" style={{ height: "300px" }}>
            <MapContainer center={[36.1627, -86.7816]} zoom={5} style={{ height: "100%", width: "100%" }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Polyline positions={routeCoordinates} color="red" />
              {routeCoordinates.map((position, idx) => (
                <Marker key={idx} position={position}></Marker>
              ))}
            </MapContainer>
          </div>

          {/* Track Package Button */}
          <button className="btn btn-primary w-100">Track Package</button>
        </div>

        <div className="col-md-4">
          {/* Order Details Section */}
          <div className="order-details border p-3 rounded">
            <h5 className="mb-4">Order #9362933</h5>

            <div className="d-flex align-items-center mb-3">
              <img
                src="https://via.placeholder.com/100"
                className="rounded-circle me-3"
                alt="product"
              />
              <div>
                <p className="fw-bold mb-1">Birthday Cake</p>
                <p className="text-muted mb-1">From Duff Goldman Cakes</p>
                <p className="mb-1">Quantity: 1</p>
              </div>
            </div>

            {/* Share Tracking Button */}
            <button className="btn btn-outline-secondary w-100 mb-3">Share Tracking</button>

            <p className="text-muted text-center small">
              Want to re-route your order or pick it up from a FedEx location?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;
