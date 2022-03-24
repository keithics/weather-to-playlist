if (!process.env.NODE_ENV) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config({ path: './development.env' });
}

import chalk from 'chalk';
import app from './server/app';
import config from './server/config';

const port = process.env.NODE_ENV === 'development' ? config.NODE_PORT_ALT : config.NODE_PORT;
const projectName = config.PROJECT_NAME;
const env = process.env.NODE_ENV || 'development';

/**
 * Start Express
 */
app
  .listen(port, () => {
    const server = `${
      (process.env.NODE_ENV === 'secure' ? 'https://' : 'http://') + config.NODE_HOST
    }:${port}`;

    console.log(` ${projectName} running on http://localhost:${port}`);
    console.log('--');
    console.log();
    console.log(chalk.yellow(`Environment:     ${env}`));
    console.log(chalk.magenta(`Server:          ${server}`));
    console.log(chalk.green(`Database:        ${config.MONGO_URL}`));
    console.log(chalk.red(`Mongo Debug:     ${config.MONGO_DEBUG}`));
    console.log();
    console.log('--');
    console.log();
  })
  .on('error', function (err) {
    if (err.code === 'EADDRINUSE') {
      console.error(chalk.red(`Port ${port} is busy, kill and retry....`));
    } else {
      console.error(err);
    }
  });
