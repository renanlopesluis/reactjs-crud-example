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
        this.setState({
            search: event.target.value.substr(0,20)
        });
        this.props.updateSearch(this.state.search.toLowerCase());
    }

    render(){
        return (
            <React.Fragment>
                <div class="input-group">
                    <input type="text" class="form-control filter" id="filterName" name="filterName" 
                    placeholder="search pets..." onChange={this.onChange} value={this.state.search}/>
                </div>
            </React.Fragment>
        );
    }
}

PetSearch.propTypes = {
    updateSearch: PropTypes.func
}