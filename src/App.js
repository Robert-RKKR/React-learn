import Test from './components/Test'

const alfa = ['A', 'b', 'c']

function App() {
    return (
      <div className="container">
        <h1>AutoCli</h1>
        <div className='test-box'>
            <Test name="LAB-1" />
            <Test name="LAB-2" />
            <Test name="LAB-3" />
            <Test name="LAB-4" />
            <Test name="LAB-5" />
        </div>
      </div>
    );
  }
  
  export default App;
  