import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import './Write.css'

function Write() {
    const [value, setValue] = useState('');
    return (
        <main>
            <section className='write-content'>
                <div className="title">
                    <input type="text" className='title' placeholder='Title' />
                </div>
                <ReactQuill theme="snow" value={value} onChange={setValue} />;
            </section>
            <section>

            </section>
        </main>
    )
}

export default Write