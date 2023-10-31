export default class SetExample {
  static execute() {
    const flights = ['Russia', 'USA', 'London', 'London', 'USA'];

    const setFlights = new Set(flights);
    console.log(setFlights);
    console.log(setFlights.size);
    console.log(setFlights.has('Russia'));
    setFlights.add('Paris');
    setFlights.delete('London');
    console.log(setFlights);

    setFlights.forEach((flight) => console.log(flight));

    console.log([...setFlights]);

    const setObjs = new Set([{ a: 1 }, { b: 2 }, { b: 2 }]);
    console.log(setObjs);
    console.log(new Set('abcd'));
  }
}
