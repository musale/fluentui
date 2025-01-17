import { CardHeader } from '../../index';
import descriptionMd from './CardHeaderDescription.md';

export { Default } from './CardHeaderDefault.stories';

export default {
  title: 'Preview Components/Card/CardHeader',
  component: CardHeader,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd].join('\n'),
      },
    },
  },
};
