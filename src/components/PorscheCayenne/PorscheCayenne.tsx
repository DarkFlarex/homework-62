import React from 'react';
import { PorscheCay } from '../../types';
import PorscheCayenneItem from "./PorscheCayenneItem";

interface Props {
    PorscheCay: PorscheCay[];
}

const PorscheCayenne: React.FC<Props> = ({ PorscheCay }) => {
    return (
        <main className="container-sm">
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                {PorscheCay.map((car) => (
                    <PorscheCayenneItem key={car.id} PorscheCay={car} />
                ))}
            </div>
        </main>
    );
};

export default PorscheCayenne;