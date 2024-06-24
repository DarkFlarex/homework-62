import React from 'react';
import { Porsche } from '../../types';
import Porsche911Item from "./Porsche911Item";

interface Props {
    porsche: Porsche[];
}

const Porsche911: React.FC<Props> = ({ porsche }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {porsche.map((car) => (
                <Porsche911Item key={car.id} porsche={car} />
            ))}
        </div>
    );
};

export default Porsche911;
