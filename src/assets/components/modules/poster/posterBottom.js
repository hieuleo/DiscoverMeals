import React from "react";
import styles from './posterBottom.module.css';
import { Row, Col, Input} from 'antd';
import post1 from '../../../img/post-1.png';
import post2 from '../../../img/post-2.png';
import post3 from '../../../img/post-3.png';
// import { Link } from "react-router-dom";

const PossterBottom = () => {
    const { Search } = Input;

    return(
        <Row >
            <Col span={24} offset={0} className={styles.poster}>
                <Row>
                    <Col span={12} className={styles.header}>
                        <h2>Search</h2>
                        <p> <img src={`${post1}`}></img> Total Meals: <span>283</span> <img src={`${post2}`}></img> Total Ingredients: <span>574</span> <img src={`${post3}`}></img> Images: <span>283</span></p>
                    </Col>
                    <Col span={12} className={styles.search}>
                        <Search
                            placeholder="input search text"
                            enterButton="Search"
                            size="large"
                            // suffix={suffix}
                            onSearch={(val)=>{console.log(val)}}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};

export default React.memo(PossterBottom);