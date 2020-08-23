import React, { Component } from 'react'

export class AddTask extends Component {

    state = {

        title: ''

    }

    addingTask = (e) => 
        this.setState({ title: e.target.value})

    
    
    
    

    onSubmit = (e) =>{

        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    


    }


    render() {
        return (
            <div>
                <form style={{ display:'flex'}} onSubmit={this.onSubmit} >

                    <input 
                           type='text' 
                           placeholder='Add Task' 
                           style={{flex: '8', padding: '9px', borderRadius:'10px'}}
                           value= {this.state.title}
                           onChange= {this.addingTask}
                    >
                    </input>
                    
                    <input type='submit' 
                           value='Add' 
                           style={{ flex:'1', color: 'white' , background: 'green', borderRadius: '20px',border:'none'}}
                    >
                    </input>


                </form>
                
            </div>
        )
    }
}

export default AddTask
