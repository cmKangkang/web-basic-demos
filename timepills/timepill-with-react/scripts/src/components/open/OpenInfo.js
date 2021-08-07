export default class OpenInfo extends React.Component {
    render() {
        return (React.createElement("div", { className: "open-content" },
            React.createElement("h2", { className: "pill-label" },
                this.props.name,
                " \u5728 ",
                this.props.time,
                " \u5BF9\u4F60\u8BF4\uFF1A"),
            React.createElement("div", { className: "pill-content" }, this.props.info)));
    }
}
//# sourceMappingURL=OpenInfo.js.map