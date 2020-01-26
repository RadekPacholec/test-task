import React, { Component } from 'react';
import Row from "./Row.js"
import Row2 from "./Row2.js"

class List extends Component {
    constructor(props) {
        super(props);
        var type = ""
        if (this.props.cType == true) {
            type = "notNormal"
        }
        else {
            type = "normal"
        }
        this.state = {
            data: this.props.data,
            contentType: type,
            content: ""
        };
        this.change = this.change.bind(this)
    }
    componentWillMount() {
        if (this.state.contentType == "normal") {
            var contentOfTable = this.props.data.map(function (item, index) {
                return (
                    <Row content={item} num={index + 1} key={index}>

                    </Row>
                )
            })
            this.setState({
                content: contentOfTable
            })
        }
        else {
            var contentOfTable = this.props.data.map(function (item, index) {
                return (
                    <Row2 content={item} num={index + 1} key={index}>

                    </Row2>
                )
            })
            this.setState({
                content: contentOfTable
            })
        }
    }
    async change() {
        if (this.state.contentType == "normal") {
            await this.setState({
                contentType: "notNormal"
            })
        }
        else {
            await this.setState({
                contentType: "normal"
            })
        }
        console.log("!!")
        if (this.state.contentType == "normal") {
            var contentOfTable = this.props.data.map(function (item, index) {
                return (
                    <Row content={item} num={index + 1} key={index}>

                    </Row>
                )
            })
            document.getElementById("toShow").setAttribute("class", "none")
            this.setState({
                content: contentOfTable
            })
        }
        else {
            var contentOfTable = this.props.data.map(function (item, index) {
                return (
                    <Row2 content={item} num={index + 1} key={index}>

                    </Row2>
                )
            })
            document.getElementById("toShow").setAttribute("class", "widthTd")
            this.setState({
                content: contentOfTable
            })
        }
    }
    render() {
        return (
            <div id="divForTable">
                <table>
                    <tr className="firstRow">
                        <td>
                            LP
                        </td>
                        <td>
                            ILE
                        </td>
                        <td className="widthTd">
                            NAZWA GRUPY
                        </td>
                        <td className="none" id="toShow">
                            PRZYPISANE AUKCJE
                        </td>
                        <td>
                            RODZAJ
                        </td>
                        <td>
                            AKTYWNOŚĆ
                        </td>
                        <td>
                            #
                        </td>
                    </tr>
                    {this.state.content}
                </table>
            </div>
        );
    }
}

export default List;
