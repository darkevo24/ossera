import React from "react"
import { Map, Marker } from "pigeon-maps"
import "./App.css";
import ChartsPage from "./LineChart";
import BarChart from "./BarChart";
import Select from 'react-select';

export default function App(){
  const options = [
    { value: 'Regional', label: 'Regional' },
    { value: 'States', label: 'States' },
    { value: 'Cluster', label: 'Cluster' },
    { value: 'Site', label: 'Site' }
  ]
  return (
    <div >
        <div id="top">
          <h1>Main Dashboard</h1>
          <Select id="select" defaultInputValue="Drill Down Selection" options={options} />
        </div>
      <div id="mid">
      <div id="left">
    <Map id="map" height={610} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
    </Map>
    </div>
    <div id="right">
      <div id="data">
        <p id="data1">Data 1</p>
        <div id="link-data">
          <p>1 - New features in v8.1</p>
          <h6>What's new</h6>
        </div>
        <div id="link-data">
          <p>2 - New features in v8.1</p>
          <h6>What's new</h6>
        </div>
        <div id="link-data">
          <p>3 - New features in v8.1</p>
          <h6>What's new</h6>
        </div>
        <div id="link-data">
          <p>4 - New features in v8.1</p>
          <h6>What's new</h6>
        </div>
        <div id="link-data">
          <p>5 - New features in v8.1</p>
          <h6>What's new</h6>
        </div>
      </div>
      <div id="data2">
      <ChartsPage></ChartsPage>
      </div>
    </div>
    </div>
    <div id="bottom">
      <div id="left1">
        <p>Data 4</p>
        <div id="data4">
      <BarChart></BarChart>
      </div>
      </div>
      <div id="right1">
        <p>Data 3</p>
        <div id="data3">
      <ChartsPage></ChartsPage>
      </div>
      </div>
    </div>
    </div>
  );
}