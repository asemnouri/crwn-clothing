import React from 'react';

import './preview-collection.component.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({shopdata}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{shopdata.title.toUpperCase()}</h1>
            <div className='preview'>
                {shopdata.items
                .filter((item,idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} items={item}/>
                ))}
            </div>
        </div>
    )
}
    


export default CollectionPreview;