(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{612:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_4-5-模型保存和加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-模型保存和加载"}},[t._v("#")]),t._v(" 4.5 模型保存和加载")]),t._v(" "),a("h2",{attrs:{id:"学习目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习目标"}},[t._v("#")]),t._v(" 学习目标")]),t._v(" "),a("ul",[a("li",[t._v("目标\n"),a("ul",[a("li",[t._v("应用joblib实现模型的保存与加载")])])])]),t._v(" "),a("ul",[a("li",[t._v("内容预览\n"),a("ul",[a("li",[t._v("4.5.1 sklearn模型的保存和加载API")]),t._v(" "),a("li",[t._v("4.5.2 线性回归的模型保存加载案例")])])])]),t._v(" "),a("p",[t._v("当训练或者计算好一个模型之后，那么如果别人需要我们提供结果预测，就需要保存模型（主要是保存算法的参数）")]),t._v(" "),a("h2",{attrs:{id:"_4-5-1-sklearn模型的保存和加载api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-1-sklearn模型的保存和加载api"}},[t._v("#")]),t._v(" 4.5.1 sklearn模型的保存和加载API")]),t._v(" "),a("ul",[a("li",[t._v("from sklearn.externals import joblib\n"),a("ul",[a("li",[t._v("保存：joblib.dump(rf, 'test.pkl')")]),t._v(" "),a("li",[t._v("加载：estimator = joblib.load('test.pkl')")])])])]),t._v(" "),a("h2",{attrs:{id:"_4-5-2-线性回归的模型保存加载案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-2-线性回归的模型保存加载案例"}},[t._v("#")]),t._v(" 4.5.2 线性回归的模型保存加载案例")]),t._v(" "),a("ul",[a("li",[t._v("保存")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用线性模型进行预测")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用正规方程求解")]),t._v("\nlr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LinearRegression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时在干什么？")]),t._v("\nlr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存训练完结束的模型")]),t._v("\njoblib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dump"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test.pkl"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("ul",[a("li",[t._v("加载")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过已有的模型去预测房价")]),t._v("\nmodel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" joblib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test.pkl"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"从文件加载进来的模型预测房价的结果："')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" std_y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inverse_transform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("predict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);