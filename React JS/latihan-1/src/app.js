const root = document.querySelector(`#root`)

function padaSaatAkuDiKlik (msg) {
  alert(msg)
}

const element = <button onClick={padaSaatAkuDiKlik.bind(this, `Hello, aku di klik`)}
>Click Me</button>

ReactDOM.render(element, root)