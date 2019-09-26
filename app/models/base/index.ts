import { compose, Model } from 'objection';

import Visibility from 'objection-visibility';
import { timestampPlugin } from 'objection-timestamps';

const mixins = compose(
  Visibility,
  timestampPlugin({
    createdAt: 'createdAt',
	  updatedAt: 'updatedAt',
  }),
);

export default class Base extends mixins(Model){};
