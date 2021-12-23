import React from 'react';
import faker from 'faker';
import './PostDetail.scss';

export default function PostDetail({post_detail}){
    const {name} = post_detail;
    return (
        <div className="post_detail_container">
           <img src={faker.image.imageUrl()} alt="{faker.name.findName()}" />
           <div>
               <h3>{name} <span>Today a 6pm</span> </h3>
               <p>{faker.lorem.sentence()}</p>
           </div>
        </div>
    );
}
