import React, { SyntheticEvent } from "react";
import { User } from "../models/Model";
import { AuthService } from "../services/AuthService";
import history from '../utils/history';


interface LoginProps{
    authService: AuthService,
    setUser: (user: User) => void
}

interface LoginState {
    userName: string,
    password: string,
    loginAttempted: boolean,
    loginSucessfull: boolean
}

interface CustomEvent {
    target: HTMLInputElement
}

export class Login extends React.Component<LoginProps, LoginState> {
    state: LoginState = {
        userName: '',
        password: '',
        loginAttempted: false,
        loginSucessfull: false,
    }

    private setUserName(event: CustomEvent){
        this.setState({userName: event.target.value})
    }

    private setPassword(event: CustomEvent){
        this.setState({password: event.target.value})
    }

    private async handleSubmit(event: SyntheticEvent) {
        event.preventDefault()
        this.setState({loginAttempted:true})
        const result = await this.props.authService.login(this.state.userName, this.state.password)
        if (result) {
            this.setState({loginSucessfull:true})
            this.props.setUser(result)
            history.push('/profile')
        } else {
            this.setState({loginSucessfull: false})
        }
    }
    
    render() {
        let loginMessage:any;
        if(this.state.loginAttempted){
            if (this.state.loginSucessfull) {
                loginMessage = <label>Login Sucessful!</label>
            }else {
                loginMessage = <label>Login Failed!</label>
            }
        }

        return (
            <div>
                <h2>Please login</h2>
                    <form onSubmit={e => {this.handleSubmit(e)}}>
                        <input value={this.state.userName} onChange = {e => {this.setUserName(e)}} /><br/>
                        <input value={this.state.password} type='password'  onChange={e => {this.setPassword(e)}}/><br/>
                        <input value={'Login'} type='submit' /><br/>
                    </form>
                    {loginMessage}
            </div>
        )
    }
}