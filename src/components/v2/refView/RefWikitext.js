import React, {useEffect, useState} from "react";
import {copyToClipboard} from "../../../utils/utils";
// import { RichTextarea } from "rich-textarea";
import RefSectionHeader from "./RefSectionHeader";  // https://www.npmjs.com/package/rich-textarea
// https://github.com/inokawa/rich-textarea/blob/HEAD/docs/API.md
// https://github.com/inokawa/rich-textarea/tree/fee148effcd29e8c3e5b790774504c0f0fc0a8fe/stories

/*
shows wikitext box with allowance for edit and copy
*/

/*********
 *
 *
 *  This file is under construction...!
 *
 *
 * ********/

export default function RefWikitext({ wikitext, onAction }) {

    const [editable, setEditable]= useState(false)
    // eslint-disable-next-line
    const [localWikitext, setLocalWikitext]= useState(wikitext)

    useEffect(() => {
        setLocalWikitext(wikitext);
    }, [wikitext]); // Adding wikiText to the dependency array

    // const [savedWikitext, setSavedWikitext]= useState(wikitext)
    //
    // // if (!wikitext) {
    // //     return <div className="row ref-view-wikitext">
    // //         <div class={"col"}>No wikitext provided!</div>
    // //     </div>
    // // }
    //
    // const handleEditMode = () => {
    //     if (editable) {
    //         // editable true means we were in edit mode and we are
    //         // indicating to SAVE the changes.
    //         // We accomplish this by setting the onAction to saveWikitext. That will
    //         // invoke a change of the reference_details, thereby refreshing the value
    //
    //         alert ("will (but not yet) save changes to wikitext for this reference")
    //
    //         onAction({action: "saveWikitext", value: localWikitext})
    //
    //         /*
    //         send onAction to save new ref contents with newText.
    //         onAction = "saveWikitextEdits, contents=<new text>"
    //         that will:
    //         - save the data (hopefully, or return eith an error)
    //         - re-render the component with the newly-saved text of the reference details data
    //         - (maybe?) set the editable property back to false
    //
    //         that will set the state with new reference details
    //
    //         ? should we set edit mode here, or, which makes more sense, send back up
    //         with onAction, and let onAction set the edit mode?
    //
    //         by using onAction to set mode status, we get for free notion of
    //         not having to reset the text itself, since it comes directly from the reference details
    //         and it has not been modified yet, so easy to "reset".
    //
    //         for now, until we get it working, well just set it
    //         */
    //
    //         setEditable(false)  // toggle state to display "Edit"
    //
    //     } else {  // we are not in edit mode - put us there
    //         // save current value for "cancel"
    //         setSavedWikitext(localWikitext)
    //
    //         // set editable
    //         setEditable(true)  // toggle state to display "Save"
    //     }
    // }
    //
    // const handleEditCancel = () => {
    //     /* restore text to previous state
    //     do this by sending up onAction of "setEditMode, false"
    //     this will:
    //     - send back state of editable-false, and
    //     - set text to previous (non-edited) value
    //     */
    //
    //     // restore to last saved value when "Edit" was invoked
    //     setLocalWikitext(savedWikitext)
    //
    //     // for now, until further notice
    //     setEditable(false)
    // }
    //
    // // const rawText = reference_details?.wikitext
    //
    // const buttonEditSave = <button className={`utility-button`} style={{width:"3rem"}} onClick={handleEditMode}><span>{editable ? "Save" : "Edit"}</span></button>
    //
    // const buttonCancel = editable ? <button className={`utility-button`} onClick={handleEditCancel}><span>Cancel Edit</span></button> : null
    //
    // const header = <div className={"header-all-parts"}>
    //     <div className={"header-left-part"}>
    //         <h3>Wikitext</h3>{buttonEditSave}{buttonCancel}
    //     </div>
    //     <div className={"header-right-part"}>
    //         {/*<button onClick={() => {copyToClipboard(rawText, 'wikitext')} }*/}
    //         <button onClick={() => {copyToClipboard(localWikitext, 'wikitext')} }
    //                 className={`utility-button`}
    //                 // style={{position: "relative", top: "0", right: "0"}}
    //         ><span>Copy to clipboard</span></button>
    //     </div>
    // </div>
    //
    // // show the textare text using this method: https://dev.to/joshuajee/how-to-fix-defaultvalue-error-while-working-with-textarea-in-react-1a55
    //
    // return <div className="row ref-view-wikitext">
    //     <div className="col-12">
    //         {header}
    //         <textarea className={`raw-wikitext ${editable ? "editable" : "non-editable"}`}
    //                   readOnly={editable ? false : true}
    //                   value={localWikitext}
    //                   onChange={(e) => setLocalWikitext(e.target.value)}/>
    //     </div>
    // </div>




    // const [editable, setEditable]= useState(false)
    // const [localWikitext, setLocalWikitext]= useState(wikitext)
    // const [savedWikitext, setSavedWikitext]= useState(wikitext)
    //
    // // if (!wikitext) {
    // //     return <div className="row ref-view-wikitext">
    // //         <div class={"col"}>No wikitext provided!</div>
    // //     </div>
    // // }
    //
    const handleEditMode = () => {
        if (editable) {
            // editable true means we were in edit mode and we are
            // indicating to SAVE the changes.
            // We accomplish this by setting the onAction to saveWikitext. That will
            // invoke a change of the reference_details, thereby refreshing the value

                        // alert ("will (but not yet) save changes to wikitext for this reference")
                        //
                        // onAction({action: "saveWikitext", value: localWikitext})

            /*
            send onAction to save new ref contents with newText.
            onAction = "saveWikitextEdits, contents=<new text>"
            that will:
            - save the data (hopefully, or return eith an error)
            - re-render the component with the newly-saved text of the reference details data
            - (maybe?) set the editable property back to false

            that will set the state with new reference details

            ? should we set edit mode here, or, which makes more sense, send back up
            with onAction, and let onAction set the edit mode?

            by using onAction to set mode status, we get for free notion of
            not having to reset the text itself, since it comes directly from the reference details
            and it has not been modified yet, so easy to "reset".

            for now, until we get it working, well just set it
            */

            setEditable(false)  // toggle state to display "Edit"

        } else {  // we are not in edit mode - put us there
            // // save current value for "cancel"
            // setSavedWikitext(localWikitext)

            // set editable
            setEditable(true)  // toggle state to display "Save"
        }
    }

    const handleEditCancel = () => {
        // /* restore text to previous state
        // do this by sending up onAction of "setEditMode, false"
        // this will:
        // - send back state of editable-false, and
        // - set text to previous (non-edited) value
        // */
        //
        // // restore to last saved value when "Edit" was invoked
        // setLocalWikitext(savedWikitext)
        //
        // // for now, until further notice
        setEditable(false)
    }

    // const rawText = reference_details?.wikitext

    const handleOnComplete = (message) => {
        alert("Arf!!"+ message)

        // this is where we want to set up a disappearing tooltip
    }

    const buttonEditSave = <button className={`utility-button`} style={{width:"5rem"}}
                                   onClick={handleEditMode}><span>{editable ? "Done Editing" : "Edit Citation"}</span></button>

    const buttonCancel = editable ? <button className={`utility-button`} onClick={handleEditCancel}><span>Cancel Edit</span></button> : null

    const buttonCopy = <button
        onClick={() => {copyToClipboard(wikitext, 'wikitext', handleOnComplete)} }
        className={`utility-button`}>
        <span>Copy to Clipboard</span>
    </button>

    const header = <RefSectionHeader
        leftPart={<><h3>Wikitext</h3><span>{buttonEditSave}{buttonCancel}{buttonCopy}</span></>}
        // rightPart={buttonCopy}
        >
        {/* nothing to see here */}
    </RefSectionHeader>



    // show the textarea text using this method: https://dev.to/joshuajee/how-to-fix-defaultvalue-error-while-working-with-textarea-in-react-1a55
    // const editable = false && true
    // console.log(`localWikitext: ${localWikitext}`)

    return <div className="row ref-view-section ref-view-wikitext">
        <div className="col-12">
            {header}
            <textarea className={`raw-wikitext ${editable ? "editable" : "non-editable"}`}
                      readOnly={!editable}
                      value={localWikitext}
                      onChange={(e) => setLocalWikitext(e.target.value)}
            />
        </div>
    </div>

    // RichTextarea allows colored sections, delineated by <span>s, to be displayed

    // return (
    //     <RichTextarea
    //         value={localWikitext}
    //         style={{ width: "600px", height: "400px" }}
    //         onChange={(e) => setLocalWikitext(e.target.value)}
    //     >
    //         {(v) => {
    //             return v.split("").map((t, i) => (
    //                 <span key={i} style={{ color: i % 2 === 0 ? "red" : undefined }}>
    //             {t}
    //           </span>
    //             ));
    //         }}
    //     </RichTextarea>
    // )

}