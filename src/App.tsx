import * as React from 'react';
import DropArea from './Components/DropArea/DropArea';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Result from './Components/Result/Result';

interface IState {
  result: string
  filelength: number
}

class App extends React.Component<{}, IState>{


  public constructor(props: any) {
    super(props)
    this.state = {
      result: "",
      filelength: 0,
    }
  }

  public render() {
    return (
      <div>
          <NavBar />
          <Header />
          <DropArea setResults={this.resultstate} />
          <Result result={this.state.result} filelength={this.state.filelength} />

          <Footer />
      </div>
    )
  }
  public resultstate = (resultString: string, filelen: any) => {
    this.setState({ result: resultString, filelength: filelen })
  }

};

export default App;
