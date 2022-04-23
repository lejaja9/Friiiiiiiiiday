import { Fragment, SetStateAction, useState } from 'react';
import { Combobox as HuiCombobox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

interface ListboxProps {
  options: string[];
  field: ControllerRenderProps<FieldValues, any>;
  color?: string;
}

export const Combobox: React.FC<ListboxProps> = ({ options, field }) => {
  const [query, setQuery] = useState('');
  const { onChange, value } = field;

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          option
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        );
  return (
    <div className="w-36">
      <HuiCombobox value={value} onChange={onChange}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <HuiCombobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(option: string) => value}
              onChange={(event: {
                target: { value: SetStateAction<string> };
              }) => setQuery(event.target.value)}
            />
            <HuiCombobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </HuiCombobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <HuiCombobox.Options
              className={
                true
                  ? 'absolute z-50 mt-1  max-h-40 w-56 overflow-auto rounded-md bg-white  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5  focus:outline-none  sm:text-sm'
                  : 'absolute -top-2 right-0 z-50 max-h-40 w-56 origin-top-right -translate-y-full transform divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm'
              }
            >
              {filteredOptions.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredOptions.map((person, idx) => (
                  <HuiCombobox.Option
                    key={idx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-slate-100 text-slate-900' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {person}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </HuiCombobox.Option>
                ))
              )}
            </HuiCombobox.Options>
          </Transition>
        </div>
      </HuiCombobox>
    </div>
  );
};
