import axios from 'axios';

export default async function fetchCats(setImgs){

    try {
        let res = await  axios.get(`${process.env.REACT_APP_API}dsfgdfg?limit=10`) 
        setImgs(res.data)
    } catch (error) {
        console.log(error)
    }
    
    
    }