# masked-react-select

A powerful and flexible React Select component with built-in input masking support. Ideal for handling formatted inputs such as phone numbers, currency values, OTPs, and custom patterns.

---

## ✨ Features

* 🎭 Input masking support
* ⚛️ Built on top of React Select
* 🔧 Fully customizable
* 🧩 Easy integration with forms
* 💡 Supports dynamic masks
* 🚀 Lightweight and performant

---

## 📦 Installation

```bash
npm install masked-react-select
```

or

```bash
yarn add masked-react-select
```

---

## 🚀 Usage

```jsx
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

---

## 🧠 Props

| Prop             | Type        | Description                                                |
| ---------------- | ----------- | ---------------------------------------------------------- |
| `options`        | Array       | List of selectable options (`{ label, value }`)            |
| `mask`           | String      | Mask pattern (e.g. `+1 ___ ___ ____`)                      |
| `replacement`    | Object      | Defines mask rules (e.g. `{ _: /\d/ }` allows digits only) |
| `placeholder`    | String      | Input placeholder text                                     |
| `onCreateOption` | Function    | Callback when user creates a new option                    |
| `onChange`       | Function    | Triggered when selected value changes                      |
| `value`          | Object/null | Controlled selected value                                  |

---

## 🎯 Use Cases

* 📱 Phone number input
* 💳 Credit card formatting
* 🔐 OTP fields
* 💰 Currency inputs
* 🧾 Custom formatted inputs

---

## 🛠️ Tech Stack

* React
* React Select
* JavaScript / TypeScript

---

## 📄 License

MIT

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## ⭐ Support

If you like this package, please give it a ⭐ on GitHub!
