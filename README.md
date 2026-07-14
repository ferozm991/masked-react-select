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
import React from "react";
import MaskedReactSelect from "masked-react-select";

const options = [
  { label: "India (+91)", value: "+91" },
  { label: "USA (+1)", value: "+1" }
];

function App() {
  return (
    <MaskedReactSelect
      options={options}
      mask="+99 99999 99999"
      placeholder="Enter phone number"
    />
  );
}

export default App;
```

---

## 🧠 Props

| Prop          | Type     | Description                           |
| ------------- | -------- | ------------------------------------- |
| `options`     | Array    | Select options                        |
| `mask`        | String   | Mask pattern (e.g. `+99 99999 99999`) |
| `placeholder` | String   | Input placeholder                     |
| `onChange`    | Function | Callback when value changes           |
| `value`       | Any      | Controlled value                      |

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
