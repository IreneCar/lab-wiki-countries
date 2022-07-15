import { Link, NavLink } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList() {
  return (
   
        {/* Countries List (Bootstrap column)  */}
        <div class="col-5" style={{maxHeight: '90vh', overflowY: 'scroll'}}>
          <div class="list-group">
            {countries.map((country) => {
              <Link to={`/${country.alpha3Code}`}>
                <h5>{country.name.common}</h5>
              </Link>;
            })}
          </div>
        </div>
     
  );
}

export default CountriesList;
