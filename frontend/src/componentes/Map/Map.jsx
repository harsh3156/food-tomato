import React from "react";
import "./Map.css"

const Map = () => {
  return (
    <div className="map1" style={{ textAlign: 'center' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5489495223333!2d72.78298247503791!3d21.249727480455434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04bf3cafd28cd%3A0xa4e0ddcf95fb09e9!2sVivekanand%20College!5e0!3m2!1sen!2sin!4v1760465924799!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Embedded Map"
      ></iframe>
    </div>
  );
};


export default Map;
