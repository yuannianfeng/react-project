import React,{ Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        const match = this.props
        console.log(match)
        return (
            <div>
                hello login {window.code}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch,ownprops) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)