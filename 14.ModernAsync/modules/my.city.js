import Module from '/node_modules/js-little-core/module.js';

export default class MyCity extends Module {
  async execute() {
    console.log(`You probably in: ${(await this.#getMyAddress()).city}`);
  }

  #getMyPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  async #getMyAddress() {
    let result = { city: '' };
    try {
      const { coords } = await this.#getMyPosition();
      const response = await fetch(
        `https://geocode.maps.co/reverse?lat=${coords.latitude}&lon=${coords.longitude}`,
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      const { address } = await response.json();
      result = address;
    } catch (error) {
      console.warn(error.message);
    }
    return result;
  }
}
