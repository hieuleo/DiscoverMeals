import React from 'react';
import { LayoutComponent } from '../../components';
import { Link } from "react-router-dom";
import { Button, Result } from 'antd';
import styles from './err.module.css';
const ErrorPage = () => {
    return (
        <LayoutComponent>
            <div className={styles.err}></div>
            <Result 
                status="404"
                title="OPPS! PAGE NOT FOUND"
                subTitle="Sorry, the page you're looking for doesn't exist."
                extra={
                    <Link to={"/DiscoverMeals"}>  
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
            <div className={styles.err}></div>
        </LayoutComponent>
    )
};

export default React.memo(ErrorPage);