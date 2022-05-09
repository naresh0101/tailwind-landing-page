import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'


export default function SelectedFeature({ selectedItem }) {
    return (
        <Disclosure as="div" className="mt-2">
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-white focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <div className='flex justify-start items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                            <span className='ml-1'>{selectedItem?.name} {selectedItem?.title}</span>
                        </div>
                        <ChevronUpIcon
                            className={`${open ? '' : 'rotate-180 transform'
                                } h-5 w-5 text-white-500`}
                        />
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-1000 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-1000 opacity-1000"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-1000 opacity-1000"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel className="p-4 text-sm text-white">
                            <div className='w-full sm:mr-10'>
                                <p>{selectedItem?.des}</p>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className='p-4 flex justify-start items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        <span className='ml-4 text-red-600'>
                                            Lorem ipsum.com
                                        </span>
                                    </div>
                                    <div className='p-4 flex justify-start items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        <span className='ml-4 text-red-600'>
                                            Lorem ipsum.com
                                        </span>
                                    </div>
                                    <div></div>
                                    <div className='p-4 flex justify-start items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        <span className='ml-4 text-red-600'>
                                            Lorem ipsum.com
                                        </span>
                                    </div>
                                    <div className='p-4 flex justify-start items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        <span className='ml-4 text-red-600'>
                                            Lorem ipsum.com
                                        </span>
                                    </div>

                                </div>
                            </div>

                        </Disclosure.Panel>
                    </Transition>

                </>
            )}
        </Disclosure>
    )
}

