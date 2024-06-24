import React from 'react';
import Porsche911Item from "./Porsche911Item";
import {PropsPorsche911} from "../../types";

interface Props {
    porsche911: PropsPorsche911[];
}

const Porsche911: React.FC<Props> = ({ porsche911 }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {porsche911.map((car) => (
                <Porsche911Item key={car.id} porsche={car} />
            ))}
        </div>
    );
};

export default Porsche911;
