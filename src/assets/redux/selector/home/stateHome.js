import { createDraftSafeSelector } from '@reduxjs/toolkit';

const stateHome = state => state.home;
const stateRandom = state => state.random;

const getStateLoadingHome = createDraftSafeSelector(
    stateHome,
    state => state.loading
);

const getStateDataHome = createDraftSafeSelector(
    stateHome,
    state => state.dataCategories
);

const getStateErrorHome = createDraftSafeSelector(
    stateHome,
    state => state.error
);

//random :
const getStateLoadingRandom = createDraftSafeSelector(
    stateRandom,
    state => state.loadingRandom
);

const getStateDataRandom = createDraftSafeSelector(
    stateRandom,
    state => state.dataRandom
);

const getStateErrorRandom = createDraftSafeSelector(
    stateRandom,
    state => state.errorRandom
);

export {
    getStateDataHome,
    getStateErrorHome,
    getStateLoadingHome,
    getStateLoadingRandom,
    getStateDataRandom,
    getStateErrorRandom,
};