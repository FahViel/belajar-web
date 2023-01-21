const root = document.querySelector(`#root`);
function App() {
  const [diKlik, setDiKlik] = React.useState(false);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log(document.getElementById(`judul`));
  }, [diKlik, count]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Hello Ini Judul"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setDiKlik(true);
    }
  }, "Klik aku"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setCount(count + 1);
    }
  }, "Tambah"), "Nilai saat Ini : ", count);
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);