import React,{Component} from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import fire from "./fire";
import 'brace/mode/java';
import 'brace/theme/github';

class Editor extends Component
{
	constructor(props)
	{
		super (props);
		this.state =
		{
			code : ""
		}

	}
componentDidMount()
{
  fire.database().ref("/doc").on("value",(snapshot)=>
  {
  	let val = snapshot.val();
  	this.setState({
  		code:val
  	})
  	
  })
}

handlechange(data)
{
	fire.database().ref("/doc").set(data);
}
// Render editor
render()
{
	return(
		<div>
	<h1>Editor</h1>
  <AceEditor
    mode="java"
    theme="github"
    value= {this.state.code}
    onChange={(data)=>this.handlechange(data)}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{$blockScrolling: true}}
  >
  </AceEditor>
  
  </div>
  )
}

}

export default Editor;