import React from "react";
import Home from './Home'
import HomeMobile from './HomeMobile'
import Responsive from 'react-responsive-decorator';




class HomeChoice extends React.Component {
state = {
    isMobile: false
  }
componentDidMount() {
    this.props.media({ minWidth: 768 }, () => {
      this.setState({
        isMobile: false
      });
    });
this.props.media({ maxWidth: 768 }, () => {
      this.setState({
        isMobile: true
      });
    });
  }
render() {
    const { isMobile } = this.state;
return (
      <div>
      {isMobile ?
        <HomeMobile/> :
        < Home/>
      }
      </div>
    );
  }
}
export default Responsive(HomeChoice)
