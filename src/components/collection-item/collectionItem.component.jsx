import React from 'react';
import {connect} from 'react-redux'

import './collection-item.component.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.action';

const CollectionItem = ({items, addItem}) => (
    <div className='collection-item'>
        <div className='image'
            style={{
                background: `url(${items.imageUrl})`
            }}/>
        
        <div className='collection-footer'>
            <span className='name'>{items.name}</span>
            <span className='price'>{items.price}</span>
        </div>
        <CustomButton onClick={() =>addItem(items)} inverted>ADD TO CART</CustomButton>
    </div>
)

const mapDispatchToProps = dispact => ({
    addItem : item => dispact(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);