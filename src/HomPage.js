import React from 'react'
import './HomePage.css'
import {BACKEND_URL} from './constants'
export default class HomePage extends React.Component{
    constructor(props){
        super(props)

    }

    SignOut() {
        return(
            <div id = "signout-prompt">

            </div>
        )
    }

    render(){
        return(
            <div id="container">

                <h1>Cloud 9 Habit Builder</h1>
                
            </div>
            
        )
    }
}
