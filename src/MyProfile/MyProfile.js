import React, {Component} from 'react'
import "./MyProfile.scss"

export class MyProfile extends Component {
    render () {
        return (
            <div className="my-profile">
                <div>My Info</div>
                <div>My Friends</div>
            </div>
        )
    }
}

export default MyProfile