import Rebase from 're-base';
import Config from './firebase-config';

const Base = Rebase.createClass(Config, 'todo-react');

export default Base;
