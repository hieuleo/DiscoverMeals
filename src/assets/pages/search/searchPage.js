import React, { useEffect, useState } from 'react';
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
    getStateSearchHome, getStateCategorySearchHome
 } from '../../redux/selector/home/stateHome';
 import { 
    addKeySearch
 } from '../../redux/reducer/home/searchHome';
import { userSearchData } from '../../redux/saga/search/action';
 
const SearchPage = () => {
    const dispatch = useDispatch();
    const {loadingDefaul,dataSearch, dataSearchDefaul,loadingSearch,searchHome, category} = useSelector(createStructuredSelector({
        loadingDefaul: getStateLoadingSearchDefault,
        dataSearchDefaul: getStateDataSearchDefault,
        // errorSearch: getStateErrorSearch,
        dataSearch: getStateDataSearch,
        loadingSearch: getStateLoadingSearch,
        searchHome: getStateSearchHome,
        category: getStateCategorySearchHome
    }));
    const [keyValue, ] = useState(searchHome)
    useEffect(() => {
        if(searchHome !== ''){
            dispatch(userSearchData(category,searchHome))
            dispatch(addKeySearch(''))
        }else{
            dispatch(requestDataSearchDefault())
        }
    },[]);

    return (
        <LayoutComponent search>
            <PosterSearch loadingSearch={loadingSearch} category={category} keyValue={keyValue}/>
            <ListComponent data={dataSearch.length > 1 ?dataSearch : dataSearchDefaul} loading={loadingDefaul} />
        </LayoutComponent>
    )
};

export default React.memo(SearchPage);