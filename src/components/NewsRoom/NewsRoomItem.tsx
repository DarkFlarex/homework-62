import {News} from "../../types";

interface Props {
    news: News;
}

const NewsRoomItem: React.FC<Props> = ({ news }) => {
    return (
        <>
            <div className="col ">
                <div className="card h-100 ">
                    <img src={news.img} alt={news.title} className="card-img-top" />
                    <div className="card-body">
                        <h4 className="card-title">{news.title}</h4>
                        <span className="card-text">{news.text}</span>
                        <strong>{news.datetime}</strong>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsRoomItem;
