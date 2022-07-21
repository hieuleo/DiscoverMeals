import React, {useState} from "react";
import styles from "./comment.module.css";
import { Row, Col, Avatar, Button, Comment, Form, Input} from 'antd';
import {addComment, deleteComment} from '../../../redux/reducer/comment/comment';
import { useDispatch} from 'react-redux';
const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
        <TextArea rows={3} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
            Add Comment
        </Button>
        </Form.Item>
    </>
);

const CommentComponent = ({dataDetail, dataUser, listComments}) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('');

    const commentData = listComments[dataDetail.idMeal];

    const handleSubmit = () => {
        if (value.trim() && dataUser !== null) {
            const days = new Date();
            const Seconds = days.getSeconds();
            const minutes = days.getMinutes();
            const hours = days.getHours();
            const day = days.getDate();
            const month = days.getMonth() + 1;
            const year = days.getFullYear();
            let time
            if (hours>12){
                time = `${Seconds}s-${minutes}m-${hours}h Pm ${day}/${month}/${year}`;
            }else{
                time = `${Seconds}s-${minutes}m-${hours}h Am ${day}/${month}/${year}`;
            }
            let idLastComment
            if(listComments[dataDetail.idMeal] && listComments[dataDetail.idMeal].length > 0) {
                const lastId = listComments[dataDetail.idMeal].length-1; // lay ra index cua comment cuoi
                const Comment = listComments[dataDetail.idMeal];    // lay ra comment;
                const lastComment = Comment[lastId];
                idLastComment = lastComment.idComment; // lay ra id comment cuoi;
            }
            dispatch(addComment(dataDetail.idMeal,{
                idComment: idLastComment + 1 || 1,
                idUser: dataUser.id,
                name: dataUser.name,
                avatar: dataUser.avatar,
                time: time,
                comment: value,
            }));

            setValue('');
            
        }else if(!value.trim() && dataUser){
            window.alert("not content!!!!")
        }else{
            
            window.alert("You need to login to comment!!!!")
        }
    };

    const handleDelete = (idMeal, idComment) => {
        dispatch(deleteComment(idMeal, idComment))
    }

    console.log(listComments)
    
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    
    return (
        <Row>
            {/* comment imput */}
            <Col span={22} offset={1}>
                <Comment
                    avatar={<Avatar src={dataUser? dataUser.avatar:"https://joeschmoe.io/api/v1/random"} alt={dataUser? dataUser.name:'user'} />}
                    content={
                        <Editor
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        // submitting={submitting}
                        value={value}
                        />
                    }
                    />
            </Col>
            {/* comment list */}
            <Col span={22} offset={1} className={styles.header}>
                    <h2>Reviews:</h2>
            </Col>
            <Col span={22} offset={1} className={styles.list}>
                <Row>
                    { commentData ? commentData.map(item =>(
                        <Col key={item.idComment} span={24} className={styles.item}>
                            <Row>
                                <Col span={5} className={styles.avatar}>
                                    <img src={`${item.avatar}`}/>
                                    <p>{item.time}</p>
                                </Col>
                                <Col span={19} className={styles.content}>
                                    <h2>{item.name}</h2>
                                    <p>{item.comment}</p>
                                </Col>
                            </Row>
                            <div className={styles.remove} onClick={() => handleDelete(dataDetail.idMeal,item.idComment)}>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                        </Col>
                    )): <p className={styles.error}>There are no comments yet...</p>
                    
                    }
                </Row>
            </Col>
        </Row>
    )
}

export default React.memo(CommentComponent);
