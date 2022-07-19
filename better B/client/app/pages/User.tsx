import { useEffect,useState } from "react"
function User(){
    const [data,setData] = useState([])
    //get users from database
    useEffect(() =>{
     fetch('http://localhost:2000/api/user')
     .then ((response)=>{
        response.json()
        .then((data)=>{
            setData(data);
       
        })
     })
    },[])





//sign up 
 const [newUser,setNewUser] = useState({email:"fetchFrontEnd@gamil.com",password:"password"})
 const signup = async ()=>{
try{
    const res = await fetch("http://localhost:2000/api/user/signup",{
     method:"POST",
     headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
    })
    return res
}catch (error) {
    console.log(error);
 }

 }



    return(
        <div>
{signup()}
        </div>
        
    )
}
export default User