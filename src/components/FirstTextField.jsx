import React from 'react';
import './FirstTextField.css';



class FirstTextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: ''
        };
        this.routeChange = this.routeChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ fname: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    routeChange() {
        const { fname } = this.state;
        let path = `./SecondTextField`;
        this.props.history.push(path, { fname });
    }

    

    render() {
        console.log(this.state.fname)
        return (
            <div>
                <h1 className='text'>Please enter the first name</h1>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" id="fname" value={this.state.fname} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" onClick={this.routeChange} />
                </form>
            </div>
        );
    }
}

export default FirstTextField;





