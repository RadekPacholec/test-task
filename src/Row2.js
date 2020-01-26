import React, { Component } from 'react'
import edit from './img/edit.png'
import grid from './img/grid.png'

class Row extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {

        }
        if (this.props.content.aktywnosc == true) {
            var txt = "TAK"
        }
        else {
            var txt = "NIE"
        }
        this.state.txt = txt
        var rows = this.props.content.przypisaneAukcje.map(function (item) {
            return (
                <p>
                    {item}
                </p>
            )
        })
        this.state.rows = rows
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.num}
                </td>
                <td>
                    {this.props.content.ile}
                </td>
                <td className="widthTd">
                    {this.props.content.nazwaGrupy}
                </td>
                <td className="widthTd">
                    {this.state.rows}
                </td>
                <td>
                    {this.props.content.rodzaj}
                </td>
                <td>
                    <p>
                        {this.state.txt}
                    </p>
                </td>
                <td>
                    <img src={edit} />
                    <img src={grid} />
                </td>
            </tr>
        )
    }
}

export default Row
