import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="w-100 bg-yellow-500">
      <header className="flex justify-between p-5 max-w-7xl mx-auto bg-yellow-500">
          <div className="flex items-center space-x-5">
              <Link href="/">
                  <img 
                  className="w-44 object-contain cursor-pointer" 
                  src="https://links.papareact.com/yvf" 
                  alt="Medium Logo" 
                  />
              </Link>
          </div>
          <div className="flex itmes-center space-x-5 text-black cursor-pointer">
              
                <h3 className="py-2 hidden md:inline-flex">Our story</h3>
                <h3 className="py-2 hidden md:inline-flex">Membership</h3>
                <h3 className="py-2 hidden sm:inline-flex">Write</h3>
                <h3 className="py-2">Sign In</h3>
              
              <h3 className="text-white px-4 py-2 rounded-full bg-stone-900">Get Started</h3>
          </div>
      </header>
    </div>
    
  )
}

export default Header