import axios from 'axios';

const fetchData = async(url) =>{
 try{
    let data = await axios(url);
    console.log("hi",data);
    return data;
 } catch(e){
     console.log(e);
 }
  
}

export default fetchData; 