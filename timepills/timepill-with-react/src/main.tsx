import Home from './components/Home.js';
import PutPage from './components/put/PutPage.js';
import OpenPage from './components/open/OpenPage.js';
interface State {
  route: string,
  rootPath: string
}
class App extends React.Component<any, State> {
  state: State = {
    // 使用hash路由模式在页面刷新时获取hash值，以此来匹配组件，可实现路由效果
    route: '/home',
    rootPath: 'index.html',
  }
  render() {
    let component;
    switch(this.state.route) {
      case '/home': component = <Home route={this.handleRouteChange}/>; break;
      case '/put': component = <PutPage route={this.handleRouteChange}/>; break;
      case '/open': component = <OpenPage route={this.handleRouteChange}/>; break;
    }
    return <div className="wrapper">
      {component}
    </div>
  }

  handleRouteChange = (to: string) => {
    location.hash = to
  }

  componentDidMount() {
    this.setRoute();
    window.addEventListener('hashchange', this.setRoute);
  }

  setRoute = () => {
    let hash = location.hash.split('#')[1];
    let route = '/home';
    switch(hash) {
      case '/home' : route = '/home'; break;
      case '/put' : route = '/put'; break;
      case '/open' : route = '/open'; break;
      default: route = '/home'; break;
    }
    this.setState({
      route
    })
    /**
     * history 模式改变 url 的方式会导致刷新时浏览器向服务器发送请求，
     * 这不是我们想看到的，我们需要在服务器端做处理：
     * 如果匹配不到任何静态资源，则应该始终返回同一个 html 页面。
     */
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.setRoute);
  }
}

ReactDOM.render(<App />, document.getElementById('app'))