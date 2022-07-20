import { createDraftSafeSelector } from '@reduxjs/toolkit';

const stateAuth = state => state.auth;

const getStateUser = createDraftSafeSelector(
    stateAuth,
    state => state.user
);

const getStateErr = createDraftSafeSelector(
    stateAuth,
    state => state.error
);

const getStateLoading = createDraftSafeSelector(
    stateAuth,
    state => state.loading
);

export {
    getStateUser,
    getStateErr,
    getStateLoading,
}
