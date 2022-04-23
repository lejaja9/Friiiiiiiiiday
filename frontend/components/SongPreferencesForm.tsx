import React from 'react';
import Image from 'next/image';
import { useForm, Controller } from 'react-hook-form';
import { InformationCircleIcon } from '@heroicons/react/outline';
import { activities, genres, times } from '../data/formOptions';
import { Modal } from './Modal';
import { Listbox } from './Listbox';
import { Combobox } from './Combobox';

export const SongPreferencesForm = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div className="mt-12 grid place-items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <div className="mb-6 grid w-full place-items-center">
          <div className="md:w-full">
            <label
              className="relative top-2  left-3 z-50 w-auto
bg-gray-50 px-1 font-sans  text-[11px] tracking-wider text-gray-900 group-focus-within:text-red-600 dark:text-gray-300"
            >
              Spotify Song Link
            </label>

            <div className="relative flex items-center">
              <input
                className="w-full appearance-none rounded-3xl border-2 border-gray-200 bg-white py-2 pl-4 pr-10 leading-tight text-gray-700 focus:border-cyan-600 focus:bg-white focus:outline-none"
                id="inline-full-name"
                type="text"
                placeholder="Enter the link to your favorite song"
                {...register('spotifySongLink', { required: true })}
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
                    <p className="mb-4 text-lg font-medium leading-relaxed tracking-widest text-gray-600">
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

        <div className="mb-3 border-b-2 border-gray-100 pb-4 sm:flex sm:items-center">
          <div className="flex justify-center sm:w-1/3 sm:justify-start">
            <label className="mb-1 block pr-4 font-light text-color-1 sm:mb-0 sm:text-left">
              I am
            </label>
          </div>
          <div className="flex justify-center sm:w-2/3 sm:justify-end">
            <Controller
              name="activitiesbox"
              control={control}
              defaultValue={'activity'}
              render={({ field }) => (
                <Listbox options={activities} field={field} />
              )}
            />
          </div>
        </div>

        <div className="mb-3 border-b-2 border-gray-100 pb-4 sm:flex sm:items-center">
          <div className="flex justify-center sm:w-1/3 sm:justify-start">
            <label className="mb-1 block pr-4 font-light text-color-1 sm:mb-0 sm:text-left">
              at
            </label>
          </div>
          <div className="flex justify-center sm:w-2/3 sm:justify-end">
            <Controller
              name="timeOfDay"
              control={control}
              defaultValue={'time of day'}
              render={({ field }) => <Listbox options={times} field={field} />}
            />
          </div>
        </div>

        <div className="mb-6 sm:flex sm:items-center">
          <div className="flex justify-center sm:w-1/3 sm:justify-start">
            <label
              className="mb-1 block pr-4 font-light text-color-3 sm:mb-0 sm:text-left"
              htmlFor="inline-password"
            >
              inspired by
            </label>
          </div>
          <div className="flex justify-center sm:w-2/3 sm:justify-end">
            <Controller
              name="genre"
              control={control}
              defaultValue={'genre'}
              render={({ field }) => (
                <Combobox options={genres} field={field} />
              )}
            />
          </div>
        </div>

        <div className="w-full pt-4">
          <input
            type="submit"
            value="Show me the music!"
            className="focus:shadow-outline w-full rounded-3xl bg-emerald-900 py-2 px-4 font-light tracking-widest text-white shadow hover:bg-emerald-800 focus:outline-none"
          ></input>
        </div>
      </form>
    </div>
  );
};
