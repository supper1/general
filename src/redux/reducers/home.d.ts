import * as actionTypes from '../constants/actionTypes'
export const home = (state={
    userdata:{},
    url:false,
    time_out:0,
    audio:{
        type:0,
        data:null
    }
},action:any) => {
    switch (action.type){
        case actionTypes.USER_LOGIN:
            return {
                ...state,
            };
        case actionTypes.SAVE_USERDATA:
            return {
                ...state,
                userdata:{...action.data}
            };
        case actionTypes.SHARE_URL:
            return {
                ...state,
                url:action.data.url
            };
        case actionTypes.UPDATA_GRADE_ID:
            return {
                ...state,
                userdata:{...state.userdata,gradeId:action.data.id}
            };
        case actionTypes.SAVE_TIME_CLOCK:
            return {
                ...state,
                time_out:action.data
            };   
        case actionTypes.SAVE_AUDIO_ID:
            return {
                ...state,
                audio:{...action.data}
            };   
        default:
            return state;
    }
}




