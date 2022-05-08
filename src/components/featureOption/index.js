import ListOfFeature from './listOfFeature'
import SelectedFeature from './selectedFeature'
import { useState } from 'react'

export default function FeatureOption() {
    const [selectedItem, setSelectedItem] = useState(demoData[0])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pb-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap -m-4 w-full">
                    <div className="p-2 lg:w-1/2 md:w-full sm:w-full">
                        <div className="flex rounded-lg sm:flex-row flex-col bg-zinc-900">
                            <div className="rounded-2xl p-2 w-full">
                                <SelectedFeature selectedItem={selectedItem} />
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/2 md:w-full sm:w-full">
                        <div className="flex rounded-lg sm:flex-row flex-col bg-zinc-900">
                            <div className="rounded-2xl p-2 w-full">
                                <ListOfFeature setSelectedItem={setSelectedItem} demoData={demoData} />
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
        title: 'Accessories & Ears',
        name: 'Lorem ipsum 1',
        perc: '9%',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        title: 'Arms',
        name: 'Lorem ipsum 2',
        perc: '15%',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        title: 'Accessories & Ears',
        name: 'Lorem ipsum 3',
        perc: '9%',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        title: 'Eye',
        name: 'Lorem ipsum 4',
        perc: '15%',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        title: 'Glasses',
        name: 'Lorem ipsum 5',
        perc: '9%',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        title: 'Mouth',
        name: 'Lorem ipsum 2',
        perc: '15%',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    }
]

