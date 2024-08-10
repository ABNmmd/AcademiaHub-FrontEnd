import React from 'react'

import Tags from '../Tags/Tags';

import './CategoriesFilter.css'

function CategoriesFilter() {
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
    return (
        <section className='categories-filter'>
            <Tags tags={tags} />
        </section>
    )
}

export default CategoriesFilter