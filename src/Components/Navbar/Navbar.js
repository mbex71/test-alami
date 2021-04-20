import { Menu } from '@headlessui/react'
import { ShoppingCartIcon, SearchIcon, MenuIcon} from '@heroicons/react/outline'
import InputText from 'Components/Form/InputText';
import { useState } from 'react';

import MenuDropdown from './MenuDropdown';

const Navbar = () => {

    const[show,setShow] = useState(false)

    return(
        <div className="bg-white shadow">
            <div className="w-full flex flex-col md:flex-row container mx-auto">
                {/* Menu Mobile  */}
                <div className="flex flex-row justify-between md:justify-start py-4 px-6 md:px-0 items-center w-full md:w-40">
                    <div className="text-gray-500">App Saya</div>
                    <div className="flex flex-row md:hidden">
                        <SearchIcon className="w-4 h-4 text-gray-500 mr-4"/>
                        <ShoppingCartIcon className="w-4 h-4 text-gray-500 mr-4"/>
                        <button type="button" onClick={()=>setShow(!show)} className="outline-none">
                            <MenuIcon className="w-4 h-4 text-gray-500"/>
                        </button>
                    </div>
                </div>
                <div className={`${show ? 'flex' : 'hidden md:flex'} flex-col md:flex-row items-center flex-grow`}>
                    <MenuDropdown title="Demos">
                        <Menu.Item>
                            {
                                ({active})=>(
                                    <a href="/" className="w-full text-sm px-6 py-4 hover:bg-gray-500 hover:text-white">Menu 10</a>
                                )
                            }
                        </Menu.Item>
                        <Menu.Item>
                            {
                                ({active})=>(
                                    <a href="/" className="w-full text-sm px-6 py-4 hover:bg-gray-500 hover:text-white">Menu 12</a>
                                )
                            }
                        </Menu.Item>
                    </MenuDropdown>
                    <MenuDropdown title="Pages">
                        <Menu.Item>
                            {
                                ({active})=>(
                                    <a href="/" className="w-full text-sm px-6 py-4 hover:bg-gray-500 hover:text-white">Menu 12</a>
                                )
                            }
                        </Menu.Item>
                        <Menu.Item>
                            {
                                ({active})=>(
                                    <a href="/" className="w-full text-sm px-6 py-4 hover:bg-gray-500 hover:text-white">Menu 12</a>
                                )
                            }
                        </Menu.Item>
                    </MenuDropdown>
                    <MenuDropdown title="Portofolio">
                        <Menu.Item>
                            {
                                ({active})=>(
                                    <a href="/" className="w-full text-sm px-6 py-4 hover:bg-gray-500 hover:text-white">Menu 12</a>
                                )
                            }
                        </Menu.Item>
                        <Menu.Item>
                            {
                                ({active})=>(
                                    <a href="/" className="w-full text-sm px-6 py-4 hover:bg-gray-500 hover:text-white">Menu 12</a>
                                )
                            }
                        </Menu.Item>
                    </MenuDropdown>
                    
                
                </div>
                <div className={`${show ? 'flex' : 'hidden md:flex'} flex-col md:flex-row w-full md:justify-end items-center`}>
                    <a href="/" className="h-full flex items-center py-4 md:py-0 px-6 md:px-4 mr-2 w-full md:w-auto">
                        <ShoppingCartIcon className="h-4 w-4 text-gray-500"/>
                    </a>
                    <a href="/" className="h-full flex items-center py-4 md:py-0 px-6 md:px-4 mr-2 w-full md:w-auto">
                        <SearchIcon className="h-4 w-4 text-gray-500"/>
                    </a>
                    <InputText placeholder="Search" 
                    className="border rounded text-sm px-4 py-2 outline-none focus:ring-1 focus:ring-gray-500 w-full md:w-auto" 
                    />
                </div>
                
                
            </div>
        </div>
    )
}

export default Navbar