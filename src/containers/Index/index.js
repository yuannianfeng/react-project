import React,{ Component } from 'react'
import { connect } from 'react-redux'

class Index extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return (
            <div>
                hello index {window.code}
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
)(Index)