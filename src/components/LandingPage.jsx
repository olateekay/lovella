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
            loading: true,
            isError: false,
            fname: this.props.location.state.fname,
            sname: this.props.location.state.sname,
            percentage: this.props.location.state.percentage
        }
        this.routeChange = this.routeChange.bind(this);
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
                console.log(res)
                if (res.status === 200) {
                    this.routeChange(res.data)
                } else {
                    this.setState({ isError: true, loading: false });
                }
                if(res == undefined){
                    this.setState({ isError: true, loading: false });
                }
                console.log("full response =>:", res);
                console.log(res.data);
            }).catch(error => this.setState({ isError: true, loading: false }))
    }
    routeChange(data) {
        let path = `./ResultsPage`;
        this.props.history.push(path, { result: data });
    }
    routeChanges() {
        let path = `./FirstTextField`;
        this.props.history.push(path);
      }

    render() {
        console.log(this.props)
        const { loading, isError } = this.state;
        return (
            <div>
                <h1 className='text'>Lovella is working its magic!</h1>
                {loading && <div className='sweet-loading'>
                    <ClipLoader
                        css={override}
                        sizeUnit={"px"}
                        size={100}
                        color={'#123abc'}
                        loading={loading}
                    />
                </div>}

                {isError && <div>
                    <h2 className='text'>An error occured!!</h2>
                    <button className="button" style={{ fontSize: '100%' }}
                     onClick={this.routeChanges()}>Try again</button>
                    </div>}
            </div>
        );
    }
}

export default LandingPage;