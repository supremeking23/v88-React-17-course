import React from 'react';

import './LikeDetail.scss';

export default function LikeDetail(props){
    let {children} = props;
    return(
        <div className="like_details_container">
            {children}
            <button type="button">
                <i className="thumbs up outline icon"></i>253
            </button>
        </div>
    );
}
