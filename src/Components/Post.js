import React,{useEffect} from 'react'
import body from '../constants/const'
import requestOptions from '../constants/const'
import axios from 'axios';
import data from './../constants/const'
 function Post() {
    const [body, requestOptions, config] = data;

    useEffect(()=>{
        /*
        async function fetchData () {
            try {
              const response = await fetch(process.env.REACT_APP_SECOND_API, requestOptions);
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              console.log(data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
        
          fetchData();*/
          const fetchData = () => {
            axios.post(process.env.REACT_APP_SECOND_API,body,config)
              .then(response => {
                console.log(response.data);
              })
              .catch(error => {
                console.error('Error fetching data:', error);
              });
          };
      
          fetchData();
          
    })


     


  return (
    <div>Post</div>
  )
}

export default Post