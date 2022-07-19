import React, { useEffect, useState } from 'react';
import { LayoutComponent, PosterSearch, ListComponent} from '../../components';
import { createStructuredSelector } from 'reselect';
import { useDispatch, useSelector }  from 'react-redux';
import { requestDataSearchDefault } from '../../redux/saga/search/action';
import { 
    getStateLoadingSearchDefault,
    getStateDataSearchDefault,
    getStateErrorSearch,
    getStateDataSearch,
 } from '../../redux/selector/search/stateSearch';
const SearchPage = () => {
    const dispatch = useDispatch();
    const {loadingDefaul,dataSearch,errorSearch, dataSearchDefaul} = useSelector(createStructuredSelector({
        loadingDefaul: getStateLoadingSearchDefault,
        dataSearchDefaul: getStateDataSearchDefault,
        errorSearch: getStateErrorSearch,
        dataSearch: getStateDataSearch,
    }));

    useEffect(() => {
        dispatch(requestDataSearchDefault())
    },[]);

    return (
        <LayoutComponent search>
            <PosterSearch/>
            <ListComponent data={dataSearch.length > 1 ?dataSearch : dataSearchDefaul} loading={loadingDefaul}/>
        </LayoutComponent>
    )
};

export default React.memo(SearchPage);