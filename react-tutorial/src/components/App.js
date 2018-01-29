import React from 'react';
import Header from './Header';
import Content from './Content'

class App extends React.Component {
    sayHey() {
        alert("Hey");
    }
    render(){
        return (
            <div>
                <Header title={this.props.headerTitle}/>
                <Content title={this.props.contentTitle} body={this.props.contentBody}/>
            </div>
        ) ;
    }
}

App.defaultProps = {
    headerTitle: 'Default header',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
};

export default App;