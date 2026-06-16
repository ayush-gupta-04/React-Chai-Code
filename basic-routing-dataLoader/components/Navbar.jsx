import { Link , NavLink} from "react-router-dom"


export default function Navbar(){
    return(
        <div className="w-screen flex flex-row justify-center items-center border-b-2 border-gray-300">
            <NavLink 
                to={'/'} 
                className={({isActive}) => {
                    return `${isActive ? 'text-red-400' : 'text-black'} p-5`
                }}
            >Home</NavLink>

            <NavLink 
                to = {'/dashboard'}
                className={({isActive}) => {
                    return `${isActive ? 'text-red-400' : 'text-black'} p-4`
                }}
            >Dashboard</NavLink>

            <NavLink 
                to = {'/about-us'}
                className={({isActive}) => {
                    return `${isActive ? 'text-red-400' : 'text-black'} p-4`
                }}
            >Aboutus</NavLink>

            <NavLink 
                to = {'/product/1'}
                className={({isActive}) => {
                    return `${isActive ? 'text-red-400' : 'text-black'} p-4`
                }}
            >Product</NavLink>
        </div>
    )
}