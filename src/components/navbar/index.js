import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'
import Logo from '../../assets/logo.png'

export default function Navbar() {
    return (
        <Popover className="relative navbar-bg-gridiant">
            <div className="max-w-10xl bg-black mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center  py-1 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            {/* <span className="sr-only">Workflow</span> */}
                            <img
                                className="object-contain h-20 w-48"
                                src={Logo?.src}
                                alt="logo"
                            />
                        </a>
                    </div>
                    <div className='lg:w-2/5 mx-auto hidden md:block'>
                        <form method="GET">
                            <div className="relative text-gray-200 focus-within:text-gray-400 w-full">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </button>
                                </span>
                                <input type="search" name="search" className="py-2 text-lg text-white bg-zinc-900 rounded-md pl-14 focus:outline-none focus:bg-zinc-600 focus:text-white-900 w-full" placeholder="Lorem ipsum" autoComplete="off" />
                            </div>
                        </form>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-gradient-to-r from-purple-600 to-red-600 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white-500 :bg-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>

                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <a href="#" className="whitespace-nowrap pr-10 text-base font-medium text-white hover:text-red-900 font-bold">
                            Lorem 1
                        </a>
                        <a href="#" className="whitespace-nowrap pr-10 text-base font-medium text-white hover:text-red-900 font-bold">
                            Lorem 2
                        </a>
                        <a href="#" className="whitespace-nowrap pr-10 text-base font-medium text-white hover:text-red-900 font-bold">
                            Lorem 3
                        </a>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-zinc-900 divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="object-contain h-20 w-48"
                                        src={Logo?.src}
                                        alt="logo"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-gradient-to-r from-purple-600 to-red-600 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white-500 :bg-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    <a href="#" className="whitespace-nowrap pr-10 text-base font-medium text-gray-500 hover:text-red-900">
                                        Lorem 1
                                    </a>
                                    <a href="#" className="whitespace-nowrap pr-10 text-base font-medium text-gray-500 hover:text-red-900">
                                        Lorem 2
                                    </a>
                                    <a href="#" className="whitespace-nowrap pr-10 text-base font-medium text-gray-500 hover:text-red-900">
                                        Lorem 3
                                    </a>
                                </nav>
                            </div>
                        </div>

                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
