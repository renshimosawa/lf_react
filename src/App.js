import React, {useState} from 'react';
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
  const [value, setValue] = useState('') 
  const classes = useStyles(); 
  async function quickstart() {
    const auth = require('google-auth-library');
    const vision = require('@google-cloud/vision');
    const client = new vision.ImageAnnotatorClient();
    const [result] = await client.labelDetection('./resources/wakeupcat.jpg');
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  }
  quickstart();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="filled-basic" label="URL" variant="filled" onChange={(event) => setValue(event.target.value)} />
        <img src={value} style={{width:500}}></img>
      </form>
    </div>
  )
}
//https://bit.ly/3h6dNma

export default App
