module.exports={hasDeepValue:(o,k)=>k.split(".").reduce((a,c)=>Object.hasOwnProperty.bind(a)(c)?a[c]||1:false,Object.assign({}, o))===false?false:true,has:(k)=>(o)=>module.exports.hasDeepValue(o,k)}