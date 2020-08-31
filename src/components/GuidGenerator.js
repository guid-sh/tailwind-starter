import React, { useState } from "react";

import useCopyToClipboard from "./useCopyToClipboard";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from "@fortawesome/free-solid-svg-icons/faCopy";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons/faSyncAlt";

function GuidGenerator() {

    const [isCopied, handleCopy] = useCopyToClipboard();

    const [guid, setGuid] = useState('123a0c1d-e44b-4c4b-9554-ca1a4002f26f');

    return (
        <div className="bg-white shadow overflow-hidden rounded-br-lg rounded md:w-5/6 lg:w-1/2 mx-auto">
            <div className="px-4 py-5 border-b border-gray-200 px-6 relative">

                <div className="mx-auto">
                    <span
                        className="appearance-none rounded w-full py-2 px-4
                        leading-tight focus:outline-none focus:bg-white focus:border-purple-500
                        h-full text-2xl">

                        {guid}

                        <FontAwesomeIcon icon={faSyncAlt} className="fa-pull-right cursor-pointer px-1 my-1"/>

                        <FontAwesomeIcon icon={faCopy} className="fa-pull-right cursor-pointer px-1 my-1" onClick={() => handleCopy(guid)}/>

                    </span>
                </div>

            </div>
        </div>
    );

}

export default GuidGenerator;