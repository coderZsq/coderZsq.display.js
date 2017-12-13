import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './mobile_contact.css';
import {GET, URL} from '../utils/http';

@CSSModules(styles)
export default class MobileContact extends Component {

    constructor() {
        super();
        this.state = {
            data: {
                wechatUrl: '',
                wechat: '',
                mobile: '',
                email: '',
                qq: ''
            }
        }
    }

    componentWillMount() {
        GET(URL.fetchContact).then((data) => {
            this.setState({data: data})
        })
    }

    render() {
        const {data} = this.state;
        return (
            <div>
                <div styleName="subtitle">
                    <h2>Contact</h2>
                </div>
                <div styleName="contact">
                    <div styleName="wechat">
                        <img src={data.wechatUrl} alt=""/>
                    </div>
                    <div styleName="other">
                        <h4>Other contact info:</h4>
                        <p>Mobile: {data.mobile}</p>
                        <p>QQ: {data.qq}</p>
                        <p>Copyright © {new Date().getFullYear()} Castie!.</p>
                    </div>
                </div>
            </div>
        )
    }
}
