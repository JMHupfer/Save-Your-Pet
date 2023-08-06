import axios from 'axios';

const searchPets = async (query) =>
  axios.get(`curl -d "grant_type=client_credentials&client_id=69kX8YYw1OUEfp6hQ1T73Jvi6dm6VekhaxXSqIcj2W6n10CwKi&client_secret=b3R1Xmpij0IfNHwvh5Vfy7Qzp2ddw1zYacAukWB7" https://api.petfinder.com/v2/oauth2/token
  `);

  const searchMedicine = async(query) =>
  axios.get(`https://api.fda.gov/drug/event.json?api_key=40GefMb62Rm2wac645F49dLQLHGnTsrZbxiCIwhX&search=...`)

export default { searchPets, searchMedicine };

