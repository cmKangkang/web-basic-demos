import Header from '../header/Header.js';
import PutMain from './PutMain.js';
import PutDone from './PutDone.js';
import { addPill } from '../../../utils/store.js';
export default class PutPage extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            // 使用hash路由
            route: '/main',
            _key: ''
        };
    }
    render() {
        let component;
        switch (this.state.route) {
            case '/main':
                component = React.createElement(PutMain, { addPill: this.addPill.bind(this) });
                break;
            case '/done':
                component = React.createElement(PutDone, { _key: this.state._key });
                break;
            default:
                component = React.createElement(PutMain, { addPill: this.addPill.bind(this) });
                break;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(Header, { path: '/put', route: this.props.route }),
            component));
    }
    addPill(pill) {
        // 请求数据
        let key = addPill(pill);
        if (key) {
            this.setState({
                _key: key
            });
        }
        // 设置路由
        this.setRoute('/done');
    }
    setRoute(to) {
        // 设置路由
        this.setState({
            route: to
        });
        location.hash = '/put#' + to;
    }
}
//# sourceMappingURL=PutPage.js.map