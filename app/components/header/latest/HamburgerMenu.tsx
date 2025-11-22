import React, { useContext } from 'react'
import { CgMenu } from 'react-icons/cg'
import MainNavContext from '~/context/MainNavContext'
import MobileNav from '../MobileNav'
import MobileMenu from './MobileMenu'

const HamburgerMenu = () => {
    const mainMenuContext = useContext(MainNavContext)
    if (!mainMenuContext) { return null }
    const menuCtx = mainMenuContext

    return (
        <div>
            <div className={`z-[1000]`}>
                <MobileMenu openMenu={menuCtx.isOpen} closeNav={menuCtx.closeMenu} />
            </div>
            <div className={`text-2xl w-[32px] h-[32px] flex place-items-center place-content-center rounded-full hover:cursor-pointer bg-gray-100 hover:bg-gray-200`}
                onClick={() => menuCtx.showMenu()}
            >
                <CgMenu />
            </div>


        </div>
    )
}

export default HamburgerMenu
