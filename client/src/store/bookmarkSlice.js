import {createSlice} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
const initialState = localStorage.getItem('bookmarkIdList') ? JSON.parse(localStorage.getItem('bookmarkIdList')) : [];

export const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers:{
        toggleBookmark(state,action){
            if(state.indexOf(action.payload) > -1){
                state.splice(state.indexOf(action.payload),1)
                toast("상품이 북마크에서 제거되었습니다.",{ position:"bottom-right"});
            }else{
                state.push(action.payload)
                toast("상품이 북마크에 추가되었습니다.",{ position:"bottom-right"});
            }
            localStorage.setItem('bookmarkIdList', JSON.stringify(state));
        }
    }
})

export default bookmarkSlice.reducer
export const {toggleBookmark} = bookmarkSlice.actions