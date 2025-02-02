import React from 'react'
import my_resume from "../assets/my_resume.pdf"
const Header = () => {
  return (
<nav class="bg-header_bg dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo"/>
      <span class="self-center text-2xl font-semibold whitespace-nowrap
      text-white dark:text-white">Arya <span className='self-center text-2xl font-semibold whitespace-nowrap
      text-red-500 dark:text-white'>- Verse</span></span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <a href={my_resume} download="resume"><button type="button" class="text-white bg-button_color hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Resume</button></a>
      
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="bg-header_bg items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 text-white text-xl font-medium border border-gray-100 rounded-lg 
    md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 
     dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="/" class="block py-2 px-3 hover:text-header_hover_color
        transition-colors duration-300  bg-blue-700 rounded-sm md:bg-transparent md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3rounded-sm hover:text-header_hover_color
        transition-colors duration-300  md:hover:bg-transparent  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Story</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 rounded-sm hover:text-header_hover_color
        transition-colors duration-300  md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Reach Me</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default Header