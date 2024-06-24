import './App.css'
import {useState} from "react";
import {News, PorscheCay, PropsPorsche911} from "./types";
import Toolbar from "./components/Toolbar/Toolbar";
import Porsche911 from "./components/Porsche911/Porsche911";
import PorscheCayenne from "./components/PorscheCayenne/PorscheCayenne";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import NewsRoom from "./components/NewsRoom/NewsRoom";


  const App =()=> {
    const [porsche911,]=useState<PropsPorsche911[]>(
      [
        {
          id: '1',
          name: '911 Carrera',
          img: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl' +
              '3U0%25z8rMHIspMBvMZq6G5OtgSv31nBJaA4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D3LF%25vUqbxAuWXsOaUJeV6iTrd2zhRc2cUWqA7fQhdiOJUPYy' +
              'MN9nReCkxo4y7zInhF%25vUqYHPuWXsO5XJeV6iTJ83zhp4NdTxf4KxJhvaBH6mOcuLAlWRDdV2DU',
          price: '128.700,00',
        },
        {
          id: '2',
          name: '911 Carrera',
          img: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUD' +
              'xPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspMBvMZq6G5OtgSv31nBJaA4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D3LF%25vUqbxAuWXsOaUJeV6i' +
              'Trd2zhRc2cUWqA7fQhdiOJUPYyMN9nReCkxo4y7zInhF%25vUqYHPuWXsO5XJeV6iTJ83zhp4NdTxf4KxJhvaBH6mOcuLAlWRDdV2DU',
          price: '128.700,00',
        },
        {
          id: '3',
          name: '911 Carrera',
          img: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iB' +
              'UDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspMBvMZq6G5OtgSv31nBJaA4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D3LF%25vUqbxAuWX' +
              'sOaUJeV6iTrd2zhRc2cUWqA7fQhdiOJUPYyMN9nReCkxo4y7zInhF%25vUqYHPuWXsO5XJeV6iTJ83zhp4NdTxf4KxJhvaBH6mOcuLAlWRDdV2DU',
          price: '128.700,00',
        },
      ]);

    const [porscheCayenne,]=useState<PorscheCay[]>(
      [
          {
              id: '1',
              name: 'Cayenne',
              img: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvs' +
                  'i60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspMBvMZq6G5OtgSv31nBJa' +
                  'A4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D3LF%25vUqbsQuWXsO01JeV6iTm78zhRc2h4sqA7fQAraOJ' +
                  'UPY1eZTBsN5fWy2dioCPwOQDcFGFPBYnfuruTE5yPewdB2CvNzxU0qA7fQOHDOJUPY0gtTBsN5pUy2' +
                  'dioC1pqQDcFGb2oYnfur0f65yPew6AACvWdT7wkqdak6vgYb2T9rzYpX%25nNU7yxg',
              price: '128.700,00',
          },
          {
              id: '2',
              name: 'Cayenne',
              img: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvs' +
                  'i60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspMBvMZq6G5OtgSv31nBJa' +
                  'A4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D3LF%25vUqbsQuWXsO01JeV6iTm78zhRc2h4sqA7fQAraOJ' +
                  'UPY1eZTBsN5fWy2dioCPwOQDcFGFPBYnfuruTE5yPewdB2CvNzxU0qA7fQOHDOJUPY0gtTBsN5pUy2' +
                  'dioC1pqQDcFGb2oYnfur0f65yPew6AACvWdT7wkqdak6vgYb2T9rzYpX%25nNU7yxg',
              price: '128.700,00',
          },
          {
              id: '3',
              name: 'Cayenne',
              img: 'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvs' +
                  'i60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspMBvMZq6G5OtgSv31nBJa' +
                  'A4qh4NSEGkaW%25cz91wxuzbUUdMGLqk0D3LF%25vUqbsQuWXsO01JeV6iTm78zhRc2h4sqA7fQAraOJ' +
                  'UPY1eZTBsN5fWy2dioCPwOQDcFGFPBYnfuruTE5yPewdB2CvNzxU0qA7fQOHDOJUPY0gtTBsN5pUy2' +
                  'dioC1pqQDcFGb2oYnfur0f65yPew6AACvWdT7wkqdak6vgYb2T9rzYpX%25nNU7yxg',
              price: '128.700,00',
          },
      ]);

      const [news,]=useState<News[]>(
          [
              {
                  id: '1',
                  img: 'https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/' +
                      '2024/Innovation/Windtunnel/Windtunnel.jpg/jcr:content/Windtunnel.jpg',
                  title: 'How the climatic wind tunnel in Weissach works',
                  text:'Porsche vehicles are sold all over the world. Therefore, it’s important for' +
                      ' the engineers at Porsche to consider how they can adapt the vehicle and its ' +
                      'equipment to the diverse weather conditions. But how exactly can this be achieved?' +
                      ' The new climate center in Weissach, which features a climatic wind tunnel, was opened' +
                      ' in 2022 for precisely this purpose.',
                  datetime:'24:06:2025',
              },
              {
                  id: '2',
                  img: 'https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2024' +
                      '/Motorsports/Racing-for-Charity-Le-Mans/M24_3427_fine.jpg/jcr:content/M24_3427_fine.jpg',
                  title: 'Porsche donates 911,000 euro as part of its “Racing for Charity” initiative',
                  text:'The three Porsche 963 fielded by the Porsche Penske Motorsport works team turned ' +
                      'a total of 833 laps at the 24 Hours of Le Mans last weekend (15/16 June). ' +
                      'For each lap of the 13.626-kilometre Circuit des 24 Heures, Porsche donated 750 euros to support seriously ' +
                      'ill children as part of its “Racing for Charity” initiative. This added up to 624,750 euros ' +
                      'during the endurance classic in France. Porsche has subsequently topped up the donated amount to 911,000 euros. ',
                  datetime:'24:06:2025',
              },
              {
                  id: '3',
                  img: 'https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/202' +
                      '4/Innovation/Windtunnel/Windtunnel.jpg/jcr:content/Windtunnel.jpg',
                  title: 'How the climatic wind tunnel in Weissach works',
                  text:'Porsche vehicles are sold all over the world. Therefore, it’s important for' +
                      ' the engineers at Porsche to consider how they can adapt the vehicle and its ' +
                      'equipment to the diverse weather conditions. But how exactly can this be achieved?' +
                      ' The new climate center in Weissach, which features a climatic wind tunnel, was opened' +
                      ' in 2022 for precisely this purpose.',
                  datetime:'24:06:2025',
              },
              {
                  id: '4',
                  img: 'https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2024' +
                      '/Innovation/Windtunnel/Windtunnel.jpg/jcr:content/Windtunnel.jpg',
                  title: 'How the climatic wind tunnel in Weissach works',
                  text:'Porsche vehicles are sold all over the world. Therefore, it’s important for' +
                      ' the engineers at Porsche to consider how they can adapt the vehicle and its ' +
                      'equipment to the diverse weather conditions. But how exactly can this be achieved?' +
                      ' The new climate center in Weissach, which features a climatic wind tunnel, was opened' +
                      ' in 2022 for precisely this purpose.',
                  datetime:'24:06:2025',
              },
          ]);

  return (
      <>
          <header>
                  <Toolbar/>
          </header>
          <main className="container-sm">
              <Routes>
                  <Route
                      path="/"
                      element={<Home />}
                  />
                  <Route
                      path="Poresche911"
                      element={<Porsche911 porsche911={porsche911} />}
                  />
                  <Route
                      path="PorscheCayenne"
                      element={<PorscheCayenne PorscheCay={porscheCayenne} />}
                  />
                  <Route
                      path="NewsRoom"
                      element={<NewsRoom newsItems={news} />}
                  />
                  <Route path="*" element={<h1>Not found!</h1>}/>
              </Routes>
          </main>

      </>
  )
  }

export default App
