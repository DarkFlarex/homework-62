import React from 'react';
import Porsche911 from "../../components/Porsche911/Porsche911";
import {Porsche} from "../../types";


interface Props {
    porsche:Porsche[];
}

const Home:React.FC<Props> = ({porsche}) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {porsche.map((car) => (
                <Porsche911 key={car.id} porsche={car}/>
            ))}
        </div>
    );
};

export default Home;