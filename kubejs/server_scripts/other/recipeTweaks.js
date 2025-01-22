// Load common functions
require('../common.js');
require('./integratedProcessing.js');


// Start of unwantedRecipes
console.info('Removing unwanted recipes...')

ServerEvents.recipes(event => {
	unifiedRecipes(event)
})