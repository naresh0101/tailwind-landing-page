import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'


export default function ListOfFeature(props) {
    let { demoData, setSelectedItem } = props
    return (
        <Disclosure as="div" className="mt-2">
            {({ open }) => (
                <>
                    <Disclosure.Button className="w-full flex justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-white focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <div className='flex justify-start items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                            <span className='ml-1'>List of features</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
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
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                            <div className='w-full overflow-auto h-64 sm:pr-4'>
                                <div className="grid grid-cols-3 gap-4">
                                    {
                                        demoData?.map((item, i) => {
                                            return (
                                                <button onClick={() => { setSelectedItem(item) }} key={i} className='rounded bg-black hover:text-white-500 :bg-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500'>
                                                    <div className="p-3 text-center">
                                                        <p className='text-gray-500'><small>{item?.title}</small></p>
                                                        <h2 className='text-whitte font-bold'>{item?.name}</h2>
                                                        <p className='text-gray-500'><small>{item?.perc}</small></p>
                                                    </div>
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </Disclosure.Panel>
                    </Transition>


                </>
            )}
        </Disclosure>
    )
}

