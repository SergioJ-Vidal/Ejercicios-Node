const Logger = require('logplease');

exports.esPar = (num) => {
 
	const logger = Logger.create('utils');

    if (num%2 == 0)
		return logger.info(true);
	else
		return logger.error(false);
    
};