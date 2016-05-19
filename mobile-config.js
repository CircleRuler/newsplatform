// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.meteor.example.newsplatform',
  name: 'Newsplatform',
  version: "0.0.1",
  description: 'a platform for many users to confirm their thought',
  author: 'Kamisama',
  email: '2514941352@qq.com',
  website: 'http://example.com'
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');

// Pass preferences for a particular PhoneGap/Cordova plugin
App.configurePlugin('cordova-plugin-media-capture', {
  APP_ID: '1234567890',
  API_KEY: 'supersecretapikey'
});