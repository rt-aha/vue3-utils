<template>
  <div class="">
    <div>
      <div id="terminal" ref="terminal" />
    </div>
  </div>
</template>

<script>
// setup lang="ts"
// import {
//   SnakeCaseToCamelCase,
//   SnakeCaseToKebabCase,
//   SnakeCaseToPascalCase,
//   camelCaseToKebabCase,
//   camelCaseToPascalCase,
//   camelCaseToSnakeCase,
//   firstLetterToUpperCase,
//   kebabCaseToCamelCase,
//   kebabCaseToPascalCase,
//   kebabCaseToSnakeCase,
//   pascalCaseToCamelCase,
//   pascalCaseToKebabCase,
//   pascalCaseToSnakeCase,
// } from '@/utils/variableNameConvert';

// const test1 = 'test';
// const test2 = 'TEST';
// const test3 = 're-multi-select';
// const test4 = 're_multi_select';
// const test5 = 'reMultiSelect';
// const test6 = 'ReMultiSelect';

// console.log(`firstLetterToUpperCase|${test1} --> `, firstLetterToUpperCase(test1));
// console.log(`firstLetterToUpperCase|${test2} --> `, firstLetterToUpperCase(test2));
// console.log('---');
// console.log(`kebabCaseToCamelCase|${test3} --> `, kebabCaseToCamelCase(test3));
// console.log(`kebabCaseToPascalCase|${test3} --> `, kebabCaseToPascalCase(test3));
// console.log(`kebabCaseToSnakeCase|${test3} --> `, kebabCaseToSnakeCase(test3));
// console.log('---');
// console.log(`SnakeCaseToCamelCase|${test4} --> `, SnakeCaseToCamelCase(test4));
// console.log(`SnakeCaseToPascalCase|${test4} --> `, SnakeCaseToPascalCase(test4));
// console.log(`SnakeCaseToKebabCase|${test4} --> `, SnakeCaseToKebabCase(test4));
// console.log('---');
// console.log(`camelCaseToKebabCase|${test5} --> `, camelCaseToKebabCase(test5));
// console.log(`camelCaseToSnakeCase|${test5} --> `, camelCaseToSnakeCase(test5));
// console.log(`camelCaseToPascalCase|${test5} --> `, camelCaseToPascalCase(test5));
// console.log('---');
// console.log(`pascalCaseToKebabCase|${test6} --> `, pascalCaseToKebabCase(test6));
// console.log(`pascalCaseToSnakeCase|${test6} --> `, pascalCaseToSnakeCase(test6));
// console.log(`pascalCaseToCamelCase|${test6} --> `, pascalCaseToCamelCase(test6));

// console.log('fistLetterLowerCase...', fistLetterLowerCase(fruitOptions));

// interface Props {}
// const props = withDefaults(defineProps<Props>(), {});
// const emit = defineEmits([]);
// hooks

// ref, reactive

// computed

// functions

// watch

// lifecycle

import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

export default defineComponent({
  data() {
    return {
      term: '', // 保存terminal实例
      rows: 40,
      cols: 100,
    };
  },
  mounted() {
    this.initXterm();
  },
  methods: {
    initXterm() {
      const _this = this;
      const term = new Terminal({
        rendererType: 'canvas', // 渲染类型
        rows: _this.rows, // 行数
        cols: _this.cols, // 不指定行数，自动回车后光标从下一行开始
        convertEol: true, // 启用时，光标将设置为下一行的开头
        // scrollback: 50, //终端中的回滚量
        disableStdin: false, // 是否应禁用输入
        // cursorStyle: "underline", //光标样式
        cursorBlink: true, // 光标闪烁
        theme: {
          foreground: '#999999', // 字体
          background: '#000000', // 背景色
          cursor: 'help', // 设置光标
          lineHeight: 20,
        },
      });
      // 创建terminal实例
      term.open(this.$refs.terminal);
      // 换行并输入起始符 $
      term.prompt = (_) => {
        term.write('\r\n\x1B[33m$\x1B[0m ');
      };
      term.prompt();
      // canvas背景全屏
      const fitAddon = new FitAddon();
      term.loadAddon(fitAddon);
      fitAddon.fit();

      window.addEventListener('resize', resizeScreen);
      function resizeScreen() {
        try { // 窗口大小改变时，触发xterm的resize方法使自适应
          fitAddon.fit();
        }
        catch (e) {
          console.log('e', e.message);
        }
      }
      _this.term = term;
      _this.runFakeTerminal();
    },
    runFakeTerminal() {
      const _this = this;
      const term = _this.term;
      if (term._initialized) { return; }
      // 初始化
      term._initialized = true;
      term.writeln('hi');
      term.prompt();
      // 添加事件监听器，支持输入方法
      term.onKey((e) => {
        const printable = !e.domEvent.altKey && !e.domEvent.altGraphKey && !e.domEvent.ctrlKey && !e.domEvent.metaKey;
        if (e.domEvent.keyCode === 13) {
          term.prompt();
        }
        else if (e.domEvent.keyCode === 8) { // back 删除的情况
          if (term._core.buffer.x > 2) {
            term.write('\b \b');
          }
        }
        else if (printable) {
          term.write(e.key);
        }
        console.log(1, 'print', e.key);
      });
      term.onData((key) => { // 粘贴的情况
        if (key.length > 1) { term.write(key); }
      });
    },
  },
});
</script>

<style lang="scss" scoped>

</style>
