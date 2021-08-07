import { stringToDate, getRemainning, secondsToDateString } from '../../../utils/format.js';
export default class OpenTip extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            interval: '',
            timer: -1,
            date: stringToDate(this.props.time)
        };
    }
    render() {
        return (React.createElement("div", { className: "open-tip" },
            React.createElement("h2", { className: "pill-label" }, "\u8FD9\u9897\u80F6\u56CA\u672A\u5230\u63D0\u53D6\u65F6\u95F4\uFF0C\u4E0D\u80FD\u6253\u5F00\u3002"),
            React.createElement("br", null),
            React.createElement("p", { className: "tips" },
                "\u6253\u5F00\u65F6\u95F4\u5728 ",
                React.createElement("span", null, this.props.time),
                " \uFF0C\u8DDD\u79BB\u73B0\u5728 ",
                React.createElement("span", null, this.state.interval)),
            React.createElement("div", { className: "pill-content" },
                React.createElement("span", null, this.props.name),
                " \u7ED9\u4F60\u7559\u7684\u63D0\u793A\u4FE1\u606F\uFF1A",
                React.createElement("span", null, this.props.tip))));
    }
    componentDidMount() {
        let timer = setInterval(this.getRemain.bind(this), 1000);
        this.setState({
            timer
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.timer);
    }
    getRemain() {
        let remain = getRemainning(this.state.date, new Date());
        if (remain >= 0) {
            clearInterval(this.state.timer);
        }
        this.setState({
            interval: secondsToDateString(Math.abs(remain))
        });
    }
}
//# sourceMappingURL=OpenTip.js.map