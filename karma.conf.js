/*global QUNIT, QUNIT_ADAPTER, LOG_INFO, port:true, runnerPort:true, colors:true, logLevel:true, autoWatch:true, basePath:true, files:true, preprocessors:true, exclude:true, reporters:true, coverageReporter:true, browsers:true, captureTimeout:true, singleRun:true, junitReporter:true */

basePath = 'src/main';

files = [
	QUNIT,
	QUNIT_ADAPTER,
	'./vendor/*.js',
	'../test/js/*.js',
	'./js/*.js'
];

preprocessors = {
	'./js/*.js': 'coverage'
};

exclude = [];

reporters = ['progress', 'coverage', 'junit'];

coverageReporter = {
	type : 'html',
	dir : '../../target/coverage/'
};

junitReporter = {
	outputFile : '../../target/test/TEST-results.xml',
	suite : 'js'
};

port = 9876;
runnerPort = 9100;
colors = true;
logLevel = LOG_INFO;
autoWatch = true;
browsers = ['Chrome', 'Firefox'];
captureTimeout = 60000;
singleRun = true;