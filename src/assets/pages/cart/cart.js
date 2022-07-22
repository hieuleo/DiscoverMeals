import React from 'react';
import {LayoutComponent} from '../../components/index';
import styles from './cart.module.css';
import { Row, Col } from 'antd';
import { getStateDataCart } from '../../redux/selector/cart/stateCart';
import { getStateUser } from '../../redux/selector/auth/stateAuth';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { deleteMeals } from '../../redux/reducer/cart/reducerCart';
import { Link } from 'react-router-dom';
const CartPage = () => {
    const dispatch = useDispatch()
    const {dataCart, user} = useSelector(createStructuredSelector({
        dataCart: getStateDataCart,
        user: getStateUser,
    }));

    console.log(dataCart)

    return(
        <LayoutComponent favourite>
            <Row>
                <Col span={22} offset={1} className={styles.cart}>
                    <Row>
                        <Col span={24} className={styles.header}>
                            <h2>list of favorite meals: <span>{dataCart.length}</span></h2>
                        </Col>
                        {
                            dataCart[user.id].map( item => (
                                <Col key={item.idMeal} span={24} className={styles.container}>
                                    <Row>
                                        <Col lg={6}  sm={24}>
                                            <Link to={`/Detail/${item.idMeal}`} >
                                                <img src={item.strMealThumb}/>
                                            </Link>
                                        </Col>
                                        <Col lg={18} sm={24}>
                                            <h2>{item.strMeal}</h2>
                                            <p><span>Country: </span>{item.strArea}</p>
                                            <p><span>Category: </span>{item.strCategory}</p>
                                            <p><span>Id: </span>{item.idMeal}</p>
                                            <p><span>Ingredient: </span> {item.strIngredient1}, {item.strIngredient2},{item.strIngredient3},{item.strIngredient4},{item.strIngredient5},{item.strIngredient6},{item.strIngredient7}</p>
                                        </Col>
                                    </Row>
                                    <button type="button" className={styles.btn} onClick={()=>{dispatch(deleteMeals(user.id,item.idMeal))}}>
                                        remove
                                    </button>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </LayoutComponent>
    )
};

export default React.memo(CartPage);

