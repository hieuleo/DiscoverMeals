import React from "react";
import Slider from "react-slick";
// import ImgError from '../../img/image-not-available.png';
import { Link } from "react-router-dom";
import styles from "./slick.module.css";
import "./slickModifi.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Col, Skeleton} from 'antd';
// import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';

const { Meta } = Card;

const SliderComponent = ({data,config, loading}) => {
    const slugify = require('slugify')
    let settings = config;

    if (loading) {
        return (
            <Slider className={styles.configslide} {...settings}>
                <Col>
                    <Skeleton active/>
                </Col>
                <Col>
                    <Skeleton active/>
                </Col>
                <Col>
                    <Skeleton active/>
                </Col>  
                <Col>
                    <Skeleton active/>
                </Col>
                <Col>
                    <Skeleton active/>
                </Col>
            </Slider>
        )
    }
    console.log(data)
    return (
        <Slider {...settings}>
            {
                data.map(item => (
                    <Col key={item.idCategory}>
                        <Link to={`/`} >
                            <Card
                                hoverable
                                cover={<img alt="example" src={`${item.strCategoryThumb}`} />}
                            >
                                <Meta title={`${item.strCategoryDescription}`}  description={`${item.strCategory}`} />
                            </Card>
                        </Link>
                    </Col>
                ))
            }
        </Slider>
    )
};

export default React.memo(SliderComponent);