const root = document.querySelector(`#root`);
function App() {
  const [activity, setActivity] = React.useState(``);
  const [todos, setTodos] = React.useState([]);
  function addTodoHandler(event) {
    event.preventDefault();
    setTodos([...todos, activity]);
    setActivity(``);
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo list"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama Aktifitas",
    value: activity,
    onChange: event => {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Tambahkan")), /*#__PURE__*/React.createElement("ul", null, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo
    }, todo);
  })));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);