import { useState } from "react"

const Login = () => {
    const [isLogin, setIsLogin] = useState("Login");
    return (<>
        <button onClick={()=>{
            if(isLogin==="Login") {
                setIsLogin("Logout");
            }
            else {
                setIsLogin("Login");
            }
        }}>{isLogin}</button>
    </>)
}

export default Login;