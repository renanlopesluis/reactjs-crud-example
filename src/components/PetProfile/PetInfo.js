import React from 'react';
import PropTypes from 'prop-types';

export default class PetInfo extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={this.props.pet.name}
                        className="form-control" placeholder="name" readOnly/>
                </div>
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <input type="text" id="type" value={this.props.pet.type}
                        className="form-control" placeholder="type" readOnly/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Age</label>
                    <input type="number" id="age" value={this.props.pet.age}
                        className="form-control" placeholder="age" readOnly />
                </div>
            </React.Fragment>
        );
    }
}

PetInfo.propTypes = {
    pet: PropTypes.any.isRequired
}