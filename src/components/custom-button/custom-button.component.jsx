import React from 'react';

import './directory.styles.scss'

import sections from '../../section';
import MenuItem from '../menu-item/menu-item.component';


class Directory extends React.Component {
    constructor(){
      super()
      this.state ={}
    }

    render() {
        const Sections = sections.map((section, id) => {
            return <MenuItem key={id} section={section} />
        })
        return (
            <div className='directory-menu'>
                {Sections}
            </div>
        )

    }
}

export default Directory;