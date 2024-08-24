import React from 'react'

import './PostsEdit.css'

function PostsEdit() {
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
                    <button type="submit" onClick={handleCreatePost}>Publish</button>
                </div>
            </section>
        </main>
    )
}

export default PostsEdit