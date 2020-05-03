export const getToken=()=>{
const state=sessionStorage.getItem("state");
const serialized=JSON.parse(state);
if(state && serialized)
{
    return serialized.token;
}else{
    return null;
}

}

export const getUserId=()=>{
    const state=sessionStorage.getItem("state");
    const serialized=JSON.parse(state);
    if(state && serialized)
    {
        return serialized.user.id;
    }else{
        return null;
    }
}

export const getUserName=()=>{
    const state=sessionStorage.getItem("state");
    const serialized=JSON.parse(state);
    if(state && serialized)
    {
        return serialized.user.name;
    }else{
        return null;
    }
}