import './Tags.css'

function Tags({ tags }) {
    return (
        <ul className="tags">
            {tags.map((tag, i) => (
                <li key={i}>
                    <a href="">{tag}</a>
                </li>
            ))}
        </ul>
    );
}

export default Tags