import Header from './Header'; //including Header.js
import Footer from './Footer'; //including Footer.js
import Home from './Home';     //including Home.js
function App() {

  //rendering the files
  return (
    <div className="App">
      
       
          <Header></Header>
           <Home></Home>
          <Footer></Footer>
        
     
    </div>
  );
}

export default App;