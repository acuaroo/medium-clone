import Link from 'next/link'
import React from 'react'

function Title() {
    return (
        <div className="w-100 bg-yellow-500 border-y border-black">
            <div className="flex justify-between items-center bg-yellow-500 py-10 lg:py-0 max-w-7xl mx-auto">
                <div className="space-y-5 px-10">
                    <h1 className="max-w-xl font-serif text-7xl">
                        Stay curious.
                    </h1>

                    <h2 className="text-2xl">
                    Discover stories, thinking, and expertise<br/>
                    from writers on any topic.
                    </h2>
                    <h3 className="text-2xl w-60 text-white px-12 py-2 rounded-full bg-stone-900 cursor-pointer">Start reading</h3>

                </div>

                <img
                className="hidden h-32 md:inline-flex lg:h-full"
                src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
                alt=""
                />
            </div>
        </div>
    )
}

export default Title