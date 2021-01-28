(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),o=(n(0),n(160)),r={id:"migrating-2-to-3",title:"Migrating v2 to v3"},l={unversionedId:"migrating-2-to-3",id:"migrating-2-to-3",isDocsHomePage:!1,title:"Migrating v2 to v3",description:"This guide is designed to help you through the migration. If you went through it and encountered any problems - do let us know. For more information on why certain changes were made, see the CHANGELOG.md. When migrating to v3, use the newest version. Gradual updates will take more time and won't ease this process.",source:"@site/../docs/migrating-2-to-3.md",slug:"/migrating-2-to-3",permalink:"/docs/migrating-2-to-3",version:"current",sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/faq"},next:{title:"Basic uniforms usage",permalink:"/docs/tutorials-basic-uniforms-usage"}},c=[{value:"Breaking API changes",id:"breaking-api-changes",children:[]},{value:"Validation flow changes",id:"validation-flow-changes",children:[]},{value:"React Context API",id:"react-context-api",children:[]},{value:"TypeScript",id:"typescript",children:[]},{value:"Miscellaneous",id:"miscellaneous",children:[]}],m={toc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide is designed to help you through the migration. If you went through it and encountered any problems - do let us know. For more information on ",Object(o.b)("em",{parentName:"p"},"why")," certain changes were made, see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/vazco/uniforms/blob/master/CHANGELOG.md"}),Object(o.b)("inlineCode",{parentName:"a"},"CHANGELOG.md")),". When migrating to v3, use the newest version. Gradual updates will take more time and won't ease this process."),Object(o.b)("h2",{id:"breaking-api-changes"},"Breaking API changes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Context data shape has changed: ",Object(o.b)("inlineCode",{parentName:"li"},"changed"),", ",Object(o.b)("inlineCode",{parentName:"li"},"changedMap"),", ",Object(o.b)("inlineCode",{parentName:"li"},"submitting"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"validating")," were lifted from the ",Object(o.b)("inlineCode",{parentName:"li"},"state")," property to the root."),Object(o.b)("li",{parentName:"ul"},"Removed ",Object(o.b)("inlineCode",{parentName:"li"},"AutoForm.state.modelSync"),". Use ",Object(o.b)("inlineCode",{parentName:"li"},"AutoForm.state.model")," instead."),Object(o.b)("li",{parentName:"ul"},"Removed ",Object(o.b)("inlineCode",{parentName:"li"},"BaseField"),". Use ",Object(o.b)("inlineCode",{parentName:"li"},"connectField")," or ",Object(o.b)("inlineCode",{parentName:"li"},"useField")," instead."),Object(o.b)("li",{parentName:"ul"},"Removed ",Object(o.b)("inlineCode",{parentName:"li"},"BaseForm.getChangedKeys"),". Use ",Object(o.b)("inlineCode",{parentName:"li"},"changedKeys")," directly."),Object(o.b)("li",{parentName:"ul"},"Removed ",Object(o.b)("inlineCode",{parentName:"li"},"BaseForm.state.bridge"),". Use ",Object(o.b)("inlineCode",{parentName:"li"},"BaseForm.props.schema")," instead."),Object(o.b)("li",{parentName:"ul"},"Removed ",Object(o.b)("inlineCode",{parentName:"li"},"Bridge.check"),". Without ",Object(o.b)("inlineCode",{parentName:"li"},"createSchemaBridge")," it's no longer needed."),Object(o.b)("li",{parentName:"ul"},"Removed ",Object(o.b)("inlineCode",{parentName:"li"},"baseField")," from ",Object(o.b)("inlineCode",{parentName:"li"},"connectField")," options. There's no one solution here and it may require additional changes, depending on the usage."),Object(o.b)("li",{parentName:"ul"},"Removed ",Object(o.b)("inlineCode",{parentName:"li"},"createSchemaBridge"),". Now all ",Object(o.b)("inlineCode",{parentName:"li"},"*Bridge")," instances have to be created manually.",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),"  import { SimpleSchema } from 'simpl-schema';\n+ import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';\n  const schema = new SimpleSchema({ /* ... */ });\n- <AutoForm schema={schema} />\n+ const bridge = new SimpleSchema2Bridge(schema);\n+ <AutoForm schema={bridge} />\n"))),Object(o.b)("li",{parentName:"ul"},"Removed ",Object(o.b)("inlineCode",{parentName:"li"},"ensureValue")," from ",Object(o.b)("inlineCode",{parentName:"li"},"connectField")," options. That means ",Object(o.b)("inlineCode",{parentName:"li"},"undefined")," will no longer be automatically passed to the field as ",Object(o.b)("inlineCode",{parentName:"li"},"''"),". Use ",Object(o.b)("inlineCode",{parentName:"li"},"value ?? ''")," instead. ",Object(o.b)("strong",{parentName:"li"},"This option was enabled by default, therefore it will impact all your custom fields"),"."),Object(o.b)("li",{parentName:"ul"},"Removed ",Object(o.b)("inlineCode",{parentName:"li"},"includeParent")," from ",Object(o.b)("inlineCode",{parentName:"li"},"connectField")," options. Use ",Object(o.b)("inlineCode",{parentName:"li"},"useField")," as many times as needed instead.",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const parentName = joinName(joinName(null, props.name).slice(0, -1));\nconst parentField = useField(parentName, {}, { absoluteName: true })[0];\n"))),Object(o.b)("li",{parentName:"ul"},"Removed ",Object(o.b)("inlineCode",{parentName:"li"},"injectName"),". In most cases, it can be safely omitted."),Object(o.b)("li",{parentName:"ul"},"Removed ",Object(o.b)("inlineCode",{parentName:"li"},"mapProps")," from ",Object(o.b)("inlineCode",{parentName:"li"},"connectField")," options. Map props directly in the component."),Object(o.b)("li",{parentName:"ul"},"Removed ",Object(o.b)("inlineCode",{parentName:"li"},"nothing"),". Use ",Object(o.b)("inlineCode",{parentName:"li"},"null")," instead."),Object(o.b)("li",{parentName:"ul"},"Removed all ",Object(o.b)("inlineCode",{parentName:"li"},"propTypes")," in favor of TypeScript types."),Object(o.b)("li",{parentName:"ul"},"Renamed or removed deprecated lifecycle methods. If you were using them, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"super.componentWillReceiveProps"),", check whether it's still there and use the correct name if needed."),Object(o.b)("li",{parentName:"ul"},"Renamed ",Object(o.b)("inlineCode",{parentName:"li"},"getChildContext*")," methods to ",Object(o.b)("inlineCode",{parentName:"li"},"getContext*"),", e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"getChildContextName")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"getContextName"),"."),Object(o.b)("li",{parentName:"ul"},"Synchronous return and throw in ",Object(o.b)("inlineCode",{parentName:"li"},"onSubmit")," are no longer allowed. To return an error or some result, return a ",Object(o.b)("inlineCode",{parentName:"li"},"Promise")," instead."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"filterDOMProps.registered")," is now read-only.")),Object(o.b)("h2",{id:"validation-flow-changes"},"Validation flow changes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Bridge validators have to return errors instead of throwing them.",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),"  // GraphQL Schema\n  function validator(model) {\n    if (errors.length) {\n-     throw { details: validator.errors };\n+     return { details: validator.errors };\n    }\n  }\n")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),"  // JSON Schema\n  function createValidator(schema) {\n    const validator = ajv.compile(schema);\n    return (model) => {\n      validator(model);\n      if (validator.errors && validator.errors.length) {\n-       throw { details: validator.errors };\n+       return { details: validator.errors };\n      }\n    };\n  }\n"))),Object(o.b)("li",{parentName:"ul"},"Removed ",Object(o.b)("inlineCode",{parentName:"li"},"onSubmitSuccess")," and ",Object(o.b)("inlineCode",{parentName:"li"},"onSubmitFailure"),". Perform all needed operations directly in the ",Object(o.b)("inlineCode",{parentName:"li"},"onSubmit"),":",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),"- onSubmit={onSubmit}\n- onSubmitSuccess={onSubmitSuccess}\n- onSubmitFailure={onSubmitFailure}\n+ onSubmit={model => {\n+   const result = onSubmit(model);\n+   result.then(onSubmitSuccess, onSubmitFailure);\n+   return result;\n+ }}`\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onValidate")," is no longer using callbacks. The error (or the lack of it) has to be returned either synchronously or asynchronously (i.e. wrapped in a promise).",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),"- onValidate={(model, error, done) => done(error)}\n+ onValidate={async (model, error) => error}\n")))),Object(o.b)("h2",{id:"react-context-api"},"React Context API"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you were ",Object(o.b)("strong",{parentName:"li"},"not")," using ",Object(o.b)("inlineCode",{parentName:"li"},"context"),", ",Object(o.b)("inlineCode",{parentName:"li"},"contextTypes"),", ",Object(o.b)("inlineCode",{parentName:"li"},"childContextTypes"),", or ",Object(o.b)("inlineCode",{parentName:"li"},"getChildContext*")," methods directly, there's nothing to do."),Object(o.b)("li",{parentName:"ul"},"For direct context access, use ",Object(o.b)("inlineCode",{parentName:"li"},"useForm")," hook (functional components), ",Object(o.b)("inlineCode",{parentName:"li"},"contextType")," static property (class components), or ",Object(o.b)("inlineCode",{parentName:"li"},"<context.Consumer />")," (both).",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The React context object, ",Object(o.b)("inlineCode",{parentName:"li"},"context"),", is exported from the ",Object(o.b)("inlineCode",{parentName:"li"},"uniforms")," package.")))),Object(o.b)("h2",{id:"typescript"},"TypeScript"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A lot of types were added or changed. If you are using TypeScript, you may expect some type errors, as all components are no longer full of ",Object(o.b)("inlineCode",{parentName:"li"},"any"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"filterDOMProps.register")," is now type safe and requires ",Object(o.b)("inlineCode",{parentName:"li"},"FilterDOMProps")," interface extension.")),Object(o.b)("h2",{id:"miscellaneous"},"Miscellaneous"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For performance reasons ",Object(o.b)("inlineCode",{parentName:"li"},"getField"),", ",Object(o.b)("inlineCode",{parentName:"li"},"getSubfields"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"getType")," of all bridges are now memoized. If possible, do the same for custom bridges for a potential performance gain."),Object(o.b)("li",{parentName:"ul"},"Simplified ",Object(o.b)("inlineCode",{parentName:"li"},"NumField")," in most themes as it works as expected in React 16 and later. If you have a custom ",Object(o.b)("inlineCode",{parentName:"li"},"NumField")," in your project, do revise its implementation for a potential performance gain."),Object(o.b)("li",{parentName:"ul"},"Stop using direct imports and use named ones instead. It'll let your bundler decide, which version it'll need.",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),"-import BaseForm from 'uniforms/BaseForm';\n+import { BaseForm } from 'uniforms';\n")))))}b.isMDXComponent=!0}}]);