import Navbar from './components/Navbar';
import News from './components/News';
import { useState } from 'react';
function App() {

  const [mod_text, setmod_text] = useState("Enable Dark mod")
  const [mod, setmod] = useState("light")
  const [text_color, settext_color] = useState("dark")
  const [heading, setheading] = useState("Today's Main Headlines")
  const tooglemod=()=>{
    if(mod==='light'){
      setmod('dark');
      setmod_text('Disable Dark Mod');
      settext_color("light");
      document.body.style.backgroundColor='#042743';
      
    }else{
      setmod('light');
      setmod_text('Enable Dark Mod');
      settext_color("dark");

      document.body.style.backgroundColor='white';

    }
  }

  return (
   <>
   <Navbar tittle={"News.org"} mod_text={mod_text} mod={mod} text_color={text_color} tooglemod={tooglemod}/>
   <News heading={heading} text_color={text_color}/>
   </>
  );
}

export default App;
