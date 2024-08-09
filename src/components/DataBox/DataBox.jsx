import React from 'react'

import Tags from '../Tags/Tags'

import './DataBox.css'

function DataBox({ data, h1Class })  {
    return (
        <div className="data-box">
            <div className="head">
                <Tags tags={data.tags} />
                <h1 className={h1Class}><a href="">{data.title}</a></h1>
            </div>
            <div className="pos-info">
                <div className="author">
                    <img src="https://media.licdn.com/dms/image/D4D08AQE0CXu4hnoe7g/croft-frontend-shrinkToFit1024/0/1646754728586?e=2147483647&v=beta&t=ADkOVwOwmP-4rCH4y0g2_OBFlsszl01TpQPhCgt5SSc" alt="" />
                    <span><a href="">{data.authorId}</a></span>
                </div>
                <p>{data.createdAt}</p>
            </div>
        </div>
    );
}

export default DataBox