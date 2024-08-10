import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import './Tags.css';

function Tags({ tags, onTagClick }) {
  return (
    <ul className="tags">
      {tags.map((tag, i) => (
        <li key={i}>
          <button className={selectedTags.includes(tag) ? 'a active' : 'a'} onClick={() => onTagClick(tag)}>
            {tag}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tags;
