module.exports = function(app){
	require('./middleware')(app);
	require('./view')(app);
	require('./routes')(app);
}