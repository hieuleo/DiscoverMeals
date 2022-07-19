import { createAction } from '@reduxjs/toolkit'

export const requestProductData = createAction(
    'requestHomeData'// k cần payload vì chỉ cần call k dữ liệu dầu vào.
);

export const requestRandomData = createAction(
    'requestRandomData'// k cần payload vì chỉ cần call k dữ liệu dầu vào.
);

