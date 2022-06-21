import Header from "./components/Header";
import Box from "./components/Box"

import "./styles/global.css"

const testandoAlert = () => {
  alert('alerta teste');
}


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <button className="button" onClick={testandoAlert}>Clique aqui para clicar aqui</button>
        </div>
        <Box background="claro">
          <h1>
            teste, um, dois... testando
          </h1>
        </Box>
        <Box background="escuro">
          <p>
            teste 2...
          </p>
        </Box>
      </main>
    </div>
  );
}

export default App;
//equivalente ao module exports
