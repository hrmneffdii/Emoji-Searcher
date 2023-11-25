import './App.css'

import { useState , useEffect} from 'react'
import axios from 'axios'

import Input from './components/Input';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Empty from './components/Empty';
import Emojis from './components/Emojis';

function App() {

  const [emojiData, setEmojiData] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  useEffect( () => {
    async function fetchEmojis(){
      setLoading(true)
      try {
        const res = await axios.get("https://run.mocky.io/v3/5a982f64-218d-45d7-a380-ebe924d55631")
        setEmojiData(res.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }

    fetchEmojis()
  }, [])

  const handleSearchText = (e)=>{
    setSearchText(e.target.value)
  }

  return (
    <>
     <Navbar/>
     <Container>
        <Input 
        onChange={handleSearchText}
        />
        {loading && (<Empty text={"Loading . . . "}/>)}
        {error && (<Empty text={"Upsss.. Errorr..."}/>)}
        {emojiData.length > 0 && (<Emojis emojiData={emojiData} searchText={searchText} /> )}
     </Container>
    </>
  )
}

export default App
