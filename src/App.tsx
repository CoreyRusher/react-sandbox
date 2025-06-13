import BasicList from './components/BasicList';
import Message from './components/Message'
import AlertTest from './components/Alert'
import ButtonExample from './components/ButtonExample';
import { useState } from "react";

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
    {isClicked && <AlertTest severity='warning' parentCallback={handleCallback}>Hello World</AlertTest>}
    <div><Message /></div>
    <div><BasicList items = {items} heading={heading} onSelectItem={handleSelectItem}/></div>
    <ButtonExample text='Click Me' onClickedEvent={handleButtonClick} color='error' disabled={isClicked}></ButtonExample>
  </>
  )
}

export default App;