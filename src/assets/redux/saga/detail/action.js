import { createAction } from '@reduxjs/toolkit'

export const detailAction = createAction('detailAction', (val)=> {
    return {
        payload: val
    }
});
