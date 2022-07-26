import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Form, Input, message } from 'antd';
import {LayoutComponent} from '../../components';
import styles from'./login.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {authLoginAction} from '../../redux/saga/auth/action';
import { createStructuredSelector } from 'reselect';
import { getStateUser} from '../../redux/selector/auth/stateAuth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const {user} = useSelector(createStructuredSelector({
    user: getStateUser,
  }));

  const [check, setCheck] = useState({});

  const onFinish = async(values) => {
      dispatch(authLoginAction(values));
    if(values.password && values.username ) {
      setCheck(values);
    }else{
      setCheck({});
    }
  };

  useEffect(() =>{
    if (check.password && check.username) {
      if(user!== null) {
        navigate("/DiscoverMeals", { replace : true });
      }else{
        message.error('Invalid account or password!!!');
      }
    }
  },[user,check])
  
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <LayoutComponent>
      <Row className={styles.login}>
        <Col span={16} offset={2}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </LayoutComponent>
  );
};

export default React.memo(LoginPage);
