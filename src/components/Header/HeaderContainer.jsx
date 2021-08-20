import React from 'react';
import { Header } from './Header';
import { connect } from 'react-redux';
import { getTheRemovalOfOrder } from '../../redux/reducers/cartReducer';
import { getOrders, getTotalOrders, getTotalWeightOrders } from '../../redux/selectors/cartSelector';
import PropTypes from 'prop-types';

const HeaderContainer = ({ orders, totalOrders, totalWeightOrders, getTheRemovalOfOrder }) => {
    return (
        <Header
            orders={orders}
            totalOrders={totalOrders}
            totalWeightOrders={totalWeightOrders}
            getTheRemovalOfOrder={getTheRemovalOfOrder}
        />
    )
};

const mapStateToProps = state => ({
    orders: getOrders(state),
    totalOrders: getTotalOrders(state),
    totalWeightOrders: getTotalWeightOrders(state),
});
  
const mapDispatchToProps = {
    getTheRemovalOfOrder
};

HeaderContainer.propTypes = {
    orders: PropTypes.array,
    totalOrders: PropTypes.number,
    totalWeightOrders: PropTypes.number,
    getTheRemovalOfOrder: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);