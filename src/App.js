import Test from './components/Test'
import Api from './components/Api'

const alfa = {
    name: "LAB-111",
    description: "Description-111",
}

function App() {
    return (
      <div className="container">
        <h1>AutoCli</h1>
        <div className='test-box'>
            <Test name="LAB-1" description="Description-1" />
            <Test name="LAB-2" />
            <Test name="LAB-3" description="Description-3" />
            <Test name="LAB-4" description="Description-4" />
            <Test name="LAB-5" />
            <Api />
        </div>
      </div>
    );
  }
  
  export default App;
  