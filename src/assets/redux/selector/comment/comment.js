import { createDraftSafeSelector } from '@reduxjs/toolkit';

const stateComment = state => state.comment;

const getStateListsComment = createDraftSafeSelector(
    stateComment,
    state => state.listComments
);

const getStateErrComment = createDraftSafeSelector(
    stateComment,
    state => state.err
);

export {
    getStateListsComment,
    getStateErrComment
};