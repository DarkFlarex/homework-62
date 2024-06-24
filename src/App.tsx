import './App.css'
import {useState} from "react";
import {Porsche} from "./types";
import Toolbar from "./components/Toolbar/Toolbar";
import Porsche911 from "./components/Porsche911/Porsche911";
import PorscheCayenne from "./components/PorscheCayenne/PorscheCayenne";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";


  const App =()=> {
    const [porsche911,]=useState<Porsche[]>(
      [
        {
          id: '1',
          name: '911 Carrera',
          img: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspMBvMZq6G5OtgSv31nBJaA4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D3LF%25vUqbxAuWXsOaUJeV6iTrd2zhRc2cUWqA7fQhdiOJUPYyMN9nReCkxo4y7zInhF%25vUqYHPuWXsO5XJeV6iTJ83zhp4NdTxf4KxJhvaBH6mOcuLAlWRDdV2DU',
          price: '128.700,00',
        },
        {
          id: '2',
          name: '911 Carrera',
          img: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspMBvMZq6G5OtgSv31nBJaA4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D3LF%25vUqbxAuWXsOaUJeV6iTrd2zhRc2cUWqA7fQhdiOJUPYyMN9nReCkxo4y7zInhF%25vUqYHPuWXsO5XJeV6iTJ83zhp4NdTxf4KxJhvaBH6mOcuLAlWRDdV2DU',
          price: '128.700,00',
        },
        {
          id: '3',
          name: '911 Carrera',
          img: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspMBvMZq6G5OtgSv31nBJaA4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D3LF%25vUqbxAuWXsOaUJeV6iTrd2zhRc2cUWqA7fQhdiOJUPYyMN9nReCkxo4y7zInhF%25vUqYHPuWXsO5XJeV6iTJ83zhp4NdTxf4KxJhvaBH6mOcuLAlWRDdV2DU',
          price: '128.700,00',
        },
      ]);

    const [porscheCayenne,]=useState<Porsche[]>(
      [
          {
              id: '1',
              name: 'Cayenne',
              img: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspMBvMZq6G5OtgSv31nBJaA4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D3LF%25vUqbsQuWXsO01JeV6iTm78zhRc2h4sqA7fQAraOJUPY1eZTBsN5fWy2dioCPwOQDcFGFPBYnfuruTE5yPewdB2CvNzxU0qA7fQOHDOJUPY0gtTBsN5pUy2dioC1pqQDcFGb2oYnfur0f65yPew6AACvWdT7wkqdak6vgYb2T9rzYpX%25nNU7yxg',
              price: '128.700,00',
          },
          {
              id: '2',
              name: 'Cayenne',
              img: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspMBvMZq6G5OtgSv31nBJaA4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D3LF%25vUqbsQuWXsO01JeV6iTm78zhRc2h4sqA7fQAraOJUPY1eZTBsN5fWy2dioCPwOQDcFGFPBYnfuruTE5yPewdB2CvNzxU0qA7fQOHDOJUPY0gtTBsN5pUy2dioC1pqQDcFGb2oYnfur0f65yPew6AACvWdT7wkqdak6vgYb2T9rzYpX%25nNU7yxg',
              price: '128.700,00',
          },
          {
              id: '3',
              name: 'Cayenne',
              img: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspMBvMZq6G5OtgSv31nBJaA4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D3LF%25vUqbsQuWXsO01JeV6iTm78zhRc2h4sqA7fQAraOJUPY1eZTBsN5fWy2dioCPwOQDcFGFPBYnfuruTE5yPewdB2CvNzxU0qA7fQOHDOJUPY0gtTBsN5pUy2dioC1pqQDcFGb2oYnfur0f65yPew6AACvWdT7wkqdak6vgYb2T9rzYpX%25nNU7yxg',
              price: '128.700,00',
          },
      ]);

  return (
      <>
          <header>
              <Toolbar/>
          </header>
          <main className="container-fluid">
              <Routes>
                  <Route
                      path="/"
                      element={<Home />}
                  />
                  <Route
                      path="Poresche911"
                      element={<Porsche911 porsche={porsche911} />}
                  />
                  <Route
                      path="PorscheCayenne"
                      element={<PorscheCayenne porsche={porscheCayenne} />}
                  />
              </Routes>
          </main>

      </>
  )
  }

export default App
