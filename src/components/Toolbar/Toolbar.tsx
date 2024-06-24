import {NavLink} from "react-router-dom";


const Toolbar = () => {
    return (
        <nav className="navbar-light m-5">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    PORSCHE
                </NavLink>
                <ul className="navbar-nav d-flex flex-row gap-3 flex-nowrap">
                    <li className="nav-item">
                        <NavLink
                            to="Poresche911"
                            className="nav-link"
                        >
                            911 Modal
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="PorscheCayenne"
                            className="nav-link"
                        >
                            Cayenne Modal
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Toolbar;