import { createAction } from '@reduxjs/toolkit'

export const requestDataSearchDefault = createAction(
    'requestDataSearchDefault'// k cần payload vì chỉ cần call k dữ liệu dầu vào.
);


export const userSearchData = createAction('userSearchData', (nameFilter, nameMeal) => {
    return {
        payload: {
            filter: nameFilter, 
            meal: nameMeal,
        }
    };
});
