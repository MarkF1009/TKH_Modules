/* Creating three objects */

let car = {
  firstName: "Rolls",
  lastName: "Royce",
  counrty: "England",
  status: "Luxury",
  speciality: "Driving",
  get counrty() {
    return this.counrty;
  }
};

let sportteam = {
  firstName: "LA",
  lastName: "Lakers",
  counrty: "USA",
  status: "Professional sports",
  speciality: "Basketball",
  get lastName() {
    return this.lastName;
  }
};

let animal = {
  firstName: "Lion",
  lastName: "Musfa",
  counrty: "Kenya",
  status: "King of the jungle",
  speciality: "Wild Animal",
  get status() {
    return this.status;
  }
};

/* Objects pt 2 */


