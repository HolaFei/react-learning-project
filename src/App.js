import 'antd/dist/reset.css';
import './App.css';
import { Divider, Typography } from 'antd';
import Header from './components/Header/Header'
import Description from './components/Description/Description';
import FormPlayer from './components/PersonForm';
import MyList from './components/MyList/MyList';
import CtxHeading from './components/CtxHeading/CtxHeading';

const { Paragraph } = Typography;

function App() {
  return (
    <div className="App">
      <Header />
      <Divider />
      <Description /> 
      <Divider />
      <Paragraph>
        这是一个最简单的表单，一开始使用useSate更新状态，然后换成了useImmer.
      </Paragraph>
      <FormPlayer />
      <Divider />
      <Paragraph>
        下面开始学习useReducer和useImmerReducer.
      </Paragraph>
      <MyList />
      <Divider />
      <Paragraph>
        好的，下面我们来看看useContext
      </Paragraph>
      <CtxHeading />
    </div>
  );
}

export default App;
