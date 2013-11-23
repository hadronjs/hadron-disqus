

module.exports = {
  __module: {
    provides: {
      use_scripts: {after: 'assetManager/hadron'},
      register_assets_dir: {},
      register_views_dir: {},
      contribute_views: {}
    }
  },

  register_assets_dir: function() {
    return __dirname + "/../../assets";
  },

  register_views_dir: function() {
    return __dirname + "/../../views";
  },

  use_scripts: function() {
    return {
      admin: 'js/plugin-disqus.js'
    };
  },

  contribute_views: function() {
    return [
      {name: "post-view-article-footer", view: "plugins/disqus/postView.jade"},
      {name: "admin-tpl-saveSettings-bottom", view: "plugins/disqus/saveSettings.jade"}
    ];
  }
};