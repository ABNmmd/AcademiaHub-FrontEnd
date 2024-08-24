import React, { useContext, useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import Select from 'react-select'
import { useParams } from 'react-router-dom';
import { PostsContext } from '../../contexts/PostsContext';

import './PostsEdit.css'

function PostsEdit() {
    const { postId } = useParams();
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [post, setPost] = useState({});
    const { getOnePost, updateOldPost } = useContext(PostsContext);
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

    useEffect(() => {
        const getPostData = async () => {
            try {
                const postData = await getOnePost(postId);
                // console.log('post :', postData);
                setPost(postData);
                setTitle(postData.title);
                setContent(postData.content || '');
                setTags(postData.tags);
            } catch (error) {
                console.log(`Error fitshing post with id: ${postId}`, error);
            }
        };
        getPostData();
    }, []);

    const handleTags = (t) => {
        const tagsArr = [];
        t.forEach((v) => tagsArr.push(v.value));
        setTags(tagsArr);
        console.log('tags arr', tagsArr);
    }

    const handleTitle = (e) => {
        console.log('title', e.target.value);
        setTitle(e.target.value);
    }

    const handleUpdatePost = async (e) => {
        e.preventDefault();
        try {
            const updatedPost = await updateOldPost({ title, content, tags });
            console.log("updated created: ", updatedPost);
            navigate(`/posts/${updatedPost._id}`);
        } catch (error) {
            setError(error.message);
        }
    }

    const defTags = tags.map(tag => ({ value: tag, label: tag }));
    return (
        <main>
            <section className='write-content'>
                <div className="title">
                    <h2><label htmlFor="title">Title</label></h2>
                    <input
                        type="text"
                        className='title'
                        id='title'
                        value={title}
                        onChange={handleTitle}
                    />
                </div>
                <div className="content">
                    <h2>Content</h2>
                    <ReactQuill theme="snow" value={content} onChange={setContent} />
                </div>
                <div className="tags">
                    <h2>Tags</h2>
                    <Select
                        value={defTags}
                        options={options}
                        defaultValue={[]}
                        isMulti
                        name="tags"
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={handleTags}
                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: 'var(--border)',
                                backgroundColor: 'var(--background)',
                            }),
                        }}
                    />
                </div>

                <div className="buttons">
                    <button type="submit" onClick={handleUpdatePost}>Update</button>
                    {/* <button type="submit" onClick={handleCancelUpdate}>Cancel</button> */}
                </div>
            </section>
        </main>
    )
}

export default PostsEdit