/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { useEffect, useState } from 'react'
export default function Diet(){
    const [data,setData]=useState([])
    interface OneDiet {
        title: string,
        imgurl: string,
        description:string
    }

    
    useEffect(()=>{
        fetch("http://localhost:2000/api/diets").then(respone=>respone.json()).then(data=>setData(data))
    },[])
    return(
        <div>
            <h1>Diet page</h1>
            {data.map((diet:any,index:number)=>(
                <ul>
                    <div key={index}>
                    <h1>{diet.title}</h1>
                    <img src={diet.imgurl}/>
                    <p>{diet.description}</p>
                    </div>
                </ul>
            )
                
            )}
          </div>
    )
}
 



