import './notFoundpage.css'
import { useNavigate } from "react-router-dom";
export const NotFoundPage=()=>{
	const navigate = useNavigate();
    return(
        <>
     
	<div className="container">
		<div className="row">	
		<div className="col-12 ">
		<div className="four_zero_four_bg">
			<h1 className="text-center">404</h1>
		</div>
		<div className="col-12 d-flex justify-content-center flex-column align-items-center	">
		<h2>
		Look like you're lost
		</h2>
		
		<p>the page you are looking for not avaible!</p>
		
		<p  className="link_404 text-center" onClick={()=>navigate("/login")}>Go to Home</p>
	</div>
	
		</div>
		</div>
		</div>
	

        </>
    )

}