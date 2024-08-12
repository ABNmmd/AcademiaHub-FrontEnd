import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import Select from 'react-select'

import 'react-quill/dist/quill.snow.css';
import './Write.css'

function Write() {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [selectedtags, setSelectedTags] = useState([]);

    const tags = [
        "Lifestyle",
        "Technology",
        "Travel",
        "Food",
        "Business",
        "Personal Development",
        "Hobbies",
        "Education"
    ];
    const options = [
        { value: 'Lifestyle', label: 'Lifestyle' },
    ]

    return (
        <main>
            <section className='write-content'>
                <div className="title">
                    <input
                        type="text"
                        className='title'
                        placeholder='Title'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <ReactQuill theme="snow" value={value} onChange={setValue} />
            </section>
            <section>
                <h2>Tags</h2>
                <Select
                    options={options}
                    defaultValue={[]}
                    isMulti
                    name="tags"
                    className="basic-multi-select"
                    classNamePrefix="select" />
            </section>
        </main>
    )
}

export default Write