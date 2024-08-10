import React from 'react'

import Tags from '../Tags/Tags';

import './CategoriesFilter.css'

function CategoriesFilter({ selectedTags, onTagClick }) {
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
            <Tags tags={tags} selectedTags={selectedTags} onTagClick={onTagClick} />
        </section>
    )
}

export default CategoriesFilter