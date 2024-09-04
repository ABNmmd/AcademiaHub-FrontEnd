import React from 'react'
import { useNavigate } from 'react-router-dom';
import moment from "moment";

import Tags from '../Tags/Tags'

import './DataBox.css'
import profile from '../../assets/download.png'

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
                    <img src={data?.authorId?.profilePicture?.imageUrl || profile} alt="" />
                    <span><a href={`/profile/${data?.authorId?._id}`}>{authorUsername}</a></span>
                </div>
                <p>{moment(data?.createdAt).fromNow()}</p>
            </div>
        </div>
    );
}

export default DataBox