import { createDraftSafeSelector } from '@reduxjs/toolkit';

const stateComment = state => state.comment;

const getStateListsComment = createDraftSafeSelector(
    stateComment,
    state => state.listComments
);

export {
    getStateListsComment
};