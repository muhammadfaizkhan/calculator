import './App.css';
import { Button, message, Table, Tabs } from 'antd';
import '../node_modules/antd/dist/antd.css';
import Logo from './Assets/logo.png'
import SimpleCalc from './Simple/SimpleCalc';
import ScientificCalc from './Scientific/ScientificCalc';


function App() {
  const {TabPane} = Tabs;
  return (
    <div className="calculator">
      <header className="calculator_header">
          <img src={Logo}/> 
          <h1>Calculator </h1>
      </header>
      <div className="calculator_plus_body">
          <div className="calculator_switch">
            <Tabs defaultActiveKey="1">
              <TabPane key={1} tab={
                <Button shape="round" type="primary">Simple</Button>
              }>
               <div className="simple">
                  <SimpleCalc/>
               </div>
              </TabPane>
            </Tabs>
          </div>
          <div className="calculator_footer">
              <p> &copy; 2021 Calculator - Designed and Developed by <a href="https://github.com/muhammadfaizkhan" target="_blank">Muhammad Faiz Khan</a></p>
          </div>
      </div>
    </div>
  );
}

export default App;

