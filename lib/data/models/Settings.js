
module.exports = function(Settings) {
  Settings.property('disqusForumShortname', String);
  return Settings;
};

module.exports.__module = {
  args: ['data/models/Settings']
};
