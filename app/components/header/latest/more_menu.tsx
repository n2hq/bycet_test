import { BiCopyright, BiHome, BiLock, BiSearch, BiWorld } from "react-icons/bi";
import { BsBook, BsFillBriefcaseFill, BsLock } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import { FaBlenderPhone, FaShoppingBag } from "react-icons/fa";
import { appConfig } from "~/lib/lib";

export const moremenu = [
    {
        title: `Bycet`,
        url: 'http://Bycet.com',
        icon: <BiWorld />
    },
    {
        title: " Index",
        url: '/',
        icon: <BiHome />
    },
    {
        title: "Search",
        url: `${appConfig.searchBaseUrl}`,
        icon: <BiSearch />
    },
    {
        title: "About",
        url: '/web/about',
        icon: <BsFillBriefcaseFill />
    },
    {
        title: "Contact",
        url: '/web/contact',
        icon: <CgPhone />
    },
    {
        title: "Terms of Use",
        url: "/web/terms",
        icon: <FaShoppingBag />
    },
    {
        "title": "Privacy",
        "url": "/web/privacy",
        icon: <BiLock />
    },
    {
        "title": "Responsible Disclosure",
        "url": "/web/responsible_disclosure",
        icon: <FaBlenderPhone />
    },
    {
        "title": "Copyright",
        "url": "/web/copyright",
        icon: <BiCopyright />
    },

]