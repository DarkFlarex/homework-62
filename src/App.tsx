import './App.css'
import {useState} from "react";
import Home from "./containers/Home/Home";
import {Porsche} from "./types";
import Toolbar from "./components/Toolbar/Toolbar";

  const App =()=> {
    const [porsche,]=useState<Porsche[]>(
      [
        {
          id: '1',
          name: '911 Carrera',
          img: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspMBvMZq6G5OtgSv31nBJaA4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D3LF%25vUqbxAuWXsOaUJeV6iTrd2zhRc2cUWqA7fQhdiOJUPYyMN9nReCkxo4y7zInhF%25vUqYHPuWXsO5XJeV6iTJ83zhp4NdTxf4KxJhvaBH6mOcuLAlWRDdV2DU',
          price: '128.700,00',
        },
          {
              id: '1',
              name: '911 Carrera',
              img: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspMBvMZq6G5OtgSv31nBJaA4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D3LF%25vUqbxAuWXsOaUJeV6iTrd2zhRc2cUWqA7fQhdiOJUPYyMN9nReCkxo4y7zInhF%25vUqYHPuWXsO5XJeV6iTJ83zhp4NdTxf4KxJhvaBH6mOcuLAlWRDdV2DU',
              price: '128.700,00',
          },
          {
              id: '1',
              name: '911 Carrera',
              img: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspMBvMZq6G5OtgSv31nBJaA4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D3LF%25vUqbxAuWXsOaUJeV6iTrd2zhRc2cUWqA7fQhdiOJUPYyMN9nReCkxo4y7zInhF%25vUqYHPuWXsO5XJeV6iTJ83zhp4NdTxf4KxJhvaBH6mOcuLAlWRDdV2DU',
              price: '128.700,00',
          },
      ]);

  return (
      <>
          <header>
              <Toolbar/>
          </header>
          <main className="container-fluid">
              <Home porsche={porsche}/>
          </main>

      </>
  )
  }

export default App
