import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SellerCard({ order }) {
  const {
    id,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
    saleDate } = order;

  return (
    <Link to={ `/seller/orders/${id}` }>
      <div>
        <div>
          <p data-testid={ `seller_orders__element-order-id-${id}` }>
            Pedido:
            { id }
          </p>
        </div>
        <div>
          <p data-testid={ `seller_orders__element-delivery-status-${id}` }>{ status }</p>
        </div>
        <div>
          <p data-testid={ `seller_orders__element-order-date-${id}` }>{ saleDate }</p>
        </div>
        <div>
          <p data-testid={ `seller_orders__element-order-price-${id}` }>
            { `R$:${totalPrice}` }
          </p>
        </div>
        <p data-testid={ `seller_orders__element-order-address-${id}` }>
          { `${deliveryAddress}, ${deliveryNumber}` }
        </p>
      </div>
    </Link>
  );
}

SellerCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
  }).isRequired,
};
