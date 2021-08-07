import { ifNameValidate, ifEMailValidate, ifTimeValidate, ifContentValid } from '../../../utils/format.js';
import { dateToString } from '../../../utils/format.js';
export default class PutMain extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            pill: {
                name: '',
                email: '',
                time: '',
                info: '',
                tip: '',
                key: ''
            },
            errInit: true,
        };
        this.handleInputChange = (type) => {
            // console.log('input change')
            let value = event.target.value;
            let pill = this.state.pill;
            switch (type) {
                case 'name':
                    pill.name = value;
                    break;
                case 'email':
                    pill.email = value;
                    break;
                case 'time':
                    pill.time = value;
                    break;
                case 'info':
                    pill.info = value;
                    break;
                case 'tip':
                    pill.tip = value;
                    break;
            }
            this.setState({
                pill
            });
        };
        this.handleSubmit = () => {
            // 确定
            if (this.state.errInit) {
                this.setState({
                    // 首次，之后可以显示错误信息
                    errInit: false,
                });
            }
            // 验证合法性
            let { name, email, time, info, tip } = this.state.pill;
            if (ifNameValidate(name) &&
                ifEMailValidate(email) &&
                ifTimeValidate(time) &&
                ifContentValid(info)) {
                // 合法的操作
                console.log('验证通过。');
                // 调用
                this.props.addPill(this.state.pill);
                this.setState({
                    pill: {
                        name: '',
                        email: '',
                        time: '',
                        info: '',
                        tip: '',
                        key: ''
                    }
                });
            }
        };
    }
    render() {
        let { name, email, time, info, tip } = this.state.pill;
        let init = this.state.errInit;
        let nameErr = init ? '' : !ifNameValidate(name) ? React.createElement("div", { className: "err" }, "\u540D\u5B57 \u5FC5\u987B\u586B\u5199") : '';
        let timeErr = init ? '' : time.trim().length <= 0 ? React.createElement("div", { className: 'err' }, "\u65F6\u95F4 \u5FC5\u987B\u586B\u5199") : (!ifTimeValidate(time) ? React.createElement("div", { className: "err" }, "\u65F6\u95F4 \u683C\u5F0F\u4E0D\u6B63\u786E") : '');
        let emailErr = init ? '' : email.trim().length <= 0 ? React.createElement("div", { className: 'err' }, "\u65F6\u95F4 \u5FC5\u987B\u586B\u5199") : (!ifEMailValidate(email) ? React.createElement("div", { className: "err" }, "\u90AE\u7BB1\u5730\u5740 \u683C\u5F0F\u4E0D\u6B63\u786E") : '');
        let contentErr = init ? '' : !ifContentValid(info) ? React.createElement("div", { className: "err" }, "\u5185\u5BB9\u5FC5\u987B\u586B\u5199") : '';
        return (React.createElement("div", { className: "put-main" },
            React.createElement("h1", { className: "page-title" }, "\u6DFB\u52A0\u80F6\u56CA"),
            React.createElement("div", { className: "form" },
                React.createElement("div", { className: "form-item" },
                    React.createElement("label", { htmlFor: "name" }, "\u4F60\u7684\u540D\u5B57"),
                    nameErr,
                    React.createElement("input", { type: "text", name: "name", value: name, id: "name", onChange: () => this.handleInputChange('name') })),
                React.createElement("div", { className: "form-item" },
                    React.createElement("label", { htmlFor: "email" }, "\u4F60\u7684\u90AE\u7BB1"),
                    emailErr,
                    React.createElement("input", { type: "text", name: "email", value: email, id: "email", onChange: () => this.handleInputChange('email') })),
                React.createElement("div", { className: "form-item" },
                    React.createElement("label", { htmlFor: "time" }, "\u6253\u5F00\u65F6\u95F4"),
                    timeErr,
                    React.createElement("input", { type: "text", name: "time", value: time, id: "time", onChange: () => this.handleInputChange('time') }),
                    React.createElement("span", { className: "tips" }, "\u6253\u5F00\u65F6\u95F4\u4E4B\u524D\uFF0C\u80F6\u56CA\u5185\u5BB9\u4E0D\u53EF\u89C1\u3002")),
                React.createElement("div", { className: "form-item" },
                    React.createElement("label", { htmlFor: "info" }, "\u80F6\u56CA\u5185\u5BB9"),
                    contentErr,
                    React.createElement("textarea", { name: "info", value: info, id: "info", cols: "50", rows: "8", onChange: () => this.handleInputChange('info') }),
                    React.createElement("span", { className: "tips" }, "\u80F6\u56CA\u5185\u5BB9\u4E0D\u80FD\u8D85\u8FC75000\u5B57\u3002")),
                React.createElement("div", { className: "form-item" },
                    React.createElement("label", { htmlFor: "tip" }, "\u672A\u5230\u65E5\u671F\u63D0\u793A\u4FE1\u606F"),
                    React.createElement("textarea", { name: "tip", value: tip, id: "tip", cols: "50", rows: "3", onChange: () => this.handleInputChange('tip') }),
                    React.createElement("span", { className: "tips" }, "\u5728 \u6253\u5F00\u65F6\u95F4 \u4E4B\u524D\u6253\u5F00\u80F6\u56CA\uFF0C\u4F1A\u770B\u5230\u63D0\u793A\u4FE1\u606F\u3002")),
                React.createElement("button", { className: "submit-btn", onClick: this.handleSubmit }, "\u6DFB\u52A0\u80F6\u56CA"))));
    }
    componentDidMount() {
        let time = dateToString(new Date());
        let pill = this.state.pill;
        pill.time = time;
        this.setState({
            pill
        });
    }
}
//# sourceMappingURL=PutMain.js.map