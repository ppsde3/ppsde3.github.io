import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      input:'',
      output:''
    }
	
    this.handleClick=this.handleClick.bind(this);
    this.handleClear=this.handleClear.bind(this);
    this.handleBack=this.handleBack.bind(this);
  }
  

    handleBack(){
      var ans= this.state.output;
      this.setState({
        output : ans.substr(0,ans.length-1)
      })
    }

    handleClick(eve){
      this.setState({
        input: (this.state.input)  + eve.target.value,
      })
    
	   // Store the mobile keypad mappings
	   let nums = [ "", "1", "ABC", "DEF", "GHI",
	   "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
	   let S=this.state.input + eve.target.value;
	   console.log(S);
        let result=" ";
       let str = S.split("");

       // Traverse the string str
        let i = 0;
       while (i < str.length)
     { 

		// If the current character is
		// '.', then continue to the
		// next iteration
		if (str[i] === '.')
		{
		i++;
		continue;
		}

		// Stores the number of
		// continuous clicks
		let count = 0;

		// Iterate a loop to find the
		// count of same characters
		while (i + 1 < str.length &&
			str[i] === str[i + 1])
		{
		
		// 2, 3, 4, 5, 6 and 8 keys will
		// have maximum of 3 letters
		if (count === 2 && ((str[i] >= '2' &&
			str[i] <= '6') || (str[i] === '8')))
			break;

		// 7 and 9 keys will have
		// maximum of 4 keys
		else if (count === 3 && (str[i] === '7' ||
								str[i] === '9'))
			break;
			
		count++;
		i++;

		// Handle the end condition
		if (i === str.length)
			break;
		}

		// Check if the current pressed
		// key is 7 or 9
		if (str[i] === '7' || str[i] === '9')
		{
		result+= nums[str[i].charCodeAt(0) - 48][count % 4];
		}
		else if(str[i]==='1'){
			result+= '1';
		}

		// Else, the key pressed is
		// either 2, 3, 4, 5, 6 or 8
		else
		{
		result+= nums[str[i].charCodeAt(0) - 48][count % 3];
		}
		i++;
		}

      this.setState({
		  output: result,
	  })
    }

    handleClear(){
      this.setState({
        input: "",
        output: ""
      })
    }

  render(){
  return (
    <div className="App">
      <form>
        <table>
          <tr>
          <td colSpan="4">
            <input type="text" name="display" id="display" value={this.state.output} readOnly/>
           </td>
          </tr>
         <tr>
            <td><input type="button" name="one" value="1" placeholder="1" onClick={this.handleClick}/></td>
            <td><input type="button" name="two" value="2" placeholder="2ABC" onClick={this.handleClick}/></td>
            <td><input type="button" name="three" value="3" onClick={this.handleClick}/></td>
         </tr>
         <tr>
            <td><input type="button" name="four" value="4" onClick={this.handleClick}/></td>
            <td><input type="button" name="five" value="5" onClick={this.handleClick}/></td>
            <td><input type="button" name="six" value="6" onClick={this.handleClick}/></td>
          </tr>
         <tr>
            <td><input type="button" name="seven" value="7" onClick={this.handleClick}/></td>
            <td><input type="button" name="eight" value="8" onClick={this.handleClick}/></td>
            <td><input type="button" name="nine" value="9" onClick={this.handleClick}/></td>
          </tr>
        <tr>
		<td><input type="button" name="doit" value="*" onClick={this.handleClick}/></td>
            <td><input type="button" name="zero" value="0" onClick={this.handleClick}/></td>
            <td><input type="button" name="doit" value="#" onClick={this.handleClick}/></td>
        </tr>
        <tr>
		  <td><input type="button" id="clear" name="clear" value="C" onClick={this.handleClear}/></td>
            <td><input type="button" name="back" value="<-" onClick={this.handleBack}/></td>
        </tr>
        </table>
        </form>
        </div>
  );
}}  

export default App;
