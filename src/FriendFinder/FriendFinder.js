import React, {Component} from "react";
import "./FriendFinder.scss";

export class FriendFinder extends Component {
    state = {
        data: [],
        friends: []
    }
    fetchPeople = () => {
        fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => this.setState({data: data.results}));
    }

    addFriendClickHandler = (item) => {
        this.setState({friends: this.state.friends.filter(
            friend => friend.cell === item.cell).length > 0 ?
            [...this.state.friends]: [...this.state.friends, item]})
    }

    removeFriendsClickHandler = (item) => {
        this.setState ({friends: this.state.friends.filter (
            friend => {
                return friend.cell !== item.cell
            }
        )})
    }

    render() {
        return (
        <div className="friend-finder">
            <button onClick={this.fetchPeople} className="btn">Find a Friend</button>
            <div >
                {this.state.data.map(item =>
                    <>
                        <img src={item.picture.large} alt="person" />
                        <h3>{item.name.first} {item.name.last}</h3>
                        <h4>Nationality: {item.nat}</h4>
                        <button onClick ={ () =>this.addFriendClickHandler(item)}>Add as Friend!</button>
                    </>
                    )}
            </div>
            {this.state.friends.map (item =>
                <div className="friend">
                    <img src={item.picture.large} alt="friend"/>
                    <span>{item.name.first} {item.name.last}</span>
                    <button onClick= {() => this.removeFriendsClickHandler(item)}>Remove Friend</button>
                </div>      
                )}
        </div>
        );
    }
}

export default FriendFinder;