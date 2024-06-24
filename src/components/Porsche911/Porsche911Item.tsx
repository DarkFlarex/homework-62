import {PropsPorsche911} from "../../types";

interface Props {
    porsche: PropsPorsche911;
}

const Porsche911Item: React.FC<Props> = ({ porsche }) => {
    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={porsche.img} alt={porsche.name} className="card-img-top" />
                    <div className="card-body">
                        <h4>{porsche.name}</h4>
                        <span>{porsche.price}: €</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Porsche911Item;
