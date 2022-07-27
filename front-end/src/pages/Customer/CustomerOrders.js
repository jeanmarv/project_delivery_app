import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getCustomerOrders } from '../../api/requests';
import Header from '../../components/Header';
import GlobalContext from '../../context/GlobalContext';
import CustomerCard from '../../components/CustomerCard';

export default function CustomerOrders() {
  const { user, resetUser } = useContext(GlobalContext);

  const [customerOrders, setCustomerOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const request = await getCustomerOrders(user.id);
      if (request.error) return;

      setCustomerOrders(request);
    }
    fetchOrders();
  }, [setCustomerOrders, user]);

  if (user.role !== 'customer') {
    resetUser();
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <div>
        {customerOrders && customerOrders.map((order) => (
          <CustomerCard
            key={ order.id }
            order={ order }
          />
        ))}
      </div>
    </>
  );
}
