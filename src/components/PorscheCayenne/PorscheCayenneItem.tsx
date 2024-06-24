import React from 'react';
import {PorscheCay} from "../../types";

interface Props {
    PorscheCay:PorscheCay;
}

const PorscheCayenneItem1:React.FC<Props> = ({PorscheCay}) => {
    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={PorscheCay.img} alt={PorscheCay.name} className="card-img-top"/>
                    <div className="card-body">
                        <h4>{PorscheCay.name}</h4>
                        <span>{PorscheCay.price}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PorscheCayenneItem1;