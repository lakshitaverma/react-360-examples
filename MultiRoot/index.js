import {AppRegistry} from 'react-360';
import TopPosts from './TopPosts';
import CurrentPost from './CurrentPost';
import ModelView from './ModelView';
import * as Store from './Store';
Store.initialize('AIzaSyBD3Fkba7x49MPl1qOymI9eNWTrFcTdZnY');

AppRegistry.registerComponent('TopPosts', () => TopPosts);
AppRegistry.registerComponent('CurrentPost', () => CurrentPost);
AppRegistry.registerComponent('ModelView', () => ModelView);
