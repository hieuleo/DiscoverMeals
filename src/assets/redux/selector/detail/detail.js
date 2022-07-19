import { createDraftSafeSelector } from '@reduxjs/toolkit';

const stateDetail = state => state.detail;

const getStateLoadingDetail = createDraftSafeSelector(
    stateDetail,
    state => state.loading
);

const getStateDataDetail = createDraftSafeSelector(
    stateDetail,
    state => state.dataDetail
);

const getStateErrorDetail = createDraftSafeSelector(
    stateDetail,
    state => state.error
);

export { 
    getStateLoadingDetail,
    getStateDataDetail,
    getStateErrorDetail,
}