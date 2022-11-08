import React from 'react';
import PropTypes from 'prop-types';

export default class PetSearch extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    onChange = (event) =>{
        const query = event.target.value;
        this.setState({
            search: query
        });
        this.props.updateSearch(query.toLowerCase());
    }

    render(){
        return (
            <React.Fragment>
                <div className="input-group">
                    <input type="text" className="form-control filter" id="filterName" name="filterName" 
                    placeholder="search pets..." onChange={this.onChange} value={this.state.search}/>
                </div>
            </React.Fragment>
        );
    }
}

PetSearch.propTypes = {
    updateSearch: PropTypes.func
}