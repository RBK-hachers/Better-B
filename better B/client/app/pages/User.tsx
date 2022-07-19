import { useEffect,useState } from "react"
function User(){
    const [data,setData] = useState([])
    useEffect(() =>{
     fetch('http://localhost:2000/api/user')
     .then ((response)=>{
        response.json()
        .then((data)=>{
            setData(data);
       
        })
     })
    },[])
    interface User{
        name: string;
        img: string;
        email: string;
        password: string;
        weight: number;
        height: number;
        imc: number;
        description: string;
    }
    return(
        <div>
        <h1>{data.map((user:any,index:number)=>{
return <div key={index}>{
<h1>{user.name}</h1>
}
</div>
       })}</h1>
        </div>
        
    )
}
export default User