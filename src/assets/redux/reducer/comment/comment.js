import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    listComments: {},
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
                const { idMeal , idComment } = action.payload;
                // console.log(state.listComments.toJSON());
                state.listComments[idMeal] = state.listComments[idMeal].filter(comment => comment.idComment !== idComment);
            },
            prepare: (idMeal, idComment) => {
                return {
                    payload: {
                        idMeal: idMeal,
                        idComment: idComment
                    }
                }
            }
        }
    }
});

export const {
    addComment, deleteComment
} = commentSlice.actions;
export default commentSlice.reducer; 
