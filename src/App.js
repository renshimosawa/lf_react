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

const App= () => {
  return (
    <div>
      aaa
    </div>
  )
}

export default App
