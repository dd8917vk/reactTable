import React, { useEffect, useState } from "react";
import "./index.css";
import { useRecoilState } from "recoil";
import { createPostState } from "../../atoms/atom";
import { fetchPosts } from "../../api/api";
import { TableHeader } from "./tableheader";
import { TableData } from "./tabledata"
import './index.css'
import uuid from 'react-uuid';
import Pagination from "react-js-pagination";

const Table = () => {
	const [postState, setPostState] = useRecoilState(createPostState);

	//Keep track of how many headers, build table off of this
	//This method assumes headers.length match row.length, data shape is same
	const [headers, setHeaders] = useState([]);

	//Items per page for pagination
	const itemsPerPage = 20;
	//Active page, current page for pagination
	const [activePage, setActivePage] = useState(1);
	//Page logic
	const indexOfLastTodo = activePage * itemsPerPage;
	const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
	const currentItems = postState.slice(indexOfFirstTodo, indexOfLastTodo);
	//Handle page change
	const handlePageChange = (pageNumber) => {
		console.log(`active page is ${ pageNumber }`);
		setActivePage(pageNumber);
	}

	const callForPosts = async () => {
		const result = await fetchPosts();
		setHeaders(Object.keys(result[0]))
		setPostState(result);
		// setPostState(result);
	// 	setHeaders(Object.keys(postState[0]))
	}

	const renderTableData = 
		currentItems?.map((item, index) => {
			return (
			<tr key={index} className="tableRow">{Object.values(currentItems[index]).map((value)=>{return (<TableData className="tdCell" value={value} key={uuid()}/>)})}</tr>
			)
		})


	useEffect(() => {
		callForPosts();
	}, []);

	return (
		<div className="container">
			<div className="tableContainer">
				<table className="mainTable">
					<tbody className="tableBody">
						<tr className="tableHeadRow">
							{headers.map((item, index) => {
								return <TableHeader className="tableData" key={index.toString+headers[index]} item={item} />;
							})}
						</tr>
						<tr className="sortedItems">
							{headers.map((item, index) => {
								return <th key={index}>sort</th>
							})}
						</tr>
						{renderTableData}
							{/* {postState?.slice(0,20).map((item, index) => {
								return (
								<tr key={index} className="tableRow">{Object.values(postState[index]).map((value)=>{return (<TableData className="tdCell" value={value} key={uuid()}/>)})}</tr>
								)
							})} */}
					</tbody>
				</table>
				<div className="pagination">
					<Pagination
						activePage={activePage}
						itemsCountPerPage={20}
						totalItemsCount={postState.length}
						pageRangeDisplayed={5}
						onChange={handlePageChange}
						/>
				</div>
			</div>
		</div>
	);
};
export default Table;
