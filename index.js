import os from 'os';
import {fni} from './welcome.js'


console.log(os);
const home = os.homedir();
const host = os.hostname();
const vers = os.version();
const typ = os.type();
console.log(`${home}, ${host}, ${vers}, ${typ}`);
fni();