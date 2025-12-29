import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          eligendi natus error esse magni commodi doloribus quas, ullam ipsa
          dolor architecto illo qui iure reprehenderit, omnis ducimus, quasi
          facilis ex.
        </p>
        <button onClick={() => navigate("/foodmenu")}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
