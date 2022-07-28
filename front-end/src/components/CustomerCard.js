import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function CustomerCard({ order }) {
  const {
    id,
    totalPrice,
    status,
    saleDate } = order;

  const formatDate = (date) => moment(date).format('DD/MM/yyyy');

  return (
    <Link to={ `/customer/orders/${id}` }>
      <div>
        <div>
          <p data-testid={ `customer_orders__element-order-id-${id}` }>
            Pedido:
            { id }
          </p>
        </div>
        <div>
          <p
            data-testid={ `customer_orders__element-delivery-status-${id}` }
          >
            { status }
          </p>
        </div>
        <div>
          <p data-testid={ `customer_orders__element-order-date-${id}` }>
            { formatDate(saleDate) }
          </p>
        </div>
        <div>
          <p>
            R$:
            <span data-testid={ `customer_orders__element-card-price-${id}` }>
              { totalPrice.replace('.', ',') }
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}

CustomerCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    totalPrice: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
  }).isRequired,
};
