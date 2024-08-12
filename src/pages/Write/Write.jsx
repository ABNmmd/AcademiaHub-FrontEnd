import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import './Write.css'

function Write() {
    const [value, setValue] = useState('');
    return (
        <main>
            <section className='write-content'>
                <ReactQuill theme="snow" value={value} onChange={setValue} />;
            </section>
            <section>
                
            </section>
        </main>
    )
}

export default Write