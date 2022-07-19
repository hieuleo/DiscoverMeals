import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import { LayoutComponent} from '../../components';
import { detailAction } from '../../redux/saga/detail/action';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getStateLoadingDetail,
    getStateDataDetail,
    getStateErrorDetail,
} from '../../redux/selector/detail/detail';
import { createStructuredSelector } from 'reselect';
import { Row, Col, Button } from 'antd';
import styles from './detail.module.css';
import { getStateDataCart } from '../../redux/selector/cart/stateCart';
import { addMeals } from '../../redux/reducer/cart/reducerCart';
const DetailsPage = () =>{

    let {id} = useParams();
    const dispatch = useDispatch()

    const {loading,dataDetail,errorDetail, dataCart} = useSelector(createStructuredSelector({
        loading: getStateLoadingDetail,
        dataDetail: getStateDataDetail,
        errorDetail: getStateErrorDetail,
        dataCart: getStateDataCart,
    }));

    useEffect(() =>{
        dispatch(detailAction(id))
    },[])

    const addFavourite = (id, data) =>{
        if (data.idMeal){
            dispatch(addMeals(id, data))
        }
    }
    console.log(dataCart)
    return (
        <LayoutComponent>
            <Row>
                <Col span={22}  offset={1}>
                    <Row className={styles.detail}>
                        <Col span={8} className={styles.thumb}>
                                <img src={dataDetail.strMealThumb}></img>
                                <a href={dataDetail.strYoutube} target="_blank"> 
                                    Tutorial Video
                                    <i className="fa-solid fa-play"></i>
                                </a>
                        </Col>
                        <Col span={16} className={styles.info}>
                        <Button type="primary" className={styles.btn}  onClick={()=>{addFavourite(dataDetail.idMeal, dataDetail)}}>
                            favourite
                            <i className="fa-solid fa-heart"></i>
                        </Button> 
                            <h2><span>Meal: </span> {dataDetail.strMeal}</h2>
                            <p><span>Country: </span> {dataDetail.strArea}</p>
                            <p><span>Category:  </span>{dataDetail.strCategory}</p>
                            <p><span>Tags: </span> {dataDetail.strTags}</p>
                            <p><span>Ingredient: </span> {dataDetail.strIngredient1}, {dataDetail.strIngredient2},{dataDetail.strIngredient3},{dataDetail.strIngredient4},{dataDetail.strIngredient5},{dataDetail.strIngredient6},{dataDetail.strIngredient7}</p>
                            <p><span>Links: </span> {dataDetail.strSource}</p>
                        </Col>
                        <Col span={24} className={styles.dis}>
                            <p>{dataDetail.strInstructions}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </LayoutComponent>
    )
};

export default React.memo(DetailsPage)