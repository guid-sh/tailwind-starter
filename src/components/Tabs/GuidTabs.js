import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import GuidLanguageSelector from "./GuidLanguageSelector";

const activeTab = 'py-4 bg-white rounded-t-lg firstTab text-2xl w-2/3 text-center font-bold';
const inactiveTab = 'py-4 text-gray-500 bg-gray-200 text-2xl w-2/3 text-center font-bold';

const GuidTabs = () => {

    const [tabIndex, setTabIndex] = useState(1);

    return (
        <div className="container mx-auto m-8 w-1/2 shadow">

            <div>
                <ul className='flex cursor-pointer'>
                    <li className={tabIndex === 1 ? activeTab : inactiveTab} onClick={() => {setTabIndex(1)}}>API</li>
                    <li className={tabIndex === 2 ? activeTab : inactiveTab} onClick={() => {setTabIndex(2)}}>About</li>
                </ul>
            </div>

            <div className="bg-white overflow-hidden rounded-br-lg rounded-bl-lg rounded-tr-lg">
                <div className="px-4 py-5 border-b border-gray-200 sm:px-6 relative h-full">

                    <h1 className="m-4 text-2xl font-semibold">Javascript</h1>

                    <div className="bg-gray-200 h-full m-4 p-5">
                        <code>
                            console.log("Hello world");
                        </code>

                    </div>


                </div>
            </div>

        </div>
    );

}

export default GuidTabs;