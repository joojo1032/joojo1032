import React, {Component} from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';



const mapStyles = {
  width: '80%',
  height: '60%',
  margin: '10%'
};

class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
    this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    onClose = props => {
    if (this.state.showingInfoWindow) {
        this.setState({
        showingInfoWindow: false,
        activeMarker: null
        });
    }
    };

    render() {
        return (
            <Map
            google={this.props.google}
            zoom={17}
            style={mapStyles}
            initialCenter={{
            lat: 6.692744,
            lng: -1.546932
            }}
            >
                <Marker
            onClick={this.onMarkerClick}
            name={'Boadi Junction Shell Filling Station'}
            />
            <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
            >
            <div>
                <h4>{this.state.selectedPlace.name}</h4>
            </div>
            </InfoWindow>
            </Map>
            
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBN-zGf8Lv0WVw4sdBHm6jpmSFUx-_Rof4'
  })(MapContainer);