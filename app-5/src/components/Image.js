import React, {Component} from 'react'

export default class Image extends Component {
    

    render(){
        return(
            <div>
                <img alt='fight me' src={this.props.myImage} />
                <caption>409 Conflict</caption>
            </div>
        )
    }
}