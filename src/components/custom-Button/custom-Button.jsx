import React from 'react'
import './custom-Buttom.scss'

const CustomButton=({children,isGoogleSignIn,inverted, ...otherProps})=>(
    <button className={`${inverted ? 'inverted':''} ${isGoogleSignIn ? 'googlesignin':''} custom-button `} {...otherProps}>
        {children}
    </button>
)
export default CustomButton