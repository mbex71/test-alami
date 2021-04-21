import { Menu } from '@headlessui/react'
import { ShoppingCartIcon, SearchIcon, MenuIcon, UserIcon, ChatIcon, HeartIcon} from '@heroicons/react/outline'
import InputText from 'Components/Form/InputText';
import { useState } from 'react';

import MenuDropdown from './MenuDropdown';

const Navbar = () => {

    const[show,setShow] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    return(
        <div className="bg-white shadow">
            <div className="w-full flex flex-col md:flex-row container mx-auto">
                {/* Menu Mobile  */}
                <div className="flex flex-row justify-between md:justify-start py-4  px-6 md:px-0 items-center w-full md:w-40">
                    <div className="text-gray-500 hidden md:block">App Saya</div>
                    {
                        showSearch ? (
                            <InputText placeholder="Search" 
                                className="border rounded text-sm px-4 py-2 outline-none focus:ring-1 focus:ring-gray-500 w-full md:w-auto mr-4" 
                            />
                    ): (
                        <div className="text-gray-500 block md:hidden">App Saya</div>
                        )
                    }
                    <div className="flex flex-row md:hidden">
                        <button onClick={() => setShowSearch(!showSearch)} className={`outline-none p-2 flex justify-center items-center mr-2 focus:outline-none ${showSearch ? 'bg-gray-500': 'bg-white'} `}>
                            <SearchIcon className={`w-4 h-4 ${showSearch ? 'text-white' : 'text-gray-500'}`}/>
                        </button>
                        <button onClick={() => setShowSearch(!showSearch)} className='outline-none p-2 flex justify-center items-center mr-2 focus:outline-none bg-white '>
                        <ShoppingCartIcon className="w-4 h-4 text-gray-500"/>
                        </button>
                        <button type="button" onClick={()=>setShow(!show)} className={`outline-none p-2 flex justify-center items-center focus:outline-none ${show? 'bg-gray-500' : 'bg-white'}`}>
                            <MenuIcon className={`w-4 h-4 ${show ? 'text-white' : 'text-gray-500'}`}/>
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
                    
                    <a href="/" className="text-sm text-gray-500 w-full md:w-auto px-6 py-4 flex md:hidden ">
                        <HeartIcon className="w-4 h-4 text-gray-500 mr-2" />Favorite
                    </a>
                    <a href="/" className="text-sm text-gray-500 w-full md:w-auto px-6 py-4 flex md:hidden ">
                        <ChatIcon className="w-4 h-4 text-gray-500 mr-2" /> Message
                    </a>
                    <a href="/" className="text-sm text-gray-500 w-full md:w-auto px-6 py-4 flex md:hidden ">
                        <UserIcon className="w-4 h-4 text-gray-500 mr-2" /> Account
                    </a>
                
                </div>
                <div className="hidden md:flex flex-col md:flex-row w-full md:justify-end items-center">
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