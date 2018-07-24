/* eslint-disable */
import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOn = this.handleClickOn.bind(this);
    this.handleClickOff = this.handleClickOff.bind(this);
    this.state = {isClicked: false};
  }

  handleClickOn() {
    this.setState({isClicked: true});
  }

  handleClickOff() {
    this.setState({isClicked: false});
  }

    render() {
      const isClicked = this.state.isClicked;
      let hiddenDiv;

      if (ClickOn) {
        hiddenDiv = <hideDiv />;
      } else {
        hiddenDiv = <showDiv />;
      }

        return(
            <div className="checkbox">
                <div className="title">
                    Checkbox
                </div>
                <div className="content">
                    <input type="checkbox" onClick={this.handleClickOn}/>
                </div>
                <div className="hiddenContent">
                  <p>hidden content</p>
                </div>

            </div>
        );
    }
}

function showDiv(props) {
  return (
    <div className="hiddenContent">
      <p>hidden content</p>
    </div>
  );
}

function hideDiv(props) {
  return (
    <div className="hiddenContent" >
      <p>hidden content</p>
    </div>
  );
}

export default Checkbox;
