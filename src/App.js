import React, { Component } from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/Header'
import AddTask from './components/AddTask'
import About from './components/pages/About'
export class App extends Component {

  state = {

    todos: [

      {

        id: 1,
        title: 'Eat Burger',
        completed: false


      },

      {

        id: 2,
        title: 'Do Exercise',
        completed: false


      },

      {

        id: 3,
        title: 'Eat Again',
        completed: false


      }


    ]



  }        

markComplete = (id) => {

    this.setState(
      {
        
        todos: this.state.todos.map( m =>{

            if(m.id === id){

              m.completed = !m.completed //learn ! 

            }

            return m // setState e return must

        })




    })


}

//delete task IMPORTANT!!! LEARN THIS!!!

deleteTask= (id) => {

  this.setState({todos: [...this.state.todos.filter(todo =>todo.id !== id)]})

 // console.log(id)

}

addTodo = (title) =>{

  if(title){

    
  
  

    const  newTodo = {

      id: Math.random() ,
      title: title,
      completed: false

    }
  

 // console.log(title)
  this.setState({ todos: [...this.state.todos, newTodo]})
  }

  else if(!title){

    alert("oopps...Cant add empty field. Please type something")
  
  }



}
  render() {
    return (
      <Router>
        <div>
          <Header/> 
          <Route exact path="/" render={ props => (
            //exact in route tag is needed so that about page doesnt show on main page when loads

                <React.Fragment>

              <AddTask addTodo={this.addTodo}/>
              <Todos name={this.state.todos} markComplete= {this.markComplete} deleteTask={this.deleteTask}/>

               </React.Fragment>


          )} />

            <Route path="/About" component={About} />
          
        </div>
      </Router>
    )
  }
}




export default App

