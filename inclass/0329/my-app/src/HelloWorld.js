import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <div>
                <h2>{ this.props.text + 'Hello!' }</h2>
            </div>
        );
    }
}

HelloWorld.defaultProps = {
    text: 'World'
};

HelloWorld.propTypes = {
    text: React.PropTypes.string
};

export default HelloWorld;