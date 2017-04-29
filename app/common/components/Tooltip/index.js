import React from 'react';
import withStyles from 'withStyles';

import styles from './styles.scss';

export default withStyles(styles)(
  ({ text, children }) => (
    <div className={styles.tooltip}>
      <div className={styles.tooltip__owner}>
        { children }
      </div>
      <div className={styles.tooltip__content}>
        { text }
      </div>
    </div>
  )
);
