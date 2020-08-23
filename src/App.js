import React, { useState } from 'react';
import './App.css';
import { Table } from 'reactstrap';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
function App() {
  const dataRandom = [
    { Apunte: "React es un framwork de código abierto para realizar interfaces gráficas", Fecha: "21/02/2000", Etiqueta: "react" }
  ];
  const [data, setData] = useState(dataRandom);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [elementoSeleccionado, setElementoSeleccionado] = useState({
    Apunte: '',
    Fecha: '',
    Etiqueta: '',
  });
  const seleccionarElemento = (elemento, caso) => {
    setElementoSeleccionado(elemento);
    (caso === 'Eliminar') && setModalEliminar(true)
  }
  const manejarCambio = e => {
    const { name, value } = e.target;
    setElementoSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }))

  }
  var contador = 0;
  const eliminar = () => {
    setData(data.filter(elemento => elemento.Apunte !== elementoSeleccionado.Apunte));
    setModalEliminar(false);
  }
  const abrirModalInsertar = () => {
    setElementoSeleccionado(null);
    setModalInsertar(true);
  }
  const insertar = () => {
    var valorInsertar = elementoSeleccionado;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }
  return (
    <div className="App-header">
      <h1>Guarda tus Apuntes!</h1>
      <button1 className ="btn btn-success" size="lg" onClick={() => abrirModalInsertar()}>Insertar
      </button1>

      <Table dark className="table table-bordered">
        <thead>
          <tr>
            <th>Fila</th>
            <th>Apunte</th>
            <th>Fecha</th>
            <th>Etiqueta</th>
            <th>¿Qué desea realizar?</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento => (
            <tr>
              <th scope="row"></th>
              <td>{elemento.Apunte}</td>
              <td>{elemento.Fecha}</td>
              <td>{elemento.Etiqueta}</td>
              <td><button className="btn btn-danger" onClick={() => seleccionarElemento(elemento, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </Table>
      <Modal isOpen={modalEliminar}>
        <ModalBody>
          ¿Está seguro que desea eliminar el apunte {elementoSeleccionado && elementoSeleccionado.Apunte}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => eliminar()}>
            Aceptar
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalEliminar(false)}
          >
            Rechazar
          </button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Agregar Apuntes</h3>
          </div>
        </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Apunte</label>
              <input
                className="form-control"
                type="text"
                name="Apunte"
                value={elementoSeleccionado ? elementoSeleccionado.Apunte : ''}
                onChange = {manejarCambio}
              />
              <br />
              <label>Fecha</label>
              <input
                className="form-control"
                type="text"
                name="Fecha"
                value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
                onChange = {manejarCambio}
              />
              <br />
              <label>Etiqueta</label>
              <input
                className="form-control"
                type="text"
                name="Etiqueta"
                value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                onChange = {manejarCambio}
              />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={()=>insertar(0)}>
              Agregar Apunte
          </button>
            <button
              className="btn btn-danger"
              onClick={()=>setModalInsertar(false)}
            >
              Cancelar
          </button>
          </ModalFooter>
      </Modal>
    </div >
  );
}
export default App;
/*


*/