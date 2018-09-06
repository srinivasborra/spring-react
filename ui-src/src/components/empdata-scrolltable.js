import React from 'react';
import ReactScrollTable from 'react-scroll-table';

const tableProps = {
		columns:[
		         {
		        	 header:'Favorite',
		        	 sortable:true,
		        	 accessor:'favorite',
		        	 width: '10%'
		         },
		         {
		             header: 'User',
		             accessor: 'username',
		             width: '25%',
		             sortable: true,
		         },
		         {
		             header: 'Quote',
		             sortable: true,
		             accessor: 'text',
		             width: '28%'
		         },
		         {
		             header: '     Date',
		             sortable: true,
		             accessor: 'date',
		             width: '25%'
		          }
		 ],
		 data: [{favorite: false, username: 'Luke Skywalker', text: 'He told me enough! He told me you killed him!', date: new Date().toDateString()},
		        {favorite: true,  username: 'Obi-Wan Kenobi', text: 'These aren\'t the droids you\'re looking for.', date: new Date(2014, 10, 5).toDateString()},
		        {favorite: false, username: 'Darth Vader', text: 'I am your father.', date: new Date(2002, 1, 17).toDateString()},
		        {favorite: true,  username: 'C3PO', text: 'I suggest a new strategy, Artoo: let the Wookie win.', date: new Date(2000, 2, 28).toDateString()},
		        {favorite: false, username: 'R2D2', text: 'Bleep bloop bleep.', date: new Date(1988, 6, 15).toDateString()},
		        {favorite: false, username: 'Han Solo', text: 'Laugh it up, fuzzball!', date: new Date(1990, 4, 7).toDateString()},
		        {favorite: true, username: 'Yoda', text: 'Try not. Doâ€”or do not. There is no try.', date: new Date(2005, 6, 12).toDateString()},
		        {favorite: false, username: 'Leia Organa', text: 'Help me Obi-Wan Kenobi, you\'re my only hope.', date: new Date(2012, 1, 27).toDateString()},
		        {favorite: true, username: 'Yoda1', text: 'Try not. Doâ€”or do not. There is no try.', date: new Date(2005, 6, 12).toDateString()},
		        {favorite: true, username: 'Yoda2', text: 'Try not. Doâ€”or do not. There is no try.', date: new Date(2005, 6, 12).toDateString()},
		        {favorite: true, username: 'Yoda3', text: 'Try not. Doâ€”or do not. There is no try.', date: new Date(2005, 6, 12).toDateString()},
		        {favorite: true, username: 'Yoda4', text: 'Try not. Doâ€”or do not. There is no try.', date: new Date(2005, 6, 12).toDateString()},
		        {favorite: true, username: 'Yoda5', text: 'Try not. Doâ€”or do not. There is no try.', date: new Date(2005, 6, 12).toDateString()},
		        {favorite: true, username: 'Yoda6', text: 'Try not. Doâ€”or do not. There is no try.', date: new Date(2005, 6, 12).toDateString()},
		        {favorite: true, username: 'Yoda7', text: 'Try not. Doâ€”or do not. There is no try.', date: new Date(2005, 6, 12).toDateString()},
		        {favorite: true, username: 'Yoda8', text: 'Try not. Doâ€”or do not. There is no try.', date: new Date(2005, 6, 12).toDateString()},
		        {favorite: true, username: 'Yoda9', text: 'Try not. Doâ€”or do not. There is no try.', date: new Date(2005, 6, 12).toDateString()},
		        {favorite: true, username: 'Yoda10', text: 'Try not. Doâ€”or do not. There is no try.', date: new Date(2005, 6, 12).toDateString()},
		        {favorite: true, username: 'Yoda11', text: 'Try not. Doâ€”or do not. There is no try.', date: new Date(2005, 6, 12).toDateString()},
		        {favorite: true, username: 'Yoda12', text: 'Try not. Doâ€”or do not. There is no try.', date: new Date(2005, 6, 12).toDateString()},
		        {favorite: true, username: 'Yoda13', text: 'Try not. Doâ€”or do not. There is no try.', date: new Date(2005, 6, 12).toDateString()}
		        ],
		maxHeight: 150,
		noDataText: 'no data here',
		
	}
class EmpDataScrollTable extends React.Component{
	render(){
		return(
				<div>
			     <h2>React-Scroll-Table</h2>
			     <ReactScrollTable {...tableProps}/>
			   </div>	
		);
	}
}
export default EmpDataScrollTable;
