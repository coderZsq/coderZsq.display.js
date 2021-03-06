{
  console.log(new Date); // 1
  console.log(Date())
  // 2020 - 10 - 30T13: 10: 03.566Z
  // Fri Oct 30 2020 21: 10: 03 GMT + 0800(China Standard Time)
}

{
  // console.log(new Image);
  // <img>
  // console.log(Image());//抛出错误
  // Uncaught TypeError: Failed to construct 'Image': Please use the 'new' operator, this DOM object constructor cannot be called as a function.
}

{
  // new (a => 0) // error
  // TypeError: (intermediate value) is not a constructor
}

{
  function f() {
    return 1;
  }
  var v = f(); //把f作为函数调用
  var o = new f(); //把f作为构造器调用
}

{
  function cls() {
    this.a = 100;
    return {
      getValue: () => this.a
    }
  }
  var o = new cls;
  o.getValue(); //100
  //a在外面永远无法访问到
}

{
  var set = new Set();
  var objects = [
    eval,
    isFinite,
    isNaN,
    parseFloat,
    parseInt,
    decodeURI,
    decodeURIComponent,
    encodeURI,
    encodeURIComponent,
    Array,
    Date,
    RegExp,
    Promise,
    Proxy,
    Map,
    WeakMap,
    Set,
    WeakSet,
    Function,
    Boolean,
    String,
    Number,
    Symbol,
    Object,
    Error,
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError,
    ArrayBuffer,
    SharedArrayBuffer,
    DataView,
    Float32Array,
    Float64Array,
    Int8Array,
    Int16Array,
    Int32Array,
    Uint8Array,
    Uint16Array,
    Uint32Array,
    Uint8ClampedArray,
    Atomics,
    JSON,
    Math,
    Reflect];
  objects.forEach(o => set.add(o));

  for (var i = 0; i < objects.length; i++) {
    var o = objects[i]
    for (var p of Object.getOwnPropertyNames(o)) {
      var d = Object.getOwnPropertyDescriptor(o, p)
      if ((d.value !== null && typeof d.value === "object") || (typeof d.value === "function"))
        if (!set.has(d.value))
          set.add(d.value), objects.push(d.value);
      if (d.get)
        if (!set.has(d.get))
          set.add(d.get), objects.push(d.get);
      if (d.set)
        if (!set.has(d.set))
          set.add(d.set), objects.push(d.set);
    }
  }
  console.log(set.size)
  console.log(set)

  // 440
  /*
  Set {
  [Function: eval],
  [Function: isFinite],
  [Function: isNaN],
  [Function: parseFloat],
  [Function: parseInt],
  [Function: decodeURI],
  [Function: decodeURIComponent],
  [Function: encodeURI],
  [Function: encodeURIComponent],
  [Function: Array],
  [Function: Date],
  [Function: RegExp],
  [Function: Promise],
  [Function: Proxy],
  [Function: Map],
  [Function: WeakMap],
  [Function: Set],
  [Function: WeakSet],
  [Function: Function],
  [Function: Boolean],
  [Function: String],
  [Function: Number],
  [Function: Symbol],
  [Function: Object],
  [Function: Error] { stackTraceLimit: 10 },
  [Function: EvalError],
  [Function: RangeError],
  [Function: ReferenceError],
  [Function: SyntaxError],
  [Function: TypeError],
  [Function: URIError],
  [Function: ArrayBuffer],
  [Function: SharedArrayBuffer],
  [Function: DataView],
  [Function: Float32Array],
  [Function: Float64Array],
  [Function: Int8Array],
  [Function: Int16Array],
  [Function: Int32Array],
  [Function: Uint8Array],
  [Function: Uint16Array],
  [Function: Uint32Array],
  [Function: Uint8ClampedArray],
  Object [Atomics] {},
  Object [JSON] {},
  Object [Math] {},
  {},
  [],
  [Function: isArray],
  [Function: from],
  [Function: of],
  Date {},
  [Function: now],
  [Function: parse],
  [Function: UTC],
  RegExp {},
  [Function: get input],
  [Function: set input],
  [Function: get $_],
  [Function: set $_],
  [Function: get lastMatch],
  [Function: set lastMatch],
  [Function: get $&],
  [Function: set $&],
  [Function: get lastParen],
  [Function: set lastParen],
  [Function: get $+],
  [Function: set $+],
  [Function: get leftContext],
  [Function: set leftContext],
  [Function: get $`],
  [Function: set $`],
  [Function: get rightContext],
  [Function: set rightContext],
  [Function: get $'],
  [Function: set $'],
  [Function: get $1],
  [Function: set $1],
  [Function: get $2],
  [Function: set $2],
  [Function: get $3],
  [Function: set $3],
  [Function: get $4],
  [Function: set $4],
  [Function: get $5],
  [Function: set $5],
  [Function: get $6],
  [Function: set $6],
  [Function: get $7],
  [Function: set $7],
  [Function: get $8],
  [Function: set $8],
  [Function: get $9],
  [Function: set $9],
  Promise {},
  [Function: all],
  [Function: race],
  [Function: resolve],
  [Function: reject],
  [Function: allSettled],
  [Function: revocable],
  Map {},
  WeakMap {},
  Set {},
  WeakSet {},
  [Function],
  [Boolean: false],
  [String: ''],
  [Function: fromCharCode],
  [Function: fromCodePoint],
  [Function: raw],
  [Number: 0],
  [Function: isFinite],
  [Function: isInteger],
  [Function: isNaN],
  [Function: isSafeInteger],
  Symbol {},
  [Function: for],
  [Function: keyFor],
  {},
  [Function: assign],
  [Function: getOwnPropertyDescriptor],
  [Function: getOwnPropertyDescriptors],
  [Function: getOwnPropertyNames],
  [Function: getOwnPropertySymbols],
  [Function: is],
  [Function: preventExtensions],
  [Function: seal],
  [Function: create],
  [Function: defineProperties],
  [Function: defineProperty],
  [Function: freeze],
  [Function: getPrototypeOf],
  [Function: setPrototypeOf],
  [Function: isExtensible],
  [Function: isFrozen],
  [Function: isSealed],
  [Function: keys],
  [Function: entries],
  [Function: fromEntries],
  [Function: values],
  Error {},
  [Function: captureStackTrace],
  [EvalError],
  [RangeError],
  [ReferenceError],
  [SyntaxError],
  [TypeError],
  [URIError],
  ArrayBuffer {},
  [Function: isView],
  SharedArrayBuffer {},
  DataView {},
  Float32Array {},
  Float64Array {},
  Int8Array {},
  Int16Array {},
  Int32Array {},
  Uint8Array {},
  Uint16Array {},
  Uint32Array {},
  Uint8ClampedArray {},
  [Function: load],
  [Function: store],
  [Function: add],
  [Function: sub],
  [Function: and],
  [Function: or],
  [Function: xor],
  [Function: exchange],
  [Function: compareExchange],
  [Function: isLockFree],
  [Function: wait],
  [Function: notify],
  [Function: parse],
  [Function: stringify],
  [Function: abs],
  [Function: acos],
  [Function: acosh],
  [Function: asin],
  [Function: asinh],
  [Function: atan],
  [Function: atanh],
  [Function: atan2],
  [Function: ceil],
  [Function: cbrt],
  [Function: expm1],
  [Function: clz32],
  [Function: cos],
  [Function: cosh],
  [Function: exp],
  [Function: floor],
  [Function: fround],
  [Function: hypot],
  [Function: imul],
  [Function: log],
  [Function: log1p],
  [Function: log2],
  [Function: log10],
  [Function: max],
  [Function: min],
  [Function: pow],
  [Function: random],
  [Function: round],
  [Function: sign],
  [Function: sin],
  [Function: sinh],
  [Function: sqrt],
  [Function: tan],
  [Function: tanh],
  [Function: trunc],
  [Function: defineProperty],
  [Function: deleteProperty],
  [Function: apply],
  [Function: construct],
  [Function: get],
  [Function: getOwnPropertyDescriptor],
  [Function: getPrototypeOf],
  [Function: has],
  [Function: isExtensible],
  [Function: ownKeys],
  [Function: preventExtensions],
  [Function: set],
  [Function: setPrototypeOf],
  [Function: concat],
  [Function: copyWithin],
  [Function: fill],
  [Function: find],
  [Function: findIndex],
  [Function: lastIndexOf],
  [Function: pop],
  [Function: push],
  [Function: reverse],
  [Function: shift],
  [Function: unshift],
  [Function: slice],
  [Function: sort],
  [Function: splice],
  [Function: includes],
  [Function: indexOf],
  [Function: join],
  [Function: keys],
  [Function: entries],
  [Function: values],
  [Function: forEach],
  [Function: filter],
  [Function: flat],
  [Function: flatMap],
  [Function: map],
  [Function: every],
  [Function: some],
  [Function: reduce],
  [Function: reduceRight],
  [Function: toLocaleString],
  [Function: toString],
  [Function: toString],
  [Function: toDateString],
  [Function: toTimeString],
  [Function: toISOString],
  [Function: toUTCString],
  [Function: getDate],
  [Function: setDate],
  [Function: getDay],
  [Function: getFullYear],
  [Function: setFullYear],
  [Function: getHours],
  [Function: setHours],
  [Function: getMilliseconds],
  [Function: setMilliseconds],
  [Function: getMinutes],
  [Function: setMinutes],
  [Function: getMonth],
  [Function: setMonth],
  [Function: getSeconds],
  [Function: setSeconds],
  [Function: getTime],
  [Function: setTime],
  [Function: getTimezoneOffset],
  [Function: getUTCDate],
  [Function: setUTCDate],
  [Function: getUTCDay],
  [Function: getUTCFullYear],
  [Function: setUTCFullYear],
  [Function: getUTCHours],
  [Function: setUTCHours],
  [Function: getUTCMilliseconds],
  [Function: setUTCMilliseconds],
  [Function: getUTCMinutes],
  [Function: setUTCMinutes],
  [Function: getUTCMonth],
  [Function: setUTCMonth],
  [Function: getUTCSeconds],
  [Function: setUTCSeconds],
  [Function: valueOf],
  [Function: getYear],
  [Function: setYear],
  [Function: toJSON],
  [Function: toLocaleString],
  [Function: toLocaleDateString],
  [Function: toLocaleTimeString],
  [Function: exec],
  [Function: get dotAll],
  [Function: get flags],
  [Function: get global],
  [Function: get ignoreCase],
  [Function: get multiline],
  [Function: get source],
  [Function: get sticky],
  [Function: get unicode],
  [Function: compile],
  [Function: toString],
  [Function: test],
  [Function: then],
  [Function: catch],
  [Function: finally],
  [Function: get],
  [Function: set],
  [Function: has],
  [Function: delete],
  [Function: clear],
  [Function: entries],
  [Function: forEach],
  [Function: keys],
  [Function: get size],
  [Function: values],
  [Function: delete],
  [Function: get],
  [Function: set],
  [Function: has],
  [Function: has],
  [Function: add],
  [Function: delete],
  [Function: clear],
  [Function: entries],
  [Function: forEach],
  [Function: get size],
  [Function: values],
  [Function: delete],
  [Function: has],
  [Function: add],
  [Function],
  [Function: apply],
  [Function: bind],
  [Function: call],
  [Function: toString],
  [Function: toString],
  [Function: valueOf],
  [Function: anchor],
  [Function: big],
  [Function: blink],
  [Function: bold],
  [Function: charAt],
  [Function: charCodeAt],
  [Function: codePointAt],
  [Function: concat],
  [Function: endsWith],
  [Function: fontcolor],
  [Function: fontsize],
  [Function: fixed],
  [Function: includes],
  [Function: indexOf],
  [Function: italics],
  [Function: lastIndexOf],
  [Function: link],
  [Function: localeCompare],
  [Function: match],
  [Function: matchAll],
  [Function: normalize],
  [Function: padEnd],
  [Function: padStart],
  [Function: repeat],
  [Function: replace],
  [Function: search],
  [Function: slice],
  [Function: small],
  [Function: split],
  [Function: strike],
  [Function: sub],
  [Function: substr],
  [Function: substring],
  [Function: sup],
  [Function: startsWith],
  [Function: toString],
  [Function: trim],
  [Function: trimStart],
  [Function: trimEnd],
  [Function: toLocaleLowerCase],
  [Function: toLocaleUpperCase],
  [Function: toLowerCase],
  [Function: toUpperCase],
  [Function: valueOf],
  [Function: toExponential],
  [Function: toFixed],
  [Function: toPrecision],
  [Function: toString],
  [Function: valueOf],
  [Function: toLocaleString],
  [Function: toString],
  [Function: valueOf],
  [Function: get description],
  [Function: __defineGetter__],
  [Function: __defineSetter__],
  [Function: hasOwnProperty],
  [Function: __lookupGetter__],
  [Function: __lookupSetter__],
  [Function: isPrototypeOf],
  [Function: propertyIsEnumerable],
  [Function: toString],
  [Function: valueOf],
  [Function: get __proto__],
  [Function: set __proto__],
  [Function: toLocaleString],
  [Function: toString],
  [Function: get byteLength],
  [Function: slice],
  [Function: get byteLength],
  [Function: slice],
  [Function: get buffer],
  [Function: get byteLength],
  [Function: get byteOffset],
  [Function: getInt8],
  [Function: setInt8],
  [Function: getUint8],
  [Function: setUint8],
  [Function: getInt16],
  [Function: setInt16],
  [Function: getUint16],
  [Function: setUint16],
  [Function: getInt32],
  [Function: setInt32],
  [Function: getUint32],
  [Function: setUint32],
  [Function: getFloat32],
  [Function: setFloat32],
  [Function: getFloat64],
  [Function: setFloat64],
  [Function: getBigInt64],
  [Function: setBigInt64],
  [Function: getBigUint64],
  [Function: setBigUint64]
}
  */
}