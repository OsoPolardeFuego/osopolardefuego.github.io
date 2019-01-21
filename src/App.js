import React from 'react'
import MyInfo from './components/myinfo.js'
import FetchExample from './components/freedata.js'

export {App}



var number = [1,2,3,4,5]
var numberList = number.map(function(val,ind){
    return <li>{val}</li>
  })

 class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {value:'zzzz',
                  date: new Date()}
  }

  componentDidMount(){
    this.TimerID = setInterval(
      ()=>this.tick(),1000
      )
  }

  componentWillUnmount(){
    clearInterval(this.TimerID)
  }

  tick() { 
      this.setState({
        date: new Date()
    });
  }


  render(){
    return(
      <div>
      <h1>hi</h1>
<p>{this.state.date.toLocaleTimeString()}</p>
<p>{number}</p>
<table>
<tr>
<th>server</th>
<th>total</th>
</tr>
<tr>
<td>{dd}</td>
<td>{ee}</td>
</tr>
<tr>
<th>grand total</th>
<th>{ff}</th>
</tr>
</table>
<FetchExample/>
<MyInfo/>
</div>
      )
  }
}



  var orders = [
  {
    id: 101,
    server: "Mindy Kaling",
    subtotal: 473,
    tax: 24
  },
  {
    id: 102,
    server: "Nina Totenberg",
    subtotal: 1053,
    tax: 52
  },
  {
    id: 103,
    server: "Serena Williams",
    subtotal: 1497,
    tax: 75
  },
  {
    id: 104,
    server: "Mindy Kaling",
    subtotal: 251,
    tax: 12
  },
  {
    id: 105,
    server: "Malala Yousafzai",
    subtotal: 1715,
    tax: 85
  },
  {
    id: 106,
    server: "Nina Totenberg",
    subtotal: 320,
    tax: 16
  }
]

//b = new Set(...[orders.map((val,ind,a)=>{return val.server})])
//o = orders.map((val,ind)=>{val["totz"]=val.subtotal+val.tax})

  function convertObj(obj){
  let result = [];
  for(var prop in obj){result.push(obj[prop])};
  result.map((val,ind)=>{val["total"]=val.subtotal+val.tax})
  
    return result
}

var b = orders.reduce((acc,val)=>{
  var obj = null
  obj = val;
  if(!acc[val.server]){
    acc[val.server] = obj
  }
  else{
    let name = acc[val["server"]]
    name["subtotal"]+=val.subtotal
    name["tax"]+=val.tax
  }

  return acc
},{})

var cc = convertObj(b);
var dd = cc.map((val,ind)=>{
  return <p>{val.server}</p>

})

var ee = cc.map((val,ind)=>{
  return <p>{val.total}</p>

})

var ff = cc.reduce((acc,val)=>{
    return acc+=val.total
},0)


var dog = {name:'justin'}

switch(dog){
  case dog.name='justin':
    console.log('asdf')
    break;
  default:
  console.log('no')
}















