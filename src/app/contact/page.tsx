'use client'
import { BackgroundBeamsWithCollision } from '@/src/components/ui/background-beams-with-collision'
import React, { FormEvent, useState } from 'react'

function Page() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted', { email, message })
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
            {/* Background beams, positioned absolutely so it stays in the background */}
            <BackgroundBeamsWithCollision className="absolute top-0 left-0 w-full h-full z-0">
                {/* Optional empty div as children */}
                <div></div>
            </BackgroundBeamsWithCollision>

            {/* Main content */}
            <div className="relative z-10 max-w-2xl mx-auto p-4 mt-6">
                <h1 className="text-center text-white text-7xl mb-6 font-bold">Contact Us</h1>

                <p className="text-center text-lg text-gray-500">
                    We&apos;re here to help with any questions about our courses, programs, or events.
                    Reach out and let us know how we can assist you in your musical journey.
                </p>
            </div>

            <div className="relative z-10 mt-10 space-y-4 mx-auto max-w-5xl">
                <form onSubmit={handleSubmit} className='flex justify-center flex-col items-center'>
                    <input 
                        type='email'
                        placeholder='Enter Your Email'
                        onChange={(e) => setEmail(e.target.value)}
                        className='rounded-lg border border-neutral-800 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 focus:border-teal-400 focus:outline-none'
                    />
                    <textarea
                        rows={10}
                        onChange={(e) => setMessage(e.target.value)}
                        className='rounded-lg border border-neutral-800 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 mt-10 focus:border-teal-400 focus:outline-none'
                        placeholder='Enter Your Message'
                    />
                    <div className='mt-10'>
                    <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                      Submit Response
                      </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Page;
