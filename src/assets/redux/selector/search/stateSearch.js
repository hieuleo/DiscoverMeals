import { createDraftSafeSelector } from '@reduxjs/toolkit';

const stateSearch = state => state.search;

const getStateLoadingSearchDefault = createDraftSafeSelector(
    stateSearch,
    state => state.loadingDefaul
);

const getStateDataSearchDefault = createDraftSafeSelector(
    stateSearch,
    state => state.dataSearchDefaul
);

const getStateErrorSearch = createDraftSafeSelector(
    stateSearch,
    state => state.error
);

//search

const getStateLoadingSearch = createDraftSafeSelector(
    stateSearch,
    state => state.loadingSearch
);

const getStateDataSearch = createDraftSafeSelector(
    stateSearch,
    state => state.dataSearch
);
export { 
    getStateLoadingSearchDefault,
    getStateDataSearchDefault,
    getStateErrorSearch,

    getStateLoadingSearch,
    getStateDataSearch
}
