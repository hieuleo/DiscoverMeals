import React, { useEffect } from 'react';
import { LayoutComponent, PosterSearch, ListComponent} from '../../components';
import { createStructuredSelector } from 'reselect';
import { useDispatch, useSelector }  from 'react-redux';
import { requestDataSearchDefault } from '../../redux/saga/search/action';
import { 
    getStateLoadingSearchDefault,
    getStateDataSearchDefault,
    getStateDataSearch,
    getStateLoadingSearch
 } from '../../redux/selector/search/stateSearch';
 import { 
    getStateSearchHome
 } from '../../redux/selector/home/stateHome';
 import { 
    addKeySearch
 } from '../../redux/reducer/home/searchHome';
import { userSearchData } from '../../redux/saga/search/action';
 
const SearchPage = () => {
    const dispatch = useDispatch();
    const {loadingDefaul,dataSearch, dataSearchDefaul,loadingSearch,searchHome} = useSelector(createStructuredSelector({
        loadingDefaul: getStateLoadingSearchDefault,
        dataSearchDefaul: getStateDataSearchDefault,
        // errorSearch: getStateErrorSearch,
        dataSearch: getStateDataSearch,
        loadingSearch: getStateLoadingSearch,
        searchHome: getStateSearchHome
    }));

    console.log(searchHome);

    useEffect(() => {
        dispatch(requestDataSearchDefault())
    },[]);

    useEffect(() => {
        if(searchHome !== ''){
            dispatch(userSearchData('name',searchHome))
            dispatch(addKeySearch(''))
        }
    },[]);


    return (
        <LayoutComponent search>
            <PosterSearch loadingSearch={loadingSearch}/>
            <ListComponent data={dataSearch.length > 1 ?dataSearch : dataSearchDefaul} loading={loadingDefaul} />
        </LayoutComponent>
    )
};

export default React.memo(SearchPage);