#!/usr/bin/env bash

const fs = require('fs');
const files = fs.readdirSync('./').filter(el => /\.xml$/.test(el));

const sb = new Array();
for (const file of files) {
	const link = `[${file.replace('.xml', '')}](http://www.kids-lab.io?src=kids-lab-chamarette-2019%2Fmaster%2F${encodeURI(file)})`;
	console.log(link);
	sb.push(`\*${link} \n`);
}

fs.readFile('./README.template', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/\$link\-list\$/g, sb.join(''));

  fs.writeFile('./README.md', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});