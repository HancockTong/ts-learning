import * as React from "react";
import * as ReactDOM from "react-dom";

interface Props {
    foo: string;
}

interface States {
    bar: number;
}

class MyComponent extends React.Component<Props, States> {
    state = { bar: 123 };

    render() {
        return <span>{this.props.foo}@{this.state.bar}</span>;
    }
}

if (typeof document !== 'undefined') {
    ReactDOM.render(
        <MyComponent foo="bar"/>,
        document.getElementById("views")
    )
} else {
    console.log(<MyComponent foo="bar"/>);
}