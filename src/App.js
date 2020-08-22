import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from 'reactstrap';
import { Table } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
function App() {
  return (
    <div className="App-header">
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText></InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Agregar Apunte" /> <Input Input placeholder="Agregar Fecha" /> <Input placeholder="Agregar Etiqueta" />
      </InputGroup>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Apunte</th>
            <th>Fecha</th>
            <th>Etiqueta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <Button color="primary" size="lg">Guardar</Button>{' '}
    </div >
  );
}
export default App;