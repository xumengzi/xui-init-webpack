const { validate } = require('schema-utils'); 
const RawSource = require('webpack-sources').RawSource;

// 选项对象的 schema
const schema = {
    type: 'object',
    properties: {
      test: {
        type: 'string',
      },
    },
  };

class WTFPlugin {
    constructor(options){
        validate(schema, options, { name: "MyPlugin", baseDataPath: "options" });
        this.options = options;
    }
    apply(compiler){
        console.log('-----\n\n', this.options);
        // compiler.hooks.emit.tap('hello', (compilation) => {
        //     compilation.assets['hello.js'] = new RawSource("console.log('hello,world')");
        // });
        compiler.hooks.emit.tapAsync(
          'WTFPlugin',
          (compilation, callback) => {
            setTimeout(()=>{
              console.log('异步任务完成');
              callback()
            }, 2000)
          }
        )
    }
}

module.exports = {
    WTFPlugin: WTFPlugin
}