import React, {Component} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { MapContainer } from './Map';



export default GoogleApiWrapper({
    apiKey: 'AIzaSyBN-zGf8Lv0WVw4sdBHm6jpmSFUx-_Rof4'
  })(MapContainer);