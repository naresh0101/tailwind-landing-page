

export default function HomeHeroInto() {
    return (
        <section className="text-white body-font">
            <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-xl font-bold mb-2 font-medium text-white">Lorem ipsum</h1>
                    <p className="mb-2 leading-relaxed">Created by: <span className="ml-1 text-red-600">Lorem ipsum</span></p>
                    <p className="mb-8 leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>

                    <div className="flex justify-center">
                        <button className="bg-zinc-900 hover:bg-grey text-grey-darkest font-bold py-3 px-6 rounded inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            <span className="ml-1">Lorem ipsum</span>
                        </button>
                        <button className="bg-black mx-4 hover:bg-grey text-grey-darkest font-bold py-3 px-6 rounded inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                            <span className="ml-1">Lorem ipsum</span>
                        </button>
                        <button className="bg-zinc-900 hover:bg-grey text-grey-darkest font-bold py-3 px-6 rounded inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            <span className="ml-1">Lorem ipsum</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}
