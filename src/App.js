import logo from './logo.svg';
import './App.css';
function Header(){
  return(
    <div>
      <header>
      <h1><a href='/'>top menu</a></h1>
      </header>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <nav>
        <ol>
          <li><a href='/read/1'>html</a></li>
          <li><a href='/read/2'>css</a></li>
          <li><a href='/read/3'>js</a></li>
        </ol>
      </nav>

      <article>
        <h2>Welcome</h2>
        Hello, World!
      </article>
    </div>
  );
}

export default App;
