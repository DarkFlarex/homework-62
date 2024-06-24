import {NavLink} from "react-router-dom";

const Toolbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-sm d-flex align-items-center justify-content-sm-between">
                <div className="logo">
                    <NavLink to="/" className="navbar-brand w-100 h-10">
                        <img src={'https://freepngdesign.com/content/uploads/images/t_porsche-white-logo-7020.png'}
                             height="150"
                             className="logo-img"
                             alt="Porsche Logo"/>
                    </NavLink>
                </div>
                <ul className="navbar-nav d-flex flex-row gap-3 flex-nowrap">
                    <li className="nav-item">
                        <NavLink
                            to="Poresche911"
                            className="nav-link"
                        >
                            Modal: 911
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="PorscheCayenne"
                            className="nav-link"
                        >
                            Modal: Cayenne
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="NewsRoom"
                            className="nav-link"
                        >
                            NewsRoom
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Toolbar;