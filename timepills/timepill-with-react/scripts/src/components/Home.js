export default class Home extends React.Component {
    render() {
        return (React.createElement("div", { className: "home-main" },
            React.createElement("div", { className: "big-logo" },
                React.createElement("img", { src: "./img/logo_big.png" })),
            React.createElement("h1", { className: "home-title" }, "\u65F6\u95F4\u80F6\u56CA"),
            React.createElement("ul", { className: "home-nav" },
                React.createElement("li", { className: "home-nav-item" },
                    React.createElement("a", { href: "", onClick: this.handleClick.bind(this, '/put') },
                        React.createElement("h1", null, "Put"),
                        React.createElement("span", null, "\u6DFB\u52A0"))),
                React.createElement("li", { className: "home-nav-item" },
                    React.createElement("a", { href: "", onClick: this.handleClick.bind(this, '/open') },
                        React.createElement("h1", null, "Open"),
                        React.createElement("span", null, "\u6253\u5F00")))),
            React.createElement("div", { className: "home-footer" },
                React.createElement("a", { href: "#i've-no-idea", title: "\u522B\u70B9\uFF0C\u6211\u4E5F\u4E0D\u6653\u5F97~" }, "\u4EC0\u4E48\u662F\u65F6\u95F4\u80F6\u56CA\uFF1F"))));
    }
    handleClick(to) {
        event.preventDefault();
        console.log('route change to', to);
        this.props.route(to);
    }
}
//# sourceMappingURL=Home.js.map