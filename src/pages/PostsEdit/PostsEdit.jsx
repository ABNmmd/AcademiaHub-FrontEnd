import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import './PostsEdit.css'

function PostsEdit() {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const { getOnePost } = useContext(PostsContext);
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
                console.log('post :', postData);
                setPost(postData);
            } catch (error) {
                console.log(`Error fitshing post with id: ${postId}`, error);
            }
        };
        getPostData();
    },[]);

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

    return (
        <main>
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
                    <button type="submit" onClick={handleUpdatePost}>Update</button>
                    <button type="submit" onClick={handleCancelUpdate}>Cancel</button>
                </div>
            </section>
        </main>
    )
}

export default PostsEdit