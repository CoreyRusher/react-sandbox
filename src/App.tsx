import BasicList from './components/BasicList';
import Message from './components/Message'
import AlertTest from './components/Alert'
import ButtonExample from './components/ButtonExample';
import { useState } from "react";
import AppLayout from './components/AppLayout';

function App() {
const [isClicked, setIsClicked] = useState(false)

  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London'
  ];
  let heading = 'Cities'
  const handleSelectItem = (item : String) => {console.log(item)}
  const handleButtonClick = () => {setIsClicked(true)}
  const handleCallback = (childData : boolean) => {
    setIsClicked(childData)
  }
  
  return (
  <>
    <AppLayout />
  </>
  )
}

export default App;