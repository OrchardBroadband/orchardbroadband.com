const fs = require('fs');
const path = require('path');
const process = require('process');

describe('build home', () => {
	console.log('cwd', process.cwd());
	console.log('filename', __filename);
	console.log('dirname', __dirname);
	console.log('constructed from dirname', path.resolve(__dirname, '../build/index.html'));
	console.log('constructed from cwd', path.resolve(process.cwd(), 'build/index.html'));
	test('exists', () => {
		expect(fs.existsSync('build/index.html')).toBeTruthy()
	});	
});

describe('build css', () => {
	test('exists', () => {
		expect(fs.existsSync('build/css/main.css')).toBeTruthy()
	});	
});

describe('build platform', () => {
	test('manifest exists', () => {
		expect(fs.existsSync('build/platform/manifest.json')).toBeTruthy()
	});	
	
	test('browserconfig exists', () => {
		expect(fs.existsSync('build/platform/browserconfig.xml')).toBeTruthy()
	});	
});

describe('build blog home', () => {
	test('exists', () => {
		expect(fs.existsSync('build/blog/index.html')).toBeTruthy()
	});	
});

describe('build blog posts', () => {
	test('exists', () => {
		expect(fs.existsSync('build/blog/2017/08/08/first-post/index.html')).toBeTruthy()
	});	
});