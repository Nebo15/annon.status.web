import React from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import withStyles from 'withStyles';

import Icon from 'components/Icon';
import HealthBanner from 'components/HealthBanner';
import HealthText from 'components/HealthText';
import Tooltip from 'components/Tooltip';
import Block from 'components/Block';

import { getAllApisStatuses } from 'reducers';
import { fetchApisStatuses } from 'redux/apisStatuses';

import { PROJECT_NAME, PROJECT_DESCRIPTION, PROJECT_BACKGROUND } from 'config';

import styles from './styles.scss';

const healthStatuses = ['operational', 'degradated_perfomance', 'partial_outage', 'major_outage'];
const getSystemHealthFromApis = apis => healthStatuses[
  apis.reduce((prev, cur) => Math.max(healthStatuses.indexOf(cur.health), prev), 0)
];

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchApisStatuses()),
})
@withStyles(styles)
@connect(state => ({
  apisStatuses: getAllApisStatuses(state),
}))
export default class HomePage extends React.Component {
  render() {
    const { apisStatuses } = this.props;
    return (
      <div className={styles.wrap}>
        <header className={styles.header}>
          <div className={styles.header__in} style={{ backgroundImage: PROJECT_BACKGROUND && `url(${PROJECT_BACKGROUND})` }}>
            { PROJECT_NAME && <h1>{PROJECT_NAME}</h1>}
            { PROJECT_DESCRIPTION && <h3>{PROJECT_DESCRIPTION}</h3> }
          </div>
        </header>
        <div className={styles.content}>
          <main className={styles.main}>
            <div className={styles.main__in}>
              <HealthBanner health={getSystemHealthFromApis(apisStatuses)} />
              <Block
                title="APIs"
              >
                <div className={styles.statuses}>
                  { apisStatuses.map(item => (
                    <div key={item.id} className={styles.statuses__item}>
                      <div className={styles.topRow}>
                        <div className={styles.name}>{item.name}
                          <div className={styles.info}>
                            { item.description && <span className={styles.info__description}><Tooltip text={item.description}><Icon name="question" /></Tooltip></span> }
                            { item.docs_url && <a className={styles.info__docs} href={item.docs_url} rel="noopener noreferrer" target="__blank"><Icon name="paper-sheets" /></a> }
                          </div>
                        </div>
                        <div className={styles.health}><HealthText health={item.health} /></div>
                      </div>
                    </div>
                  )) }
                </div>
              </Block>
            </div>
          </main>
          <footer className={styles.footer}>
            <div className={styles.copyright}>Copyright <a href="https://nebo15.com">Nebo15</a></div>
          </footer>
        </div>
      </div>
    );
  }
}
