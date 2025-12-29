import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Header } from "../../components";
import './Customer.css'

const Customers = ({ url }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${url}/api/user/users`);
      console.log("Fetched Users Data:", response.data); 
      if (response.data.success) {
        setUsers(response.data.users); 
      } else {
        toast.error("Error fetching users list");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error fetching data");
    }
  };

  const removeUser = async (userId) => {
    try {
      const response = await axios.post(`${url}/api/users/remove`, {
        id: userId,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchUsers();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error removing user");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [url]);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <div className="list flex-col" style={{width:"70%"}}>
        <div className="list-table">
          <div className="Clist-table-format title">
            <b>Name</b>
            <b>Email</b>
            <b>Action</b>
          </div>
          {users.length > 0 ? (
            users.map((user) => (
              <div key={user._id} className="Clist-table-format">
                <p>{user.name}</p>
                <p>{user.email}</p>
                <button className="btn btn-danger btn-sm" style={{width:"50px"}} onClick={() => removeUser(user._id)}>
                  X
                </button>
              </div>
            ))
          ) : (
            <p>No users found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Customers;
