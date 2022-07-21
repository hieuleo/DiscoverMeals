import React from 'react';
import {LayoutComponent} from '../../components/index';
import styles from './cart.module.css';
import { Row, Col } from 'antd';
import { getStateDataCart } from '../../redux/selector/cart/stateCart';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { deleteMeals } from '../../redux/reducer/cart/reducerCart';
import { Link } from 'react-router-dom';
const CartPage = () => {
    const dispatch = useDispatch()
    const {dataCart} = useSelector(createStructuredSelector({
        dataCart: getStateDataCart,
    }));

    return(
        <LayoutComponent favourite>
            <Row>
                <Col span={22} offset={1} className={styles.cart}>
                    <Row>
                        <Col span={24} className={styles.header}>
                            <h2>list of favorite meals: <span>{dataCart.length}</span></h2>
                        </Col>
                        {
                            dataCart.map( item => (
                                <Col key={item.idMeal} span={24} className={styles.container}>
                                    <Row>
                                        <Col span={6} >
                                            <Link to={`/Detail/${item.idMeal}`} >
                                                <img src={item.strMealThumb}/>
                                            </Link>
                                        </Col>
                                        <Col span={18} >
                                            <h2>{item.strMeal}</h2>
                                            <p><span>Country: </span>{item.strArea}</p>
                                            <p><span>Category: </span>{item.strCategory}</p>
                                            <p><span>Id: </span>{item.idMeal}</p>
                                            <p><span>Ingredient: </span> {item.strIngredient1}, {item.strIngredient2},{item.strIngredient3},{item.strIngredient4},{item.strIngredient5},{item.strIngredient6},{item.strIngredient7}</p>
                                        </Col>
                                    </Row>
                                    <button type="button" className={styles.btn} onClick={()=>{dispatch(deleteMeals(item.idMeal))}}>
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

