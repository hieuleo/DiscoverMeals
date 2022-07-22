import React, {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import { LayoutComponent, CommentComponent} from '../../components';
import { detailAction } from '../../redux/saga/detail/action';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getStateLoadingDetail,
    getStateDataDetail,
    getStateErrorDetail,
} from '../../redux/selector/detail/detail';
import { getStateDataCart } from '../../redux/selector/cart/stateCart';
import {getStateListsComment } from '../../redux/selector/comment/comment';
import { createStructuredSelector } from 'reselect';
import { Row, Col, Button, Skeleton } from 'antd';
import styles from './detail.module.css';
import { addMeals, deleteMeals } from '../../redux/reducer/cart/reducerCart';
import { getStateUser} from '../../redux/selector/auth/stateAuth';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

const DetailsPage = () =>{
    const [check,setCheck] = useState();
    const [show,setShow] = useState(false);
    let {id} = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const {loading,dataDetail, dataCart, user, listComments} = useSelector(createStructuredSelector({
        loading: getStateLoadingDetail,
        dataDetail: getStateDataDetail,
        errorDetail: getStateErrorDetail,
        dataCart: getStateDataCart,
        user: getStateUser,
        listComments: getStateListsComment,
    }));

    console.log(dataCart);

    useEffect(() =>{
        dispatch(detailAction(id))
    },[]);

    useEffect(() =>{
        if (user && dataCart[user.id]){
            setCheck(dataCart[user.id].find(item => item.idMeal === id))
            if(check) {
                setShow(true)
            }else{
                // console.log('k')
            }
        }
    },[check, user])

    const addFavourite = (idUser,idMeal, data) =>{
        if (user !== null){
            if (data.idMeal){
                dispatch(addMeals(idUser,idMeal, data))
                setShow(true)
            }
        }else{
            navigate("/login", { replace : true });
        }
    }

    const removeFavourite = () =>{
        if (dataDetail.idMeal){
            dispatch(deleteMeals(user.id,dataDetail.idMeal))
            setShow(false)
        }
    };

    if (loading) {
        return (
            <LayoutComponent>
            <Row>
                <Col span={22}  offset={1}>
                    <Row className={styles.detail}>
                        <Col span={8} className={styles.thumb}>
                            <Skeleton avatar active />
                        </Col>
                        <Col span={16} className={clsx(styles.info, styles.skeleton)}>
                            <Skeleton active />
                        </Col>
                        <Col span={24} className={styles.dis}>
                            <Skeleton active />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </LayoutComponent>
        )
    }

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
                        {
                            show ? (
                                <Button type="primary" className={clsx(styles.btn, styles.remove)}  onClick={()=>{removeFavourite()}}>
                                    Remove
                                    <i className="fa-solid fa-xmark"></i>
                                </Button> 
                            ):(
                                <Button type="primary" className={styles.btn}  onClick={()=>{addFavourite(user ?user.id : null,dataDetail.idMeal, dataDetail)}}>
                                    favourite
                                    <i className="fa-solid fa-heart"></i>
                                </Button> 
                            )
                        }
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
                        {/* comment */}
                        <Col span={24}>
                            <CommentComponent dataUser={user} listComments={listComments} dataDetail={dataDetail}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </LayoutComponent>
    )
};

export default React.memo(DetailsPage)