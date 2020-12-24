import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavListItem = ({ href, children }) => {
    const router = useRouter()

    let className = children.props.className || ''
    // let current = children.props.className || ''
    // if (router.pathname === href) {
    //     className = `current`
    // }

    return (<li className={router.pathname === href ? 'current': ''}><Link href={href}>{React.cloneElement(children, { className })}</Link></li>)
}

export default NavListItem;