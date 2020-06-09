import React from 'react'
import './custom-Buttom.scss'

const CustomButton=({children,isGoogleSignIn, ...otherProps})=>(
    <button className={`${isGoogleSignIn ? 'googlesignin':''} custom-button `} {...otherProps}>
        {children}
    </button>
)
export default CustomButton