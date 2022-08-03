import React,{useState} from 'react';
import { Row, Col } from 'antd';
import clsx from 'clsx';
import styles from './layout.module.css';
import logo from '../../img/logo.webp';
import { Link } from 'react-router-dom';
import { 
    getStateUser,
  } from '../../redux/selector/auth/stateAuth';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { authReducer } from '../../redux/reducer/auth/auth';
import { useNavigate } from 'react-router-dom';


const LayoutComponent = ({home, search, favourite, contact, children}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuMobi, setMenuMobi] = useState(false);
    const {user} = useSelector(createStructuredSelector({
        user: getStateUser,
    }));

    const logoutEven = () => {
        dispatch(authReducer.logoutSuccess())
        navigate("/DiscoverMeals/login", { replace : true });
    };

    const openMenuMobi = () => {
        setMenuMobi(!menuMobi)
    }

    const closeMenuMobi = () => {
        setMenuMobi(!menuMobi)
    }

    return( 
        <Row className={clsx(styles.layout)}>
            <Col span={24}>
                {/* header */}
                <Row className={clsx(styles.header)}>
                    <Col span={22} offset={1}>
                        <Row>
                            <Col span={7} className={clsx(styles.logo)}>
                                {/*  */}
                                <Link className={clsx(styles.logoLink)} to={'/DiscoverMeals'}>
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
                                <Link to={'/DiscoverMeals'} className={clsx(styles.navBarLink, home?styles.home:null)}>
                                    Home
                                    <i className="fa-solid fa-angle-down"></i>
                                </Link>
                                <Link to={'/DiscoverMeals/search'} className={clsx(styles.navBarLink, search?styles.search:null)}>
                                    Search
                                    <i className="fa-solid fa-angle-down"></i>
                                </Link>
                                <Link to={'/DiscoverMeals/favourite'} className={clsx(styles.navBarLink, favourite?styles.favourite:null)}>
                                    favourite
                                    <i className="fa-solid fa-angle-down"></i>
                                </Link>
                                <Link to={'./'} className={clsx(styles.navBarLink, contact?styles.contact:null)}>contact</Link>
                            </Col>
                            <Col span={10} className={clsx(styles.menu)}>
                                <i className="fa-solid fa-bars" onClick={() =>{openMenuMobi()}}></i>
                            </Col>
                            <Col span={7} className={clsx(styles.athur)}>
                                {
                                    user === null ? (
                                        <Link to={'/DiscoverMeals/login'} className={clsx(styles.login)}>
                                            <i className="fa-solid fa-right-to-bracket"></i>
                                            login
                                        </Link>
                                    ):(
                                        <>
                                            <button to={'/DiscoverMeals/login'} className={clsx(styles.login, styles.logout)} onClick={() =>{logoutEven()}}>
                                                logout
                                                <i className="fa-solid fa-right-from-bracket"></i>
                                            </button>
                                            <div className={styles.avatar}>
                                                <img src={user.avatar} alt={user.name}/>
                                            </div>
                                            <h2>{user.name}</h2>
                                        </>
                                    )
                                }
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
                            <Col className={clsx(styles.info)} xl={8} lg={24} sm={24}>
                                {/* logo */}
                                <Link className={clsx(styles.logoLink)} to={'/DiscoverMeals'}>
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
                            <Col xl={16} lg={24} sm={24}>
                                <Row className={clsx(styles.footerListItem)}>
                                    <Col className={clsx(styles.footerItem)} xl={4} lg={12} sm={24}>
                                        {/* About */}
                                        <h2>About</h2>
                                        <Link to={'./err'} className={clsx(styles.footerItemLink)}>About Us</Link>
                                        <Link to={'./err'} className={clsx(styles.footerItemLink)}>Featured</Link>
                                        <Link to={'./err'} className={clsx(styles.footerItemLink)}>News</Link>
                                        <Link to={'./err'} className={clsx(styles.footerItemLink)}>Discover</Link>
                                    </Col>
                                    <Col className={clsx(styles.footerItem)} xl={4} lg={12} sm={24}>
                                        {/* support */}
                                        <h2>support</h2>
                                        <Link to={'./err'} className={clsx(styles.footerItemLink)}>Api</Link>
                                        <Link to={'./err'} className={clsx(styles.footerItemLink)}>Tools</Link>
                                        <Link to={'./err'} className={clsx(styles.footerItemLink)}>FAQ</Link>
                                        <Link to={'./err'} className={clsx(styles.footerItemLink)}></Link>
                                    </Col>
                                    <Col className={clsx(styles.footerItem)} xl={7} lg={12} sm={24}>
                                        {/* contact */}
                                        <h2>Feedback</h2>
                                        <p className={clsx(styles.footerItemLink)}>Question of feedback?</p>
                                        <p className={clsx(styles.footerItemLink)}>We'd love to hear from you.</p>
                                    </Col>
                                    <Col className={clsx(styles.footerItem)} xl={9} lg={12} sm={24}>
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
            <Col span={24} className={clsx(styles.mobi, menuMobi? styles.active: null)}>
                <Link to={'/DiscoverMeals'} className={clsx(styles.navBarLink, home?styles.home:null)}>
                    Home
                    <i className="fa-solid fa-angle-down"></i>
                </Link>
                <Link to={'/DiscoverMeals/search'} className={clsx(styles.navBarLink, search?styles.search:null)}>
                    Search
                    <i className="fa-solid fa-angle-down"></i>
                </Link>
                <Link to={'/DiscoverMeals/favourite'} className={clsx(styles.navBarLink, favourite?styles.favourite:null)}>
                    favourite
                    <i className="fa-solid fa-angle-down"></i>
                </Link>
                <Link to={'./'} className={clsx(styles.navBarLink, contact?styles.contact:null)}>
                    contact
                </Link>
                <div className={styles.close} onClick={() => { closeMenuMobi()}}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </Col>
        </Row>
    )
};

export default React.memo(LayoutComponent);