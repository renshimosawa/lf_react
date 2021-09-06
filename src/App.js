import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Sample = {
  foo: {num: 2}, 
  bar: {num: -1}, 
  buz: {num: null}, 
  qux: {}, 
  quux: null
}
let arr = []
for (let key in Sample) {
  if (typeof Sample[key] === 'object') {
    for (let key2 in Sample[key]) {
      if (typeof Sample[key][key2] === 'number'){
        arr.push([Sample[key]])
      }
    }
  }
}
console.log(arr)

const Sample2 = [{foo: 1}, {bar: 2}, {foo: -2}, {foo: 3, bar: 4}] 
const fooSum = Sample2.map((item) => item.foo).filter(v => v).reduce((sum,num) => sum + num) 
const barSum = Sample2.map((item) => item.bar).filter(v => v).reduce((sum,num) => sum + num) 
console.log({'foo' : fooSum, 'bar' : barSum});


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '90vw',
    },
  },
}));

const App= () => {
  const classes = useStyles();  
  return (
    <div>
      {/* <img src="https://images.unsplash.com/photo-1624313976899-0fd4989a2fcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"></img> */}
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic" label="URL" variant="filled" />
</form>
    </div>
  )
}

export default App
