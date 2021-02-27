import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { createPostState } from '../../../atoms/atom'
import './index.css'


const TableHeader = (props) => {




    return (
        <>
            <th className={props.item}>{props.item}</th>
        </>
    )
}

export default TableHeader
