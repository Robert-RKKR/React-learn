import Test from './components/Test'
import Api from './components/Api'
import Device from './components/Device'
import Objects from './components/Objects'

const itemList = [
  {
    id: 1,
    name: "LAB-1",
    description: "Description-1",
  },
  {
    id: 2,
    name: "LAB-2",
    description: "Description-2",
  },
  {
    id: 3,
    name: "LAB-3",
    description: "Description-3",
  },
  {
    id: 4,
    name: "LAB-4",
    description: "Description-4",
  },
  {
    id: 5,
    name: "LAB-5",
    description: "Description-5",
  },
];

function App() {
    return (
      <div className="container">
        {/* <h1>AutoCli</h1> */}
        <div>
            {/* <Test name="LAB-1" description="Description-1" pap="PSP"><li>Test children</li></Test> */}
            {/* {itemList.map((item) => {
              return <Test key={item.id} {...item}></Test>
            })}; */}
            {/* <Api /> */}
            {/* <Device /> */}

            
            {/* <div>
              <Objects url="http://127.0.0.1:8000/api/inventory/device" />
            </div> */}
            <div>
              <Objects url="http://127.0.0.1:8000/api/logger/log" />
            </div>
        </div>
      </div>
    );
  }
  
  export default App;
  