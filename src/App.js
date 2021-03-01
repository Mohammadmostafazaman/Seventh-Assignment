import './App.css';
import Header from './components/Header/Header';
import Players from './components/Players/Players';

function App() {
  return (
    <>
      <Header></Header>
      <main className='py-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <Players></Players>
            </div>
            <div className='col-lg-3'>Player Price</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
