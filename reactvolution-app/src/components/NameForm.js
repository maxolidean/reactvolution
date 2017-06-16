import React, { Component } from 'react';


export default class NameForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <div>
            <form onSubmit={this.props.onSubmit}>
              <input type="text" name="name" />
              <input type="submit" value="Saludar" />
            </form>
        </div>
        );
    }
}