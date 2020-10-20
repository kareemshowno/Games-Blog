import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../components/Banner/Banner';
import Navigation from '../components/navigation_component/Navigation';
import Trailers from '../components/trailers_component/Trailers';
import Posts from '../components/posts_component/Posts';
import Newpost from '../components/newpost_component/Newpost';
import {HashRouter as Router , Route, Switch } from 'react-router-dom';
import {games} from '../components/posts_component/games';

class App extends React.Component {

constructor() {
  super()
  this.state={
      games:[],
        name:'',
    mini_desc:'',
    img:'',
    description:''
  }
}
componentDidMount() {
  this.setState({games:games})
}
  render() {

        const handleonChange = (event) => {
this.setState({[event.target.name]:event.target.value});
}
const onSubmit = (event) => {
  event.preventDefault();
this.setState({name:this.state.name})
games.push({name:this.state.name,mini_desc:this.state.mini_desc,img:this.state.img,description:this.state.description})
console.log(this.state.games)
alert('post added')
}
    return(<React.Fragment>
    	<Router>
      <Navigation/>
      <Switch>
      <Route exact path="/"  >
      <Banner />
      </Route>
  <Route exact path='/Trailers'>
      <Trailers />
      </Route>
      <Route exact path='/Posts'  >
      <Posts games={this.state.games} />
      </Route>
      <Route exact path='/Newpost' >
      <Newpost onSubmit={onSubmit} typeChange={handleonChange}
      title={this.state.title} description={this.state.description} img={this.state.img}
       mini_desc={this.state.mini_desc} />
      </Route>
      </Switch>
      </Router>
      </React.Fragment>
      );
  }
}

export default App;

