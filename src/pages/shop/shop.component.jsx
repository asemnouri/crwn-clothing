import React from 'react';

import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/preview-collection.component/preview-collection.component';


class ShopPage extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            collections : SHOP_DATA
        }

    }
    render(){
        const collections = this.state.collections.map((shopdata,index) =>{
            return <CollectionPreview key={index} shopdata={shopdata}/>
        })
        
        return(
            <div>
                {collections}
            </div>
        )
    }

}

export default ShopPage