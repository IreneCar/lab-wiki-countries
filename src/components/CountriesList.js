import { Link, NavLink } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList() {
  return (
    // Bootstrap container wrapper div
    <div class="container">
      {/* Bootstrap row wrapper div  */}
      <div class="row">
        {/* Countries List (Bootstrap column)  */}
        <div class="col-5" style="max-height: 90vh; overflow: scroll">
          <div class="list-group">
            {countries.map(() => {
              <Link to="/">{countries.alpha3Code}</Link>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
