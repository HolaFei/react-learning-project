import 'antd/dist/reset.css';
import './App.css';
import { Divider, Typography } from 'antd';
import Header from './components/Header/Header'
import Description from './components/Description/Description';
import FormPlayer from './components/PersonForm';
import MyList from './components/MyList/MyList';
import CtxHeading from './components/CtxHeading/CtxHeading';
import CustomProvider from './components/CustomProvider/CustomProvider';

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
      <Divider />
      <Paragraph>
        下面是一个将reducer和context相结合的案例。
      </Paragraph>
      <Paragraph>
        说白了，就是将一个useReducer提供的state和dispatch，通过两个context的Provider来提供给下面的组件使用。
      </Paragraph>
      <Paragraph>
        并且在同一个文件中提供一个Provider的高阶组件，被它包裹的子组件都可以使用这两个context提供的state和dispatch.
      </Paragraph>
      <Paragraph>
        还可以用自定义hook来封装使用state和dispatch的两个useContext
      </Paragraph>
      <CustomProvider />
      <Divider />
    </div>
  );
}

export default App;
