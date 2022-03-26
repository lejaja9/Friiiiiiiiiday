import React from 'react';
import Image from 'next/image';
import { InformationCircleIcon } from '@heroicons/react/outline';
import { DropDown } from './Dropdown';
import { Modal } from './Modal';

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
                className="w-full bg-white appearance-none border-2 border-gray-200 rounded-3xl py-2 pl-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-600"
                id="inline-full-name"
                type="text"
                placeholder="Enter the link to your favorite song"
              />

              <Modal
                headerText={'Getting a Spotify song link'}
                button={
                  <InformationCircleIcon
                    width="25px"
                    className="absolute right-4 bottom-2 hover:cursor-pointer"
                    color="#6b7280"
                    tabIndex={1}
                  />
                }
                mainContent={
                  <>
                    <p className="mb-4 text-gray-600 text-lg font-medium tracking-widest leading-relaxed">
                      <ul>
                        <li>Open Spotify</li>
                        <li>Find a song on Spotify</li>
                        <li>
                          Right click {'>'} Share {'>'} Copy Song Link
                        </li>
                      </ul>
                    </p>
                    <Image
                      src="https://lh3.googleusercontent.com/lWLAwhHpkzq3ypKzfnq45otZ8f7pzUyjfYluCX3BxA868_P8WPEjzlPiASgxulrsJnjffcMNBOK3aXRIjKoArNzX_2xYgcEmJ0vpPKzQalF5LP9loafYoPKVWvOWkAbUipDzP46vQJjv3VEz4fXYiz-O2B58ahnPPwQyO5Yp2dNdCslNSBrrAd7SCsGFVkES_9_cJzxSQsuXlyA_Z3Y7HyclZkM4Zju-kmvMlCRQaHmhzw2fAk1FxzESnzwr2yoXuZYRhPJGkDQbJoucAqhqy-G0lfYRrIkRPm18Lj8StBEYlglfzh_7wVApS0ldHGsWO8DMsqrxztiGH4L5HMSZ2pWKFX8aePm8zKwaBQYyk4r2qciIs61sY6TK1So9yubb3fggFtxw8-4XmZlWgORJgtdW8s1_0A_5QX4LjOLG9Cpvdbzrj8MWKRi46V6MW0DHhkMx-zAbHHYVvQ8eLq3uHkfeu5weKaqOcdFWGDhUIY47k1zCi2OBydsgurHqTW2hJcNScZEFBe4eVJpVnyB1dr9muYLgAF-YFEsj0boKsXO01-VSqEDjZYiHUBY2qIk8oEC-wgGgEljnpFMkYOF-W7uatUEfRO7a8UNsq6rigOd-HBy8nEWW8A8Yi0TbqNhlTTLMbHTM_uwQdYVCK65GbfIzAMsqz8OAgT_EdLqU3aaDppWCrMVEbfZ6zHsP8v2ePZoJ9wHWcfTnPAjlY2gZGlGXX9uGsDpHS7RBemWQNACF1JMSfnxmGxBfpdhW=w1549-h1304-no?authuser=0"
                      width={400}
                      height={350}
                      alt="Right click a song on Spotify, then click 'Share',
                      then click 'Copy Song Link'"
                    />
                  </>
                }
              />
            </div>
          </div>
        </div>

        <div className="sm:flex sm:items-center mb-3 pb-4 border-b-2 border-gray-100">
          <div className="sm:w-1/3 flex justify-center sm:justify-start">
            <label className="block text-color-1 font-light sm:text-left mb-1 sm:mb-0 pr-4">
              I am
            </label>
          </div>
          <div className="sm:w-2/3 flex justify-center sm:justify-end">
            <DropDown
              name="activity"
              options={['Option 1', 'Option 2', 'Option 3']}
              color={'bg-color-1'}
            />
          </div>
        </div>

        <div className="sm:flex sm:items-center mb-3 pb-4 border-b-2 border-gray-100">
          <div className="sm:w-1/3 flex justify-center sm:justify-start">
            <label className="block text-color-2 font-light sm:text-left mb-1 sm:mb-0 pr-4">
              at
            </label>
          </div>
          <div className="sm:w-2/3 flex justify-center sm:justify-end">
            <DropDown
              name="time of day"
              options={['Option 1', 'Option 2', 'Option 3']}
              color={'bg-color-2'}
            />
          </div>
        </div>

        <div className="sm:flex sm:items-center mb-6">
          <div className="sm:w-1/3 flex justify-center sm:justify-start">
            <label
              className="block text-color-3 font-light sm:text-left mb-1 sm:mb-0 pr-4"
              htmlFor="inline-password"
            >
              inspired by
            </label>
          </div>
          <div className="sm:w-2/3 flex justify-center sm:justify-end">
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
