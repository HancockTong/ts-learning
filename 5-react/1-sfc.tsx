import * as React from "react";
import * as ReactDOM from "react-dom";

type Props = {
    foo: string;
}
const MyComponent: React.SFC<Props> = (props) => {
    return <span>{props.foo}</span>;
};

if (typeof document !== 'undefined') {
    ReactDOM.render(
        <MyComponent foo="bar"/>,
        document.getElementById("views")
    )
} else {
    console.log(<MyComponent foo="bar"/>);
}