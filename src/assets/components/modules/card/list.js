import React from "react";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import styles from "./list.module.css";
import clsx from 'clsx';
const { Meta } = Card;

const ListComponent = ({data}) => {
    const slugify = require('slugify')
    return (
        <Row className={clsx(styles.list)}>
            <Col span={22} offset={1}>
                <Row gutter={[16, 16]}>
                    {data.map(item =>(
                        <Col span={6} key={item.idMeal}>
                            <Link to={`/Detail/${item.idMeal}`}>
                                <Card
                                    hoverable
                                    cover={<img alt="example" src={`${item.strMealThumb}`} />}
                                >
                                    <Meta title={item.strMeal}/>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    )
};
export default React.memo(ListComponent);