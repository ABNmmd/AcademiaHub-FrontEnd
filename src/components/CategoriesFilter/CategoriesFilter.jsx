import React from 'react'

import Tags from '../Tags/Tags';

import './CategoriesFilter.css'

function CategoriesFilter({ selectedTags, setSelectedTags, onTagClick }) {
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
            <button className={`reset-btn ${selectedTags.length == 0 ? 'active' : ''}`} onClick={() => setSelectedTags([])}>All</button>
            <Tags tags={tags} selectedTags={selectedTags} onTagClick={onTagClick} />
        </section>
    )
}

export default CategoriesFilter