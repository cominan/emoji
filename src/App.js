import { useState } from 'react';
import './App.css';
import resultSearch from './component/logic/resultSearch';
import Header from './component/theme/Header';
import Input from './component/theme/Input';
import RowEmoji from './component/theme/RowEmoji';
import Twosum from './component/theme/Twosum';

function App() {
  const [emoji, setEmoji] = useState([])
  const [value, setValue] = useState('')
  const strs = ["flower", "flow", "floght"]
  const handleChange = (e) => {
    setValue(e.target.value)
    setEmoji(resultSearch(e.target.value))
  }
  var longestCommonPrefix = function (strs) {
    for (let i = 0; i < strs[0].length; i++) {
      if(!strs.every(str => strs[0][i] === str[i])) {
        return strs[0].slice(0,i)
      }
    }
  }
  let x = longestCommonPrefix(strs)
  console.log(x);

  return (
    <div className="App container">
      <Header />
      <Input value={value} funChange={handleChange}></Input>
      <RowEmoji data={emoji}></RowEmoji>
    </div>
  );
}

export default App;
