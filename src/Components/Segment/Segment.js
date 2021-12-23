import React from 'react';

export default function Segment({segment}) {
    let {id, message} = segment;
    return (
        <div className="ui placeholder segment">
            <div className="ui icon header">
                <i className="pdf file outline icon"></i>
                {message}
            </div>
        </div>
    );
}
