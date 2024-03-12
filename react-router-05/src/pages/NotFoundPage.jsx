import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => 
{
    //Event나 함수 작동 후 이동할 페이지 처리 : location.href = "index.html" = MPA
    // 요청(/company) ==> Component 작동(Route path ="/company" element = {<Company />})
    const navigate = useNavigate();

    return <div>
        <h1>404 Not Found</h1>
        <h3><Link to = "/"> Home </Link></h3>
        <button onClick={() => navigate("/company")}>회사</button>
    </div>;
}

export default NotFoundPage;