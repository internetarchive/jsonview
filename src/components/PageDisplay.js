import React from "react";
import PageDisplayV2 from "./v2/PageDisplayV2";
import PageDisplayV2PDF from "./v2pdf/PageDisplayV2PDF";


export default function PageDisplay( { pageData }) {

    const message = 'Please enter a URL and click "Load References"';

    if (!pageData) return <p className={'text-primary'}>{message}</p>;

    if (pageData.version === "v2") {
        if (pageData.mediaType === "wiki")
            return <PageDisplayV2 pageData={pageData} />;
        if (pageData.mediaType === "pdf")
            return <PageDisplayV2PDF pageData={pageData} />;
    }

    return <h3>Unsupported version/media type {pageData.version}/{pageData.mediaType}.</h3>

}

