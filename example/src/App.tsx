import { useState } from 'react'
import  MaskedReactSelect  from 'masked-react-select'
import './App.css'

function App() {
  const [value, setValue] = useState<{value:string,label:string} | null>(null)
 const [options, setOptions] = useState<{value:string,label:string}[]>([
  { value: '12345', label: 'Option 1' },
  { value: '67890', label: 'Option 2' },
])

 const onCreateOption = (val: string) => {
  setOptions([...options, {value:val,label:`Option ${options.length + 1}`}])
  setValue({value:val,label:`Option ${options.length + 1}`})
 }

  return (
    <div className="App">
      <h1>Masked React Select Demo</h1>
      <div style={{ width: '300px', margin: '0 auto', textAlign: 'left' }}>
        <p>This is a demo of the <code>masked-react-select</code> package running locally.</p>
        <MaskedReactSelect
        inputId="masked-react-select"
        onBlur={()=>{}}
        onCreateOption={onCreateOption}
        options={options}
        mask="+0 (___) ___-__-__" 
        replacement={{ _: /\d/ }}
        value={value}
        onChange={(val) => setValue(val)}
        placeholder="+0 (___) ___-__-__"
        />
        <div style={{ marginTop: '20px' }}>
          <strong>Selected Value:</strong> {value ? JSON.stringify(options) : 'None'}
        </div>
      </div>
    </div>
  )
}

export default App
