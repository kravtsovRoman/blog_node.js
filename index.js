const app = require('./app');
const database = require('./database');
const config = require('./config');

database()
  .then(info => {
    console.log(`Connected to ${info.host}: ${info.port} / ${info.name}`);
    app.listen(config.PORT, () =>
      console.log(`Прослушивается порт ${config.PORT}`)
    );
  })
  .catch(() => {
    console.error('Unable to conect to database');
    process.exit(1);
  });
