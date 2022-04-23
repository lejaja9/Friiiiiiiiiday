import { Fragment } from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { Listbox as HeadlessListbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

interface ListboxProps {
  options: string[];
  field: ControllerRenderProps<FieldValues, any>;
  color?: string;
}

export const Listbox: React.FC<ListboxProps> = ({ options, field }) => {
  const { onChange, value } = field;

  return (
    <div className="w-36">
      <HeadlessListbox value={value} onChange={onChange}>
        <div className="relative mt-1">
          <HeadlessListbox.Button className="relative  w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md hover:bg-slate-100 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{value}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </HeadlessListbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* absolute -top-2 right-0 max-h-40 w-56 origin-top-right -translate-y-full transform divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm */}
            {/* absolute mt-1  max-h-40 w-full overflow-auto rounded-md bg-white  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5  focus:outline-none  sm:text-sm */}
            <HeadlessListbox.Options
              className={
                true
                  ? 'absolute z-50 mt-1  max-h-40 w-56 overflow-auto rounded-md bg-white  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5  focus:outline-none  sm:text-sm'
                  : 'absolute -top-2 right-0 z-50 max-h-40 w-56 origin-top-right -translate-y-full transform divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm'
              }
            >
              {options.map((option, optionIdx) => (
                <HeadlessListbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-slate-100 text-slate-900' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </HeadlessListbox.Option>
              ))}
            </HeadlessListbox.Options>
          </Transition>
        </div>
      </HeadlessListbox>
    </div>
  );
};
