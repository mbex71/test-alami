import {Fragment} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const MenuDropdown = ({children, title}) => {
    return (
        <Menu as="div" className="relative inline-block text-left w-full md:w-auto">
            {
                ({open})=>(
                    <>
                        <div>
                            <Menu.Button className="flex h-full items-center w-full px-6 md:px-4 py-4 md:py-2 text-sm font-medium text-gray-500 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                {title}
                                <ChevronDownIcon className="w-4 h-4 ml-2 text-violet-200 hover:text-violet-100" aria-hidden="true"/>
                            </Menu.Button>
                        </div>
                        <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            >
                            <Menu.Items className="md:absolute md:left-0 w-full md:w-56 md:origin-top-left bg-white md:divide-y md:divide-gray-100 md:shadow-lg md:ring-1 md:ring-black md:ring-opacity-5 focus:outline-none">
                                <div className="w-full flex flex-col">
                                    {children}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                )
            }
        </Menu>
        
    )
}

export default MenuDropdown;