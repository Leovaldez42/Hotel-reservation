import React, { Component } from 'react'

const RoomContext = React.createContext();

export default class RoomsProvider extends Component {
    state={

    }
    render() {
        return (
            <RoomContext.Provider value="hello">
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export{RoomsProvider, RoomConsumer, RoomContext}