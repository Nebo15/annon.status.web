import React from 'react';
import withStyles from 'withStyles';

import styles from './styles.scss';

export default withStyles(styles)(
  ({ title, children }) => (
    <div className={styles.block}>
      <div className={styles.block__header}>{title}</div>
      <div className={styles.block__content}>
        { children }
      </div>
    </div>
  )
);
