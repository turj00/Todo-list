import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class Todos extends Component {
    render() {

        //console.log(this.props.name)
        return this.props.name.map( (n) => {

        return  <TodoItem key = {n.id} nameItem= {n}  markComplete= {this.props.markComplete} deleteTask={this.props.deleteTask}/> //kono kisu pass korle e props hoy oi js file e like "this.props." and that "key" is for console error remove


        })




    }
}

export default Todos
