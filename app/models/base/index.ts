import { compose, Model } from 'objection';

import Visibility from 'objection-visibility';
import { timestampPlugin } from 'objection-timestamps';

const mixins = compose(
  Visibility,
  timestampPlugin({
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }),
);

export default class Base extends mixins(Model) {}
