import ListOfFeature from './listOfFeature'
import SelectedFeature from './selectedFeature'
import { useState } from 'react'

export default function FeatureOption() {
    const [selectedItem, setSelectedItem] = useState(demoData[0])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pb-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap -m-4 w-full">
                    <div className="p-2 lg:w-1/2 w-full w-full">
                        <div className="flex rounded sm:flex-row flex-col bg-zinc-900">
                            <div className="rounded-2xl p-2 w-full">
                                <SelectedFeature selectedItem={selectedItem} />
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/2 w-full w-full">
                        <div className="flex sm:flex-row flex-col">
                            <div className='w-full'>
                                {
                                    demoListData?.map((item, i) => {
                                        return (
                                            <div key={i} className="rounded mb-4 p-2 w-full bg-zinc-900">
                                                <ListOfFeature setSelectedItem={setSelectedItem} demoData={item} />
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const demoData = [
    {
        id: 1,
        title: 'Accessories & Ears',
        name: 'Lorem ipsum 1',
        perc: '9%',
        des: 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        id: 2,
        title: 'Arms',
        name: 'Lorem ipsum 2',
        perc: '15%',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscine magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        id: 3,
        title: 'Accessories & Ears',
        name: 'Lorem ipsum 3',
        perc: '9%',
        des: 'Lorem ipsum dolo ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        id: 4,
        title: 'Eye',
        name: 'Lorem ipsum 4',
        perc: '15%',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing ur. '
    },
    {
        id: 5,
        title: 'Glasses',
        name: 'Lorem ipsum 5',
        perc: '9%',
        des: 'Lorem ipsum dolor sit atempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        id: 6,
        title: 'Mouth',
        name: 'Lorem ipsum 2',
        perc: '15%',
        des: 'Lorem ised do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        id: 7,
        title: 'Mouth',
        name: 'Lorem ipsum 2',
        perc: '15%',
        des: 'Lorem ipsum dolor unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        id: 8,
        title: 'Mouth',
        name: 'Lorem ipsum 2',
        perc: '15%',
        des: 'Lorepor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        id: 9,
        title: 'Glasses',
        name: 'Lorem ipsum 5',
        perc: '9%',
        des: 'Lorem ipncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        id: 10,
        title: 'Mouth',
        name: 'Lorem ipsum 2',
        perc: '15%',
        des: 'Lorem ipsum dolor sit amet, consecre et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        id: 11,
        title: 'Mouth',
        name: 'Lorem ipsum 2',
        perc: '15%',
        des: 'Lorem ipsum dolor sitt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        id: 12,
        title: 'Mouth',
        name: 'Lorem ipsum 2',
        perc: '15%',
        des: 'Lorem ipsum dolor sit amet, consd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        id: 13,
        title: 'Mouth',
        name: 'Lorem ipsum 2',
        perc: '15%',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    }
]


const demoListData = [demoData, demoData]