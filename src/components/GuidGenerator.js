import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from "@fortawesome/free-solid-svg-icons/faCopy";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons/faSyncAlt";

const GuidGenerator = () => {

    return (
        <div className="bg-white shadow overflow-hidden rounded-br-lg rounded-bl-lg rounded-tr-lg md:w-1/2 mx-auto">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6 relative">

                <div className="mx-auto">
                    <span
                        className="appearance-none rounded w-full py-2 px-4
                        leading-tight focus:outline-none focus:bg-white focus:border-purple-500
                        h-full text-2xl">123a0c1d-e44b-4c4b-9554-ca1a4002f26f
                        <FontAwesomeIcon icon={faSyncAlt} className="fa-pull-right" />
                        <FontAwesomeIcon icon={faCopy} className="fa-pull-right" />
                    </span>
                </div>

            </div>
        </div>
    );

}

export default GuidGenerator;