import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import Select from 'react-select'
import Dropzone from 'react-dropzone'

import { PostsContext } from '../../contexts/PostsContext';

import 'react-quill/dist/quill.snow.css';
import './Write.css'

function Write() {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [image, setImage] = useState(null);

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

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('tags', tags);
        formData.append('image', image);
        try {
            const newPost = await createNewPost(formData);
            console.log("Post created: ", newPost);
            navigate(`/posts/${newPost._id}`);
        } catch (error) {
            setError(error.message);
        }
    }

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

    // useEffect(() => {
    //     console.log('content: ', content)
    // }, [content])


    return (
        <main>
            <Dropzone onDrop={acceptedFiles => setImage(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div className='dropzone' {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>drop some image here, or click to select image</p>
                        </div>
                    </section>
                )}
            </Dropzone>
            <section className='write-content'>
                <div className="title">
                    <h2><label htmlFor="title">Title</label></h2>
                    <input
                        type="text"
                        className='title'
                        id='title'
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
                    <button type="submit" onClick={handleCreatePost}>Publish</button>
                </div>
            </section>
        </main>
    )
}

export default Write