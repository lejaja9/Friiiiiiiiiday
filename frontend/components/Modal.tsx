import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
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
  return (
    <>
      {
        <div tabIndex={1} onClick={() => setShowModal(true)}>
          {button}
        </div>
      }

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  {headerText && (
                    <h3 className="text-2xl text-gray-600 font-semibold">
                      {headerText}
                    </h3>
                  )}
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span
                      className="bg-transparent h-6 w-6 text-2xl block focus:outline-2"
                      tabIndex={0}
                    >
                      <XIcon width={25} />
                    </span>
                  </button>
                </div>

                {/*body*/}
                <div className="relative p-6 flex-auto">{mainContent}</div>
                {/*footer*/}
                {footer && (
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
