import React from 'react';
import './FirstTextField.css'
import axios from 'axios';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

const API_URL = 'https://love-calculator.p.rapidapi.com/';
const API_KEY = '4ca5c860b4msh5b19fe48080e408p1f6c49jsne9e041833357';
const override = css`
                display: block;
                margin: 0 auto;
                border-color: red;`;




class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.handleGetPercentage()
    }

    handleGetPercentage = () => {
        const { fname, sname } = this.props.location.state;

        const settings = {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "love-calculator.p.rapidapi.com",
            "x-rapidapi-key": API_KEY
        }

        const param = {
            fname,
            sname
        }

        const url = `${API_URL}getPercentage`;
        axios.get(url, { headers: settings, params: param })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1 className='text'>Lovella is working its magic!</h1>
                <div className='sweet-loading'>
                    <ClipLoader
                        css={override}
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={this.state.loading}
                    />
                </div>
            </div>
        );
    }
}

export default LandingPage;