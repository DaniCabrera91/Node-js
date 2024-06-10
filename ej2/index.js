const Logger = require('logplease');
const logger = Logger.create('utils');
console.log( logger.debug(`Hola Mundo de Node`));
console.log(logger.info(`Noticias de última hora, Node.js me encanta!!`));
console.log(logger.warn(`Tirando warnings como campeones`));
console.log(logger.error(`Algo no está bien!!!`));
