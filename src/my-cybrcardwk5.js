import { LitElement, html, css } from 'lit';

class MyCybrcardwk5 extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    :host {
      font-family: Arial, sans-serif;
      text-align: center;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      display: block;
    }

    .container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    h1 {
      font-size: 36px;
      margin-bottom: 20px;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    .btn {
      background-color: brown; /* Brown button color */
      color: #fff;
      border: none;
      padding: 10px 20px;
      font-size: 18px;
      cursor: pointer;
      border-radius: 5px;
    }

    .btn:hover,
    .btn:focus {
      background-color: #8b4513; /* Darker brown on hover/focus */
    }

    .hidden {
      display: none;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  toggleDetails() {
    const description = this.shadowRoot.querySelector('.hidden');
    const imdbLink = this.shadowRoot.querySelector('a.hidden');
    description.classList.toggle('hidden');
    imdbLink.classList.toggle('hidden');
  }

  changeTitle() {
    const title = this.shadowRoot.querySelector('h1');
    title.textContent = 'Something Else';
  }

  resetTitle() {
    const title = this.shadowRoot.querySelector('h1');
    title.textContent = 'Memento';
  }

  duplicateCard() {
    const container = this.shadowRoot.querySelector('.container');
    const clonedCard = container.cloneNode(true);
    this.shadowRoot.querySelector('main').insertAdjacentElement('beforeend', clonedCard);
  }

  removeCard() {
    const cards = this.shadowRoot.querySelectorAll('.container');
    if (cards.length > 1) {
      const lastCard = cards[cards.length - 1];
      lastCard.remove();
    }
  }

  render() {
    return html`
      <main>
        <div class="container">
          <h1>Memento</h1>
          <img src="https://m.media-amazon.com/images/I/515EOVqRexL._AC_UF894,1000_QL80_.jpg" alt="Movie Poster">
          <p class="hidden">This is a complex story about Leonard Shelby (Guy Pearce), a man whose ability to make new memories is damaged when he is struck in the head while confronting two people who are attacking his wife (Jorja Fox) at their home in the middle of the night.</p>
          <a href="https://www.imdb.com/title/tt0209144/" target="_blank" class="hidden">
            <button class="btn">Visit IMDB</button>
          </a>
        </div>

        <button @click="${this.toggleDetails}" class="btn">Toggle Details</button>
        <button @click="${this.duplicateCard}" class="btn">Duplicate Card</button>
        <button @click="${this.removeCard}" class="btn">Remove Card</button>
        <button @click="${this.changeTitle}" class="btn">Change Title</button>
        <button @click="${this.resetTitle}" class="btn">Reset Title</button>
      </main>

    `;
  }
}

customElements.define('my-cybrcardwk5', MyCybrcardwk5);
