import React from 'react';
import {Porsche} from "../../types";

interface Props {
    porsche:Porsche;
}

const PorscheCayenneItem1:React.FC<Props> = ({porsche}) => {
    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={porsche.img} alt={porsche.name} className="card-img-top"/>
                    <div className="card-body">
                        <h4>{porsche.name}</h4>
                        <span>{porsche.price}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PorscheCayenneItem1;