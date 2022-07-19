/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { useState } from 'react'
export default function Diet({diets}:Diets){
    return(
        <div>
            <h1>Diet page</h1>
            {diets.map((diet,index)=>(
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
 
interface OneDiet {
    title: string,
    imgurl: string,
    description:string
}
interface Diets{
    diets:OneDiet[]
}


