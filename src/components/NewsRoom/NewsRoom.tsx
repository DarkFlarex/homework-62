import React from 'react';
import {News} from '../../types';
import NewsRoomItem from "./NewsRoomItem";


interface Props {
    newsItems: News[];
}

const NewsRoom: React.FC<Props> = ({ newsItems }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {newsItems.map((news) => (
                <NewsRoomItem key={news.id} news={news} />
            ))}
        </div>
    );
};

export default NewsRoom;
