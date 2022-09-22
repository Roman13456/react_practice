import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import "../styles.css";
const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;
// const pluginWrapper = () => {
//     /*
//      * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
//      */
// };
const originalColors = [
    "#ff5f45",
    "#0798ec",
    "#fc6c7c",
    "#435b71",
    "orange",
    "blue",
    "purple",
    "yellow"
  ];
class Slider extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sectionsColor: [...originalColors],
        fullpages: [
          {
            text: "Section 1"
          },
        ]
      };
    }
    onLeave(origin, destination, direction) {
      console.log("onLeave", { origin, destination, direction });
      // arguments are mapped in order of fullpage.js callback arguments do something
      // with the event
    }
    render() {
      const { fullpages } = this.state;
      if (!fullpages.length) {
        return null;
      }
  
  
      return (
        <div>
          <ReactFullpage
            debug /* Debug logging */
            // pluginWrapper={pluginWrapper}
            // fullpage options
            licenseKey={"YOUR_KEY_HERE"}
            // navigation
            anchors={["firstPage"]}
            sectionSelector={SECTION_SEL}
            onLeave={this.onLeave.bind(this)}
            sectionsColor={this.state.sectionsColor}
            render={(comp) => (
              <ReactFullpage.Wrapper>
                {fullpages.map(({text}) => (
                  <div key={text} className={SEL}>
                    <div className="slide">
                      <h3>{'slide2'}</h3>
                    </div>
                    <div className="slide">
                      <h3>{'slide3'}</h3>
                    </div>
                    <div className="slide">
                      <h3>{'slide4'}</h3>
                    </div>
                    <div className="slide">
                      <h3>{'slide5'}</h3>
                    </div>
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            )}
          />
        </div>
      );
    }
  }
  export default Slider