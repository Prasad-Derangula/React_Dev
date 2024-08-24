const heading = React.createElement("div",{id:"heading",class:"head-class"},[
    React.createElement("div",{id:"chold1"},[
        React.createElement("h1",{},"h1 tag"),
        React.createElement("h2",{},"h2 tag")
    ]),
    React.createElement("div",{id:"chold2"},[
        React.createElement("h1",{},"h1 tag"),
        React.createElement("h2",{},"h2 tag")
    ]),
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);