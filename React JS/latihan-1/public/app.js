const root = document.querySelector(`#root`);
function padaSaatAkuDiKlik(msg) {
  alert(msg);
}
const element = /*#__PURE__*/React.createElement("button", {
  onClick: padaSaatAkuDiKlik.bind(this, `Hello, aku di klik`)
}, "Click Me");
ReactDOM.render(element, root);