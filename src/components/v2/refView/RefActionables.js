import React from "react";

/*
shows actionables for this reference
 */
export default function RefActionables({ actions, onAction }) {

    // const actionDisplay = 1 || actions
    //     ? actions
    //     : "No actionable items found for this reference."
    //
    // const message = <>
    //     <div style={{fontStyle:"italic",color:"red"}}>Actionable assignment is not yet implemented.</div>
    //         {actionDisplay}
    //         <div style={{fontStyle:"normal",color:"black"}}
    //         >If this were working, there would be instructions here on what to fix in the wikitext..
    //     </div>
    // </>
    const message = <>
        <div style={{fontStyle:"normal",color:"black"}}
        >No actionable items for this reference.</div>
    </>

    return <div className="ref-view-actionables">
        <h3>Actionables</h3>
        {message}
    </div>
}

