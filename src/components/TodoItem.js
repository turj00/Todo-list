import React, { Component } from 'react'

export class TodoItem extends Component {

    getStyle = () => {

        if(this.props.nameItem.completed){

            return {
 
                textDecoration: 'line-through',
                color:'green',
                background:'#E5DEDD'
                
 
             }
         } else{
 
             return {
                 textDecoration: 'none',
                 background: '#E5DEDD'

             }
 
         }

       
      


    }

    

    render() {

        const { id, title  } = this.props.nameItem
        return (
            <div>
                
                <h1 style={ this.getStyle() } >

                    <input type='checkbox' onChange= {this.props.markComplete.bind(this,id)}></input> 
                    
                    
                       { title } 

                      <button  style={crossBtnStyle} onClick={this.props.deleteTask.bind(this,id)}> X </button>

                      
                 
                </h1>
            </div>
        )
    }

    



}

const crossBtnStyle= {

    background: 'red',
    color: 'white',
    padding: '9px' ,
    float: 'right',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer'



}



export default TodoItem
