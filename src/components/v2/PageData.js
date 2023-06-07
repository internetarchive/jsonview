import React, {useState} from "react";
import UrlDisplay from "./UrlDisplay";
import RefDisplay from "./RefDisplay";
import FldDisplay from "./FldDisplay";
import {URL_FILTER_MAP} from "./filters/urlFilterMaps";

export default function PageData({pageData = {}}) {

    const [selectedDisplay, setSelectedDisplay] = useState('domains');

    const handleDisplayChange = (event) => {
        setSelectedDisplay(event.target.value);
    };

    const displays = {
        "domains": {
            caption: "Domains"
        },
        "urls": {
            caption: "URLs"
        },
        "stats": {
            caption: "Reference Types"
        },
    }

    const displayOptions = Object.keys(displays).map(display => {
        return <div key={display} >
            <label>
                <input
                    type="radio"
                    value={display}
                    checked={selectedDisplay === display}
                    onChange={handleDisplayChange}
                /> {displays[display].caption}
            </label>
        </div>
    })

    return <>

        <div className={"page-data"}>

            <div className={"ref-filter-types"}>
                <div>View References by</div>
                {displayOptions}
            </div>

            <div className={`display-content`}>
                {selectedDisplay === 'domains' &&
                    <FldDisplay pageData = {pageData} />
                }

                {selectedDisplay === 'urls' &&
                    <UrlDisplay urlFlock={pageData.urls} options={{refresh: pageData.forceRefresh}}
                                filterMap={URL_FILTER_MAP} />
                }

                {selectedDisplay === 'stats' &&
                    <RefDisplay pageData={pageData} options={{}} />
                }

            </div>

        </div>
    </>
}

