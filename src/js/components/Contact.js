export default class Contact {
  constructor() {
    this._content = `
        <section class="card" aria-labelledby="project-name">
            <h1 id="project-name" class="text-center primary-heading">Contact Information</h1>
          <div className="into">
          <h2 class="secondary-heading">Find the best answer to your technical question, Reach out to us through the following contacts:</h2>
          <ul class="my-3">
          <li>Our email: Mahdi@gmail.af</li>
          <li>Our phone number: +2349182566</li>
          <li>Our Address: Lorem ipsum dolor sit amet.</li>
          </ul>
          </div>
        </section>
        `;
  }

  get content() {
    return this._content;
  }
}
