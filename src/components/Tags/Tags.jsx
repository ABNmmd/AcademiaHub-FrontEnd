import { useLocation, useNavigate } from 'react-router-dom';
import useLocalStorage from "use-local-storage";

import './Tags.css'

function Tags({ tags }) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleTags = (tag) => {
        const newSelectedTags = [...localStorage.getItem('selectedTags')];
        if (newSelectedTags.includes(tag)) {
            const index = newSelectedTags.indexOf(tag);
            newSelectedTags.splice(index, 1);
        } else {
            newSelectedTags.push(tag);
        }
        localStorage.setItem('selectedTags', newSelectedTags);

        if (location.pathname !== '/categories') {
            navigate('/categories');
        }
    }

    return (
        <ul className="tags">
            {tags.map((tag, i) => (
                <li key={i}>
                    <button className={selectedTags.includes(tag) ? 'active' : ''} onClick={() => handleTags(tag)}>{tag}</button>
                </li>
            ))}
        </ul>
    );
}

export default Tags