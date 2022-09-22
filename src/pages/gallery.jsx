import Layout from "../pages/breadCrumps";
import React from 'react';
import Slider from "../components/slider";
import ReactDOM from 'react-dom';
import fullpage from 'fullpage.js'
class Gallery extends React.Component {
  
  render() {
    return (
      <div>
        <Layout className={"bread"}/>
        <div ><Slider/></div>
      </div>
    );
  }
}
export default Gallery
//   ReactDOM.render(<Fullpage />, document.getElementById('react-root'));