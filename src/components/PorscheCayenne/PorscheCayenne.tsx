import React from 'react';
import { Porsche } from '../../types';
import PorscheCayenneItem from "./PorscheCayenneItem";


interface Props {
    porsche: Porsche[];
}

const PorscheCayenne: React.FC<Props> = ({ porsche }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {porsche.map((car) => (
                <PorscheCayenneItem key={car.id} porsche={car} />
            ))}
        </div>
    );
};

export default PorscheCayenne;