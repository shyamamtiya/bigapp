import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import fakeAuth from './Authanticate';

import {
    Redirect,
  } from 'react-router-dom';

class NormalLoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            redirectToReferrer: false
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                fakeAuth.authenticate(() => {
                    this.setState(() => ({
                      redirectToReferrer: true
                    }))
                })
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer === true) {
            return <Redirect to={'/users'} />
        }

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            autoComplete={''}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
          </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm;