// src/App.tsx
import React from 'react';
import './App.scss';
import CampaignList from './components/CampaignList';

const campaigns = [
  {"id": 1,"name": "Divavu","startDate": "2017-09-19","endDate": "2018-03-09","Budget": 88377},
  {"id":2,"name":"Jaxspan","startDate":"2017-11-21","endDate":"2018-02-21","Budget":608715},
  {"id":3,"name":"Miboo","startDate":"2017-11-01","endDate":"2017-06-20","Budget":239507},
  {"id":4,"name":"Trilith","startDate":"2017-08-25","endDate":"2017-11-30","Budget":179838},
  {"id":5,"name":"Layo","startDate":"2017-11-28","endDate":"2018-03-10","Budget":837850},
  {"id":6,"name":"Photojam","startDate":"2017-07-25","endDate":"2017-06-23","Budget":858131},
  {"id":7,"name":"Blogtag","startDate":"2017-06-27","endDate":"2018-01-15","Budget":109078},
  {"id":8,"name":"Rhyzio","startDate":"2017-10-13","endDate":"2018-01-25","Budget":272552},
  {"id":9,"name":"Zoomcast","startDate":"2017-09-06","endDate":"2017-11-10","Budget":301919},
  {"id":10,"name":"Realbridge","startDate":"2018-03-05","endDate":"2017-10-02","Budget":505602}
].map(campaign => ({...campaign, active : Math.random() <0.5}));;



const App: React.FC = () => {
  return (
    <div className="app">
      <div className='header'>
        <h1>Campaign</h1>
        </div>
      <CampaignList campaigns={campaigns} />
    </div>
  );
};

export default App;
