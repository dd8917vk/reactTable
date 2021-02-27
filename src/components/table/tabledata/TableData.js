import React, { useRef } from 'react'

const TableData = (props) => {

    const inputRef = useRef(null);

    const copyText = (event) => {
        let text = inputRef.current.innerHTML;
        navigator.clipboard.writeText(text);
        alert("Text copied.")
    }

    return (
        <>
            <td onClick={copyText} className="tdCell">{props?.value}
            <span ref={inputRef} className="toolTip">{props.value}</span>
            </td>
        {/* // <tr className="tableRow">
            // <td>{props.item.userId}</td>
            // <td>{props.item.id}</td>
            // <td>{props.item.title}</td>
            // <td>{props.item.body}</td> */}
	    {/* // </tr> */}
        </>
    )
}

export default TableData;
