# Annon Status Page

[![Greenkeeper badge](https://badges.greenkeeper.io/Nebo15/annon.status.web.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/Nebo15/annon.status.web.svg?branch=master)](https://travis-ci.org/Nebo15/annon.status.web)

[![Build history](https://buildstats.info/travisci/chart/Nebo15/annon.status.web)](https://travis-ci.org/Nebo15/annon.status.web)

## Demo

![UI Demo](https://github.com/Nebo15/annon.status.web/raw/master/docs/images/screenshot.png)

**Try it here:** https://annon-status-web.herokuapp.com

## Installation

### Heroku One-Click Deployment

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/nebo15/annon.status.web)

### Docker

Dashboard can be deployed as a single container from [nebo15/annon.status.web](https://hub.docker.com/r/nebo15/annon.status.web/) Docker Hub.

## Configurations

The application supports these environment variables:

| Environment Variable  | Default Value           | Description |
| --------------------- | ----------------------- | ----------- |
| `PORT`                | `8080`                  | Node.js server port. |
| `API_ENDPOINT`        | -                       | Annon API endpoint. |
| `SITEMAP_HOSTNAME`    | `http://localhost:8080` | URL will be used in sitemap generated URLs. |
| `LANG_COOKIE_NAME`    | `lang`                  | Name of the cookie, where storing language variable. |
| `PROJECT_NAME`        | `Project name`          | Name of the project that is displaying in a header. |
| `PROJECT_DESCRIPTION` | `Project description`   | Description of the project that is displaying in a header. |
| `PROJECT_BACKGROUND`  | -                       | Background image that is covering header. |

## Docs

Dashboard works on top of [Annon management API](http://docs.annon.apiary.io).

## Technologies

- React
- Redux
- Webpack
- Enzyme
- Karma
- Nightwatch

## Workflow

### Git flow

Every task should start a new branch. Branch should be named as task number what its corresponding.
After finish work on a task, you need to create PR.

### Testing

To contribute to the repository be ready to write some tests.

- Unit tests for business logic (we use Mocha)
- Integration tests for UI components (we use Enzyme)
- Acceptance tests for user stories (we use Nightwatch)

### PR

Every task finishes with PR. Eslint, Stylelint, and tests are blocking PRs. To simplify PR review, we deploy every PR's branch automatically on Heroku.

## License

See [LICENSE.md](LICENSE.md).
