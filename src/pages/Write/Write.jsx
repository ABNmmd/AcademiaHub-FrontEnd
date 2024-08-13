import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import Select from 'react-select'

import { PostsContext } from '../../contexts/PostsContext';

import 'react-quill/dist/quill.snow.css';
import './Write.css'

function Write() {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const navigate = useNavigate();
    const { createNewPost } = useContext(PostsContext);

    const options = [
        { value: 'Lifestyle', label: 'Lifestyle' },
        { value: 'Technology', label: 'Technology' },
        { value: 'Travel', label: 'Travel' },
        { value: 'Food', label: 'Food' },
        { value: 'Business', label: 'Business' },
        { value: 'Personal Development', label: 'Personal Development' },
        { value: 'Hobbies', label: 'Hobbies' },
        { value: 'Education', label: 'Education' },
    ];

    const handleCreatePost = async (e) => {
        e.preventDefault();
        try {
            console.log({ title, content, tags });
            const newPost = await createNewPost({ title, content, tags });
            console.log(newPost);
            // navigate(`/posts/${newPost._id}`);
        } catch (error) {
            setError(error.message);
        }
    }

    const handleTags = (t) => {
        const tagsArr = [];
        t.forEach((v) => tagsArr.push(v.value));
        setTags(tagsArr);
        console.log('tags arr',tagsArr);
    }

    const handleTitle = (e) => {
        console.log('title',e.target.value);
        setTitle(e.target.value);
    }


    return (
        <main>
            <section className='write-content'>
                <div className="title">
                    <input
                        type="text"
                        className='title'
                        placeholder='Title'
                        onChange={handleTitle}
                    />
                </div>
                <ReactQuill theme="snow" value={content} onChange={setContent} />
                <div className="tags">
                    <h2>Tags</h2>
                    <Select
                        options={options}
                        defaultValue={[]}
                        isMulti
                        name="tags"
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={handleTags}
                    />
                </div>

                <div className="buttons">
                    <button type="submit" onClick={handleCreatePost}>Publish</button>
                </div>
            </section>
        </main>
    )
}

export default Write