// place files you want to import through the `$lib` alias in this folder.
import  PouchDB from 'pouchdb';
export function greet() {
	const db = new PouchDB('kittens');
}

