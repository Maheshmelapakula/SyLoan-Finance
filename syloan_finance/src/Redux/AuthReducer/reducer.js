
const intialState={
    isAuth:false,
    token:''
}

export const AuthReducer=(state=intialState,action)=>{
    const {type,payload}=action;
    switch(type){

        default:return state;
    }
}