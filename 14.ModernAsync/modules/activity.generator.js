import Module from '/node_modules/js-little-core/module.js';

export default class ActivityGenerator extends Module {
  #activities;

  execute() {
    const button = document.createElement('button');
    button.innerText = 'Generate';
    button.addEventListener('click', this.getActivities.bind(this, 5));
    this.content.appendChild(button);

    this.#activities = document.createElement('div');
    this.#activities.id = 'activities';
    this.content.appendChild(this.#activities);
  }

  async getActivities(number) {
    this.#activities.innerText = '';
    const response = await Promise.all(
      Array.from(Array(number)).map(() => this.#getActivity()),
    );
    response.forEach(({ activity }) => this.#createActivity(activity));
    console.log(response);
  }

  async #getActivity() {
    const response = await fetch('https://www.boredapi.com/api/activity');
    return response.json();
  }

  #createActivity(activity) {
    const div = document.createElement('div');
    div.innerText = activity;
    this.#activities.appendChild(div);
  }
}
