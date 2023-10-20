import { html } from 'lit';
import '../src/my-cybrcardwk5.js';

export default {
  title: 'MyCybrcardwk5',
  component: 'my-cybrcardwk5',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <my-cybrcardwk5
      style="--my-cybrcardwk5-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </my-cybrcardwk5>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
