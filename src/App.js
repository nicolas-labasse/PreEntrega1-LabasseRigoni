import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer titulo={"Lo sentimos!"} contenido={"Todavia no tenemos productos, la web aun se encuentra en construccion."} />
      <Footer />
    </div>
  );
}

export default App;
