import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/outline';
import { DropDown } from './Dropdown';

export const SongPreferencesForm = () => {
  return (
    <div className="grid place-items-center mt-12">
      <form className="w-full max-w-sm ">
        <div className="w-full mb-6 grid place-items-center">
          <div className="md:w-full">
            <label
              className="font-sans text-[11px]  text-gray-900 dark:text-gray-300 z-50
bg-gray-50 relative px-1  top-2 left-3 w-auto group-focus-within:text-red-600 tracking-wider"
            >
              Spotify Song Link
            </label>

            <div className="flex items-center relative">
              <input
                className="w-full bg-white appearance-none border-2 border-gray-200 rounded-3xl py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-600"
                id="inline-full-name"
                type="text"
                placeholder="Enter the link to your favorite song"
              />
              <InformationCircleIcon
                width="25px"
                className="absolute right-4 hover:cursor-pointer"
                // gray-700
                color="#6b7280"
              />
            </div>
          </div>
        </div>

        <div className="md:flex md:items-center mb-3 pb-3 border-b-2 border-gray-200">
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <label className="block text-color-1 font-light md:text-left mb-1 md:mb-0 pr-4">
              I am
            </label>
          </div>
          <div className="md:w-2/3 flex justify-center md:justify-end">
            <DropDown
              name="activity"
              options={['Option 1', 'Option 2', 'Option 3']}
              color={'bg-color-1'}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <label className="block text-color-2 font-light md:text-left mb-1 md:mb-0 pr-4">
              at
            </label>
          </div>
          <div className="md:w-2/3 flex justify-center md:justify-end">
            <DropDown
              name="time of day"
              options={['Option 1', 'Option 2', 'Option 3']}
              color={'bg-color-2'}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <label
              className="block text-color-3 font-light md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              inspired by
            </label>
          </div>
          <div className="md:w-2/3 flex justify-center md:justify-end">
            <DropDown
              name="genre"
              options={['Option 1', 'Option 2', 'Option 3']}
              color={'bg-color-3'}
            />
          </div>
        </div>

        <div className="w-full pt-4">
          <button
            className="w-full shadow bg-emerald-900 hover:bg-emerald-800 focus:shadow-outline focus:outline-none text-white font-light tracking-widest py-2 px-4 rounded-3xl"
            type="button"
          >
            Show me the music!
          </button>
        </div>
      </form>
    </div>
  );
};
