import React from "react";
import styles from "./posterTop.module.css";
import {Row, Col, } from'antd';
import poster from '../../../img/posterTop.png';
import cherryIcon from '../../../img/cherry.png';
const PosterTop = () => { 
    return (
        <Row >
            <Col className={styles.posterTop} span={22} offset={1}>
                <Row >
                    <Col className={styles.posterItem} span={12}>
                        <div className={styles.more}>
                            More than Faster
                            <img src={`${cherryIcon}`}/>
                        </div>
                        <p  className={styles.title}>Explore the world of <span>food</span> with us</p>
                        <p className={styles.message}>we provide food discovery service by genre, locality, ingredients and more</p>
                        <a className={styles.start} href="#categories">Get Started</a>
                        <a className={styles.call} href="#categories"><i className="fa-solid fa-phone"></i> Call Us </a>
                    </Col>
                    <Col className={styles.posterItem} span={12}>
                        <img src={`${poster}`}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};

export default React.memo(PosterTop);