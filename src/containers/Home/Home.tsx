import './Home.css'
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <NavLink to="Poresche911" className="container-sm home-info d-flex mt-5 flex-column align-items-start text-decoration-none">
                <h1>The one and always.</h1>
                <span className="home-text fs-3 fw-bold">The new 911.</span>
            </NavLink>
        </div>
    );
};

export default Home;