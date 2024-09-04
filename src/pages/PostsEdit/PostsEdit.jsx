import React, { useContext, useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import Select from 'react-select'
import Dropzone from 'react-dropzone'

import { useNavigate, useParams } from 'react-router-dom';
import { PostsContext } from '../../contexts/PostsContext';

import './PostsEdit.css'

function PostsEdit() {
    const { postId } = useParams();
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const { getOnePost, updateOldPost } = useContext(PostsContext);
    const navigate = useNavigate();
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
                setTitle(postData.title);
                setContent(postData.content || '');
                setTags(postData.tags);
                setImage(postData.image.imageUrl);
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

        const formData = new FormData();
        if (!title) {
            setError('Messing title');
            return;
        }
        formData.append('title', title);
        if (!content) {
            setError('Messing content');
            return;
        }
        formData.append('content', content);
        if (!tags) {
            setError('Messing tags');
            return;
        }
        formData.append('tags', tags);
        if (!image) {
            setError('Messing image');
            return;
        }
        formData.append('image', image);
        try {
            const updatedPost = await updateOldPost(postId, formData);
            // console.log("updated post: ", updatedPost);
            navigate(`/posts/${updatedPost._id}`);
        } catch (error) {
            setError(error.message);
        }
    }

    const handleCancelUpdate = () => {
        navigate(`/posts/${postId}`);
    }

    const defTags = tags.map(tag => ({ value: tag, label: tag }));
    return (
        <main>
            <Dropzone onDrop={acceptedFiles => setImage(acceptedFiles[0])}>
                {({ getRootProps, getInputProps }) => (
                    <section className='dropzone-container'>
                        <img src={image} alt="" />
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
                {error && <p className='error'>{error}</p>}
                <div className="buttons">
                    <button type="submit" onClick={handleUpdatePost}>Update</button>
                    <button type="submit" onClick={handleCancelUpdate}>Cancel</button>
                </div>
            </section>
        </main>
    )
}

export default PostsEdit