

var self = module.exports = {
  __module: {
    provides: {
      "assetManager/use_scripts": {after: 'assetManager/hadron'},
      "assetManager/register_assets_dir": {},
      "assetManager/register_views_dir": {},
      "assetManager/contribute_views": {},
      "assetManager/extend_angular_modules": {}
    }
  },
  
  ASSETS_DIR: __dirname + "/../../assets",

  register_assets_dir: function() {
    return self.ASSETS_DIR;
  },

  register_views_dir: function() {
    return __dirname + "/../../views";
  },

  use_scripts: function() {
    return {
      admin: {file: 'js/**/*.js', cwd: self.ASSETS_DIR}
    };
  },

  extend_angular_modules: function() {
    return {
      hadronAdmin: ['hadron-disqus']
    }
  },

  contribute_views: function() {
    return [
      {name: "post-view-article-footer", view: "plugins/disqus/postView.jade"},
      {name: "admin-tpl-settingsMenuItems", view: "plugins/disqus/adminMenuItem.jade"}
    ];
  }
};