import React,{useState} from 'react';
import { Row, Col, Input } from 'antd';
import styles from './poster.module.css';
import clsx from 'clsx';
import { userSearchData } from '../../../redux/saga/search/action';
import { useDispatch } from 'react-redux';
const {Search} = Input;
const PosterSearch = ({loadingSearch}) => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('name')
    const changeFilter = (val) => {
        setFilter(val.target.id);
    };

    // console.log(filter)
    return (
        <Row>
            <Col className={styles.poster} span={22} offset={1}>
                <h2>Welcome to <span>Discover Meals</span></h2>
                <p>Welcome to Discover Meals: Free offer, crowd-sourced database of Recipes from around the world.</p>
                <div>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        loading={loadingSearch}
                        onSearch={(val)=>{if(val.trim().length > 0){ return dispatch(userSearchData(filter, val))}}}
                    />
                </div>
                <div className={styles.change}>
                    <button id={'name'} className={clsx(styles.btn, filter === 'name' ? styles.active: null)} onClick={(val) =>{changeFilter(val)}}> Name </button>
                    <button id={'ingredient'} className={clsx(styles.btn, filter === 'ingredient' ? styles.active: null)} onClick={(val) =>{changeFilter(val)}}> Ingredient </button>
                    <button id={'category'} className={clsx(styles.btn, filter === 'category' ? styles.active: null)} onClick={(val) =>{changeFilter(val)}}> Category </button>
                    <button id={'area'} className={clsx(styles.btn, filter === 'area' ? styles.active: null)} onClick={(val) =>{changeFilter(val)}}> Area </button>
                </div>
            </Col>
        </Row>
    )
};

export default React.memo(PosterSearch)