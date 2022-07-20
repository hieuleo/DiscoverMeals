import { createAction } from '@reduxjs/toolkit'

export const authLoginAction = createAction('authLoginAction', (user)=> {
    return {
        payload: {user: user}
    }
});