# masked-react-select

A combination of react-select and masked input to fullfil requirement where need a dropdown with creatable options
and allow only masked value.

## Features

- Allow to add masking on react-select

## Installation

```bash
npm install masked-react-select
```

## Usage

```javascript
import "./styles.css";
import { useState, useEffect } from "react";
import MaskedReactSelect from "masked-react-select";

export default function App() {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleCreateOption = (option) => {
    setOptions((prev) => [...prev, { label: option, value: option }]);
  };

  useEffect(() => {
    setSelected(options[options.length - 1]);
  }, [options]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MaskedReactSelect
        options={options}
        mask="+1 ___ ___ ____"
        replacement={{ _: /\d/ }}
        placeholder="+1 123 555 0123"
        onCreateOption={handleCreateOption}
        onChange={(option) => setSelected(option)}
        value={selected}
      />
    </div>
  );
}
```