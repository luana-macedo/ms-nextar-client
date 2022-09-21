import axios from "axios";

const setAuthHeader = (token) => {
    if(token){
        
        axios.defaults.config= {
            Authorization: "Bearer " + token,
        };
    
    } else {
        delete axios.defaults.headers.Authorization;
        console.log('sem token')
    }
};
export default setAuthHeader;