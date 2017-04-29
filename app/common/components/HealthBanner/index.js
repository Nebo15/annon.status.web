import React from 'react';
import classnames from 'classnames';

import withStyles from 'withStyles';

import styles from './styles.scss';

export default withStyles(styles)(
  ({ health }) => (
    <div
      className={classnames(
        styles.healthBanner,
        health && styles[`healthBanner_${health}`]
      )}
    >
      { health === 'operational' && 'All systems are operational.' }
      { health === 'degradated_perfomance' && 'Attention! Performance of the system is lower than usual' }
      { health === 'partial_outage' && 'Attention! Some part of the sytem is outage.' }
      { health === 'major_outage' && 'Attention! Major part of the sytem is outage.' }
    </div>
  )
);
