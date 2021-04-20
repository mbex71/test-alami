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
                <div className="flex flex-row justify-between py-4 px-6 md:px-0 items-center xs:w-full">
                    <div>App Saya</div>
                    <div className="flex flex-row md:hidden">
                        <SearchIcon className="w-4 h-4 text-gray-500 mr-4"/>
                        <ShoppingCartIcon className="w-4 h-4 text-gray-500 mr-4"/>
                        <MenuIcon className="w-4 h-4 text-gray-500"/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center flex-grow">
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
                <div className="flex items-center">
                    <a href="/" className="h-full flex items-center px-4 mr-2">
                        <ShoppingCartIcon className="h-4 w-4 text-gray-500"/>
                    </a>
                    <a href="/" className="h-full flex items-center px-4 mr-2">
                        <SearchIcon className="h-4 w-4 text-gray-500"/>
                    </a>
                    <InputText />
                </div>
                
                
            </div>
        </div>
    )
}

export default Navbar