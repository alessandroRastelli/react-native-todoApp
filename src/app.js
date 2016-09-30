import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import Button from 'react-native-button';
import CheckBox from 'react-native-checkbox';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', todos:[]};
  }

  onChangeValue (newText) {
  	this.setState((state) => ({text: newText}))
  }

  add(){
  	this.state.todos.push({name: this.state.text, check:false })
  	this.setState((state) => ({todos: this.state.todos}))
  }

  remove(index){
  	this.state.todos.splice(index, 1);
   	this.setState((state) => ({ todos: this.state.todos}))
  }

  checkTodo(index){
	this.state.todos[index].check = !this.state.todos[index].check;
	this.setState((state) => ({ todos: this.state.todos }))
  }

  render() {
    return (
      <View style={{padding: 10}}>
	      	<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
		      	<TextInput
		          style={{flex:2,height: 40}}
		          placeholder="Type here to insert Todo!"
		          onChangeText={ this.onChangeValue.bind(this)}
		        />
		        <Button
			        style={{flex:1,fontSize: 20, color: 'green'}}
			        styleDisabled={{color: 'red'}}
			        onPress={() => this.add()}>
			        ADD
		      	</Button>
		    </View>
	      	<View style={{flex: 1, flexDirection: 'row'}}>
	      		<Text style={{flex: 1}}>ToDo:{this.state.todos.filter((todo) => {
									      return ( ( todo.check == false));
									    	}).length } </Text>
				<Text style={{flex: 1}}>Done:
				{this.state.todos.filter((todo) => {
			    							return ( ( todo.check == true));
									    	}).length} </Text>
	        
	     	</View>
       
      		{this.state.todos.map((todo,i)=>
      		<View style={{flex: 1, padding: 4, flexDirection: 'row', justifyContent: 'space-between'}}>
		      	<CheckBox
		      	  label={todo.name}
				  checked={todo.check}
				  onChange={() => this.checkTodo(i)}
				/>
		         <Button
			        style={{flex:1, color: 'green'}}
			        styleDisabled={{color: 'red'}}
			        onPress={() => this.remove(i)}>
			        Delete
	      		</Button>
            </View>
         )}
      </View>
         
    );
  }
}

AppRegistry.registerComponent('TodoApp', () => InputTodo);
