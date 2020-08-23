import React, { useState } from 'react';
import './App.css';
import { Button, ButtonGroup } from 'reactstrap';
import { Table } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
function App() {
  const dataRandom = [
    { Apunte: "X1", Fecha: "21/02/2000", Etiqueta: "react" },
    { Apunte: "X2", Fecha: "21/02/2001", Etiqueta: "react" },
    { Apunte: "X3", Fecha: "21/02/2002", Etiqueta: "react" },
  ];
  const [data, setData] = useState(dataRandom);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [elementoSeleccionado, setElementoSeleccionado] = useState({
    Apunte: '',
    Fecha: '',
    Etiqueta: ''
  });
  const seleccionarElemento = (elemento, caso) => {
    setElementoSeleccionado(elemento);
    (caso === 'Editar')&&setModalEditar(true)
  }
  const manejarCambio=e=>{
    const {name, value}=e.target;
    setElementoSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }))

  }
  const editar=()=>{
    var dataNueva=data;
    dataNueva.map(elemento=>{
      elemento.Apunte = elementoSeleccionado.Apunte
      elemento.Fecha = elementoSeleccionado.Fecha
      elemento.Fecha = elementoSeleccionado.Etiqueta
    });
    setData(dataNueva);
    setModalEditar(false);
  }
  return (
    <div className="App-header">
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText></InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Agregar Apunte" /> <Input Input placeholder="Agregar Fecha" /> <Input placeholder="Agregar Etiqueta" />
      </InputGroup>
      <Table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Apunte</th>
            <th>Fecha</th>
            <th>Etiqueta</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento => (
            <tr>
              <th scope="row">1</th>
              <td>{elemento.Apunte}</td>
              <td>{elemento.Fecha}</td>
              <td>{elemento.Fecha}</td>
              <td><button className="btn btn-primary" onClick = {() => seleccionarElemento(elemento, 'Editar')}>Editar</button>
                <button className="btn btn-danger">Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </Table>
      <Modal isOpen = {modalEditar} >
        <ModalHeader>
          <div>
            <h3>Editar Elementos</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Apunte</label>
            <input
              className = "form-control"
              type = "text"
              name = "Apunte"
              value = {elementoSeleccionado && elementoSeleccionado.Apunte}
              onChange = {manejarCambio}
            />
            <br />
            <label>Fecha</label>
            <input
              className = "form-control"
              type = 'text'
              name = 'Fecha'
              value = {elementoSeleccionado && elementoSeleccionado.Fecha}
              onChange = {manejarCambio}
            />
            <br />
            <label>Etiqueta</label>
            <input 
              className = "form-control"
              type = 'text'
              name = 'Etiqueta'
              value = {elementoSeleccionado && elementoSeleccionado.Etiqueta}
              onChange = {manejarCambio}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className = "btn btn-primary" onClick = {() => editar()}>
            Actualizar
          </button>
          <button
            className = "btn btn-danger"
            onClick = {() => setModalEditar(false)}
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