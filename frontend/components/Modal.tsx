import React, { Fragment, useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import ClickAwayListener from 'react-click-away-listener';
import { Dialog, Transition } from '@headlessui/react';
interface ModalProps {
  mainContent?: JSX.Element;
  headerText?: string;
  button: JSX.Element;
  footer?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  mainContent,
  headerText,
  button,
  footer,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {
        <div tabIndex={1} onClick={openModal}>
          {button}
        </div>
      }
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid pb-3">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-semibold text-gray-600"
                    >
                      {headerText}
                    </Dialog.Title>
                    <button
                      className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none outline-none"
                      onClick={closeModal}
                    >
                      <span
                        className="block h-6 w-6 bg-transparent text-2xl focus:outline-2"
                        tabIndex={0}
                      >
                        <XIcon width={25} />
                      </span>
                    </button>
                  </div>
                  <div className="mt-2">{mainContent}</div>

                  {footer && (
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

//
