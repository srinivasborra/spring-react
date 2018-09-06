import React  from 'react';
import {connect} from 'react-redux';
import uuidv1 from 'uuid';
import {addArticle} from '../actions/add-article';
import store from '../store';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class ArticleForm extends React.Component{
	constructor(){
		super();
		this.state={title:'',priority:'',zip:'',id:''};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		this.setState({[event.target.id]:event.target.value});
	}
	handleSubmit(event){
		const genid = uuidv1();
		store.dispatch(addArticle({title:this.state.title,priority:this.state.priority,zip:this.state.zip,id:genid}));
		this.setState({title:'',priority:'',zip:''});
		event.preventDefault();
	}
	
	getTrProps = (state, rowInfo, instance) => {
		return{
			onClick:(event,vals) =>{
				const val=rowInfo.row;
				this.setState({title:val.title,priority:val.priority,zip:val.zip,id:val.id});
			}
		}
  }
  
	scrollTable = (state,instance)=>{
		return{
			onScroll: (event)=>{
				console.log("******************");
				console.log("evnt");
			}
		}
		
	}
	
	listArticles(){
			const arts = this.props.articles.articles;
			console.log(this.props.articles.articles.length);
			return(
					<div>
						<ReactTable  data={arts} 
						columns={[
									{
										Header:'Id',
										accessor:"id",
										show:false
									},
						            {
						            	Header:'Title',
						            	accessor:"title",
						            	filterable:true,
						            	filterMethod:(filter,row)=>
						            		row[filter.id].startsWith(filter.value)
						            },
						            {
						            	Header:'Priority',
						            	accessor:"priority",
						            	sortable: false
						            },
						            {
						            	Header:'Zip',
						            	accessor:"zip"
						            },
						            {
						            	Header:'Action',
						            }
						          ]}
						 style={{height: "300px"}}
						 className="-striped -highlight"
						 getTrProps={this.getTrProps}
						 onScroll={this.scrollTable}
						/>
							
					</div>
			);
	}
	
	
	render(){
		 const articleDetails = this.listArticles();
		return(
				<div>
					<div>
					<form onSubmit={this.handleSubmit}>
						<div className="from-group">
							<label htmlFor="title">Title</label>
							<input type="text" id="title" className="form-control" value={this.state.title} onChange={this.handleChange}/>
						</div>
						<div className="from-group">
							<label htmlFor="priority">Priority</label>
							<input type="text" id="priority" className="form-control" value={this.state.priority} onChange={this.handleChange}/>
						</div>
						<div className="from-group">
							<label htmlFor="zip">Zip</label>
							<input type="text" id="zip" className="form-control" value={this.state.zip} onChange={this.handleChange}/>
						</div>
						<button type="submit" className="btn btn-success btn-lg" disabled={!this.state.title}>Save</button>
					</form>
					</div>
					<div>
						{articleDetails}
					</div>
				</div>
				
		);
	}
}

function mapStateToProps(state){
	return {
		articles : state.articles
	};
}

const Form = connect(mapStateToProps)(ArticleForm);
export default Form;