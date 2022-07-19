import { createDraftSafeSelector } from '@reduxjs/toolkit';

const stateCart = state => state.cart;

const getStateDataCart = createDraftSafeSelector(
    stateCart,
    state => state.dataCart
);

export {
    getStateDataCart
}
