import React, { Component } from 'react'
import AppNavBar from "../AppNavBar"
import OpenFiles from "../OpenFiles"

export default class index extends Component {
    constructor() {
        super();
        this.state = { openFileIds: [], openFiles: [], files:{} };
    }

    closeFileFunction = async (id) => {
        let arr = this.state.openFileIds;
        delete this.state.files[id]
        if (arr.includes(id)) {
            const newFileIds = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== id) {
                    newFileIds.push(arr[i]);
                }
            }
            if (newFileIds.length === 0) {
                this.setState({
                    openFileIds: [],
                    openFiles: []
                });
            } else {
                this.setState({
                    openFileIds: newFileIds,
                    openFiles: <OpenFiles ids={newFileIds} closeFileFunction={this.closeFileFunction} />
                });
            }
        }
    }
    openFileFunction = (obj) => {
        let { id } = obj
        let arr = this.state.openFileIds;
        if (!arr.includes(id)) {
            arr = arr.concat([id]);
            this.state.files[id] = obj
            this.setState({
                openFileIds: arr,
                openFiles: <OpenFiles ids={arr} files={this.state.files} closeFileFunction={this.closeFileFunction} />
            });
        }
    };
    render() {
        return (
            <div>
                <AppNavBar openFunction={this.openFileFunction} />
                <div>
                    {this.state.openFiles}
                </div>
            </div>
        )
    }
}
