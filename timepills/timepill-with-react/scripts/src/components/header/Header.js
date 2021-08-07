export default class Header extends React.Component {
    render() {
        let activeClasses = Array(3).fill('header-nav-item');
        switch (this.props.path) {
            case '/home':
                activeClasses[0] += ' nav-item-active';
                break;
            case '/put':
                activeClasses[1] += ' nav-item-active';
                break;
            case '/open':
                activeClasses[2] += ' nav-item-active';
                break;
        }
        return React.createElement("div", { className: "header" },
            React.createElement("div", { className: "container" },
                React.createElement("a", { className: "header-logo" }, "\u65F6\u95F4\u80F6\u56CA"),
                React.createElement("ul", { className: "header-nav" },
                    React.createElement("li", { className: activeClasses[0] },
                        React.createElement("a", { href: "", onClick: this.handleClick.bind(this, '/home') }, "\u9996\u9875")),
                    React.createElement("li", { className: activeClasses[1] },
                        React.createElement("a", { href: "", onClick: this.handleClick.bind(this, '/put') }, "\u6DFB\u52A0")),
                    React.createElement("li", { className: activeClasses[2] },
                        React.createElement("a", { href: "", onClick: this.handleClick.bind(this, '/open') }, "\u6253\u5F00")))));
    }
    handleClick(to) {
        event.preventDefault();
        console.log('change route to', to);
        this.props.route(to);
    }
}
//# sourceMappingURL=Header.js.map