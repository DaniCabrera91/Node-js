const Logger = require('logplease');
const logger = Logger.create('utils');
const esPar = require('./numeros');

const numeros = [2, 3, 101, 201, 202, 100];

for (const numero of numeros) {
  if (esPar(numero)) {
    console.log(logger.info(`El número ${numero} es par`));
  } else {
    console.log(logger.error(`El número ${numero} no es par`));
  }
}

