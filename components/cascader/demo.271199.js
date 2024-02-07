(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1458:function(n,a,s){n.exports={content:{"zh-CN":[["p","省市区级联。"],["ul",["li",["p","添加类名 dt-ant-select-outside 为级联选择框设置统一样式"]]]],"en-US":[["h2","zh-CN"],["p","省市区级联。"],["ul",["li",["p","添加类名 dt-ant-select-outside 为级联选择框设置统一样式"]]]]},meta:{order:1,title:{"zh-CN":"基本"},filename:"components/cascader/demo/basic.md",id:"components-cascader-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'zhejiang\'</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'Zhejiang Zhejiang Zhejiang Zhejiang\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'hangzhou\'</span><span class="token punctuation">,</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Hangzhou\'</span><span class="token punctuation">,</span>\n        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            value<span class="token punctuation">:</span> <span class="token string">\'xihu\'</span><span class="token punctuation">,</span>\n            label<span class="token punctuation">:</span> <span class="token string">\'West Lake\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'jiangsu\'</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'Jiangsu\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'nanjing\'</span><span class="token punctuation">,</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Nanjing\'</span><span class="token punctuation">,</span>\n        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            value<span class="token punctuation">:</span> <span class="token string">\'zhonghuamen\'</span><span class="token punctuation">,</span>\n            label<span class="token punctuation">:</span> <span class="token string">\'Zhong Hua Men\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">autoFocus</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dt-ant-select-outside<span class="token punctuation">"</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Please</span> <span class="token attr-name">select"</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">\'zhejiang\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'Zhejiang Zhejiang Zhejiang Zhejiang\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">\'hangzhou\'</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'Hangzhou\'</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">\'xihu\'</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'West Lake\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">\'jiangsu\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'Jiangsu\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">\'nanjing\'</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'Nanjing\'</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">\'zhonghuamen\'</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'Zhong Hua Men\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">autoFocus</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dt-ant-select-outside<span class="token punctuation">"</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n=s(0),a=(s(29),s(161));return n.createElement(a.Cascader,{autoFocus:!0,className:"dt-ant-select-outside",options:[{value:"zhejiang",label:"Zhejiang Zhejiang Zhejiang Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],onChange:function(n){console.log(n)},placeholder:"Please select"})}}},1459:function(n,a,s){n.exports={content:{"zh-CN":[["p","多选样式"]],"en-US":[["h2","zh-CN"],["p","多选样式"]]},meta:{order:1,title:{"zh-CN":"基本"},filename:"components/cascader/demo/select.md",id:"components-cascader-demo-select"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'zhejiang\'</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'Zhejiang Zhejiang Zhejiang Zhejiang\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'hangzhou\'</span><span class="token punctuation">,</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Hangzhou\'</span><span class="token punctuation">,</span>\n        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            value<span class="token punctuation">:</span> <span class="token string">\'xihu\'</span><span class="token punctuation">,</span>\n            label<span class="token punctuation">:</span> <span class="token string">\'West Lake West Lake West Lake West Lake\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'jiangsu\'</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'Jiangsu\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'nanjing\'</span><span class="token punctuation">,</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Nanjing\'</span><span class="token punctuation">,</span>\n        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            value<span class="token punctuation">:</span> <span class="token string">\'zhonghuamen\'</span><span class="token punctuation">,</span>\n            label<span class="token punctuation">:</span> <span class="token string">\'Zhong Hua Men\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dt-ant-select-outside<span class="token punctuation">"</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Please</span> <span class="token attr-name">select"</span> <span class="token attr-name">multiple</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">\'zhejiang\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'Zhejiang Zhejiang Zhejiang Zhejiang\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">\'hangzhou\'</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'Hangzhou\'</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">\'xihu\'</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'West Lake West Lake West Lake West Lake\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">\'jiangsu\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'Jiangsu\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">\'nanjing\'</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'Nanjing\'</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">\'zhonghuamen\'</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'Zhong Hua Men\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dt-ant-select-outside<span class="token punctuation">"</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span> <span class="token attr-name">multiple</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n=s(0),a=(s(29),s(161));return n.createElement(a.Cascader,{className:"dt-ant-select-outside",options:[{value:"zhejiang",label:"Zhejiang Zhejiang Zhejiang Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake West Lake West Lake West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],onChange:function(n){console.log(n)},placeholder:"Please select",multiple:!0})}}}}]);