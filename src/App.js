import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function LoadCountry() {

//   const [countries, setCountries] = useState([]);

//   useEffect(() => {

//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))

//   }, [])

//   return (
//     <div>
//       <h2>Hi I am Mahbub Hasan as soon as posible I am going to get a job It's my challang</h2>

//       {
//         countries.map(country => <Country name = {country.name.common} population = {country.population} ></Country>  )
//       }
      
//     </div>
//   )
// }


// function Country(props){
//   return(
//     <div>
//       <h2>country name: {props.name} </h2>
//       <h3>population: {props.population}</h3>
//     </div>
//   )
// }

export default App;
