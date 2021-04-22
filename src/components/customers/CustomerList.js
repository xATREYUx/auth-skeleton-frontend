import React from "react";

const CustomerList = ({ customers }) => {
  const renderCustomers = () => {
    return customers.map((customer, i) => {
      return <li key={i}>{customer.name}</li>;
    });
  };
  return (
    <div>
      <ul>{renderCustomers()}</ul>
    </div>
  );
};

export default CustomerList;
