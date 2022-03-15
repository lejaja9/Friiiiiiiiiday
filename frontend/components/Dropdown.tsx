import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

interface DropdownProps {
  name: string;
  options: string[];
  color?: string;
}

export const DropDown: React.FC<DropdownProps> = ({ options, name, color }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Menu as="div" className="relative inline-block text-left w-36">
      <div>
        <Menu.Button
          className={clsx(
            'inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500',
            `${color}`,
          )}
        >
          {selected ?? name}
          <ChevronDownIcon
            className="-mr-1 ml-2 h-5 w-5 absolute right-3"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((dropDownOption) => (
              <Menu.Item key={`${dropDownOption}`}>
                {({ active }) => (
                  <a
                    href="#"
                    // className={clsx(
                    //   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    //   'block px-4 py-2 text-sm',
                    // )}
                    className={clsx(
                      active ? `${color} text-white` : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                    onClick={(e) => setSelected(e.currentTarget.textContent)}
                  >
                    {dropDownOption}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
