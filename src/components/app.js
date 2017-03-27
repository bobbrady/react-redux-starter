import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import fm from 'front-matter';

const rawText = '---\n' +
        'name: Derek Worthen\n' +
        'age: young\n' +
        'contact: \n' +
        ' email: email@domain.com\n' +
        ' address: some location\n' +
        'pets: \n' +
        '- cat\n' +
        '- dog\n' +
        '- bat\n' +
        '---\n' +
        'Some Other content\n';

const frontMatter = fm(rawText);

const renderNavBar = () => (
  <div id="nav">
    <Link to={'/'}>Home</Link>
    <Link to={'/about'}>About</Link>
    <Link to={'/contact'}>Contact</Link>
  </div>
);

const renderPets = () => {
  const pets = frontMatter.attributes.pets.map(pet => <li key={pet}>{ pet }</li>);
  return <ul>{pets}</ul>;
};

const Home = () =>
  (
    <div>
      <h1>Hello World!</h1>
      <h3>Frontmatter for { frontMatter.attributes.name }</h3>
      <h4>Pets</h4>
      { renderPets() }
    </div>
);

const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

class App extends Component {
  render() {
    return (
      <div>
        {renderNavBar()}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
