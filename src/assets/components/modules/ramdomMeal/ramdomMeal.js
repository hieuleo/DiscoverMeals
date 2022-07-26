import React from 'react';
import styles from './ramdom.module.css';
import { Row, Col} from 'antd';
import { Link } from "react-router-dom";

const RamdomMeal = ({loading, data}) => {
    const slugify = require('slugify')

    if (loading) {
        return(
            <Row></Row>
        )
    }

    return (
        <Row>
            <Col span={22} offset={1} className={styles.ramdom}>
                <Row>
                    <Col span={24}>
                        <h2 className={styles.header}>
                            <i className="fa-solid fa-shuffle"></i>
                            random proposed meal for you:
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} sm={24}>
                        <Link to={`/DiscoverMeals/Detail/${data.idMeal}`} className={styles.Link}>
                            <img  className={styles.img} src={`${data.strMealThumb}`}/>
                            <h2 className={styles.imgTitle}>{data.strMeal}</h2>
                            <button className={styles.btn}>Get Details</button>
                        </Link>

                    </Col> 
                    <Col lg={12} sm={24}className={styles.description}>
                        <h3><span>Meal: </span> {data.strMeal}</h3>
                        <p><span>Country: </span> {data.strArea}</p>
                        <p><span>Category:  </span>{data.strCategory}</p>
                        <p><span>Tags: </span> {data.strTags}</p>
                        <p><span>Ingredient: </span> {data.strIngredient1}, {data.strIngredient2},{data.strIngredient3},{data.strIngredient4},{data.strIngredient5},{data.strIngredient6},{data.strIngredient7}</p>
                        <p><span>Links: </span> {data.strSource}</p>
                        <p><span>Instructions: </span> {data.strInstructions}</p>
                    </Col> 
                </Row>
            </Col> 
        </Row>
    )
};

export default React.memo(RamdomMeal);