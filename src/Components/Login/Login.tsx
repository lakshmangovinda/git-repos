import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CLIENT_ID = "a8d0a9b005e68afb62e5";
const CLIENT_SECRET = "0f777eb66f489c69d57b040cc5bf0e946633e4d0"

const Login = () => {
    const nav = useNavigate();
    useEffect(() => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const codeParam = urlParams.get("code")
        console.log(codeParam)
        if (codeParam) {
            sessionStorage.setItem('code', codeParam)
            getAuthtoken(codeParam)

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getAuthtoken = async (code: string): Promise<void> => {
        const params = "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + code
        console.log(params)
        const config = {
            headers: { "Access-Control-Allow-Origin": "*" }
        }
        try {
            const response = await axios.get("https://github.com/login/oauth/access_token" + params)

            if (response) {
                if (response.data.includes("access")) {
                    sessionStorage.setItem("token", response.data)
                    nav('/repos')
                }

            }
        }
        catch (err) {
            console.log(err)
        }
    }
    const loginwithGithub = () => {

        window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID)

    }

    return (
        <div className="container">
            <div className="row justify-content-md-center justify-content-lg-center text-center">

                <div className="col-sm-12 col-xs-12 col-md-6 col-lg-4 d-flex flex-column justify-content-lg-around justify-content-md-around  gap-4  border solid pb-20 ">
                    <div>
                        <h3>Login To Your Account</h3>
                    </div>

                    <div className="btn btn-dark" onClick={loginwithGithub}>Github</div>
                    <div>or</div>
                    <div className="btn btn-outline-secondary" >Continue with Email and Password</div>
                    <div><a href="https://github.com/" target="_blank" rel="noreferrer">Neet help? Create Account</a></div>

                </div>

            </div>


        </div>
    );
};
export default Login;