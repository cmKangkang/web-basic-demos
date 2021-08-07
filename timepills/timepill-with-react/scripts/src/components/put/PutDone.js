export default class PutDone extends React.Component {
    render() {
        return (React.createElement("div", { className: "put-done" },
            React.createElement("h2", { className: "page-title" }, "\u80F6\u56CA\u6DFB\u52A0\u6210\u529F"),
            React.createElement("div", { className: "form-item" },
                React.createElement("label", { htmlFor: "key" }, "\u80F6\u56CAKey"),
                React.createElement("input", { type: "text", name: "key", value: this.props._key, id: "key", disabled: "disabled" }),
                React.createElement("span", { className: "tips" }, "\u4F60\u53EF\u4EE5\u590D\u5236 key\u81EA\u5DF1\u4FDD\u5B58\uFF0C\u4E5F\u53EF\u4EE5\u53D1\u9001\u7ED9\u4F60\u7684\u597D\u53CB\uFF0C\u8BA9\u4ED6\u6765\u6253\u5F00\u80F6\u56CA\u3002"))));
    }
}
//# sourceMappingURL=PutDone.js.map