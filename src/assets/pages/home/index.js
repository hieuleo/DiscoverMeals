import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getStateDataHome,
    getStateErrorHome,
    getStateLoadingHome,
    getStateLoadingRandom,
    getStateDataRandom,
    getStateErrorRandom,
}from '../../redux/selector/home/stateHome';
import { createStructuredSelector } from 'reselect';
import { requestProductData, requestRandomData } from '../../redux/saga/home/action';
import styles from './home.module.css';
import { Row, Col } from 'antd';
import { LayoutComponent, PosterTop , SliderComponent, PossterBottom, RamdomMeal} from '../../components';
// const {LayoutComponent, PosterTop , SliderComponent, PossterBottom, RamdomMeal}  = loadable(() => import('../../components'));

const HomePages = () => {
    const dispatch = useDispatch()
    const {loading, data, loadingCart,loadingRandom,dataRandom,errorRandom} = useSelector(createStructuredSelector({
        loading: getStateLoadingHome,
        data: getStateDataHome,
        error:getStateErrorHome,
        loadingRandom:getStateLoadingRandom,
        dataRandom:getStateDataRandom,
        errorRandom:getStateErrorRandom,
    }));

    useEffect(()=>{
        dispatch(requestProductData())
        dispatch(requestRandomData())
    },[])

    let config = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        accessibility : true,
        autoplay : true,
        autoplaySpeed : 5000,
        pauseOnHover : true, // true: sẽ dừng lại khi hover chuột vào phần tử
        draggable: true,
        swipeToSlide: true,
    }
    
    return(
        <LayoutComponent home>
            {/* poster wellcome */}
            <PosterTop/>
            {/* categories */}
            <Row id='categories'>
                <Col span={24} className={styles.colSlider}>
                    <Row>
                        <Col span={22} offset={1}>
                            <h2 className={styles.headerSlider}>
                                <i className="fa-solid fa-folder-minus"></i>
                                Meal categories:
                            </h2>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={22} offset={1}>
                    <SliderComponent loading={loading} data={data} config={config}/>
                </Col>
            </Row>
            {/* search */}
            <PossterBottom/>
            {/* ramdom */}
            <RamdomMeal loading={loadingRandom} data={dataRandom}/>
        </LayoutComponent>
    )
};
export default React.memo(HomePages);