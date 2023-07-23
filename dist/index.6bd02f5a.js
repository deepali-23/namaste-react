const result = React.createElement("h1", {
    id: "result"
}, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h1", {}, "I am an h2 tag"),
    [
        React.createElement("h6", {}, "I am h6 tag")
    ]
]);
const heading = React.createElement("h1", {
    id: "heading",
    xyz: "abc"
}, "Hello World From React!!");
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(result, heading);

//# sourceMappingURL=index.6bd02f5a.js.map
