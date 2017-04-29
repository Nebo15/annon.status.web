import React from 'react';
import withStyles from 'withStyles';
import classnames from 'classnames';

import styles from './styles.scss';

export default withStyles(styles)(
  ({ health }) => (
    <span
      className={classnames(
        styles.healthText,
        health && styles[`healthText_${health}`]
      )}
    >
      { health }
    </span>
  )
);
