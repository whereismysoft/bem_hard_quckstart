modules.define('box', ['i-bem-dom'], function(provide, bemDom) {

  provide(bemDom.declBlock(this.name, {
      onSetMod : {
          'closed': {
              'yes': function() {
              		console.log('closed')
                  // some functionality here
              },

              '': function() {
					console.log('Unclosed')
                  // some functionality here
              }
          }
      }
  }));

});