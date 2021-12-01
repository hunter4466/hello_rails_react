import Rails from '@rails/ujs';
import Turbolinks from 'turbolinks';
import * as ActiveStorage from '@rails/activestorage';
import 'channels';

Rails.start();
Turbolinks.start();
ActiveStorage.start();
// Support component names relative to this directory:
let componentRequireContext = require.context('components', true);
let ReactRailsUJS = require('react_ujs');
ReactRailsUJS.useContext(componentRequireContext);
