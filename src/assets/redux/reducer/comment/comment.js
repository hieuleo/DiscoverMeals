import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    listComments: {},
    err: null,
};

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addComment: {
            reducer: (state,action) => {
                const { idMeal , comment } = action.payload;
                if (state.listComments[idMeal] && state.listComments[idMeal].length > 0) {
                    state.listComments[idMeal].push(comment)
                }else{
                    state.listComments[idMeal] = []
                    state.listComments[idMeal].push(comment)
                }
            },
            prepare: (idMeal, comment) => {
                return {
                    payload: {
                        idMeal: idMeal,
                        comment: comment
                    }
                }
            }
        },
        deleteComment:{
            reducer: (state,action) => {
                const { idMeal , idComment, idUserComent } = action.payload;
                // console.log(state.listComments.toJSON());
                const check = state.listComments[idMeal].find(item => item.idUser === idUserComent && item.idComment === idComment);
                if (idUserComent && check){
                    state.listComments[idMeal] = state.listComments[idMeal].filter(comment => comment.idComment !== idComment);
                    state.err =  null
                }else{
                    state.err =  {
                        cod: 501,
                        message: 'There was an error!!!'
                    }
                }
            },
            prepare: (idMeal, idComment, idUserComent) => {
                return {
                    payload: {
                        idMeal: idMeal,
                        idComment: idComment,
                        idUserComent: idUserComent,
                    }
                }
            }
        },
        errorMessage:{
            reducer: (state) => {
                state.err =  {
                    cod: 501,
                    message: 'There was an error!!!'
                }
            },
        }
    }
});

export const {
    addComment, deleteComment, errorMessage
} = commentSlice.actions;
export default commentSlice.reducer; 
