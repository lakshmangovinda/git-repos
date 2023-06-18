import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props: any) {
    let { Component } = props;
    const nav = useNavigate();
    useEffect(() => {
        let login = sessionStorage.getItem("token");
        if (!login) {
            nav("/login");
        }
    });
    return <Component></Component>;
}
export default Protected;