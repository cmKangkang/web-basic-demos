import Header from '../header/Header.js';
import { getRemainning, stringToDate } from '../../../utils/format.js';
import { getPill } from '../../../utils/store.js';
import NoSUchKey from './NoSuchKey.js';
import OpenInfo from './OpenInfo.js';
import OpenTip from './OpenTip.js';
export default class OpenPage extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            // 此处利用flag来分辨当前页，也可使用同put的方式，更改route时改变url与组件，实现页面路由效果
            flag: 0,
            pill: undefined,
            input: ''
        };
        this.handleInputChange = () => {
            let value = event.target.value || '';
            this.setState({
                input: value
            });
        };
        this.handleClick = () => {
            let flag = 0;
            if (this.state.input.trim().length < 1) {
                this.setState({ flag });
                return;
            }
            let pill = getPill(this.state.input);
            console.log(pill);
            // 错误验证
            if (!pill) {
                // 没有该胶囊
                flag = 1;
                this.setState({ flag });
                return;
            }
            if (getRemainning(stringToDate(pill.time), new Date()) < 0) {
                // 未到时间
                flag = 2;
            }
            else {
                flag = 3;
            }
            this.setState({
                flag,
                pill
            });
        };
    }
    render() {
        let component = '';
        if (this.state.pill) {
            let { time, name, tip, info, key } = this.state.pill;
            switch (this.state.flag) {
                case 1:
                    component = React.createElement(NoSUchKey, null);
                    break;
                case 2:
                    component = React.createElement(OpenTip, { time: time, name: name, tip: tip, key: key });
                    break;
                case 3:
                    component = React.createElement(OpenInfo, { time: time, name: name, info: info, key: key });
                    break;
                default: component = '';
            }
        }
        else {
            switch (this.state.flag) {
                case 1:
                    component = React.createElement(NoSUchKey, null);
                    break;
                default: component = '';
            }
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(Header, { path: '/open', route: this.props.route }),
            React.createElement("div", { className: "open-main" },
                React.createElement("div", { className: "open" },
                    React.createElement("h1", { className: "page-title" }, "\u6253\u5F00\u80F6\u56CA"),
                    React.createElement("div", { className: "open-input" },
                        React.createElement("label", { htmlFor: "" }, "\u80F6\u56CAKey: "),
                        React.createElement("input", { type: "text", name: "key", value: this.state.input, id: "key", onChange: this.handleInputChange }),
                        React.createElement("div", { className: "submit-btn", onClick: this.handleClick }, "\u6253\u5F00\u80F6\u56CA"))),
                component)));
    }
}
//# sourceMappingURL=OpenPage.js.map