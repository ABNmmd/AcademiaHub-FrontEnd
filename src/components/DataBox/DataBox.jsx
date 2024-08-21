import React from 'react'
import { useNavigate } from 'react-router-dom';
import moment from "moment";

import Tags from '../Tags/Tags'

import './DataBox.css'

function DataBox({ data, h1Class }) {
    const navigate = useNavigate();

    const handleTagClick = (tag) => {
        navigate(`/categories/${tag}`); // Navigate with query parameter
    };

    const authorUsername = data?.authorId?.username || 'Unknown Author';
    return (
        <div className="data-box">
            <div className="head">
                <Tags tags={data?.tags || []} selectedTags={[]} onTagClick={handleTagClick} />
                <h1 className={h1Class}><a href={`/posts/${data?._id}`}>{data?.title}</a></h1>
            </div>
            <div className="pos-info">
                <div className="author">
                    <img src="https://media.licdn.com/dms/image/D4D08AQE0CXu4hnoe7g/croft-frontend-shrinkToFit1024/0/1646754728586?e=2147483647&v=beta&t=ADkOVwOwmP-4rCH4y0g2_OBFlsszl01TpQPhCgt5SSc" alt="" />
                    <span><a href="">{authorUsername}</a></span>
                </div>
                <p>{moment(data?.createdAt).fromNow()}</p>
            </div>
        </div>
    );
}

export default DataBox