import Module from '/node_modules/js-little-core/module.js';

export default class ActivityGenerator extends Module {
  #activities;

  execute() {
    const button = document.createElement('button');
    button.textContent = 'Generate';
    button.addEventListener('click', this.getActivities.bind(this, 5));
    this.content.append(button);

    this.#activities = document.createElement('div');
    this.#activities.id = 'activities';
    this.content.append(this.#activities);
  }

  async getActivities(number) {
    this.#activities.textContent = '';
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
    div.textContent = activity;
    this.#activities.append(div);
  }
}
