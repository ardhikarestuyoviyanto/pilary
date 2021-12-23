import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children } from 'react'


const ActiveLink = ({children, activeClassname, ...props})=>{
    const {asPath} = useRouter();
    const child = Children.only(children);
    const childClassname = child.props.className || '';
    
    const className = 
        asPath === props.href || asPath === props.as
        ? `${childClassname} ${activeClassname}`.trim()
        : childClassname

    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className: className || "border-b-4 border-blue-500"
            })}
        </Link>
    );

}

ActiveLink.prototype = {
    activeClassname: PropTypes.string.isRequired
}

export default ActiveLink;  