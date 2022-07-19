import React from 'react';
import { Row, Col } from 'antd';
import clsx from 'clsx';
import styles from './layout.module.css';
import logo from '../../img/logo.webp';
import { Link } from 'react-router-dom';

const LayoutComponent = ({home, search, favourite, contact, children}) => {
    console.log(favourite)
    return( 
        <Row className={clsx(styles.layout)}>
            <Col span={24}>
                {/* header */}
                <Row className={clsx(styles.header)}>
                    <Col span={22} offset={1}>
                        <Row>
                            <Col span={7} className={clsx(styles.logo)}>
                                {/*  */}
                                <Link className={clsx(styles.logoLink)} to={'/'}>
                                    <img 
                                        className={clsx(styles.logoImg)}
                                        src={`${logo}`}
                                        alt='logo'
                                    />
                                    <p>Discover Meals</p>
                                    <i className="fa-solid fa-spoon"></i>
                                </Link>
                            </Col>
                            <Col span={10} className={clsx(styles.navBar)}>
                                <Link to={'/'} className={clsx(styles.navBarLink, home?styles.home:null)}>
                                    Home
                                    <i className="fa-solid fa-angle-down"></i>
                                </Link>
                                <Link to={'/search'} className={clsx(styles.navBarLink, search?styles.search:null)}>
                                    Search
                                    <i className="fa-solid fa-angle-down"></i>
                                </Link>
                                <Link to={'/favourite'} className={clsx(styles.navBarLink, favourite?styles.favourite:null)}>
                                    favourite
                                    <i className="fa-solid fa-angle-down"></i>
                                </Link>
                                <Link to={'./'} className={clsx(styles.navBarLink, contact?styles.contact:null)}>contact</Link>
                            </Col>
                            <Col span={7} className={clsx(styles.athur)}>
                                <Link to={'/login'} className={clsx(styles.login)}>
                                    <i className="fa-solid fa-right-to-bracket"></i>
                                    login
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* container */}
                <Row className={clsx(styles.container)}>
                    <Col span={24}>
                        {children}
                    </Col>
                </Row>
                <Row className={clsx(styles.footer)}>
                    <Col span={22} offset={1}>
                        <Row>
                            <Col className={clsx(styles.info)} xl={8}>
                                {/* logo */}
                                <Link className={clsx(styles.logoLink)} to={'/login'}>
                                    <img 
                                        className={clsx(styles.logoImg)}
                                        src={`${logo}`}
                                        alt='logo'
                                    />
                                    <p>Discover Meals</p>
                                    <i className="fa-solid fa-spoon"></i>
                                </Link>
                                    <div className={clsx(styles.infoLink)}>
                                        <a>
                                            <i className="fa-brands fa-github"></i>
                                        </a>
                                        <a>
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a>
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </div>
                            </Col>
                            <Col xl={16}>
                                <Row>
                                    <Col className={clsx(styles.footerItem)} xl={4}>
                                        {/* About */}
                                        <h2>About</h2>
                                        <Link to={'./'} className={clsx(styles.footerItemLink)}>About Us</Link>
                                        <Link to={'./'} className={clsx(styles.footerItemLink)}>Featured</Link>
                                        <Link to={'./'} className={clsx(styles.footerItemLink)}>News</Link>
                                        <Link to={'./'} className={clsx(styles.footerItemLink)}>Discover</Link>
                                    </Col>
                                    <Col className={clsx(styles.footerItem)} xl={4}>
                                        {/* support */}
                                        <h2>support</h2>
                                        <Link to={'./'} className={clsx(styles.footerItemLink)}>Api</Link>
                                        <Link to={'./'} className={clsx(styles.footerItemLink)}>Tools</Link>
                                        <Link to={'./'} className={clsx(styles.footerItemLink)}>FAQ</Link>
                                        <Link to={'./'} className={clsx(styles.footerItemLink)}></Link>
                                    </Col>
                                    <Col className={clsx(styles.footerItem)} xl={7}>
                                        {/* contact */}
                                        <h2>Feedback</h2>
                                        <p className={clsx(styles.footerItemLink)}>Question of feedback?</p>
                                        <p className={clsx(styles.footerItemLink)}>We'd love to hear from you.</p>
                                    </Col>
                                    <Col className={clsx(styles.footerItem)} xl={9}>
                                        {/* contact */}
                                        <h2>contact</h2>
                                        <p className={clsx(styles.footerItemLink)}><i className={clsx("fas","fa-envelope")}></i> nguyenquochieu617@gmail.com</p>
                                        <p className={clsx(styles.footerItemLink)}><i className={clsx("fas","fa-phone")}></i>  +038-442-7799</p>
                                        <p className={clsx(styles.footerItemLink)}><i className={clsx("fas","fa-phone")}></i>  +038-442-7799 (zalo)</p>
                                        <p className={clsx(styles.footerItemLink)}><i className={clsx("fas","fa-map-marker-alt")}></i> Ho Chi Minh City, Vietnam - 008428.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={22} offset={1} className={clsx(styles.copyright)} >
                            <p>Copyright © 2022 - By QuocHieu</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};

export default React.memo(LayoutComponent);