(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var r=n("b622"),a=r("toStringTag"),i={};i[a]="z",t.exports="[object z]"===String(i)},"0366":function(t,e,n){var r=n("59ed");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,a){return t.call(e,n,r,a)}}return function(){return t.apply(e,arguments)}}},"06cf":function(t,e,n){var r=n("83ab"),a=n("d1e7"),i=n("5c6c"),o=n("fc6a"),s=n("a04b"),c=n("5135"),l=n("0cfb"),u=Object.getOwnPropertyDescriptor;e.f=r?u:function(t,e){if(t=o(t),e=s(e),l)try{return u(t,e)}catch(n){}if(c(t,e))return i(!a.f.call(t,e),t[e])}},"0759":function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n("2b0e"),a=n("b42e"),i=n("c637"),o=n("a723"),s=n("992e"),c=n("d82f"),l=n("cf75"),u=n("fa73"),h=n("7386"),d=n("aa0d");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=function t(e,n){if(!e)return null;var r=(e.$options||{}).components,a=r[n];return a||t(e.$parent,n)},b=Object(c["j"])(d["b"],["content"]),g=Object(l["d"])(Object(c["m"])(p(p({},b),{},{icon:Object(l["c"])(o["u"])})),i["lb"]),y=r["default"].extend({name:i["lb"],functional:!0,props:g,render:function(t,e){var n=e.data,r=e.props,i=e.parent,o=Object(u["e"])(Object(u["h"])(r.icon||"")).replace(s["q"],"");return t(o&&m(i,"BIcon".concat(o))||h["Fc"],Object(a["a"])(n,{props:Object(l["e"])(b,r)}))}})},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Ki})),n.d(e,"b",(function(){return Xi})),n.d(e,"c",(function(){return qo})),n.d(e,"d",(function(){return Wo})),n.d(e,"e",(function(){return Qi})),n.d(e,"f",(function(){return xo})),n.d(e,"g",(function(){return Ko})),n.d(e,"h",(function(){return Xo})),n.d(e,"i",(function(){return Fo}));var r=n("5606"),a=n("ffa6"),i=n("4fc1"),o=n("1fd5"),s=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}l.UNAUTHENTICATED=new l(null),l.GOOGLE_CREDENTIALS=new l("google-credentials-uid"),l.FIRST_PARTY=new l("first-party-uid"),l.MOCK_USER=new l("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="9.1.3";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new i["b"]("@firebase/firestore");function d(){return h.logLevel}function f(t,...e){if(h.logLevel<=i["a"].DEBUG){const n=e.map(m);h.debug(`Firestore (${u}): ${t}`,...n)}}function p(t,...e){if(h.logLevel<=i["a"].ERROR){const n=e.map(m);h.error(`Firestore (${u}): ${t}`,...n)}}function v(t,...e){if(h.logLevel<=i["a"].WARN){const n=e.map(m);h.warn(`Firestore (${u}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t="Unexpected state"){const e=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function g(t,e){t||b()}function y(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class M{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(l.UNAUTHENTICATED))}shutdown(){}}class A{constructor(t){this.t=t,this.currentUser=l.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let a=new w;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new w,t.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const e=a;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{f("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseCredentialsProvider","Auth not yet detected"),a.resolve(),a=new w)}},0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(g("string"==typeof e.accessToken),new j(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return g(null===t||"string"==typeof t),new l(t)}}class V{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=l.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class C{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new V(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(l.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */I.T=-1;class k{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=S(40);for(let a=0;a<r.length;++a)n.length<20&&r[a]<e&&(n+=t.charAt(r[a]%t.length))}return n}}function T(t,e){return t<e?-1:t>e?1:0}function H(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return L.fromMillis(Date.now())}static fromDate(t){return L.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new L(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?T(this.nanoseconds,t.nanoseconds):T(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.timestamp=t}static fromTimestamp(t){return new B(t)}static min(){return new B(new L(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function E(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function x(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(t,e,n){void 0===e?e=0:e>t.length&&b(),void 0===n?n=t.length-e:n>t.length-e&&b(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===_.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof _?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),a=e.get(r);if(n<a)return-1;if(n>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class F extends _{construct(t,e,n){return new F(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new z(O.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new F(e)}static emptyPath(){return new F([])}}const D=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class R extends _{construct(t,e,n){return new R(t,e,n)}static isValidIdentifier(t){return D.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),R.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new R(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const a=()=>{if(0===n.length)throw new z(O.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new z(O.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new z(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(a(),r++)}if(a(),i)throw new z(O.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new R(e)}static emptyPath(){return new R([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.fields=t,t.sort(R.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return H(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new $(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new $(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return T(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}$.EMPTY_BYTE_STRING=new $("");const U=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function q(t){if(g(!!t),"string"==typeof t){let e=0;const n=U.exec(t);if(g(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:G(t.seconds),nanos:G(t.nanos)}}function G(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function W(t){return"string"==typeof t?$.fromBase64String(t):$.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function X(t){const e=t.mapValue.fields.__previous_value__;return K(e)?X(e):e}function Y(t){const e=q(t.mapValue.fields.__local_write_time__.timestampValue);return new L(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){return null==t}function Q(t){return 0===t&&1/t==-1/0}function Z(t){return"number"==typeof t&&Number.isInteger(t)&&!Q(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.path=t}static fromPath(t){return new tt(F.fromString(t))}static fromName(t){return new tt(F.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===F.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return F.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new F(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?K(t)?4:10:b()}function nt(t,e){const n=et(t);if(n!==et(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Y(t).isEqual(Y(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=q(t.timestampValue),r=q(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return W(t.bytesValue).isEqual(W(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return G(t.geoPointValue.latitude)===G(e.geoPointValue.latitude)&&G(t.geoPointValue.longitude)===G(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return G(t.integerValue)===G(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=G(t.doubleValue),r=G(e.doubleValue);return n===r?Q(n)===Q(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return H(t.arrayValue.values||[],e.arrayValue.values||[],nt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(P(n)!==P(r))return!1;for(const a in n)if(n.hasOwnProperty(a)&&(void 0===r[a]||!nt(n[a],r[a])))return!1;return!0}(t,e);default:return b()}}function rt(t,e){return void 0!==(t.values||[]).find(t=>nt(t,e))}function at(t,e){const n=et(t),r=et(e);if(n!==r)return T(n,r);switch(n){case 0:return 0;case 1:return T(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=G(t.integerValue||t.doubleValue),r=G(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return it(t.timestampValue,e.timestampValue);case 4:return it(Y(t),Y(e));case 5:return T(t.stringValue,e.stringValue);case 6:return function(t,e){const n=W(t),r=W(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let a=0;a<n.length&&a<r.length;a++){const t=T(n[a],r[a]);if(0!==t)return t}return T(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=T(G(t.latitude),G(e.latitude));return 0!==n?n:T(G(t.longitude),G(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let a=0;a<n.length&&a<r.length;++a){const t=at(n[a],r[a]);if(t)return t}return T(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),a=e.fields||{},i=Object.keys(a);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=T(r[o],i[o]);if(0!==t)return t;const e=at(n[r[o]],a[i[o]]);if(0!==e)return e}return T(r.length,i.length)}(t.mapValue,e.mapValue);default:throw b()}}function it(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return T(t,e);const n=q(t),r=q(e),a=T(n.seconds,r.seconds);return 0!==a?a:T(n.nanos,r.nanos)}function ot(t){return st(t)}function st(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=q(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?W(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,tt.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=st(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const a of e)r?r=!1:n+=",",n+=`${a}:${st(t.fields[a])}`;return n+"}"}(t.mapValue):b();var e,n}function ct(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function lt(t){return!!t&&"integerValue"in t}function ut(t){return!!t&&"arrayValue"in t}function ht(t){return!!t&&"nullValue"in t}function dt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ft(t){return!!t&&"mapValue"in t}function pt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return E(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=pt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ft(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=pt(e)}setAll(t){let e=R.emptyPath(),n={},r=[];t.forEach((t,a)=>{if(!e.isImmediateParentOf(a)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=a.popLast()}t?n[a.lastSegment()]=pt(t):r.push(a.lastSegment())});const a=this.getFieldsMap(e);this.applyChanges(a,n,r)}delete(t){const e=this.field(t.popLast());ft(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return nt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ft(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){E(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new vt(pt(this.value))}}function mt(t){const e=[];return E(t.fields,(t,n)=>{const r=new R([t]);if(ft(n)){const t=mt(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new N(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class bt{constructor(t,e,n,r,a){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=a}static newInvalidDocument(t){return new bt(t,0,B.min(),vt.empty(),0)}static newFoundDocument(t,e,n){return new bt(t,1,e,n,0)}static newNoDocument(t,e){return new bt(t,2,e,vt.empty(),0)}static newUnknownDocument(t,e){return new bt(t,3,e,vt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof bt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new bt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e=null,n=[],r=[],a=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=a,this.startAt=i,this.endAt=o,this.A=null}}function yt(t,e=null,n=[],r=[],a=null,i=null,o=null){return new gt(t,e,n,r,a,i,o)}function Ot(t){const e=y(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>At(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),J(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Pt(e.startAt)),e.endAt&&(t+="|ub:",t+=Pt(e.endAt)),e.A=t}return e.A}function zt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ot(e.value)}`;var e}).join(", ")}]`),J(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Pt(t.startAt)),t.endAt&&(e+=", endAt: "+Pt(t.endAt)),`Target(${e})`}function wt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let a=0;a<t.orderBy.length;a++)if(!xt(t.orderBy[a],e.orderBy[a]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let a=0;a<t.filters.length;a++)if(n=t.filters[a],r=e.filters[a],n.op!==r.op||!n.field.isEqual(r.field)||!nt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ft(t.startAt,e.startAt)&&Ft(t.endAt,e.endAt)}function jt(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Mt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new Vt(t,e,n):"array-contains"===e?new kt(t,n):"in"===e?new Tt(t,n):"not-in"===e?new Ht(t,n):"array-contains-any"===e?new Lt(t,n):new Mt(t,e,n)}static R(t,e,n){return"in"===e?new Ct(t,n):new It(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(at(e,this.value)):null!==e&&et(this.value)===et(e)&&this.P(at(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return b()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function At(t){return t.field.canonicalString()+t.op.toString()+ot(t.value)}class Vt extends Mt{constructor(t,e,n){super(t,e,n),this.key=tt.fromName(n.referenceValue)}matches(t){const e=tt.comparator(t.key,this.key);return this.P(e)}}class Ct extends Mt{constructor(t,e){super(t,"in",e),this.keys=St("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class It extends Mt{constructor(t,e){super(t,"not-in",e),this.keys=St("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function St(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>tt.fromName(t.referenceValue))}class kt extends Mt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ut(e)&&rt(e.arrayValue,this.value)}}class Tt extends Mt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&rt(this.value.arrayValue,e)}}class Ht extends Mt{constructor(t,e){super(t,"not-in",e)}matches(t){if(rt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!rt(this.value.arrayValue,e)}}class Lt extends Mt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ut(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>rt(this.value.arrayValue,t))}}class Bt{constructor(t,e){this.position=t,this.before=e}}function Pt(t){return`${t.before?"b":"a"}:${t.position.map(t=>ot(t)).join(",")}`}class Et{constructor(t,e="asc"){this.field=t,this.dir=e}}function xt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function _t(t,e,n){let r=0;for(let a=0;a<t.position.length;a++){const i=e[a],o=t.position[a];if(r=i.field.isKeyField()?tt.comparator(tt.fromName(o.referenceValue),n.key):at(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Ft(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nt(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,e=null,n=[],r=[],a=null,i="F",o=null,s=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=a,this.limitType=i,this.startAt=o,this.endAt=s,this.V=null,this.S=null,this.startAt,this.endAt}}function Rt(t,e,n,r,a,i,o,s){return new Dt(t,e,n,r,a,i,o,s)}function Nt(t){return new Dt(t)}function $t(t){return!J(t.limit)&&"F"===t.limitType}function Ut(t){return!J(t.limit)&&"L"===t.limitType}function qt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Gt(t){for(const e of t.filters)if(e.v())return e.field;return null}function Wt(t){return null!==t.collectionGroup}function Kt(t){const e=y(t);if(null===e.V){e.V=[];const t=Gt(e),n=qt(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new Et(t)),e.V.push(new Et(R.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Et(R.keyField(),t))}}}return e.V}function Xt(t){const e=y(t);if(!e.S)if("F"===e.limitType)e.S=yt(e.path,e.collectionGroup,Kt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const a of Kt(e)){const e="desc"===a.dir?"asc":"desc";t.push(new Et(a.field,e))}const n=e.endAt?new Bt(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Bt(e.startAt.position,!e.startAt.before):null;e.S=yt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function Yt(t,e,n){return new Dt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jt(t,e){return wt(Xt(t),Xt(e))&&t.limitType===e.limitType}function Qt(t){return`${Ot(Xt(t))}|lt:${t.limitType}`}function Zt(t){return`Query(target=${zt(Xt(t))}; limitType=${t.limitType})`}function te(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):tt.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!_t(t.startAt,Kt(t),e))&&(!t.endAt||!_t(t.endAt,Kt(t),e))}(t,e)}function ee(t){return(e,n)=>{let r=!1;for(const a of Kt(t)){const t=ne(a,e,n);if(0!==t)return t;r=r||a.field.isKeyField()}return 0}}function ne(t,e,n){const r=t.field.isKeyField()?tt.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),a=n.data.field(t);return null!==r&&null!==a?at(r,a):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Q(e)?"-0":e}}function ae(t){return{integerValue:""+t}}function ie(t,e){return Z(e)?ae(e):re(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this._=void 0}}function se(t,e,n){return t instanceof ue?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof he?de(t,e):t instanceof fe?pe(t,e):function(t,e){const n=le(t,e),r=me(n)+me(t.C);return lt(n)&&lt(t.C)?ae(r):re(t.N,r)}(t,e)}function ce(t,e,n){return t instanceof he?de(t,e):t instanceof fe?pe(t,e):n}function le(t,e){return t instanceof ve?lt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ue extends oe{}class he extends oe{constructor(t){super(),this.elements=t}}function de(t,e){const n=be(e);for(const r of t.elements)n.some(t=>nt(t,r))||n.push(r);return{arrayValue:{values:n}}}class fe extends oe{constructor(t){super(),this.elements=t}}function pe(t,e){let n=be(e);for(const r of t.elements)n=n.filter(t=>!nt(t,r));return{arrayValue:{values:n}}}class ve extends oe{constructor(t,e){super(),this.N=t,this.C=e}}function me(t){return G(t.integerValue||t.doubleValue)}function be(t){return ut(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof he&&e instanceof he||t instanceof fe&&e instanceof fe?H(t.elements,e.elements,nt):t instanceof ve&&e instanceof ve?nt(t.C,e.C):t instanceof ue&&e instanceof ue}(t.transform,e.transform)}class ye{constructor(t,e){this.version=t,this.transformResults=e}}class Oe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Oe}static exists(t){return new Oe(void 0,t)}static updateTime(t){return new Oe(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ze(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class we{}function je(t,e,n){t instanceof Ie?function(t,e,n){const r=t.value.clone(),a=Te(t.fieldTransforms,e,n.transformResults);r.setAll(a),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Se?function(t,e,n){if(!ze(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Te(t.fieldTransforms,e,n.transformResults),a=e.data;a.setAll(ke(t)),a.setAll(r),e.convertToFoundDocument(n.version,a).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Me(t,e,n){t instanceof Ie?function(t,e,n){if(!ze(t.precondition,e))return;const r=t.value.clone(),a=He(t.fieldTransforms,n,e);r.setAll(a),e.convertToFoundDocument(Ce(e),r).setHasLocalMutations()}(t,e,n):t instanceof Se?function(t,e,n){if(!ze(t.precondition,e))return;const r=He(t.fieldTransforms,n,e),a=e.data;a.setAll(ke(t)),a.setAll(r),e.convertToFoundDocument(Ce(e),a).setHasLocalMutations()}(t,e,n):function(t,e){ze(t.precondition,e)&&e.convertToNoDocument(B.min())}(t,e)}function Ae(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),a=le(r.transform,t||null);null!=a&&(null==n&&(n=vt.empty()),n.set(r.field,a))}return n||null}function Ve(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&H(t,e,(t,e)=>ge(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Ce(t){return t.isFoundDocument()?t.version:B.min()}class Ie extends we{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Se extends we{constructor(t,e,n,r,a=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=a,this.type=1}}function ke(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Te(t,e,n){const r=new Map;g(t.length===n.length);for(let a=0;a<n.length;a++){const i=t[a],o=i.transform,s=e.data.field(i.field);r.set(i.field,ce(o,s,n[a]))}return r}function He(t,e,n){const r=new Map;for(const a of t){const t=a.transform,i=n.data.field(a.field);r.set(a.field,se(t,i,e))}return r}class Le extends we{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Be extends we{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,xe;function _e(t){switch(t){default:return b();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function Fe(t){if(void 0===t)return p("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ee.OK:return O.OK;case Ee.CANCELLED:return O.CANCELLED;case Ee.UNKNOWN:return O.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return O.INTERNAL;case Ee.UNAVAILABLE:return O.UNAVAILABLE;case Ee.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ee.NOT_FOUND:return O.NOT_FOUND;case Ee.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ee.ABORTED:return O.ABORTED;case Ee.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ee.DATA_LOSS:return O.DATA_LOSS;default:return b()}}(xe=Ee||(Ee={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{constructor(t,e){this.comparator=t,this.root=e||Ne.EMPTY}insert(t,e){return new De(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(t){return new De(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Re(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Re(this.root,t,this.comparator,!1)}getReverseIterator(){return new Re(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Re(this.root,t,this.comparator,!0)}}class Re{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=e?n(t.key,e):1,r&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(0===a){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ne{constructor(t,e,n,r,a){this.key=t,this.value=e,this.color=null!=n?n:Ne.RED,this.left=null!=r?r:Ne.EMPTY,this.right=null!=a?a:Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,a){return new Ne(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=a?a:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const a=n(t,r.key);return r=a<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===a?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ne.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw b();if(this.right.isRed())throw b();const t=this.left.check();if(t!==this.right.check())throw b();return t+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1,Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,r,a){return this}insert(t,e,n){return new Ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{constructor(t){this.comparator=t,this.data=new De(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ue(this.data.getIterator())}getIteratorFrom(t){return new Ue(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof $e))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new $e(this.comparator);return e.data=t,e}}class Ue{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=new De(tt.comparator);function Ge(){return qe}const We=new De(tt.comparator);function Ke(){return We}const Xe=new De(tt.comparator);function Ye(){return Xe}const Je=new $e(tt.comparator);function Qe(...t){let e=Je;for(const n of t)e=e.add(n);return e}const Ze=new $e(T);function tn(){return Ze}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t,e,n,r,a){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,nn.createSynthesizedTargetChangeForCurrentChange(t,e)),new en(B.min(),n,tn(),Ge(),Qe())}}class nn{constructor(t,e,n,r,a){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(t,e){return new nn($.EMPTY_BYTE_STRING,e,Qe(),Qe(),Qe())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class an{constructor(t,e){this.targetId=t,this.O=e}}class on{constructor(t,e,n=$.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class sn{constructor(){this.F=0,this.M=un(),this.L=$.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=Qe(),e=Qe(),n=Qe();return this.M.forEach((r,a)=>{switch(a){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:b()}}),new nn(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=un()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class cn{constructor(t){this.tt=t,this.et=new Map,this.nt=Ge(),this.st=ln(),this.it=new $e(T)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:b()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach((t,n)=>{this.ht(n)&&e(n)})}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(jt(t))if(0===n){const n=new tt(t.path);this.at(e,n,bt.newNoDocument(n,B.min()))}else g(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach((n,r)=>{const a=this.dt(r);if(a){if(n.current&&jt(a.target)){const e=new tt(a.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.at(r,e,bt.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}});let n=Qe();this.st.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new en(t,e,this.it,this.nt,n);return this.nt=Ge(),this.st=ln(),this.it=new $e(T),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new sn,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new $e(T),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Tt(t)}lt(t){this.et.set(t,new sn),this.tt.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function ln(){return new De(tt.comparator)}function un(){return new De(tt.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),dn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class fn{constructor(t,e){this.databaseId=t,this.D=e}}function pn(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vn(t,e){return t.D?e.toBase64():e.toUint8Array()}function mn(t,e){return pn(t,e.toTimestamp())}function bn(t){return g(!!t),B.fromTimestamp(function(t){const e=q(t);return new L(e.seconds,e.nanos)}(t))}function gn(t,e){return function(t){return new F(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function yn(t){const e=F.fromString(t);return g(Un(e)),e}function On(t,e){return gn(t.databaseId,e.path)}function zn(t,e){const n=yn(e);if(n.get(1)!==t.databaseId.projectId)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new tt(An(n))}function wn(t,e){return gn(t.databaseId,e)}function jn(t){const e=yn(t);return 4===e.length?F.emptyPath():An(e)}function Mn(t){return new F(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function An(t){return g(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Vn(t,e,n){return{name:On(t,e),fields:n.value.mapValue.fields}}function Cn(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],i=function(t,e){return t.D?(g(void 0===e||"string"==typeof e),$.fromBase64String(e||"")):(g(void 0===e||e instanceof Uint8Array),$.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,s=o&&function(t){const e=void 0===t.code?O.UNKNOWN:Fe(t.code);return new z(e,t.message||"")}(o);n=new on(r,a,i,s||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=zn(t,r.document.name),i=bn(r.document.updateTime),o=new vt({mapValue:{fields:r.document.fields}}),s=bt.newFoundDocument(a,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new rn(c,l,s.key,s)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=zn(t,r.document),i=r.readTime?bn(r.readTime):B.min(),o=bt.newNoDocument(a,i),s=r.removedTargetIds||[];n=new rn([],s,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=zn(t,r.document),i=r.removedTargetIds||[];n=new rn([],i,a,null)}else{if(!("filter"in e))return b();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,a=new Pe(r),i=t.targetId;n=new an(i,a)}}return n}function In(t,e){let n;if(e instanceof Ie)n={update:Vn(t,e.key,e.value)};else if(e instanceof Le)n={delete:On(t,e.key)};else if(e instanceof Se)n={update:Vn(t,e.key,e.data),updateMask:$n(e.fieldMask)};else{if(!(e instanceof Be))return b();n={verify:On(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ue)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof he)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof fe)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ve)return{fieldPath:e.field.canonicalString(),increment:n.C};throw b()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:mn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:b()}(t,e.precondition)),n}function Sn(t,e){return t&&t.length>0?(g(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?bn(t.updateTime):bn(e);return n.isEqual(B.min())&&(n=bn(e)),new ye(n,t.transformResults||[])}(t,e))):[]}function kn(t,e){return{documents:[wn(t,e.path)]}}function Tn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=wn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const a=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(dt(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NAN"}};if(ht(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(dt(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NAN"}};if(ht(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fn(t.field),op:_n(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);a&&(n.structuredQuery.where=a);const i=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Fn(t.field),direction:xn(t.dir)}}(t))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.D||J(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Pn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Pn(e.endAt)),n}function Hn(t){let e=jn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let a=null;if(r>0){g(1===r);const t=n.from[0];t.allDescendants?a=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=Bn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Et(Dn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let s=null;n.limit&&(s=function(t){let e;return e="object"==typeof t?t.value:t,J(e)?null:e}(n.limit));let c=null;n.startAt&&(c=En(n.startAt));let l=null;return n.endAt&&(l=En(n.endAt)),Rt(e,a,o,i,s,"F",c,l)}function Ln(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Bn(t){return t?void 0!==t.unaryFilter?[Nn(t)]:void 0!==t.fieldFilter?[Rn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Bn(t)).reduce((t,e)=>t.concat(e)):b():[]}function Pn(t){return{before:t.before,values:t.position}}function En(t){const e=!!t.before,n=t.values||[];return new Bt(n,e)}function xn(t){return hn[t]}function _n(t){return dn[t]}function Fn(t){return{fieldPath:t.canonicalString()}}function Dn(t){return R.fromServerFormat(t.fieldPath)}function Rn(t){return Mt.create(Dn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(t.fieldFilter.op),t.fieldFilter.value)}function Nn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Dn(t.unaryFilter.field);return Mt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Dn(t.unaryFilter.field);return Mt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Dn(t.unaryFilter.field);return Mt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Dn(t.unaryFilter.field);return Mt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return b()}}function $n(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Un(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Wn(e)),e=Gn(t.get(n),e);return Wn(e)}function Gn(t,e){let n=e;const r=t.length;for(let a=0;a<r;a++){const e=t.charAt(a);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Wn(t){return t+""}class Kn{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Kn.store="owner",Kn.key="owner";class Xn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Xn.store="mutationQueues",Xn.keyPath="userId";class Yn{constructor(t,e,n,r,a){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=a}}Yn.store="mutations",Yn.keyPath="batchId",Yn.userMutationsIndex="userMutationsIndex",Yn.userMutationsKeyPath=["userId","batchId"];class Jn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,qn(e)]}static key(t,e,n){return[t,qn(e),n]}}Jn.store="documentMutations",Jn.PLACEHOLDER=new Jn;class Qn{constructor(t,e,n,r,a,i){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=a,this.parentPath=i}}Qn.store="remoteDocuments",Qn.readTimeIndex="readTimeIndex",Qn.readTimeIndexPath="readTime",Qn.collectionReadTimeIndex="collectionReadTimeIndex",Qn.collectionReadTimeIndexPath=["parentPath","readTime"];class Zn{constructor(t){this.byteSize=t}}Zn.store="remoteDocumentGlobal",Zn.key="remoteDocumentGlobalKey";class tr{constructor(t,e,n,r,a,i,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=a,this.lastLimboFreeSnapshotVersion=i,this.query=o}}tr.store="targets",tr.keyPath="targetId",tr.queryTargetsIndexName="queryTargetsIndex",tr.queryTargetsKeyPath=["canonicalId","targetId"];class er{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}er.store="targetDocuments",er.keyPath=["targetId","path"],er.documentTargetsIndex="documentTargetsIndex",er.documentTargetsKeyPath=["path","targetId"];class nr{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}nr.key="targetGlobalKey",nr.store="targetGlobal";class rr{constructor(t,e){this.collectionId=t,this.parent=e}}rr.store="collectionParents",rr.keyPath=["collectionId","parent"];class ar{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}ar.store="clientMetadata",ar.keyPath="clientId";class ir{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}ir.store="bundles",ir.keyPath="bundleId";class or{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}or.store="namedQueries",or.keyPath="name";Xn.store,Yn.store,Jn.store,Qn.store,tr.store,Kn.store,nr.store,er.store,ar.store,Zn.store,rr.store,ir.store,or.store;const sr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new lr((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof lr?e:lr.resolve(e)}catch(t){return lr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):lr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):lr.reject(e)}static resolve(t){return new lr((e,n)=>{e(t)})}static reject(t){return new lr((e,n)=>{n(t)})}static waitFor(t){return new lr((e,n)=>{let r=0,a=0,i=!1;t.forEach(t=>{++r,t.next(()=>{++a,i&&a===r&&e()},t=>n(t))}),i=!0,a===r&&e()})}static or(t){let e=lr.resolve(!1);for(const n of t)e=e.next(t=>t?lr.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&je(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Me(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Me(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(B.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Qe())}isEqual(t){return this.batchId===t.batchId&&H(this.mutations,t.mutations,(t,e)=>Ve(t,e))&&H(this.baseMutations,t.baseMutations,(t,e)=>Ve(t,e))}}class dr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){g(t.mutations.length===n.length);let r=Ye();const a=t.mutations;for(let i=0;i<a.length;i++)r=r.insert(a[i].key,n[i].version);return new dr(t,e,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e,n,r,a=B.min(),i=B.min(),o=$.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new fr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t){this.Wt=t}}function vr(t){const e=Hn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Yt(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr{constructor(){this.Gt=new br}addToCollectionParentIndex(t,e){return this.Gt.add(e),lr.resolve()}getCollectionParents(t,e){return lr.resolve(this.Gt.getEntries(e))}}class br{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new $e(F.comparator),a=!r.has(n);return this.index[e]=r.add(n),a}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new $e(F.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new gr(t,gr.DEFAULT_COLLECTION_PERCENTILE,gr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gr.DEFAULT_COLLECTION_PERCENTILE=10,gr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gr.DEFAULT=new gr(41943040,gr.DEFAULT_COLLECTION_PERCENTILE,gr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gr.DISABLED=new gr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new yr(0)}static ie(){return new yr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Or(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==sr)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,a]of n)if(this.equalsFn(r,t))return a}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){E(this.inner,(e,n)=>{for(const[r,a]of n)t(r,a)})}isEmpty(){return x(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.changes=new zr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:B.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:bt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?lr.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jr{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Rn(t,e,n))}Rn(t,e,n){return this.He.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}Pn(t,e){return this.He.getEntries(t,e).next(e=>this.vn(t,e).next(()=>e))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):Wt(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new tt(e)).next(t=>{let e=Ke();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Sn(t,e,n){const r=e.collectionGroup;let a=Ke();return this.Ht.getCollectionParents(t,r).next(i=>lr.forEach(i,i=>{const o=function(t,e){return new Dt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.Dn(t,o,n).next(t=>{t.forEach((t,e)=>{a=a.insert(t,e)})})}).next(()=>a))}Dn(t,e,n){let r,a;return this.He.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(a=e,this.Cn(t,a,r).next(t=>{r=t;for(const e of a)for(const t of e.mutations){const n=t.key;let a=r.get(n);null==a&&(a=bt.newInvalidDocument(n),r=r.insert(n,a)),Me(t,a,e.localWriteTime),a.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{te(e,n)||(r=r.remove(t))}),r))}Cn(t,e,n){let r=Qe();for(const i of e)for(const t of i.mutations)t instanceof Se&&null===n.get(t.key)&&(r=r.add(t.key));let a=n;return this.He.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(a=a.insert(t,e))}),a))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=Qe(),r=Qe();for(const a of e.docChanges)switch(a.type){case 0:n=n.add(a.doc.key);break;case 1:r=r.add(a.doc.key)}return new Mr(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(B.min())?this.Fn(t,e):this.On.Pn(t,r).next(a=>{const o=this.Mn(e,a);return($t(e)||Ut(e))&&this.Ln(e.limitType,o,r,n)?this.Fn(t,e):(d()<=i["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Zt(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Mn(t,e){let n=new $e(ee(t));return e.forEach((e,r)=>{te(t,r)&&(n=n.add(r))}),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const a="F"===t?e.last():e.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(r)>0)}Fn(t,e){return d()<=i["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Zt(e)),this.On.getDocumentsMatchingQuery(t,e,B.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new De(T),this.qn=new zr(t=>Ot(t),wt),this.Kn=B.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new jr(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Un))}}function Cr(t,e,n,r){return new Vr(t,e,n,r)}async function Ir(t,e){const n=y(t);let r=n.In,a=n.Qn;const i=await n.persistence.runTransaction("Handle user change","readonly",t=>{let i;return n.In.getAllMutationBatches(t).next(o=>(i=o,r=n.persistence.getMutationQueue(e),a=new jr(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let o=Qe();for(const t of i){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return a.Pn(t,o).next(t=>({Wn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.In=r,n.Qn=a,n.Bn.$n(n.Qn),i}function Sr(t,e){const n=y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),a=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const a=n.batch,i=a.keys();let o=lr.resolve();return i.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const i=n.docVersions.get(t);g(null!==i),e.version.compareTo(i)<0&&(a.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))})}),o.next(()=>t.In.removeMutationBatch(e,a))}(n,t,e,a).next(()=>a.apply(t)).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}function kr(t){const e=y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function Tr(t,e){const n=y(t),r=e.snapshotVersion;let a=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=n.jn.newChangeBuffer({trackRemovals:!0});a=n.Un;const o=[];e.targetChanges.forEach((e,i)=>{const s=a.get(i);if(!s)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,i).next(()=>n.ze.addMatchingKeys(t,e.addedDocuments,i)));const c=e.resumeToken;if(c.approximateByteSize()>0){const l=s.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);a=a.insert(i,l),function(t,e,n){return g(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(s,l,e)&&o.push(n.ze.updateTargetData(t,l))}});let s=Ge();if(e.documentUpdates.forEach((r,a)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(Hr(t,i,e.documentUpdates,r,void 0).next(t=>{s=t})),!r.isEqual(B.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next(e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return lr.waitFor(o).next(()=>i.apply(t)).next(()=>n.Qn.vn(t,s)).next(()=>s)}).then(t=>(n.Un=a,t))}function Hr(t,e,n,r,a){let i=Qe();return n.forEach(t=>i=i.add(t)),e.getEntries(t,i).next(t=>{let i=Ge();return n.forEach((n,o)=>{const s=t.get(n),c=(null==a?void 0:a.get(n))||r;o.isNoDocument()&&o.version.isEqual(B.min())?(e.removeEntry(n,c),i=i.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(o,c),i=i.insert(n,o)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)}),i})}function Lr(t,e){const n=y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e)))}function Br(t,e){const n=y(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.ze.getTargetData(t,e).next(a=>a?(r=a,lr.resolve(r)):n.ze.allocateTargetId(t).next(a=>(r=new fr(e,a,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t})}async function Pr(t,e,n){const r=y(t),a=r.Un.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,t=>r.persistence.referenceDelegate.removeTarget(t,a))}catch(t){if(!ur(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(a.target)}function Er(t,e,n){const r=y(t);let a=B.min(),i=Qe();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=y(t),a=r.qn.get(n);return void 0!==a?lr.resolve(r.Un.get(a)):r.ze.getTargetData(e,n)}(r,t,Xt(e)).next(e=>{if(e)return a=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next(t=>{i=t})}).next(()=>r.Bn.getDocumentsMatchingQuery(t,e,n?a:B.min(),n?i:Qe())).next(t=>({documents:t,Gn:i})))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xr{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return lr.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:bn(n.createTime)}),lr.resolve()}getNamedQuery(t,e){return lr.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:vr(t.bundledQuery),readTime:bn(t.readTime)}}(e)),lr.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.Zn=new $e(Fr.ts),this.es=new $e(Fr.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Fr(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new Fr(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}cs(t){const e=new tt(new F([])),n=new Fr(e,t),r=new Fr(e,t+1),a=[];return this.es.forEachInRange([n,r],t=>{this.rs(t),a.push(t.key)}),a}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new tt(new F([])),n=new Fr(e,t),r=new Fr(e,t+1);let a=Qe();return this.es.forEachInRange([n,r],t=>{a=a.add(t.key)}),a}containsKey(t){const e=new Fr(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Fr{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return tt.comparator(t.key,e.key)||T(t.ls,e.ls)}static ns(t,e){return T(t.ls,e.ls)||tt.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new $e(Fr.ts)}checkEmpty(t){return lr.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const a=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const i=new hr(a,e,n,r);this.In.push(i);for(const o of r)this.ds=this.ds.add(new Fr(o.key,a)),this.Ht.addToCollectionParentIndex(t,o.key.path.popLast());return lr.resolve(i)}lookupMutationBatch(t,e){return lr.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),a=r<0?0:r;return lr.resolve(this.In.length>a?this.In[a]:null)}getHighestUnacknowledgedBatchId(){return lr.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return lr.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Fr(e,0),r=new Fr(e,Number.POSITIVE_INFINITY),a=[];return this.ds.forEachInRange([n,r],t=>{const e=this.ws(t.ls);a.push(e)}),lr.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new $e(T);return e.forEach(t=>{const e=new Fr(t,0),r=new Fr(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],t=>{n=n.add(t.ls)})}),lr.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let a=n;tt.isDocumentKey(a)||(a=a.child(""));const i=new Fr(new tt(a),0);let o=new $e(T);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)},i),lr.resolve(this.gs(o))}gs(t){const e=[];return t.forEach(t=>{const n=this.ws(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){g(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return lr.forEach(e.mutations,r=>{const a=new Fr(r.key,e.batchId);return n=n.delete(a),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=n})}te(t){}containsKey(t,e){const n=new Fr(e,0),r=this.ds.firstAfterOrEqual(n);return lr.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,lr.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new De(tt.comparator),this.size=0}addEntry(t,e,n){const r=e.key,a=this.docs.get(r),i=a?a.size:0,o=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-i,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return lr.resolve(n?n.document.clone():bt.newInvalidDocument(e))}getEntries(t,e){let n=Ge();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():bt.newInvalidDocument(t))}),lr.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Ge();const a=new tt(e.path.child("")),i=this.docs.getIteratorFrom(a);for(;i.hasNext();){const{key:t,value:{document:a,readTime:o}}=i.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||te(e,a)&&(r=r.insert(a.key,a.clone()))}return lr.resolve(r)}Ts(t,e){return lr.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Nr(this)}getSize(t){return lr.resolve(this.size)}}class Nr extends wr{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)}),lr.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t){this.persistence=t,this.Es=new zr(t=>Ot(t),wt),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Is=0,this.As=new _r,this.targetCount=0,this.Rs=yr.se()}forEachTarget(t,e){return this.Es.forEach((t,n)=>e(n)),lr.resolve()}getLastRemoteSnapshotVersion(t){return lr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return lr.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),lr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),lr.resolve()}ae(t){this.Es.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new yr(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,lr.resolve()}updateTargetData(t,e){return this.ae(e),lr.resolve()}removeTargetData(t,e){return this.Es.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,lr.resolve()}removeTargets(t,e,n){let r=0;const a=[];return this.Es.forEach((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Es.delete(i),a.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),lr.waitFor(a).next(()=>r)}getTargetCount(t){return lr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Es.get(e)||null;return lr.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),lr.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,a=[];return r&&e.forEach(e=>{a.push(r.markPotentiallyOrphaned(t,e))}),lr.waitFor(a)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),lr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return lr.resolve(n)}containsKey(t,e){return lr.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,e){this.bs={},this.Le=new I(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new $r(this),this.Ht=new mr,this.He=function(t,e){return new Rr(t,e)}(this.Ht,t=>this.referenceDelegate.Ps(t)),this.N=new pr(e),this.Je=new xr(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Dr(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const r=new qr(this.Le.next());return this.referenceDelegate.vs(),n(r).next(t=>this.referenceDelegate.Vs(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ss(t,e){return lr.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class qr extends cr{constructor(t){super(),this.currentSequenceNumber=t}}class Gr{constructor(t){this.persistence=t,this.Ds=new _r,this.Cs=null}static Ns(t){return new Gr(t)}get xs(){if(this.Cs)return this.Cs;throw b()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),lr.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),lr.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),lr.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return lr.forEach(this.xs,n=>{const r=tt.fromPath(n);return this.ks(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Cs=null,e.apply(t)))}updateLimboDocument(t,e){return this.ks(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}Ps(t){return 0}ks(t,e){return lr.or([()=>lr.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.activeTargetIds=tn()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Kr{constructor(){this.yi=new Wr,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new Wr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{Ti(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const a=this.Bi(t,e);f("RestConnection","Sending: ",a,n);const i={};return this.Ui(i,r),this.qi(t,a,i,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw v("RestConnection",t+" failed with error: ",e,"url: ",a,"request:",n),e})}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+u,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=Jr[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise((a,i)=>{const o=new s["g"];o.listenOnce(s["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case s["a"].NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),a(e);break;case s["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),i(new z(O.DEADLINE_EXCEEDED,"Request time out"));break;case s["a"].HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(e)>=0?e:O.UNKNOWN}(t.status);i(new z(e,t.message))}else i(new z(O.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new z(O.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(s["h"])(),a=Object(s["i"])(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(i.xmlHttpFactory=new s["d"]({})),this.Ui(i.initMessageHeaders,e),Object(o["p"])()||Object(o["q"])()||Object(o["l"])()||Object(o["n"])()||Object(o["s"])()||Object(o["k"])()||(i.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");f("Connection","Creating WebChannel: "+c,i);const l=r.createWebChannel(c,i);let u=!1,h=!1;const d=new Qr({vi:t=>{h?f("Connection","Not sending because WebChannel is closed:",t):(u||(f("Connection","Opening WebChannel transport."),l.open(),u=!0),f("Connection","WebChannel sending:",t),l.send(t))},Vi:()=>l.close()}),p=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return p(l,s["f"].EventType.OPEN,()=>{h||f("Connection","WebChannel transport opened.")}),p(l,s["f"].EventType.CLOSE,()=>{h||(h=!0,f("Connection","WebChannel transport closed"),d.$i())}),p(l,s["f"].EventType.ERROR,t=>{h||(h=!0,v("Connection","WebChannel transport errored:",t),d.$i(new z(O.UNAVAILABLE,"The operation could not be completed")))}),p(l,s["f"].EventType.MESSAGE,t=>{var e;if(!h){const n=t.data[0];g(!!n);const r=n,a=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(a){f("Connection","WebChannel received error:",a);const t=a.status;let e=function(t){const e=Ee[t];if(void 0!==e)return Fe(e)}(t),n=a.message;void 0===e&&(e=O.INTERNAL,n="Unknown error status: "+t+" with message "+a.message),h=!0,d.$i(new z(e,n)),l.close()}else f("Connection","WebChannel received:",n),d.Oi(n)}}),p(a,s["b"].STAT_EVENT,t=>{t.stat===s["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===s["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t){return new fn(t,!0)}class na{constructor(t,e,n=1e3,r=1.5,a=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=a,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t,e,n,r,a,i){this.Oe=t,this.er=n,this.nr=r,this.credentialsProvider=a,this.listener=i,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new na(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===O.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===O.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then(t=>{this.sr===e&&this.yr(t)},e=>{t(()=>{const t=new z(O.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)})})}yr(t){const e=this.gr(this.sr);this.stream=this.Tr(t),this.stream.Si(()=>{e(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(t=>{e(()=>this.pr(t))}),this.stream.onMessage(t=>{e(()=>this.onMessage(t))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget(()=>this.sr===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aa extends ra{constructor(t,e,n,r,a){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,a),this.N=r}Tr(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=Cn(this.N,t),n=function(t){if(!("targetChange"in t))return B.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?B.min():e.readTime?bn(e.readTime):B.min()}(t);return this.listener.Er(e,n)}Ir(t){const e={};e.database=Mn(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=jt(r)?{documents:kn(t,r)}:{query:Tn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=vn(t,e.resumeToken):e.snapshotVersion.compareTo(B.min())>0&&(n.readTime=pn(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=Ln(this.N,t);n&&(e.labels=n),this.wr(e)}Ar(t){const e={};e.database=Mn(this.N),e.removeTarget=t,this.wr(e)}}class ia extends ra{constructor(t,e,n,r,a){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,a),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Tr(t){return this.nr.ji("Write",t)}onMessage(t){if(g(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const e=Sn(t.writeResults,t.commitTime),n=bn(t.commitTime);return this.listener.vr(n,e)}return g(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=Mn(this.N),this.wr(t)}Pr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>In(this.N,t))};this.wr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Li(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===O.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new z(O.UNKNOWN,t.toString())})}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Ki(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===O.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new z(O.UNKNOWN,t.toString())})}terminate(){this.Dr=!0}}class sa{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr("Connection failed 1 times. Most recent error: "+t.toString()),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(p(e),this.$r=!1):f("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,e,n,r,a){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=a,this.Qr.Ti(t=>{n.enqueueAndForget(async()=>{ba(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=y(t);e.Kr.add(4),await ua(e),e.Wr.set("Unknown"),e.Kr.delete(4),await la(e)}(this))})}),this.Wr=new sa(n,r)}}async function la(t){if(ba(t))for(const e of t.jr)await e(!0)}async function ua(t){for(const e of t.jr)await e(!1)}function ha(t,e){const n=y(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),ma(n)?va(n):Ba(n).cr()&&fa(n,e))}function da(t,e){const n=y(t),r=Ba(n);n.qr.delete(e),r.cr()&&pa(n,e),0===n.qr.size&&(r.cr()?r.lr():ba(n)&&n.Wr.set("Unknown"))}function fa(t,e){t.Gr.Y(e.targetId),Ba(t).Ir(e)}function pa(t,e){t.Gr.Y(e),Ba(t).Ar(e)}function va(t){t.Gr=new cn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qr.get(e)||null}),Ba(t).start(),t.Wr.Or()}function ma(t){return ba(t)&&!Ba(t).ar()&&t.qr.size>0}function ba(t){return 0===y(t).Kr.size}function ga(t){t.Gr=void 0}async function ya(t){t.qr.forEach((e,n)=>{fa(t,e)})}async function Oa(t,e){ga(t),ma(t)?(t.Wr.Lr(e),va(t)):t.Wr.set("Unknown")}async function za(t,e,n){if(t.Wr.set("Online"),e instanceof on&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.qr.delete(r),t.Gr.removeTarget(r))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await wa(t,n)}else if(e instanceof rn?t.Gr.rt(e):e instanceof an?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(B.min()))try{const e=await kr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Gr._t(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const a=t.qr.get(r);a&&t.qr.set(r,a.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.qr.get(e);if(!n)return;t.qr.set(e,n.withResumeToken($.EMPTY_BYTE_STRING,n.snapshotVersion)),pa(t,e);const r=new fr(n.target,e,1,n.sequenceNumber);fa(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await wa(t,e)}}async function wa(t,e,n){if(!ur(e))throw e;t.Kr.add(1),await ua(t),t.Wr.set("Offline"),n||(n=()=>kr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await la(t)})}function ja(t,e){return e().catch(n=>wa(t,n,e))}async function Ma(t){const e=y(t),n=Pa(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;Aa(e);)try{const t=await Lr(e.localStore,r);if(null===t){0===e.Ur.length&&n.lr();break}r=t.batchId,Va(e,t)}catch(t){await wa(e,t)}Ca(e)&&Ia(e)}function Aa(t){return ba(t)&&t.Ur.length<10}function Va(t,e){t.Ur.push(e);const n=Pa(t);n.cr()&&n.br&&n.Pr(e.mutations)}function Ca(t){return ba(t)&&!Pa(t).ar()&&t.Ur.length>0}function Ia(t){Pa(t).start()}async function Sa(t){Pa(t).Sr()}async function ka(t){const e=Pa(t);for(const n of t.Ur)e.Pr(n.mutations)}async function Ta(t,e,n){const r=t.Ur.shift(),a=dr.from(r,e,n);await ja(t,()=>t.remoteSyncer.applySuccessfulWrite(a)),await Ma(t)}async function Ha(t,e){e&&Pa(t).br&&await async function(t,e){if(n=e.code,_e(n)&&n!==O.ABORTED){const n=t.Ur.shift();Pa(t).hr(),await ja(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Ma(t)}var n}(t,e),Ca(t)&&Ia(t)}async function La(t,e){const n=y(t);e?(n.Kr.delete(2),await la(n)):e||(n.Kr.add(2),await ua(n),n.Wr.set("Unknown"))}function Ba(t){return t.zr||(t.zr=function(t,e,n){const r=y(t);return r.Cr(),new aa(e,r.nr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Si:ya.bind(null,t),Ci:Oa.bind(null,t),Er:za.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),ma(t)?va(t):t.Wr.set("Unknown")):(await t.zr.stop(),ga(t))})),t.zr}function Pa(t){return t.Hr||(t.Hr=function(t,e,n){const r=y(t);return r.Cr(),new ia(e,r.nr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:Sa.bind(null,t),Ci:Ha.bind(null,t),Vr:ka.bind(null,t),vr:Ta.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await Ma(t)):(await t.Hr.stop(),t.Ur.length>0&&(f("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ea{constructor(t,e,n,r,a){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=a,this.deferred=new w,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,a){const i=Date.now()+n,o=new Ea(t,e,i,r,a);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new z(O.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xa(t,e){if(p("AsyncQueue",`${e}: ${t}`),ur(t))return new z(O.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t){this.comparator=t?(e,n)=>t(e,n)||tt.comparator(e.key,n.key):(t,e)=>tt.comparator(t.key,e.key),this.keyedMap=Ke(),this.sortedSet=new De(this.comparator)}static emptySet(t){return new _a(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof _a))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new _a;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this.Jr=new De(tt.comparator)}track(t){const e=t.doc.key,n=this.Jr.get(e);n?0!==t.type&&3===n.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==n.type?this.Jr=this.Jr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jr=this.Jr.remove(e):1===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):b():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal((e,n)=>{t.push(n)}),t}}class Da{constructor(t,e,n,r,a,i,o,s){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=a,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=s}static fromInitialDocuments(t,e,n,r){const a=[];return e.forEach(t=>{a.push({type:0,doc:t})}),new Da(t,e,_a.emptySet(e),a,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Jt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.Xr=void 0,this.listeners=[]}}class Na{constructor(){this.queries=new zr(t=>Qt(t),Jt),this.onlineState="Unknown",this.Zr=new Set}}async function $a(t,e){const n=y(t),r=e.query;let a=!1,i=n.queries.get(r);if(i||(a=!0,i=new Ra),a)try{i.Xr=await n.onListen(r)}catch(t){const n=xa(t,`Initialization of query '${Zt(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.eo(n.onlineState),i.Xr&&e.no(i.Xr)&&Wa(n)}async function Ua(t,e){const n=y(t),r=e.query;let a=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),a=0===i.listeners.length)}if(a)return n.queries.delete(r),n.onUnlisten(r)}function qa(t,e){const n=y(t);let r=!1;for(const a of e){const t=a.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.no(a)&&(r=!0);e.Xr=a}}r&&Wa(n)}function Ga(t,e,n){const r=y(t),a=r.queries.get(e);if(a)for(const i of a.listeners)i.onError(n);r.queries.delete(e)}function Wa(t){t.Zr.forEach(t=>{t.next()})}class Ka{constructor(t,e,n){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Da(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.uo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=Da.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{constructor(t){this.key=t}}class Ya{constructor(t){this.key=t}}class Ja{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=Qe(),this.mutatedKeys=Qe(),this.po=ee(t),this.To=new _a(this.po)}get Eo(){return this._o}Io(t,e){const n=e?e.Ao:new Fa,r=e?e.To:this.To;let a=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const s=$t(this.query)&&r.size===this.query.limit?r.last():null,c=Ut(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const l=r.get(t),u=te(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Ro(l,u)||(n.track({type:2,doc:u}),f=!0,(s&&this.po(u,s)>0||c&&this.po(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(s||c)&&(o=!0)),f&&(u?(i=i.add(u),a=d?a.add(t):a.delete(t)):(i=i.delete(t),a=a.delete(t)))}),$t(this.query)||Ut(this.query))for(;i.size>this.query.limit;){const t=$t(this.query)?i.last():i.first();i=i.delete(t.key),a=a.delete(t.key),n.track({type:1,doc:t})}return{To:i,Ao:n,Ln:o,mutatedKeys:a}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.To;this.To=t.To,this.mutatedKeys=t.mutatedKeys;const a=t.Ao.Yr();a.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.po(t.doc,e.doc)),this.bo(n);const i=e?this.Po():[],o=0===this.yo.size&&this.current?1:0,s=o!==this.mo;return this.mo=o,0!==a.length||s?{snapshot:new Da(this.query,t.To,r,a,t.mutatedKeys,0===o,s,!1),vo:i}:{vo:i}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({To:this.To,Ao:new Fa,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.To.has(t)&&!this.To.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach(t=>this._o=this._o.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this._o=this._o.delete(t)),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=Qe(),this.To.forEach(t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))});const e=[];return t.forEach(t=>{this.yo.has(t)||e.push(new Ya(t))}),this.yo.forEach(n=>{t.has(n)||e.push(new Xa(n))}),e}So(t){this._o=t.Gn,this.yo=Qe();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return Da.fromInitialDocuments(this.query,this.To,this.mutatedKeys,0===this.mo)}}class Qa{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Za{constructor(t){this.key=t,this.Co=!1}}class ti{constructor(t,e,n,r,a,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=a,this.maxConcurrentLimboResolutions=i,this.No={},this.xo=new zr(t=>Qt(t),Jt),this.ko=new Map,this.$o=new Set,this.Oo=new De(tt.comparator),this.Fo=new Map,this.Mo=new _r,this.Lo={},this.Bo=new Map,this.Uo=yr.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function ei(t,e){const n=Oi(t);let r,a;const i=n.xo.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),a=i.view.Do();else{const t=await Br(n.localStore,Xt(e)),i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,a=await ni(n,e,r,"current"===i),n.isPrimaryClient&&ha(n.remoteStore,t)}return a}async function ni(t,e,n,r){t.Ko=(e,n,r)=>async function(t,e,n,r){let a=e.view.Io(n);a.Ln&&(a=await Er(t.localStore,e.query,!1).then(({documents:t})=>e.view.Io(t,a)));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(a,t.isPrimaryClient,i);return pi(t,e.targetId,o.vo),o.snapshot}(t,e,n,r);const a=await Er(t.localStore,e,!0),i=new Ja(e,a.Gn),o=i.Io(a.documents),s=nn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,s);pi(t,n,c.vo);const l=new Qa(e,n,i);return t.xo.set(e,l),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}async function ri(t,e){const n=y(t),r=n.xo.get(e),a=n.ko.get(r.targetId);if(a.length>1)return n.ko.set(r.targetId,a.filter(t=>!Jt(t,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Pr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),da(n.remoteStore,r.targetId),di(n,r.targetId)}).catch(Or)):(di(n,r.targetId),await Pr(n.localStore,r.targetId,!0))}async function ai(t,e,n){const r=zi(t);try{const t=await function(t,e){const n=y(t),r=L.now(),a=e.reduce((t,e)=>t.add(e.key),Qe());let i;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Qn.Pn(t,a).next(a=>{i=a;const o=[];for(const t of e){const e=Ae(t,i.get(t.key));null!=e&&o.push(new Se(t.key,e,mt(e.value.mapValue),Oe.exists(!0)))}return n.In.addMutationBatch(t,r,o,e)})).then(t=>(t.applyToLocalDocumentSet(i),{batchId:t.batchId,changes:i}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Lo[t.currentUser.toKey()];r||(r=new De(T)),r=r.insert(e,n),t.Lo[t.currentUser.toKey()]=r}(r,t.batchId,n),await bi(r,t.changes),await Ma(r.remoteStore)}catch(t){const e=xa(t,"Failed to persist write");n.reject(e)}}async function ii(t,e){const n=y(t);try{const t=await Tr(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Fo.get(e);r&&(g(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Co=!0:t.modifiedDocuments.size>0?g(r.Co):t.removedDocuments.size>0&&(g(r.Co),r.Co=!1))}),await bi(n,t,e)}catch(t){await Or(t)}}function oi(t,e,n){const r=y(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xo.forEach((n,r)=>{const a=r.view.eo(e);a.snapshot&&t.push(a.snapshot)}),function(t,e){const n=y(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const a of n.listeners)a.eo(e)&&(r=!0)}),r&&Wa(n)}(r.eventManager,e),t.length&&r.No.Er(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function si(t,e,n){const r=y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const a=r.Fo.get(e),i=a&&a.key;if(i){let t=new De(tt.comparator);t=t.insert(i,bt.newNoDocument(i,B.min()));const n=Qe().add(i),a=new en(B.min(),new Map,new $e(T),t,n);await ii(r,a),r.Oo=r.Oo.remove(i),r.Fo.delete(e),mi(r)}else await Pr(r.localStore,e,!1).then(()=>di(r,e,n)).catch(Or)}async function ci(t,e){const n=y(t),r=e.batch.batchId;try{const t=await Sr(n.localStore,e);hi(n,r,null),ui(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bi(n,t)}catch(t){await Or(t)}}async function li(t,e,n){const r=y(t);try{const t=await function(t,e){const n=y(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.In.lookupMutationBatch(t,e).next(e=>(g(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e))).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}(r.localStore,e);hi(r,e,n),ui(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await bi(r,t)}catch(n){await Or(n)}}function ui(t,e){(t.Bo.get(e)||[]).forEach(t=>{t.resolve()}),t.Bo.delete(e)}function hi(t,e,n){const r=y(t);let a=r.Lo[r.currentUser.toKey()];if(a){const t=a.get(e);t&&(n?t.reject(n):t.resolve(),a=a.remove(e)),r.Lo[r.currentUser.toKey()]=a}}function di(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(e=>{t.Mo.containsKey(e)||fi(t,e)})}function fi(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);null!==n&&(da(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),mi(t))}function pi(t,e,n){for(const r of n)r instanceof Xa?(t.Mo.addReference(r.key,e),vi(t,r)):r instanceof Ya?(f("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||fi(t,r.key)):b()}function vi(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(f("SyncEngine","New document in limbo: "+n),t.$o.add(r),mi(t))}function mi(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new tt(F.fromString(e)),r=t.Uo.next();t.Fo.set(r,new Za(n)),t.Oo=t.Oo.insert(n,r),ha(t.remoteStore,new fr(Xt(Nt(n.path)),r,2,I.T))}}async function bi(t,e,n){const r=y(t),a=[],i=[],o=[];r.xo.isEmpty()||(r.xo.forEach((t,s)=>{o.push(r.Ko(s,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(s.targetId,t.fromCache?"not-current":"current"),a.push(t);const e=Mr.kn(s.targetId,t);i.push(e)}}))}),await Promise.all(o),r.No.Er(a),await async function(t,e){const n=y(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>lr.forEach(e,e=>lr.forEach(e.Nn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>lr.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!ur(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,a=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,a)}}}(r.localStore,i))}async function gi(t,e){const n=y(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await Ir(n.localStore,e);n.currentUser=e,function(t,e){t.Bo.forEach(t=>{t.forEach(t=>{t.reject(new z(O.CANCELLED,e))})}),t.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await bi(n,t.Wn)}}function yi(t,e){const n=y(t),r=n.Fo.get(e);if(r&&r.Co)return Qe().add(r.key);{let t=Qe();const r=n.ko.get(e);if(!r)return t;for(const e of r){const r=n.xo.get(e);t=t.unionWith(r.view.Eo)}return t}}function Oi(t){const e=y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ii.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yi.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=si.bind(null,e),e.No.Er=qa.bind(null,e.eventManager),e.No.jo=Ga.bind(null,e.eventManager),e}function zi(t){const e=y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ci.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=li.bind(null,e),e}class wi{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=ea(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return Cr(this.persistence,new Ar,t.initialUser,this.N)}Go(t){return new Ur(Gr.Ns,this.N)}Wo(t){return new Kr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ji{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>oi(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=gi.bind(null,this.syncEngine),await La(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Na}createDatastore(t){const e=ea(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Zr(r));var r;return function(t,e,n){return new oa(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,a=t=>oi(this.syncEngine,t,0),i=Yr.bt()?new Yr:new Xr,new ca(e,n,r,a,i);var e,n,r,a,i}createSyncEngine(t,e){return function(t,e,n,r,a,i,o){const s=new ti(t,e,n,r,a,i);return o&&(s.qo=!0),s}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=y(t);f("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await ua(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mi{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ai{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=l.UNAUTHENTICATED,this.clientId=k.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{f("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new w;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=xa(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Vi(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Ir(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Ci(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ii(t);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=y(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=ba(n);n.Kr.add(3),await ua(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await la(n)}(e.remoteStore,t)),t.onlineComponents=e}async function Ii(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await Vi(t,new wi)),t.offlineComponents}async function Si(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Ci(t,new ji)),t.onlineComponents}function ki(t){return Si(t).then(t=>t.syncEngine)}async function Ti(t){const e=await Si(t),n=e.eventManager;return n.onListen=ei.bind(null,e.syncEngine),n.onUnlisten=ri.bind(null,e.syncEngine),n}function Hi(t,e,n={}){const r=new w;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,a){const i=new Mi({next:i=>{e.enqueueAndForget(()=>Ua(t,o));const s=i.docs.has(n);!s&&i.fromCache?a.reject(new z(O.UNAVAILABLE,"Failed to get document because the client is offline.")):s&&i.fromCache&&r&&"server"===r.source?a.reject(new z(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):a.resolve(i)},error:t=>a.reject(t)}),o=new Ka(Nt(n.path),i,{includeMetadataChanges:!0,uo:!0});return $a(t,o)}(await Ti(t),t.asyncQueue,e,n,r)),r.promise}function Li(t,e,n={}){const r=new w;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,a){const i=new Mi({next:n=>{e.enqueueAndForget(()=>Ua(t,o)),n.fromCache&&"server"===r.source?a.reject(new z(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):a.resolve(n)},error:t=>a.reject(t)}),o=new Ka(n,i,{includeMetadataChanges:!0,uo:!0});return $a(t,o)}(await Ti(t),t.asyncQueue,e,n,r)),r.promise}class Bi{constructor(t,e,n,r,a,i,o,s){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=a,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=s}}class Pi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Pi&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t,e,n){if(!n)throw new z(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _i(t,e,n,r){if(!0===e&&!0===r)throw new z(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Fi(t){if(!tt.isDocumentKey(t))throw new z(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Di(t){if(tt.isDocumentKey(t))throw new z(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ri(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":b()}function Ni(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ri(t);throw new z(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $i{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new z(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new z(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,_i("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $i({}),this._settingsFrozen=!1,t instanceof Pi?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new z(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pi(t.options.projectId)}(t))}get app(){if(!this._app)throw new z(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new z(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $i(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new M;switch(t.type){case"gapi":const e=t.client;return g(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new C(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new z(O.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ei.get(t);e&&(f("ComponentProvider","Removing Datastore"),Ei.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qi{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new qi(this.firestore,t,this._key)}}class Gi{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Gi(this.firestore,t,this._query)}}class Wi extends Gi{constructor(t,e,n){super(t,e,Nt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new qi(this.firestore,null,new tt(t))}withConverter(t){return new Wi(this.firestore,t,this._path)}}function Ki(t,e,...n){if(t=Object(o["i"])(t),xi("collection","path",e),t instanceof Ui){const r=F.fromString(e,...n);return Di(r),new Wi(t,null,r)}{if(!(t instanceof qi||t instanceof Wi))throw new z(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(F.fromString(e,...n));return Di(r),new Wi(t.firestore,null,r)}}function Xi(t,e,...n){if(t=Object(o["i"])(t),1===arguments.length&&(e=k.I()),xi("doc","path",e),t instanceof Ui){const r=F.fromString(e,...n);return Fi(r),new qi(t,null,new tt(r))}{if(!(t instanceof qi||t instanceof Wi))throw new z(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(F.fromString(e,...n));return Fi(r),new qi(t.firestore,t instanceof Wi?t.converter:null,new tt(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new na(this,"async_queue_retry"),this.Ta=()=>{const t=ta();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=ta();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ta)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ea(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=ta();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ta)}}enqueue(t){if(this.Ea(),this.wa)return new Promise(()=>{});const e=new w;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.da.push(t),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!ur(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(t){const e=this.fa.then(()=>(this.ga=!0,t().catch(t=>{this.ma=t,this.ga=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw p("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.ga=!1,t))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ea(),this.pa.indexOf(t)>-1&&(e=0);const r=Ea.createAndSchedule(this,t,e,n,t=>this.Ra(t));return this._a.push(r),r}Ea(){this.ma&&b()}verifyOperationInProgress(){}async ba(){let t;do{t=this.fa,await t}while(t!==this.fa)}Pa(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.ba().then(()=>{this._a.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ba()})}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}class Ji extends Ui{constructor(t,e){super(t,e),this.type="firestore",this._queue=new Yi,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||to(this),this._firestoreClient.terminate()}}function Qi(t=Object(r["e"])()){return Object(r["b"])(t,"firestore").getImmediate()}function Zi(t){return t._firestoreClient||to(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function to(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Bi(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ai(t._credentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new z(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new R(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{constructor(t){this._byteString=t}static fromBase64String(t){try{return new no($.fromBase64String(t))}catch(t){throw new z(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new no($.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new z(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new z(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return T(this._lat,t._lat)||T(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=/^__.*__$/;class oo{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Se(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ie(t,this.data,e,this.fieldTransforms)}}class so{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Se(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function co(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class lo{constructor(t,e,n,r,a,i){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=r,void 0===a&&this.Sa(),this.fieldTransforms=a||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new lo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.ka(t),r}$a(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return Ao(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(co(this.Da)&&io.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class uo{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||ea(t)}Ba(t,e,n,r=!1){return new lo({Da:t,methodName:e,La:n,path:R.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function ho(t){const e=t._freezeSettings(),n=ea(t._databaseId);return new uo(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fo(t,e,n,r,a,i={}){const o=t.Ba(i.merge||i.mergeFields?2:0,e,n,a);zo("Data must be an object, but it was:",o,r);const s=yo(r,o);let c,l;if(i.merge)c=new N(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const a=wo(e,r,n);if(!o.contains(a))throw new z(O.INVALID_ARGUMENT,`Field '${a}' is specified in your field mask but missing from your input data.`);Vo(t,a)||t.push(a)}c=new N(t),l=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,l=o.fieldTransforms;return new oo(new vt(s),c,l)}class po extends ro{_toFieldTransform(t){if(2!==t.Da)throw 1===t.Da?t.Fa(this._methodName+"() can only appear at the top level of your update data"):t.Fa(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof po}}function vo(t,e,n,r){const a=t.Ba(1,e,n);zo("Data must be an object, but it was:",a,r);const i=[],s=vt.empty();E(r,(t,r)=>{const c=Mo(e,t,n);r=Object(o["i"])(r);const l=a.$a(c);if(r instanceof po)i.push(c);else{const t=go(r,l);null!=t&&(i.push(c),s.set(c,t))}});const c=new N(i);return new so(s,c,a.fieldTransforms)}function mo(t,e,n,r,a,i){const s=t.Ba(1,e,n),c=[wo(e,r,n)],l=[a];if(i.length%2!=0)throw new z(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<i.length;o+=2)c.push(wo(e,i[o])),l.push(i[o+1]);const u=[],h=vt.empty();for(let f=c.length-1;f>=0;--f)if(!Vo(u,c[f])){const t=c[f];let e=l[f];e=Object(o["i"])(e);const n=s.$a(t);if(e instanceof po)u.push(t);else{const r=go(e,n);null!=r&&(u.push(t),h.set(t,r))}}const d=new N(u);return new so(h,d,s.fieldTransforms)}function bo(t,e,n,r=!1){return go(n,t.Ba(r?4:3,e))}function go(t,e){if(Oo(t=Object(o["i"])(t)))return zo("Unsupported field value:",e,t),yo(t,e);if(t instanceof ro)return function(t,e){if(!co(e.Da))throw e.Fa(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Fa(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const a of t){let t=go(a,e.Oa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["i"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ie(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=L.fromDate(t);return{timestampValue:pn(e.N,n)}}if(t instanceof L){const n=new L(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:pn(e.N,n)}}if(t instanceof ao)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof no)return{bytesValue:vn(e.N,t._byteString)};if(t instanceof qi){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:gn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa("Unsupported field value: "+Ri(t))}(t,e)}function yo(t,e){const n={};return x(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):E(t,(t,r)=>{const a=go(r,e.Na(t));null!=a&&(n[t]=a)}),{mapValue:{fields:n}}}function Oo(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof L||t instanceof ao||t instanceof no||t instanceof qi||t instanceof ro)}function zo(t,e,n){if(!Oo(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Ri(n);throw"an object"===r?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function wo(t,e,n){if((e=Object(o["i"])(e))instanceof eo)return e._internalPath;if("string"==typeof e)return Mo(t,e);throw Ao("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const jo=new RegExp("[~\\*/\\[\\]]");function Mo(t,e,n){if(e.search(jo)>=0)throw Ao(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new eo(...e.split("."))._internalPath}catch(r){throw Ao(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ao(t,e,n,r,a){const i=r&&!r.isEmpty(),o=void 0!==a;let s=`Function ${e}() called with invalid data`;n&&(s+=" (via `toFirestore()`)"),s+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=" in field "+r),o&&(c+=" in document "+a),c+=")"),new z(O.INVALID_ARGUMENT,s+t+c)}function Vo(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t,e,n,r,a){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new qi(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Io(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(So("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Io extends Co{data(){return super.data()}}function So(t,e){return"string"==typeof e?Mo(t,e):e instanceof eo?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class To extends Co{constructor(t,e,n,r,a,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=a}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(So("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Ho extends To{data(t={}){return super.data(t)}}class Lo{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new ko(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Ho(this._firestore,this._userDataWriter,n.key,n,new ko(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new z(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Ho(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ko(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Ho(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ko(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let a=-1,i=-1;return 0!==e.type&&(a=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Bo(e.type),doc:r,oldIndex:a,newIndex:i}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Bo(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Po(t){if(Ut(t)&&0===t.explicitOrderBy.length)throw new z(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Eo{}function xo(t,...e){for(const n of e)t=n._apply(t);return t}class _o extends Eo{constructor(t,e,n){super(),this.Ka=t,this.ja=e,this.Qa=n,this.type="where"}_apply(t){const e=ho(t.firestore),n=function(t,e,n,r,a,i,o){let s;if(a.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new z(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on FieldPath.documentId().`);if("in"===i||"not-in"===i){Ro(o,i);const e=[];for(const n of o)e.push(Do(r,t,n));s={arrayValue:{values:e}}}else s=Do(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Ro(o,i),s=bo(n,e,o,"in"===i||"not-in"===i);const c=Mt.create(a,i,s);return function(t,e){if(e.v()){const n=Gt(t);if(null!==n&&!n.isEqual(e.field))throw new z(O.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=qt(t);null!==r&&No(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new z(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.Ka,this.ja,this.Qa);return new Gi(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Dt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Fo(t,e,n){const r=e,a=So("where",t);return new _o(a,r,n)}function Do(t,e,n){if("string"==typeof(n=Object(o["i"])(n))){if(""===n)throw new z(O.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wt(e)&&-1!==n.indexOf("/"))throw new z(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(F.fromString(n));if(!tt.isDocumentKey(r))throw new z(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ct(t,new tt(r))}if(n instanceof qi)return ct(t,n._key);throw new z(O.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ri(n)}.`)}function Ro(t,e){if(!Array.isArray(t)||0===t.length)throw new z(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new z(O.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function No(t,e,n){if(!n.isEqual(e))throw new z(O.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{convertValue(t,e="none"){switch(et(t)){case 0:return null;case 1:return t.booleanValue;case 2:return G(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(W(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw b()}}convertObject(t,e){const n={};return E(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new ao(G(t.latitude),G(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=X(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Y(t));default:return null}}convertTimestamp(t){const e=q(t);return new L(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=F.fromString(t);g(Un(n));const r=new Pi(n.get(1),n.get(3)),a=new tt(n.popFirst(5));return r.isEqual(e)||p(`Document ${a} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qo(t){t=Ni(t,qi);const e=Ni(t.firestore,Ji);return Hi(Zi(e),t._key).then(n=>Jo(e,t,n))}class Go extends $o{constructor(t){super(),this.firestore=t}convertBytes(t){return new no(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new qi(this.firestore,null,e)}}function Wo(t){t=Ni(t,Gi);const e=Ni(t.firestore,Ji),n=Zi(e),r=new Go(e);return Po(t._query),Li(n,t._query).then(n=>new Lo(e,r,t,n))}function Ko(t,e,n){t=Ni(t,qi);const r=Ni(t.firestore,Ji),a=Uo(t.converter,e,n);return Yo(r,[fo(ho(r),"setDoc",t._key,a,null!==t.converter,n).toMutation(t._key,Oe.none())])}function Xo(t,e,n,...r){t=Ni(t,qi);const a=Ni(t.firestore,Ji),i=ho(a);let s;return s="string"==typeof(e=Object(o["i"])(e))||e instanceof eo?mo(i,"updateDoc",t._key,e,n,r):vo(i,"updateDoc",t._key,e),Yo(a,[s.toMutation(t._key,Oe.exists(!0))])}function Yo(t,e){return function(t,e){const n=new w;return t.asyncQueue.enqueueAndForget(async()=>ai(await ki(t),e,n)),n.promise}(Zi(t),e)}function Jo(t,e,n){const r=n.docs.get(e._key),a=new Go(t);return new To(t,a,e._key,r,new ko(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qo;!function(t){u=t}(r["a"]),Object(r["c"])(new a["a"]("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new Ji(n,new A(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),Object(r["g"])(c,"3.1.1",Qo),Object(r["g"])(c,"3.1.1","esm2017")}).call(this,n("f28c"))},"0a06":function(t,e,n){"use strict";var r=n("c532"),a=n("30b5"),i=n("f6b4"),o=n("5270"),s=n("4a7b"),c=n("848b"),l=c.validators;function u(t){this.defaults=t,this.interceptors={request:new i,response:new i}}u.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=s(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=t.transitional;void 0!==e&&c.assertOptions(e,{silentJSONParsing:l.transitional(l.boolean,"1.0.0"),forcedJSONParsing:l.transitional(l.boolean,"1.0.0"),clarifyTimeoutError:l.transitional(l.boolean,"1.0.0")},!1);var n=[],r=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(r=r&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var a,i=[];if(this.interceptors.response.forEach((function(t){i.push(t.fulfilled,t.rejected)})),!r){var u=[o,void 0];Array.prototype.unshift.apply(u,n),u=u.concat(i),a=Promise.resolve(t);while(u.length)a=a.then(u.shift(),u.shift());return a}var h=t;while(n.length){var d=n.shift(),f=n.shift();try{h=d(h)}catch(p){f(p);break}}try{a=o(h)}catch(p){return Promise.reject(p)}while(i.length)a=a.then(i.shift(),i.shift());return a},u.prototype.getUri=function(t){return t=s(this.defaults,t),a(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){u.prototype[t]=function(e,n){return this.request(s(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){u.prototype[t]=function(e,n,r){return this.request(s(r||{},{method:t,url:e,data:n}))}})),t.exports=u},"0b42":function(t,e,n){var r=n("e8b5"),a=n("68ee"),i=n("861d"),o=n("b622"),s=o("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,a(e)&&(e===Array||r(e.prototype))?e=void 0:i(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?Array:e}},"0cb2":function(t,e,n){var r=n("7b0b"),a=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,l,u){var h=n+t.length,d=c.length,f=s;return void 0!==l&&(l=r(l),f=o),i.call(u,f,(function(r,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(h);case"<":o=l[i.slice(1,-1)];break;default:var s=+i;if(0===s)return r;if(s>d){var u=a(s/10);return 0===u?r:u<=d?void 0===c[u-1]?i.charAt(1):c[u-1]+i.charAt(1):r}o=c[s-1]}return void 0===o?"":o}))}},"0cfb":function(t,e,n){var r=n("83ab"),a=n("d039"),i=n("cc12");t.exports=!r&&!a((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e){t.exports=function(t){try{return String(t)}catch(e){return"Object"}}},"0df6":function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"107c":function(t,e,n){var r=n("d039"),a=n("da84"),i=a.RegExp;t.exports=r((function(){var t=i("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1276:function(t,e,n){"use strict";var r=n("d784"),a=n("44e7"),i=n("825a"),o=n("1d80"),s=n("4840"),c=n("8aa5"),l=n("50c4"),u=n("577e"),h=n("dc4a"),d=n("14c3"),f=n("9263"),p=n("9f7f"),v=n("d039"),m=p.UNSUPPORTED_Y,b=[].push,g=Math.min,y=4294967295,O=!v((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=u(o(this)),i=void 0===n?y:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!a(t))return e.call(r,t,i);var s,c,l,h=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,d+"g");while(s=f.call(v,r)){if(c=v.lastIndex,c>p&&(h.push(r.slice(p,s.index)),s.length>1&&s.index<r.length&&b.apply(h,s.slice(1)),l=s[0].length,p=c,h.length>=i))break;v.lastIndex===s.index&&v.lastIndex++}return p===r.length?!l&&v.test("")||h.push(""):h.push(r.slice(p)),h.length>i?h.slice(0,i):h}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=o(this),i=void 0==e?void 0:h(e,t);return i?i.call(e,a,n):r.call(u(a),e,n)},function(t,a){var o=i(this),h=u(t),f=n(r,o,h,a,r!==e);if(f.done)return f.value;var p=s(o,RegExp),v=o.unicode,b=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(m?"g":"y"),O=new p(m?"^(?:"+o.source+")":o,b),z=void 0===a?y:a>>>0;if(0===z)return[];if(0===h.length)return null===d(O,h)?[h]:[];var w=0,j=0,M=[];while(j<h.length){O.lastIndex=m?0:j;var A,V=d(O,m?h.slice(j):h);if(null===V||(A=g(l(O.lastIndex+(m?j:0)),h.length))===w)j=c(h,j,v);else{if(M.push(h.slice(w,j)),M.length===z)return M;for(var C=1;C<=V.length-1;C++)if(M.push(V[C]),M.length===z)return M;j=w=A}}return M.push(h.slice(w)),M}]}),!O,m)},"130e":function(t,e,n){"use strict";(function(t){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!a.installed)if(e){if(a.installed=!0,t.version&&t.version.split(".")[0]<3)Object.defineProperties(t.prototype,{axios:{get:function(){return e}},$http:{get:function(){return e}}});else{if(!(t.version&&t.version.split(".")[0]>=3))return void console.error("Unknown Vue version");t.config.globalProperties.axios=e,t.config.globalProperties.$http=e}t.axios=e,t.$http=e}else console.error("You have to install axios")}n.d(e,"a",(function(){return a})),"object"==("undefined"==typeof exports?"undefined":r(exports))?t.exports=a:"function"==typeof define&&n("3c35")?define([],(function(){return a})):window.Vue&&window.axios&&window.Vue.use&&Vue.use(a,window.axios)}).call(this,n("dd40")(t))},"14c3":function(t,e,n){var r=n("825a"),a=n("1626"),i=n("c6b6"),o=n("9263");t.exports=function(t,e){var n=t.exec;if(a(n)){var s=n.call(t,e);return null!==s&&r(s),s}if("RegExp"===i(t))return o.call(t,e);throw TypeError("RegExp#exec called on incompatible receiver")}},"159b":function(t,e,n){var r=n("da84"),a=n("fdbc"),i=n("785a"),o=n("17c2"),s=n("9112"),c=function(t){if(t&&t.forEach!==o)try{s(t,"forEach",o)}catch(e){t.forEach=o}};for(var l in a)a[l]&&c(r[l]&&r[l].prototype);c(i)},1626:function(t,e){t.exports=function(t){return"function"===typeof t}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,a=n("a640"),i=a("forEach");t.exports=i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"19aa":function(t,e){t.exports=function(t,e,n){if(t instanceof e)return t;throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c7e":function(t,e,n){var r=n("b622"),a=r("iterator"),i=!1;try{var o=0,s={next:function(){return{done:!!o++}},return:function(){i=!0}};s[a]=function(){return this},Array.from(s,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var r={};r[a]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d2b":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("d3b7");function r(t,e,n,r,a,i,o){try{var s=t[i](o),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function s(t){r(o,a,i,s,c,"next",t)}function c(t){r(o,a,i,s,c,"throw",t)}s(void 0)}))}}},"1dde":function(t,e,n){var r=n("d039"),a=n("b622"),i=n("2d00"),o=a("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return w})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return H})),n.d(e,"g",(function(){return C})),n.d(e,"h",(function(){return T})),n.d(e,"i",(function(){return E})),n.d(e,"j",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return m})),n.d(e,"m",(function(){return V})),n.d(e,"n",(function(){return b})),n.d(e,"o",(function(){return O})),n.d(e,"p",(function(){return d})),n.d(e,"q",(function(){return v})),n.d(e,"r",(function(){return y})),n.d(e,"s",(function(){return g})),n.d(e,"t",(function(){return S})),n.d(e,"u",(function(){return k}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let a=t.charCodeAt(r);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=63&a|128):55296===(64512&a)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&t.charCodeAt(++r)),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=63&a|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=63&a|128)}return e},a=function(t){const e=[];let n=0,r=0;while(n<t.length){const a=t[n++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const i=t[n++];e[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){const i=t[n++],o=t[n++],s=t[n++],c=((7&a)<<18|(63&i)<<12|(63&o)<<6|63&s)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<t.length;a+=3){const e=t[a],i=a+1<t.length,o=i?t[a+1]:0,s=a+2<t.length,c=s?t[a+2]:0,l=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;s||(d=64,i||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<t.length;){const e=n[t.charAt(a++)],i=a<t.length,o=i?n[t.charAt(a)]:0;++a;const s=a<t.length,c=s?n[t.charAt(a)]:64;++a;const l=a<t.length,u=l?n[t.charAt(a)]:64;if(++a,null==e||null==o||null==c||null==u)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==u){const t=c<<6&192|u;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return i.encodeByteArray(e,!0)},s=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return i.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",a=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:a,exp:a+3600,auth_time:a,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[s(JSON.stringify(n)),s(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function f(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function p(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function v(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function m(){return h().indexOf("Electron/")>=0}function b(){const t=h();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return h().indexOf("MSAppHost/")>=0}function y(){return!f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function O(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z="FirebaseError";class w extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=z,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,j.prototype.create)}}class j{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,a=this.errors[t],i=a?M(a,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,s=new w(r,o,n);return s}}function M(t,e){return t.replace(A,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function C(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const a of n){if(!r.includes(a))return!1;const n=t[a],i=e[a];if(I(n)&&I(i)){if(!C(n,i))return!1}else if(n!==i)return!1}for(const a of r)if(!n.includes(a))return!1;return!0}function I(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function k(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function T(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t,e){const n=new L(t,e);return n.subscribe.bind(n)}class L{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=B(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=P),void 0===r.error&&(r.error=P),void 0===r.complete&&(r.complete=P);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),a}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function P(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},2266:function(t,e,n){var r=n("825a"),a=n("e95a"),i=n("50c4"),o=n("0366"),s=n("9a1f"),c=n("35a1"),l=n("2a62"),u=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var h,d,f,p,v,m,b,g=n&&n.that,y=!(!n||!n.AS_ENTRIES),O=!(!n||!n.IS_ITERATOR),z=!(!n||!n.INTERRUPTED),w=o(e,g,1+y+z),j=function(t){return h&&l(h,"normal",t),new u(!0,t)},M=function(t){return y?(r(t),z?w(t[0],t[1],j):w(t[0],t[1])):z?w(t,j):w(t)};if(O)h=t;else{if(d=c(t),!d)throw TypeError(String(t)+" is not iterable");if(a(d)){for(f=0,p=i(t.length);p>f;f++)if(v=M(t[f]),v&&v instanceof u)return v;return new u(!1)}h=s(t,d)}m=h.next;while(!(b=m.call(h)).done){try{v=M(b.value)}catch(A){l(h,"throw",A)}if("object"==typeof v&&v&&v instanceof u)return v}return new u(!1)}},"228e":function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return f}));var r=n("2b0e"),a=n("50d3"),i=n("c9a9"),o=n("b508"),s=r["default"].prototype,c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=s[a["c"]];return n?n.getConfigValue(t,e):Object(i["a"])(e)},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return e?c("".concat(t,".").concat(e),n):c(t,{})},u=function(){return c("breakpoints",a["a"])},h=Object(o["a"])((function(){return u()})),d=function(){return Object(i["a"])(h())},f=Object(o["a"])((function(){var t=d();return t[0]="",t}))},"23cb":function(t,e,n){var r=n("a691"),a=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?a(n+e,0):i(n,e)}},"23e7":function(t,e,n){var r=n("da84"),a=n("06cf").f,i=n("9112"),o=n("6eeb"),s=n("ce4e"),c=n("e893"),l=n("94ca");t.exports=function(t,e){var n,u,h,d,f,p,v=t.target,m=t.global,b=t.stat;if(u=m?r:b?r[v]||s(v,{}):(r[v]||{}).prototype,u)for(h in e){if(f=e[h],t.noTargetGet?(p=a(u,h),d=p&&p.value):d=u[h],n=l(m?h:v+(b?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f===typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&i(f,"sham",!0),o(u,h,f,t)}}},"241c":function(t,e,n){var r=n("ca84"),a=n("7839"),i=a.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},2444:function(t,e,n){"use strict";(function(e){var r=n("c532"),a=n("c8af"),i=n("387f"),o={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function c(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e))&&(t=n("b50d")),t}function l(t,e,n){if(r.isString(t))try{return(e||JSON.parse)(t),r.trim(t)}catch(a){if("SyntaxError"!==a.name)throw a}return(n||JSON.stringify)(t)}var u={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:c(),transformRequest:[function(t,e){return a(e,"Accept"),a(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)||e&&"application/json"===e["Content-Type"]?(s(e,"application/json"),l(t)):t}],transformResponse:[function(t){var e=this.transitional,n=e&&e.silentJSONParsing,a=e&&e.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||a&&r.isString(t)&&t.length)try{return JSON.parse(t)}catch(s){if(o){if("SyntaxError"===s.name)throw i(s,this,"E_JSON_PARSE");throw s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){u.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){u.headers[t]=r.merge(o)})),t.exports=u}).call(this,n("f28c"))},2532:function(t,e,n){"use strict";var r=n("23e7"),a=n("5a34"),i=n("1d80"),o=n("577e"),s=n("ab13");r({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~o(i(this)).indexOf(o(a(t)),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,e,n){"use strict";var r=n("5e77").PROPER,a=n("6eeb"),i=n("825a"),o=n("577e"),s=n("d039"),c=n("ad6d"),l="toString",u=RegExp.prototype,h=u[l],d=s((function(){return"/a/b"!=h.call({source:"a",flags:"b"})})),f=r&&h.name!=l;(d||f)&&a(RegExp.prototype,l,(function(){var t=i(this),e=o(t.source),n=t.flags,r=o(void 0===n&&t instanceof RegExp&&!("flags"in u)?c.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"260b":function(t,e,n){"use strict";var r=n("5606");n.d(e,"a",(function(){return r["f"]}));var a="firebase",i="9.1.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(a,i,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),a=n("9bf2"),i=n("b622"),o=n("83ab"),s=i("species");t.exports=function(t){var e=r(t),n=a.f;o&&e&&!e[s]&&n(e,s,{configurable:!0,get:function(){return this}})}},2877:function(t,e,n){"use strict";function r(t,e,n,r,a,i,o,s){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):a&&(c=s?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))},"2a62":function(t,e,n){var r=n("825a"),a=n("dc4a");t.exports=function(t,e,n){var i,o;r(t);try{if(i=a(t,"return"),!i){if("throw"===e)throw n;return n}i=i.call(t)}catch(s){o=!0,i=s}if("throw"===e)throw n;if(o)throw i;return r(i),n}},"2b0e":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function a(t){return void 0!==t&&null!==t}function i(t){return!0===t}function o(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function u(t){return"[object Object]"===l.call(t)}function h(t){return"[object RegExp]"===l.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return a(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===l?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function m(t,e){for(var n=Object.create(null),r=t.split(","),a=0;a<r.length;a++)n[r[a]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}m("slot,component",!0);var b=m("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var y=Object.prototype.hasOwnProperty;function O(t,e){return y.call(t,e)}function z(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,j=z((function(t){return t.replace(w,(function(t,e){return e?e.toUpperCase():""}))})),M=z((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),A=/\B([A-Z])/g,V=z((function(t){return t.replace(A,"-$1").toLowerCase()}));function C(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function I(t,e){return t.bind(e)}var S=Function.prototype.bind?I:C;function k(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function T(t,e){for(var n in e)t[n]=e[n];return t}function H(t){for(var e={},n=0;n<t.length;n++)t[n]&&T(e,t[n]);return e}function L(t,e,n){}var B=function(t,e,n){return!1},P=function(t){return t};function E(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var a=Array.isArray(t),i=Array.isArray(e);if(a&&i)return t.length===e.length&&t.every((function(t,n){return E(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(a||i)return!1;var o=Object.keys(t),s=Object.keys(e);return o.length===s.length&&o.every((function(n){return E(t[n],e[n])}))}catch(l){return!1}}function x(t,e){for(var n=0;n<t.length;n++)if(E(t[n],e))return n;return-1}function _(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var F="data-server-rendered",D=["component","directive","filter"],R=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],N={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:B,isReservedAttr:B,isUnknownElement:B,getTagNamespace:L,parsePlatformTagName:P,mustUseProp:B,async:!0,_lifecycleHooks:R},$=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function U(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function q(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var G=new RegExp("[^"+$.source+".$_\\d]");function W(t){if(!G.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var K,X="__proto__"in{},Y="undefined"!==typeof window,J="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=J&&WXEnvironment.platform.toLowerCase(),Z=Y&&window.navigator.userAgent.toLowerCase(),tt=Z&&/msie|trident/.test(Z),et=Z&&Z.indexOf("msie 9.0")>0,nt=Z&&Z.indexOf("edge/")>0,rt=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Q),at=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),it={}.watch,ot=!1;if(Y)try{var st={};Object.defineProperty(st,"passive",{get:function(){ot=!0}}),window.addEventListener("test-passive",null,st)}catch(Mo){}var ct=function(){return void 0===K&&(K=!Y&&!J&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),K},lt=Y&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ut(t){return"function"===typeof t&&/native code/.test(t.toString())}var ht,dt="undefined"!==typeof Symbol&&ut(Symbol)&&"undefined"!==typeof Reflect&&ut(Reflect.ownKeys);ht="undefined"!==typeof Set&&ut(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ft=L,pt=0,vt=function(){this.id=pt++,this.subs=[]};vt.prototype.addSub=function(t){this.subs.push(t)},vt.prototype.removeSub=function(t){g(this.subs,t)},vt.prototype.depend=function(){vt.target&&vt.target.addDep(this)},vt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},vt.target=null;var mt=[];function bt(t){mt.push(t),vt.target=t}function gt(){mt.pop(),vt.target=mt[mt.length-1]}var yt=function(t,e,n,r,a,i,o,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=a,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Ot={child:{configurable:!0}};Ot.child.get=function(){return this.componentInstance},Object.defineProperties(yt.prototype,Ot);var zt=function(t){void 0===t&&(t="");var e=new yt;return e.text=t,e.isComment=!0,e};function wt(t){return new yt(void 0,void 0,void 0,String(t))}function jt(t){var e=new yt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var Mt=Array.prototype,At=Object.create(Mt),Vt=["push","pop","shift","unshift","splice","sort","reverse"];Vt.forEach((function(t){var e=Mt[t];q(At,t,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var a,i=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":a=n;break;case"splice":a=n.slice(2);break}return a&&o.observeArray(a),o.dep.notify(),i}))}));var Ct=Object.getOwnPropertyNames(At),It=!0;function St(t){It=t}var kt=function(t){this.value=t,this.dep=new vt,this.vmCount=0,q(t,"__ob__",this),Array.isArray(t)?(X?Tt(t,At):Ht(t,At,Ct),this.observeArray(t)):this.walk(t)};function Tt(t,e){t.__proto__=e}function Ht(t,e,n){for(var r=0,a=n.length;r<a;r++){var i=n[r];q(t,i,e[i])}}function Lt(t,e){var n;if(c(t)&&!(t instanceof yt))return O(t,"__ob__")&&t.__ob__ instanceof kt?n=t.__ob__:It&&!ct()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new kt(t)),e&&n&&n.vmCount++,n}function Bt(t,e,n,r,a){var i=new vt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var s=o&&o.get,c=o&&o.set;s&&!c||2!==arguments.length||(n=t[e]);var l=!a&&Lt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return vt.target&&(i.depend(),l&&(l.dep.depend(),Array.isArray(e)&&xt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!c||(c?c.call(t,e):n=e,l=!a&&Lt(e),i.notify())}})}}function Pt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Bt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Et(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||O(t,e)&&(delete t[e],n&&n.dep.notify())}}function xt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&xt(e)}kt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Bt(t,e[n])},kt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Lt(t[e])};var _t=N.optionMergeStrategies;function Ft(t,e){if(!e)return t;for(var n,r,a,i=dt?Reflect.ownKeys(e):Object.keys(e),o=0;o<i.length;o++)n=i[o],"__ob__"!==n&&(r=t[n],a=e[n],O(t,n)?r!==a&&u(r)&&u(a)&&Ft(r,a):Pt(t,n,a));return t}function Dt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,a="function"===typeof t?t.call(n,n):t;return r?Ft(r,a):a}:e?t?function(){return Ft("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Rt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Nt(n):n}function Nt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function $t(t,e,n,r){var a=Object.create(t||null);return e?T(a,e):a}_t.data=function(t,e,n){return n?Dt(t,e,n):e&&"function"!==typeof e?t:Dt(t,e)},R.forEach((function(t){_t[t]=Rt})),D.forEach((function(t){_t[t+"s"]=$t})),_t.watch=function(t,e,n,r){if(t===it&&(t=void 0),e===it&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var a={};for(var i in T(a,t),e){var o=a[i],s=e[i];o&&!Array.isArray(o)&&(o=[o]),a[i]=o?o.concat(s):Array.isArray(s)?s:[s]}return a},_t.props=_t.methods=_t.inject=_t.computed=function(t,e,n,r){if(!t)return e;var a=Object.create(null);return T(a,t),e&&T(a,e),a},_t.provide=Dt;var Ut=function(t,e){return void 0===e?t:e};function qt(t,e){var n=t.props;if(n){var r,a,i,o={};if(Array.isArray(n)){r=n.length;while(r--)a=n[r],"string"===typeof a&&(i=j(a),o[i]={type:null})}else if(u(n))for(var s in n)a=n[s],i=j(s),o[i]=u(a)?a:{type:a};else 0;t.props=o}}function Gt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var a=0;a<n.length;a++)r[n[a]]={from:n[a]};else if(u(n))for(var i in n){var o=n[i];r[i]=u(o)?T({from:i},o):{from:o}}else 0}}function Wt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Kt(t,e,n){if("function"===typeof e&&(e=e.options),qt(e,n),Gt(e,n),Wt(e),!e._base&&(e.extends&&(t=Kt(t,e.extends,n)),e.mixins))for(var r=0,a=e.mixins.length;r<a;r++)t=Kt(t,e.mixins[r],n);var i,o={};for(i in t)s(i);for(i in e)O(t,i)||s(i);function s(r){var a=_t[r]||Ut;o[r]=a(t[r],e[r],n,r)}return o}function Xt(t,e,n,r){if("string"===typeof n){var a=t[e];if(O(a,n))return a[n];var i=j(n);if(O(a,i))return a[i];var o=M(i);if(O(a,o))return a[o];var s=a[n]||a[i]||a[o];return s}}function Yt(t,e,n,r){var a=e[t],i=!O(n,t),o=n[t],s=ee(Boolean,a.type);if(s>-1)if(i&&!O(a,"default"))o=!1;else if(""===o||o===V(t)){var c=ee(String,a.type);(c<0||s<c)&&(o=!0)}if(void 0===o){o=Jt(r,a,t);var l=It;St(!0),Lt(o),St(l)}return o}function Jt(t,e,n){if(O(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Zt(e.type)?r.call(t):r}}var Qt=/^\s*function (\w+)/;function Zt(t){var e=t&&t.toString().match(Qt);return e?e[1]:""}function te(t,e){return Zt(t)===Zt(e)}function ee(t,e){if(!Array.isArray(e))return te(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(te(e[n],t))return n;return-1}function ne(t,e,n){bt();try{if(e){var r=e;while(r=r.$parent){var a=r.$options.errorCaptured;if(a)for(var i=0;i<a.length;i++)try{var o=!1===a[i].call(r,t,e,n);if(o)return}catch(Mo){ae(Mo,r,"errorCaptured hook")}}}ae(t,e,n)}finally{gt()}}function re(t,e,n,r,a){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&f(i)&&!i._handled&&(i.catch((function(t){return ne(t,r,a+" (Promise/async)")})),i._handled=!0)}catch(Mo){ne(Mo,r,a)}return i}function ae(t,e,n){if(N.errorHandler)try{return N.errorHandler.call(null,t,e,n)}catch(Mo){Mo!==t&&ie(Mo,null,"config.errorHandler")}ie(t,e,n)}function ie(t,e,n){if(!Y&&!J||"undefined"===typeof console)throw t;console.error(t)}var oe,se=!1,ce=[],le=!1;function ue(){le=!1;var t=ce.slice(0);ce.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ut(Promise)){var he=Promise.resolve();oe=function(){he.then(ue),rt&&setTimeout(L)},se=!0}else if(tt||"undefined"===typeof MutationObserver||!ut(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())oe="undefined"!==typeof setImmediate&&ut(setImmediate)?function(){setImmediate(ue)}:function(){setTimeout(ue,0)};else{var de=1,fe=new MutationObserver(ue),pe=document.createTextNode(String(de));fe.observe(pe,{characterData:!0}),oe=function(){de=(de+1)%2,pe.data=String(de)},se=!0}function ve(t,e){var n;if(ce.push((function(){if(t)try{t.call(e)}catch(Mo){ne(Mo,e,"nextTick")}else n&&n(e)})),le||(le=!0,oe()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var me=new ht;function be(t){ge(t,me),me.clear()}function ge(t,e){var n,r,a=Array.isArray(t);if(!(!a&&!c(t)||Object.isFrozen(t)||t instanceof yt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(a){n=t.length;while(n--)ge(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)ge(t[r[n]],e)}}}var ye=z((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function Oe(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return re(r,null,arguments,e,"v-on handler");for(var a=r.slice(),i=0;i<a.length;i++)re(a[i],null,t,e,"v-on handler")}return n.fns=t,n}function ze(t,e,n,a,o,s){var c,l,u,h;for(c in t)l=t[c],u=e[c],h=ye(c),r(l)||(r(u)?(r(l.fns)&&(l=t[c]=Oe(l,s)),i(h.once)&&(l=t[c]=o(h.name,l,h.capture)),n(h.name,l,h.capture,h.passive,h.params)):l!==u&&(u.fns=l,t[c]=u));for(c in e)r(t[c])&&(h=ye(c),a(h.name,e[c],h.capture))}function we(t,e,n){var o;t instanceof yt&&(t=t.data.hook||(t.data.hook={}));var s=t[e];function c(){n.apply(this,arguments),g(o.fns,c)}r(s)?o=Oe([c]):a(s.fns)&&i(s.merged)?(o=s,o.fns.push(c)):o=Oe([s,c]),o.merged=!0,t[e]=o}function je(t,e,n){var i=e.options.props;if(!r(i)){var o={},s=t.attrs,c=t.props;if(a(s)||a(c))for(var l in i){var u=V(l);Me(o,c,l,u,!0)||Me(o,s,l,u,!1)}return o}}function Me(t,e,n,r,i){if(a(e)){if(O(e,n))return t[n]=e[n],i||delete e[n],!0;if(O(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function Ae(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Ve(t){return s(t)?[wt(t)]:Array.isArray(t)?Ie(t):void 0}function Ce(t){return a(t)&&a(t.text)&&o(t.isComment)}function Ie(t,e){var n,o,c,l,u=[];for(n=0;n<t.length;n++)o=t[n],r(o)||"boolean"===typeof o||(c=u.length-1,l=u[c],Array.isArray(o)?o.length>0&&(o=Ie(o,(e||"")+"_"+n),Ce(o[0])&&Ce(l)&&(u[c]=wt(l.text+o[0].text),o.shift()),u.push.apply(u,o)):s(o)?Ce(l)?u[c]=wt(l.text+o):""!==o&&u.push(wt(o)):Ce(o)&&Ce(l)?u[c]=wt(l.text+o.text):(i(t._isVList)&&a(o.tag)&&r(o.key)&&a(e)&&(o.key="__vlist"+e+"_"+n+"__"),u.push(o)));return u}function Se(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function ke(t){var e=Te(t.$options.inject,t);e&&(St(!1),Object.keys(e).forEach((function(n){Bt(t,n,e[n])})),St(!0))}function Te(t,e){if(t){for(var n=Object.create(null),r=dt?Reflect.ownKeys(t):Object.keys(t),a=0;a<r.length;a++){var i=r[a];if("__ob__"!==i){var o=t[i].from,s=e;while(s){if(s._provided&&O(s._provided,o)){n[i]=s._provided[o];break}s=s.$parent}if(!s)if("default"in t[i]){var c=t[i].default;n[i]="function"===typeof c?c.call(e):c}else 0}}return n}}function He(t,e){if(!t||!t.length)return{};for(var n={},r=0,a=t.length;r<a;r++){var i=t[r],o=i.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,i.context!==e&&i.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(i);else{var s=o.slot,c=n[s]||(n[s]=[]);"template"===i.tag?c.push.apply(c,i.children||[]):c.push(i)}}for(var l in n)n[l].every(Le)&&delete n[l];return n}function Le(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Be(t){return t.isComment&&t.asyncFactory}function Pe(t,e,r){var a,i=Object.keys(e).length>0,o=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&r&&r!==n&&s===r.$key&&!i&&!r.$hasNormal)return r;for(var c in a={},t)t[c]&&"$"!==c[0]&&(a[c]=Ee(e,c,t[c]))}else a={};for(var l in e)l in a||(a[l]=xe(e,l));return t&&Object.isExtensible(t)&&(t._normalized=a),q(a,"$stable",o),q(a,"$key",s),q(a,"$hasNormal",i),a}function Ee(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Ve(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Be(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function xe(t,e){return function(){return t[e]}}function _e(t,e){var n,r,i,o,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(dt&&t[Symbol.iterator]){n=[];var l=t[Symbol.iterator](),u=l.next();while(!u.done)n.push(e(u.value,n.length)),u=l.next()}else for(o=Object.keys(t),n=new Array(o.length),r=0,i=o.length;r<i;r++)s=o[r],n[r]=e(t[s],s,r);return a(n)||(n=[]),n._isVList=!0,n}function Fe(t,e,n,r){var a,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=T(T({},r),n)),a=i(n)||("function"===typeof e?e():e)):a=this.$slots[t]||("function"===typeof e?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},a):a}function De(t){return Xt(this.$options,"filters",t,!0)||P}function Re(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ne(t,e,n,r,a){var i=N.keyCodes[e]||n;return a&&r&&!N.keyCodes[e]?Re(a,r):i?Re(i,t):r?V(r)!==e:void 0===t}function $e(t,e,n,r,a){if(n)if(c(n)){var i;Array.isArray(n)&&(n=H(n));var o=function(o){if("class"===o||"style"===o||b(o))i=t;else{var s=t.attrs&&t.attrs.type;i=r||N.mustUseProp(e,s,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=j(o),l=V(o);if(!(c in i)&&!(l in i)&&(i[o]=n[o],a)){var u=t.on||(t.on={});u["update:"+o]=function(t){n[o]=t}}};for(var s in n)o(s)}else;return t}function Ue(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ge(r,"__static__"+t,!1)),r}function qe(t,e,n){return Ge(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ge(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&We(t[r],e+"_"+r,n);else We(t,e,n)}function We(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ke(t,e){if(e)if(u(e)){var n=t.on=t.on?T({},t.on):{};for(var r in e){var a=n[r],i=e[r];n[r]=a?[].concat(a,i):i}}else;return t}function Xe(t,e,n,r){e=e||{$stable:!n};for(var a=0;a<t.length;a++){var i=t[a];Array.isArray(i)?Xe(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Ye(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Je(t,e){return"string"===typeof t?e+t:t}function Qe(t){t._o=qe,t._n=v,t._s=p,t._l=_e,t._t=Fe,t._q=E,t._i=x,t._m=Ue,t._f=De,t._k=Ne,t._b=$e,t._v=wt,t._e=zt,t._u=Xe,t._g=Ke,t._d=Ye,t._p=Je}function Ze(t,e,r,a,o){var s,c=this,l=o.options;O(a,"_uid")?(s=Object.create(a),s._original=a):(s=a,a=a._original);var u=i(l._compiled),h=!u;this.data=t,this.props=e,this.children=r,this.parent=a,this.listeners=t.on||n,this.injections=Te(l.inject,a),this.slots=function(){return c.$slots||Pe(t.scopedSlots,c.$slots=He(r,a)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Pe(t.scopedSlots,this.slots())}}),u&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Pe(t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,r){var i=fn(s,t,e,n,r,h);return i&&!Array.isArray(i)&&(i.fnScopeId=l._scopeId,i.fnContext=a),i}:this._c=function(t,e,n,r){return fn(s,t,e,n,r,h)}}function tn(t,e,r,i,o){var s=t.options,c={},l=s.props;if(a(l))for(var u in l)c[u]=Yt(u,l,e||n);else a(r.attrs)&&nn(c,r.attrs),a(r.props)&&nn(c,r.props);var h=new Ze(r,c,o,i,t),d=s.render.call(null,h._c,h);if(d instanceof yt)return en(d,r,h.parent,s,h);if(Array.isArray(d)){for(var f=Ve(d)||[],p=new Array(f.length),v=0;v<f.length;v++)p[v]=en(f[v],r,h.parent,s,h);return p}}function en(t,e,n,r,a){var i=jt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function nn(t,e){for(var n in e)t[j(n)]=e[n]}Qe(Ze.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var r=t.componentInstance=sn(t,Tn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;En(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Dn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Zn(n):_n(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Fn(e,!0):e.$destroy())}},an=Object.keys(rn);function on(t,e,n,o,s){if(!r(t)){var l=n.$options._base;if(c(t)&&(t=l.extend(t)),"function"===typeof t){var u;if(r(t.cid)&&(u=t,t=jn(u,l),void 0===t))return wn(u,e,n,o,s);e=e||{},wr(t),a(e.model)&&un(t.options,e);var h=je(e,t,s);if(i(t.options.functional))return tn(t,h,e,n,o);var d=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}cn(e);var p=t.options.name||s,v=new yt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:s,children:o},u);return v}}}function sn(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return a(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function cn(t){for(var e=t.hook||(t.hook={}),n=0;n<an.length;n++){var r=an[n],a=e[r],i=rn[r];a===i||a&&a._merged||(e[r]=a?ln(i,a):i)}}function ln(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function un(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),o=i[r],s=e.model.callback;a(o)?(Array.isArray(o)?-1===o.indexOf(s):o!==s)&&(i[r]=[s].concat(o)):i[r]=s}var hn=1,dn=2;function fn(t,e,n,r,a,o){return(Array.isArray(n)||s(n))&&(a=r,r=n,n=void 0),i(o)&&(a=dn),pn(t,e,n,r,a)}function pn(t,e,n,r,i){if(a(n)&&a(n.__ob__))return zt();if(a(n)&&a(n.is)&&(e=n.is),!e)return zt();var o,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===dn?r=Ve(r):i===hn&&(r=Ae(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||N.getTagNamespace(e),o=N.isReservedTag(e)?new yt(N.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!a(c=Xt(t.$options,"components",e))?new yt(e,n,r,void 0,void 0,t):on(c,n,t,r,e)):o=on(e,n,t,r);return Array.isArray(o)?o:a(o)?(a(s)&&vn(o,s),a(n)&&mn(n),o):zt()}function vn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),a(t.children))for(var o=0,s=t.children.length;o<s;o++){var c=t.children[o];a(c.tag)&&(r(c.ns)||i(n)&&"svg"!==c.tag)&&vn(c,e,n)}}function mn(t){c(t.style)&&be(t.style),c(t.class)&&be(t.class)}function bn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,a=r&&r.context;t.$slots=He(e._renderChildren,a),t.$scopedSlots=n,t._c=function(e,n,r,a){return fn(t,e,n,r,a,!1)},t.$createElement=function(e,n,r,a){return fn(t,e,n,r,a,!0)};var i=r&&r.data;Bt(t,"$attrs",i&&i.attrs||n,null,!0),Bt(t,"$listeners",e._parentListeners||n,null,!0)}var gn,yn=null;function On(t){Qe(t.prototype),t.prototype.$nextTick=function(t){return ve(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,a=n._parentVnode;a&&(e.$scopedSlots=Pe(a.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=a;try{yn=e,t=r.call(e._renderProxy,e.$createElement)}catch(Mo){ne(Mo,e,"render"),t=e._vnode}finally{yn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof yt||(t=zt()),t.parent=a,t}}function zn(t,e){return(t.__esModule||dt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function wn(t,e,n,r,a){var i=zt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:a},i}function jn(t,e){if(i(t.error)&&a(t.errorComp))return t.errorComp;if(a(t.resolved))return t.resolved;var n=yn;if(n&&a(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&a(t.loadingComp))return t.loadingComp;if(n&&!a(t.owners)){var o=t.owners=[n],s=!0,l=null,u=null;n.$on("hook:destroyed",(function(){return g(o,n)}));var h=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==l&&(clearTimeout(l),l=null),null!==u&&(clearTimeout(u),u=null))},d=_((function(n){t.resolved=zn(n,e),s?o.length=0:h(!0)})),p=_((function(e){a(t.errorComp)&&(t.error=!0,h(!0))})),v=t(d,p);return c(v)&&(f(v)?r(t.resolved)&&v.then(d,p):f(v.component)&&(v.component.then(d,p),a(v.error)&&(t.errorComp=zn(v.error,e)),a(v.loading)&&(t.loadingComp=zn(v.loading,e),0===v.delay?t.loading=!0:l=setTimeout((function(){l=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))}),v.delay||200)),a(v.timeout)&&(u=setTimeout((function(){u=null,r(t.resolved)&&p(null)}),v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function Mn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(a(n)&&(a(n.componentOptions)||Be(n)))return n}}function An(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Sn(t,e)}function Vn(t,e){gn.$on(t,e)}function Cn(t,e){gn.$off(t,e)}function In(t,e){var n=gn;return function r(){var a=e.apply(null,arguments);null!==a&&n.$off(t,r)}}function Sn(t,e,n){gn=t,ze(e,n||{},Vn,Cn,In,t),gn=void 0}function kn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var a=0,i=t.length;a<i;a++)r.$on(t[a],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,a=t.length;r<a;r++)n.$off(t[r],e);return n}var i,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var s=o.length;while(s--)if(i=o[s],i===e||i.fn===e){o.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?k(n):n;for(var r=k(arguments,1),a='event handler for "'+t+'"',i=0,o=n.length;i<o;i++)re(n[i],e,r,e,a)}return e}}var Tn=null;function Hn(t){var e=Tn;return Tn=t,function(){Tn=e}}function Ln(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Bn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,a=n._vnode,i=Hn(n);n._vnode=t,n.$el=a?n.__patch__(a,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Dn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Dn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Pn(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=zt),Dn(t,"beforeMount"),r=function(){t._update(t._render(),n)},new rr(t,r,L,{before:function(){t._isMounted&&!t._isDestroyed&&Dn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Dn(t,"mounted")),t}function En(t,e,r,a,i){var o=a.data.scopedSlots,s=t.$scopedSlots,c=!!(o&&!o.$stable||s!==n&&!s.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),l=!!(i||t.$options._renderChildren||c);if(t.$options._parentVnode=a,t.$vnode=a,t._vnode&&(t._vnode.parent=a),t.$options._renderChildren=i,t.$attrs=a.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){St(!1);for(var u=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=t.$options.props;u[f]=Yt(f,p,e,t)}St(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,Sn(t,r,v),l&&(t.$slots=He(i,a.context),t.$forceUpdate())}function xn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function _n(t,e){if(e){if(t._directInactive=!1,xn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)_n(t.$children[n]);Dn(t,"activated")}}function Fn(t,e){if((!e||(t._directInactive=!0,!xn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);Dn(t,"deactivated")}}function Dn(t,e){bt();var n=t.$options[e],r=e+" hook";if(n)for(var a=0,i=n.length;a<i;a++)re(n[a],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),gt()}var Rn=[],Nn=[],$n={},Un=!1,qn=!1,Gn=0;function Wn(){Gn=Rn.length=Nn.length=0,$n={},Un=qn=!1}var Kn=0,Xn=Date.now;if(Y&&!tt){var Yn=window.performance;Yn&&"function"===typeof Yn.now&&Xn()>document.createEvent("Event").timeStamp&&(Xn=function(){return Yn.now()})}function Jn(){var t,e;for(Kn=Xn(),qn=!0,Rn.sort((function(t,e){return t.id-e.id})),Gn=0;Gn<Rn.length;Gn++)t=Rn[Gn],t.before&&t.before(),e=t.id,$n[e]=null,t.run();var n=Nn.slice(),r=Rn.slice();Wn(),tr(n),Qn(r),lt&&N.devtools&&lt.emit("flush")}function Qn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Dn(r,"updated")}}function Zn(t){t._inactive=!1,Nn.push(t)}function tr(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,_n(t[e],!0)}function er(t){var e=t.id;if(null==$n[e]){if($n[e]=!0,qn){var n=Rn.length-1;while(n>Gn&&Rn[n].id>t.id)n--;Rn.splice(n+1,0,t)}else Rn.push(t);Un||(Un=!0,ve(Jn))}}var nr=0,rr=function(t,e,n,r,a){this.vm=t,a&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ht,this.newDepIds=new ht,this.expression="","function"===typeof e?this.getter=e:(this.getter=W(e),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var t;bt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Mo){if(!this.user)throw Mo;ne(Mo,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&be(t),gt(),this.cleanupDeps()}return t},rr.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},rr.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():er(this)},rr.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';re(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ar={enumerable:!0,configurable:!0,get:L,set:L};function ir(t,e,n){ar.get=function(){return this[e][n]},ar.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ar)}function or(t){t._watchers=[];var e=t.$options;e.props&&sr(t,e.props),e.methods&&vr(t,e.methods),e.data?cr(t):Lt(t._data={},!0),e.computed&&hr(t,e.computed),e.watch&&e.watch!==it&&mr(t,e.watch)}function sr(t,e){var n=t.$options.propsData||{},r=t._props={},a=t.$options._propKeys=[],i=!t.$parent;i||St(!1);var o=function(i){a.push(i);var o=Yt(i,e,n,t);Bt(r,i,o),i in t||ir(t,"_props",i)};for(var s in e)o(s);St(!0)}function cr(t){var e=t.$options.data;e=t._data="function"===typeof e?lr(e,t):e||{},u(e)||(e={});var n=Object.keys(e),r=t.$options.props,a=(t.$options.methods,n.length);while(a--){var i=n[a];0,r&&O(r,i)||U(i)||ir(t,"_data",i)}Lt(e,!0)}function lr(t,e){bt();try{return t.call(e,e)}catch(Mo){return ne(Mo,e,"data()"),{}}finally{gt()}}var ur={lazy:!0};function hr(t,e){var n=t._computedWatchers=Object.create(null),r=ct();for(var a in e){var i=e[a],o="function"===typeof i?i:i.get;0,r||(n[a]=new rr(t,o||L,L,ur)),a in t||dr(t,a,i)}}function dr(t,e,n){var r=!ct();"function"===typeof n?(ar.get=r?fr(e):pr(n),ar.set=L):(ar.get=n.get?r&&!1!==n.cache?fr(e):pr(n.get):L,ar.set=n.set||L),Object.defineProperty(t,e,ar)}function fr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),vt.target&&e.depend(),e.value}}function pr(t){return function(){return t.call(this,this)}}function vr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?L:S(e[n],t)}function mr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var a=0;a<r.length;a++)br(t,n,r[a]);else br(t,n,r)}}function br(t,e,n,r){return u(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function gr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Pt,t.prototype.$delete=Et,t.prototype.$watch=function(t,e,n){var r=this;if(u(e))return br(r,t,e,n);n=n||{},n.user=!0;var a=new rr(r,t,e,n);if(n.immediate){var i='callback for immediate watcher "'+a.expression+'"';bt(),re(e,r,[a.value],r,i),gt()}return function(){a.teardown()}}}var yr=0;function Or(t){t.prototype._init=function(t){var e=this;e._uid=yr++,e._isVue=!0,t&&t._isComponent?zr(e,t):e.$options=Kt(wr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Ln(e),An(e),bn(e),Dn(e,"beforeCreate"),ke(e),or(e),Se(e),Dn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function zr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var a=r.componentOptions;n.propsData=a.propsData,n._parentListeners=a.listeners,n._renderChildren=a.children,n._componentTag=a.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function wr(t){var e=t.options;if(t.super){var n=wr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var a=jr(t);a&&T(t.extendOptions,a),e=t.options=Kt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function jr(t){var e,n=t.options,r=t.sealedOptions;for(var a in n)n[a]!==r[a]&&(e||(e={}),e[a]=n[a]);return e}function Mr(t){this._init(t)}function Ar(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=k(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Vr(t){t.mixin=function(t){return this.options=Kt(this.options,t),this}}function Cr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,a=t._Ctor||(t._Ctor={});if(a[r])return a[r];var i=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Kt(n.options,t),o["super"]=n,o.options.props&&Ir(o),o.options.computed&&Sr(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,D.forEach((function(t){o[t]=n[t]})),i&&(o.options.components[i]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=T({},o.options),a[r]=o,o}}function Ir(t){var e=t.options.props;for(var n in e)ir(t.prototype,"_props",n)}function Sr(t){var e=t.options.computed;for(var n in e)dr(t.prototype,n,e[n])}function kr(t){D.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Tr(t){return t&&(t.Ctor.options.name||t.tag)}function Hr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Lr(t,e){var n=t.cache,r=t.keys,a=t._vnode;for(var i in n){var o=n[i];if(o){var s=o.name;s&&!e(s)&&Br(n,i,r,a)}}}function Br(t,e,n,r){var a=t[e];!a||r&&a.tag===r.tag||a.componentInstance.$destroy(),t[e]=null,g(n,e)}Or(Mr),gr(Mr),kn(Mr),Bn(Mr),On(Mr);var Pr=[String,RegExp,Array],Er={name:"keep-alive",abstract:!0,props:{include:Pr,exclude:Pr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,a=t.keyToCache;if(r){var i=r.tag,o=r.componentInstance,s=r.componentOptions;e[a]={name:Tr(s),tag:i,componentInstance:o},n.push(a),this.max&&n.length>parseInt(this.max)&&Br(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Br(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Lr(t,(function(t){return Hr(e,t)}))})),this.$watch("exclude",(function(e){Lr(t,(function(t){return!Hr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Mn(t),n=e&&e.componentOptions;if(n){var r=Tr(n),a=this,i=a.include,o=a.exclude;if(i&&(!r||!Hr(i,r))||o&&r&&Hr(o,r))return e;var s=this,c=s.cache,l=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[u]?(e.componentInstance=c[u].componentInstance,g(l,u),l.push(u)):(this.vnodeToCache=e,this.keyToCache=u),e.data.keepAlive=!0}return e||t&&t[0]}},xr={KeepAlive:Er};function _r(t){var e={get:function(){return N}};Object.defineProperty(t,"config",e),t.util={warn:ft,extend:T,mergeOptions:Kt,defineReactive:Bt},t.set=Pt,t.delete=Et,t.nextTick=ve,t.observable=function(t){return Lt(t),t},t.options=Object.create(null),D.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,T(t.options.components,xr),Ar(t),Vr(t),Cr(t),kr(t)}_r(Mr),Object.defineProperty(Mr.prototype,"$isServer",{get:ct}),Object.defineProperty(Mr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Mr,"FunctionalRenderContext",{value:Ze}),Mr.version="2.6.14";var Fr=m("style,class"),Dr=m("input,textarea,option,select,progress"),Rr=function(t,e,n){return"value"===n&&Dr(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},Nr=m("contenteditable,draggable,spellcheck"),$r=m("events,caret,typing,plaintext-only"),Ur=function(t,e){return Xr(e)||"false"===e?"false":"contenteditable"===t&&$r(e)?e:"true"},qr=m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Gr="http://www.w3.org/1999/xlink",Wr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Kr=function(t){return Wr(t)?t.slice(6,t.length):""},Xr=function(t){return null==t||!1===t};function Yr(t){var e=t.data,n=t,r=t;while(a(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Jr(r.data,e));while(a(n=n.parent))n&&n.data&&(e=Jr(e,n.data));return Qr(e.staticClass,e.class)}function Jr(t,e){return{staticClass:Zr(t.staticClass,e.staticClass),class:a(t.class)?[t.class,e.class]:e.class}}function Qr(t,e){return a(t)||a(e)?Zr(t,ta(e)):""}function Zr(t,e){return t?e?t+" "+e:t:e||""}function ta(t){return Array.isArray(t)?ea(t):c(t)?na(t):"string"===typeof t?t:""}function ea(t){for(var e,n="",r=0,i=t.length;r<i;r++)a(e=ta(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function na(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ra={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},aa=m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),ia=m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),oa=function(t){return aa(t)||ia(t)};function sa(t){return ia(t)?"svg":"math"===t?"math":void 0}var ca=Object.create(null);function la(t){if(!Y)return!0;if(oa(t))return!1;if(t=t.toLowerCase(),null!=ca[t])return ca[t];var e=document.createElement(t);return t.indexOf("-")>-1?ca[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ca[t]=/HTMLUnknownElement/.test(e.toString())}var ua=m("text,number,password,search,email,tel,url");function ha(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function da(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fa(t,e){return document.createElementNS(ra[t],e)}function pa(t){return document.createTextNode(t)}function va(t){return document.createComment(t)}function ma(t,e,n){t.insertBefore(e,n)}function ba(t,e){t.removeChild(e)}function ga(t,e){t.appendChild(e)}function ya(t){return t.parentNode}function Oa(t){return t.nextSibling}function za(t){return t.tagName}function wa(t,e){t.textContent=e}function ja(t,e){t.setAttribute(e,"")}var Ma=Object.freeze({createElement:da,createElementNS:fa,createTextNode:pa,createComment:va,insertBefore:ma,removeChild:ba,appendChild:ga,parentNode:ya,nextSibling:Oa,tagName:za,setTextContent:wa,setStyleScope:ja}),Aa={create:function(t,e){Va(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Va(t,!0),Va(e))},destroy:function(t){Va(t,!0)}};function Va(t,e){var n=t.data.ref;if(a(n)){var r=t.context,i=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?g(o[n],i):o[n]===i&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}var Ca=new yt("",{},[]),Ia=["create","activate","update","remove","destroy"];function Sa(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&a(t.data)===a(e.data)&&ka(t,e)||i(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function ka(t,e){if("input"!==t.tag)return!0;var n,r=a(n=t.data)&&a(n=n.attrs)&&n.type,i=a(n=e.data)&&a(n=n.attrs)&&n.type;return r===i||ua(r)&&ua(i)}function Ta(t,e,n){var r,i,o={};for(r=e;r<=n;++r)i=t[r].key,a(i)&&(o[i]=r);return o}function Ha(t){var e,n,o={},c=t.modules,l=t.nodeOps;for(e=0;e<Ia.length;++e)for(o[Ia[e]]=[],n=0;n<c.length;++n)a(c[n][Ia[e]])&&o[Ia[e]].push(c[n][Ia[e]]);function u(t){return new yt(l.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=l.parentNode(t);a(e)&&l.removeChild(e,t)}function f(t,e,n,r,o,s,c){if(a(t.elm)&&a(s)&&(t=s[c]=jt(t)),t.isRootInsert=!o,!p(t,e,n,r)){var u=t.data,h=t.children,d=t.tag;a(d)?(t.elm=t.ns?l.createElementNS(t.ns,d):l.createElement(d,t),w(t),y(t,h,e),a(u)&&z(t,e),g(n,t.elm,r)):i(t.isComment)?(t.elm=l.createComment(t.text),g(n,t.elm,r)):(t.elm=l.createTextNode(t.text),g(n,t.elm,r))}}function p(t,e,n,r){var o=t.data;if(a(o)){var s=a(t.componentInstance)&&o.keepAlive;if(a(o=o.hook)&&a(o=o.init)&&o(t,!1),a(t.componentInstance))return v(t,e),g(n,t.elm,r),i(s)&&b(t,e,n,r),!0}}function v(t,e){a(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,O(t)?(z(t,e),w(t)):(Va(t),e.push(t))}function b(t,e,n,r){var i,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,a(i=s.data)&&a(i=i.transition)){for(i=0;i<o.activate.length;++i)o.activate[i](Ca,s);e.push(s);break}g(n,t.elm,r)}function g(t,e,n){a(t)&&(a(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function y(t,e,n){if(Array.isArray(e)){0;for(var r=0;r<e.length;++r)f(e[r],n,t.elm,null,!0,e,r)}else s(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function O(t){while(t.componentInstance)t=t.componentInstance._vnode;return a(t.tag)}function z(t,n){for(var r=0;r<o.create.length;++r)o.create[r](Ca,t);e=t.data.hook,a(e)&&(a(e.create)&&e.create(Ca,t),a(e.insert)&&n.push(t))}function w(t){var e;if(a(e=t.fnScopeId))l.setStyleScope(t.elm,e);else{var n=t;while(n)a(e=n.context)&&a(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent}a(e=Tn)&&e!==t.context&&e!==t.fnContext&&a(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function j(t,e,n,r,a,i){for(;r<=a;++r)f(n[r],i,t,e,!1,n,r)}function M(t){var e,n,r=t.data;if(a(r))for(a(e=r.hook)&&a(e=e.destroy)&&e(t),e=0;e<o.destroy.length;++e)o.destroy[e](t);if(a(e=t.children))for(n=0;n<t.children.length;++n)M(t.children[n])}function A(t,e,n){for(;e<=n;++e){var r=t[e];a(r)&&(a(r.tag)?(V(r),M(r)):d(r.elm))}}function V(t,e){if(a(e)||a(t.data)){var n,r=o.remove.length+1;for(a(e)?e.listeners+=r:e=h(t.elm,r),a(n=t.componentInstance)&&a(n=n._vnode)&&a(n.data)&&V(n,e),n=0;n<o.remove.length;++n)o.remove[n](t,e);a(n=t.data.hook)&&a(n=n.remove)?n(t,e):e()}else d(t.elm)}function C(t,e,n,i,o){var s,c,u,h,d=0,p=0,v=e.length-1,m=e[0],b=e[v],g=n.length-1,y=n[0],O=n[g],z=!o;while(d<=v&&p<=g)r(m)?m=e[++d]:r(b)?b=e[--v]:Sa(m,y)?(S(m,y,i,n,p),m=e[++d],y=n[++p]):Sa(b,O)?(S(b,O,i,n,g),b=e[--v],O=n[--g]):Sa(m,O)?(S(m,O,i,n,g),z&&l.insertBefore(t,m.elm,l.nextSibling(b.elm)),m=e[++d],O=n[--g]):Sa(b,y)?(S(b,y,i,n,p),z&&l.insertBefore(t,b.elm,m.elm),b=e[--v],y=n[++p]):(r(s)&&(s=Ta(e,d,v)),c=a(y.key)?s[y.key]:I(y,e,d,v),r(c)?f(y,i,t,m.elm,!1,n,p):(u=e[c],Sa(u,y)?(S(u,y,i,n,p),e[c]=void 0,z&&l.insertBefore(t,u.elm,m.elm)):f(y,i,t,m.elm,!1,n,p)),y=n[++p]);d>v?(h=r(n[g+1])?null:n[g+1].elm,j(t,h,n,p,g,i)):p>g&&A(e,d,v)}function I(t,e,n,r){for(var i=n;i<r;i++){var o=e[i];if(a(o)&&Sa(t,o))return i}}function S(t,e,n,s,c,u){if(t!==e){a(e.elm)&&a(s)&&(e=s[c]=jt(e));var h=e.elm=t.elm;if(i(t.isAsyncPlaceholder))a(e.asyncFactory.resolved)?H(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(i(e.isStatic)&&i(t.isStatic)&&e.key===t.key&&(i(e.isCloned)||i(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;a(f)&&a(d=f.hook)&&a(d=d.prepatch)&&d(t,e);var p=t.children,v=e.children;if(a(f)&&O(e)){for(d=0;d<o.update.length;++d)o.update[d](t,e);a(d=f.hook)&&a(d=d.update)&&d(t,e)}r(e.text)?a(p)&&a(v)?p!==v&&C(h,p,v,n,u):a(v)?(a(t.text)&&l.setTextContent(h,""),j(h,null,v,0,v.length-1,n)):a(p)?A(p,0,p.length-1):a(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),a(f)&&a(d=f.hook)&&a(d=d.postpatch)&&d(t,e)}}}function k(t,e,n){if(i(n)&&a(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var T=m("attrs,class,staticClass,staticStyle,key");function H(t,e,n,r){var o,s=e.tag,c=e.data,l=e.children;if(r=r||c&&c.pre,e.elm=t,i(e.isComment)&&a(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(a(c)&&(a(o=c.hook)&&a(o=o.init)&&o(e,!0),a(o=e.componentInstance)))return v(e,n),!0;if(a(s)){if(a(l))if(t.hasChildNodes())if(a(o=c)&&a(o=o.domProps)&&a(o=o.innerHTML)){if(o!==t.innerHTML)return!1}else{for(var u=!0,h=t.firstChild,d=0;d<l.length;d++){if(!h||!H(h,l[d],n,r)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else y(e,l,n);if(a(c)){var f=!1;for(var p in c)if(!T(p)){f=!0,z(e,n);break}!f&&c["class"]&&be(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,s){if(!r(e)){var c=!1,h=[];if(r(t))c=!0,f(e,h);else{var d=a(t.nodeType);if(!d&&Sa(t,e))S(t,e,h,null,null,s);else{if(d){if(1===t.nodeType&&t.hasAttribute(F)&&(t.removeAttribute(F),n=!0),i(n)&&H(t,e,h))return k(e,h,!0),t;t=u(t)}var p=t.elm,v=l.parentNode(p);if(f(e,h,p._leaveCb?null:v,l.nextSibling(p)),a(e.parent)){var m=e.parent,b=O(e);while(m){for(var g=0;g<o.destroy.length;++g)o.destroy[g](m);if(m.elm=e.elm,b){for(var y=0;y<o.create.length;++y)o.create[y](Ca,m);var z=m.data.hook.insert;if(z.merged)for(var w=1;w<z.fns.length;w++)z.fns[w]()}else Va(m);m=m.parent}}a(v)?A([t],0,0):a(t.tag)&&M(t)}}return k(e,h,c),e.elm}a(t)&&M(t)}}var La={create:Ba,update:Ba,destroy:function(t){Ba(t,Ca)}};function Ba(t,e){(t.data.directives||e.data.directives)&&Pa(t,e)}function Pa(t,e){var n,r,a,i=t===Ca,o=e===Ca,s=xa(t.data.directives,t.context),c=xa(e.data.directives,e.context),l=[],u=[];for(n in c)r=s[n],a=c[n],r?(a.oldValue=r.value,a.oldArg=r.arg,Fa(a,"update",e,t),a.def&&a.def.componentUpdated&&u.push(a)):(Fa(a,"bind",e,t),a.def&&a.def.inserted&&l.push(a));if(l.length){var h=function(){for(var n=0;n<l.length;n++)Fa(l[n],"inserted",e,t)};i?we(e,"insert",h):h()}if(u.length&&we(e,"postpatch",(function(){for(var n=0;n<u.length;n++)Fa(u[n],"componentUpdated",e,t)})),!i)for(n in s)c[n]||Fa(s[n],"unbind",t,t,o)}var Ea=Object.create(null);function xa(t,e){var n,r,a=Object.create(null);if(!t)return a;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=Ea),a[_a(r)]=r,r.def=Xt(e.$options,"directives",r.name,!0);return a}function _a(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Fa(t,e,n,r,a){var i=t.def&&t.def[e];if(i)try{i(n.elm,t,n,r,a)}catch(Mo){ne(Mo,n.context,"directive "+t.name+" "+e+" hook")}}var Da=[Aa,La];function Ra(t,e){var n=e.componentOptions;if((!a(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var i,o,s,c=e.elm,l=t.data.attrs||{},u=e.data.attrs||{};for(i in a(u.__ob__)&&(u=e.data.attrs=T({},u)),u)o=u[i],s=l[i],s!==o&&Na(c,i,o,e.data.pre);for(i in(tt||nt)&&u.value!==l.value&&Na(c,"value",u.value),l)r(u[i])&&(Wr(i)?c.removeAttributeNS(Gr,Kr(i)):Nr(i)||c.removeAttribute(i))}}function Na(t,e,n,r){r||t.tagName.indexOf("-")>-1?$a(t,e,n):qr(e)?Xr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):Nr(e)?t.setAttribute(e,Ur(e,n)):Wr(e)?Xr(n)?t.removeAttributeNS(Gr,Kr(e)):t.setAttributeNS(Gr,e,n):$a(t,e,n)}function $a(t,e,n){if(Xr(n))t.removeAttribute(e);else{if(tt&&!et&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var Ua={create:Ra,update:Ra};function qa(t,e){var n=e.elm,i=e.data,o=t.data;if(!(r(i.staticClass)&&r(i.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var s=Yr(e),c=n._transitionClasses;a(c)&&(s=Zr(s,ta(c))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}var Ga,Wa={create:qa,update:qa},Ka="__r",Xa="__c";function Ya(t){if(a(t[Ka])){var e=tt?"change":"input";t[e]=[].concat(t[Ka],t[e]||[]),delete t[Ka]}a(t[Xa])&&(t.change=[].concat(t[Xa],t.change||[]),delete t[Xa])}function Ja(t,e,n){var r=Ga;return function a(){var i=e.apply(null,arguments);null!==i&&ti(t,a,n,r)}}var Qa=se&&!(at&&Number(at[1])<=53);function Za(t,e,n,r){if(Qa){var a=Kn,i=e;e=i._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=a||t.timeStamp<=0||t.target.ownerDocument!==document)return i.apply(this,arguments)}}Ga.addEventListener(t,e,ot?{capture:n,passive:r}:n)}function ti(t,e,n,r){(r||Ga).removeEventListener(t,e._wrapper||e,n)}function ei(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},a=t.data.on||{};Ga=e.elm,Ya(n),ze(n,a,Za,ti,Ja,e.context),Ga=void 0}}var ni,ri={create:ei,update:ei};function ai(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,i,o=e.elm,s=t.data.domProps||{},c=e.data.domProps||{};for(n in a(c.__ob__)&&(c=e.data.domProps=T({},c)),s)n in c||(o[n]="");for(n in c){if(i=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),i===s[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=i;var l=r(i)?"":String(i);ii(o,l)&&(o.value=l)}else if("innerHTML"===n&&ia(o.tagName)&&r(o.innerHTML)){ni=ni||document.createElement("div"),ni.innerHTML="<svg>"+i+"</svg>";var u=ni.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(u.firstChild)o.appendChild(u.firstChild)}else if(i!==s[n])try{o[n]=i}catch(Mo){}}}}function ii(t,e){return!t.composing&&("OPTION"===t.tagName||oi(t,e)||si(t,e))}function oi(t,e){var n=!0;try{n=document.activeElement!==t}catch(Mo){}return n&&t.value!==e}function si(t,e){var n=t.value,r=t._vModifiers;if(a(r)){if(r.number)return v(n)!==v(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var ci={create:ai,update:ai},li=z((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function ui(t){var e=hi(t.style);return t.staticStyle?T(t.staticStyle,e):e}function hi(t){return Array.isArray(t)?H(t):"string"===typeof t?li(t):t}function di(t,e){var n,r={};if(e){var a=t;while(a.componentInstance)a=a.componentInstance._vnode,a&&a.data&&(n=ui(a.data))&&T(r,n)}(n=ui(t.data))&&T(r,n);var i=t;while(i=i.parent)i.data&&(n=ui(i.data))&&T(r,n);return r}var fi,pi=/^--/,vi=/\s*!important$/,mi=function(t,e,n){if(pi.test(e))t.style.setProperty(e,n);else if(vi.test(n))t.style.setProperty(V(e),n.replace(vi,""),"important");else{var r=gi(e);if(Array.isArray(n))for(var a=0,i=n.length;a<i;a++)t.style[r]=n[a];else t.style[r]=n}},bi=["Webkit","Moz","ms"],gi=z((function(t){if(fi=fi||document.createElement("div").style,t=j(t),"filter"!==t&&t in fi)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<bi.length;n++){var r=bi[n]+e;if(r in fi)return r}}));function yi(t,e){var n=e.data,i=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(i.staticStyle)&&r(i.style))){var o,s,c=e.elm,l=i.staticStyle,u=i.normalizedStyle||i.style||{},h=l||u,d=hi(e.data.style)||{};e.data.normalizedStyle=a(d.__ob__)?T({},d):d;var f=di(e,!0);for(s in h)r(f[s])&&mi(c,s,"");for(s in f)o=f[s],o!==h[s]&&mi(c,s,null==o?"":o)}}var Oi={create:yi,update:yi},zi=/\s+/;function wi(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(zi).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function ji(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(zi).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Mi(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&T(e,Ai(t.name||"v")),T(e,t),e}return"string"===typeof t?Ai(t):void 0}}var Ai=z((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Vi=Y&&!et,Ci="transition",Ii="animation",Si="transition",ki="transitionend",Ti="animation",Hi="animationend";Vi&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Si="WebkitTransition",ki="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ti="WebkitAnimation",Hi="webkitAnimationEnd"));var Li=Y?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Bi(t){Li((function(){Li(t)}))}function Pi(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),wi(t,e))}function Ei(t,e){t._transitionClasses&&g(t._transitionClasses,e),ji(t,e)}function xi(t,e,n){var r=Fi(t,e),a=r.type,i=r.timeout,o=r.propCount;if(!a)return n();var s=a===Ci?ki:Hi,c=0,l=function(){t.removeEventListener(s,u),n()},u=function(e){e.target===t&&++c>=o&&l()};setTimeout((function(){c<o&&l()}),i+1),t.addEventListener(s,u)}var _i=/\b(transform|all)(,|$)/;function Fi(t,e){var n,r=window.getComputedStyle(t),a=(r[Si+"Delay"]||"").split(", "),i=(r[Si+"Duration"]||"").split(", "),o=Di(a,i),s=(r[Ti+"Delay"]||"").split(", "),c=(r[Ti+"Duration"]||"").split(", "),l=Di(s,c),u=0,h=0;e===Ci?o>0&&(n=Ci,u=o,h=i.length):e===Ii?l>0&&(n=Ii,u=l,h=c.length):(u=Math.max(o,l),n=u>0?o>l?Ci:Ii:null,h=n?n===Ci?i.length:c.length:0);var d=n===Ci&&_i.test(r[Si+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function Di(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Ri(e)+Ri(t[n])})))}function Ri(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Ni(t,e){var n=t.elm;a(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var i=Mi(t.data.transition);if(!r(i)&&!a(n._enterCb)&&1===n.nodeType){var o=i.css,s=i.type,l=i.enterClass,u=i.enterToClass,h=i.enterActiveClass,d=i.appearClass,f=i.appearToClass,p=i.appearActiveClass,m=i.beforeEnter,b=i.enter,g=i.afterEnter,y=i.enterCancelled,O=i.beforeAppear,z=i.appear,w=i.afterAppear,j=i.appearCancelled,M=i.duration,A=Tn,V=Tn.$vnode;while(V&&V.parent)A=V.context,V=V.parent;var C=!A._isMounted||!t.isRootInsert;if(!C||z||""===z){var I=C&&d?d:l,S=C&&p?p:h,k=C&&f?f:u,T=C&&O||m,H=C&&"function"===typeof z?z:b,L=C&&w||g,B=C&&j||y,P=v(c(M)?M.enter:M);0;var E=!1!==o&&!et,x=qi(H),F=n._enterCb=_((function(){E&&(Ei(n,k),Ei(n,S)),F.cancelled?(E&&Ei(n,I),B&&B(n)):L&&L(n),n._enterCb=null}));t.data.show||we(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),H&&H(n,F)})),T&&T(n),E&&(Pi(n,I),Pi(n,S),Bi((function(){Ei(n,I),F.cancelled||(Pi(n,k),x||(Ui(P)?setTimeout(F,P):xi(n,s,F)))}))),t.data.show&&(e&&e(),H&&H(n,F)),E||x||F()}}}function $i(t,e){var n=t.elm;a(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var i=Mi(t.data.transition);if(r(i)||1!==n.nodeType)return e();if(!a(n._leaveCb)){var o=i.css,s=i.type,l=i.leaveClass,u=i.leaveToClass,h=i.leaveActiveClass,d=i.beforeLeave,f=i.leave,p=i.afterLeave,m=i.leaveCancelled,b=i.delayLeave,g=i.duration,y=!1!==o&&!et,O=qi(f),z=v(c(g)?g.leave:g);0;var w=n._leaveCb=_((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),y&&(Ei(n,u),Ei(n,h)),w.cancelled?(y&&Ei(n,l),m&&m(n)):(e(),p&&p(n)),n._leaveCb=null}));b?b(j):j()}function j(){w.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),y&&(Pi(n,l),Pi(n,h),Bi((function(){Ei(n,l),w.cancelled||(Pi(n,u),O||(Ui(z)?setTimeout(w,z):xi(n,s,w)))}))),f&&f(n,w),y||O||w())}}function Ui(t){return"number"===typeof t&&!isNaN(t)}function qi(t){if(r(t))return!1;var e=t.fns;return a(e)?qi(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Gi(t,e){!0!==e.data.show&&Ni(e)}var Wi=Y?{create:Gi,activate:Gi,remove:function(t,e){!0!==t.data.show?$i(t,e):e()}}:{},Ki=[Ua,Wa,ri,ci,Oi,Wi],Xi=Ki.concat(Da),Yi=Ha({nodeOps:Ma,modules:Xi});et&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&ao(t,"input")}));var Ji={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?we(n,"postpatch",(function(){Ji.componentUpdated(t,e,n)})):Qi(t,e,n.context),t._vOptions=[].map.call(t.options,eo)):("textarea"===n.tag||ua(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",no),t.addEventListener("compositionend",ro),t.addEventListener("change",ro),et&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Qi(t,e,n.context);var r=t._vOptions,a=t._vOptions=[].map.call(t.options,eo);if(a.some((function(t,e){return!E(t,r[e])}))){var i=t.multiple?e.value.some((function(t){return to(t,a)})):e.value!==e.oldValue&&to(e.value,a);i&&ao(t,"change")}}}};function Qi(t,e,n){Zi(t,e,n),(tt||nt)&&setTimeout((function(){Zi(t,e,n)}),0)}function Zi(t,e,n){var r=e.value,a=t.multiple;if(!a||Array.isArray(r)){for(var i,o,s=0,c=t.options.length;s<c;s++)if(o=t.options[s],a)i=x(r,eo(o))>-1,o.selected!==i&&(o.selected=i);else if(E(eo(o),r))return void(t.selectedIndex!==s&&(t.selectedIndex=s));a||(t.selectedIndex=-1)}}function to(t,e){return e.every((function(e){return!E(e,t)}))}function eo(t){return"_value"in t?t._value:t.value}function no(t){t.target.composing=!0}function ro(t){t.target.composing&&(t.target.composing=!1,ao(t.target,"input"))}function ao(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function io(t){return!t.componentInstance||t.data&&t.data.transition?t:io(t.componentInstance._vnode)}var oo={bind:function(t,e,n){var r=e.value;n=io(n);var a=n.data&&n.data.transition,i=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&a?(n.data.show=!0,Ni(n,(function(){t.style.display=i}))):t.style.display=r?i:"none"},update:function(t,e,n){var r=e.value,a=e.oldValue;if(!r!==!a){n=io(n);var i=n.data&&n.data.transition;i?(n.data.show=!0,r?Ni(n,(function(){t.style.display=t.__vOriginalDisplay})):$i(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,a){a||(t.style.display=t.__vOriginalDisplay)}},so={model:Ji,show:oo},co={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function lo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?lo(Mn(e.children)):t}function uo(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var a=n._parentListeners;for(var i in a)e[j(i)]=a[i];return e}function ho(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function fo(t){while(t=t.parent)if(t.data.transition)return!0}function po(t,e){return e.key===t.key&&e.tag===t.tag}var vo=function(t){return t.tag||Be(t)},mo=function(t){return"show"===t.name},bo={name:"transition",props:co,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(vo),n.length)){0;var r=this.mode;0;var a=n[0];if(fo(this.$vnode))return a;var i=lo(a);if(!i)return a;if(this._leaving)return ho(t,a);var o="__transition-"+this._uid+"-";i.key=null==i.key?i.isComment?o+"comment":o+i.tag:s(i.key)?0===String(i.key).indexOf(o)?i.key:o+i.key:i.key;var c=(i.data||(i.data={})).transition=uo(this),l=this._vnode,u=lo(l);if(i.data.directives&&i.data.directives.some(mo)&&(i.data.show=!0),u&&u.data&&!po(i,u)&&!Be(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=T({},c);if("out-in"===r)return this._leaving=!0,we(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),ho(t,a);if("in-out"===r){if(Be(i))return l;var d,f=function(){d()};we(c,"afterEnter",f),we(c,"enterCancelled",f),we(h,"delayLeave",(function(t){d=t}))}}return a}}},go=T({tag:String,moveClass:String},co);delete go.mode;var yo={props:go,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var a=Hn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,a(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,a=this.$slots.default||[],i=this.children=[],o=uo(this),s=0;s<a.length;s++){var c=a[s];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))i.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){for(var l=[],u=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?l.push(d):u.push(d)}this.kept=t(e,null,l),this.removed=u}return t(e,null,i)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(Oo),t.forEach(zo),t.forEach(wo),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;Pi(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(ki,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(ki,t),n._moveCb=null,Ei(n,e))})}})))},methods:{hasMove:function(t,e){if(!Vi)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){ji(n,t)})),wi(n,e),n.style.display="none",this.$el.appendChild(n);var r=Fi(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Oo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function zo(t){t.data.newPos=t.elm.getBoundingClientRect()}function wo(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,a=e.top-n.top;if(r||a){t.data.moved=!0;var i=t.elm.style;i.transform=i.WebkitTransform="translate("+r+"px,"+a+"px)",i.transitionDuration="0s"}}var jo={Transition:bo,TransitionGroup:yo};Mr.config.mustUseProp=Rr,Mr.config.isReservedTag=oa,Mr.config.isReservedAttr=Fr,Mr.config.getTagNamespace=sa,Mr.config.isUnknownElement=la,T(Mr.options.directives,so),T(Mr.options.components,jo),Mr.prototype.__patch__=Y?Yi:L,Mr.prototype.$mount=function(t,e){return t=t&&Y?ha(t):void 0,Pn(this,t,e)},Y&&setTimeout((function(){N.devtools&&lt&&lt.emit("init",Mr)}),0),e["default"]=Mr}.call(this,n("c8ba"))},"2b88":function(t,e,n){"use strict";
/*! 
  * portal-vue © Thorsten Lünborg, 2019 
  * 
  * Version: 2.1.7
  * 
  * LICENCE: MIT 
  * 
  * https://github.com/linusborg/portal-vue
  * 
 */function r(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("2b0e"));function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t){return s(t)||c(t)||l()}function s(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var u="undefined"!==typeof window;function h(t){return Array.isArray(t)||"object"===i(t)?Object.freeze(t):t}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.reduce((function(t,n){var r=n.passengers[0],a="function"===typeof r?r(e):n.passengers;return t.concat(a)}),[])}function f(t,e){return t.map((function(t,e){return[e,t]})).sort((function(t,n){return e(t[1],n[1])||t[0]-n[0]})).map((function(t){return t[1]}))}function p(t,e){return e.reduce((function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e}),{})}var v={},m={},b={},g=a.extend({data:function(){return{transports:v,targets:m,sources:b,trackInstances:u}},methods:{open:function(t){if(u){var e=t.to,n=t.from,r=t.passengers,i=t.order,o=void 0===i?1/0:i;if(e&&n&&r){var s={to:e,from:n,passengers:h(r),order:o},c=Object.keys(this.transports);-1===c.indexOf(e)&&a.set(this.transports,e,[]);var l=this.$_getTransportIndex(s),d=this.transports[e].slice(0);-1===l?d.push(s):d[l]=s,this.transports[e]=f(d,(function(t,e){return t.order-e.order}))}}},close:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.to,r=t.from;if(n&&(r||!1!==e)&&this.transports[n])if(e)this.transports[n]=[];else{var a=this.$_getTransportIndex(t);if(a>=0){var i=this.transports[n].slice(0);i.splice(a,1),this.transports[n]=i}}},registerTarget:function(t,e,n){u&&(this.trackInstances&&!n&&this.targets[t]&&console.warn("[portal-vue]: Target ".concat(t," already exists")),this.$set(this.targets,t,Object.freeze([e])))},unregisterTarget:function(t){this.$delete(this.targets,t)},registerSource:function(t,e,n){u&&(this.trackInstances&&!n&&this.sources[t]&&console.warn("[portal-vue]: source ".concat(t," already exists")),this.$set(this.sources,t,Object.freeze([e])))},unregisterSource:function(t){this.$delete(this.sources,t)},hasTarget:function(t){return!(!this.targets[t]||!this.targets[t][0])},hasSource:function(t){return!(!this.sources[t]||!this.sources[t][0])},hasContentFor:function(t){return!!this.transports[t]&&!!this.transports[t].length},$_getTransportIndex:function(t){var e=t.to,n=t.from;for(var r in this.transports[e])if(this.transports[e][r].from===n)return+r;return-1}}}),y=new g(v),O=1,z=a.extend({name:"portal",props:{disabled:{type:Boolean},name:{type:String,default:function(){return String(O++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}}},created:function(){var t=this;this.$nextTick((function(){y.registerSource(t.name,t)}))},mounted:function(){this.disabled||this.sendUpdate()},updated:function(){this.disabled?this.clear():this.sendUpdate()},beforeDestroy:function(){y.unregisterSource(this.name),this.clear()},watch:{to:function(t,e){e&&e!==t&&this.clear(e),this.sendUpdate()}},methods:{clear:function(t){var e={from:this.name,to:t||this.to};y.close(e)},normalizeSlots:function(){return this.$scopedSlots.default?[this.$scopedSlots.default]:this.$slots.default},normalizeOwnChildren:function(t){return"function"===typeof t?t(this.slotProps):t},sendUpdate:function(){var t=this.normalizeSlots();if(t){var e={from:this.name,to:this.to,passengers:o(t),order:this.order};y.open(e)}else this.clear()}},render:function(t){var e=this.$slots.default||this.$scopedSlots.default||[],n=this.tag;return e&&this.disabled?e.length<=1&&this.slim?this.normalizeOwnChildren(e)[0]:t(n,[this.normalizeOwnChildren(e)]):this.slim?t():t(n,{class:{"v-portal":!0},style:{display:"none"},key:"v-portal-placeholder"})}}),w=a.extend({name:"portalTarget",props:{multiple:{type:Boolean,default:!1},name:{type:String,required:!0},slim:{type:Boolean,default:!1},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},data:function(){return{transports:y.transports,firstRender:!0}},created:function(){var t=this;this.$nextTick((function(){y.registerTarget(t.name,t)}))},watch:{ownTransports:function(){this.$emit("change",this.children().length>0)},name:function(t,e){y.unregisterTarget(e),y.registerTarget(t,this)}},mounted:function(){var t=this;this.transition&&this.$nextTick((function(){t.firstRender=!1}))},beforeDestroy:function(){y.unregisterTarget(this.name)},computed:{ownTransports:function(){var t=this.transports[this.name]||[];return this.multiple?t:0===t.length?[]:[t[t.length-1]]},passengers:function(){return d(this.ownTransports,this.slotProps)}},methods:{children:function(){return 0!==this.passengers.length?this.passengers:this.$scopedSlots.default?this.$scopedSlots.default(this.slotProps):this.$slots.default||[]},noWrapper:function(){var t=this.slim&&!this.transition;return t&&this.children().length>1&&console.warn("[portal-vue]: PortalTarget with `slim` option received more than one child element."),t}},render:function(t){var e=this.noWrapper(),n=this.children(),r=this.transition||this.tag;return e?n[0]:this.slim&&!r?t():t(r,{props:{tag:this.transition&&this.tag?this.tag:void 0},class:{"vue-portal-target":!0}},n)}}),j=0,M=["disabled","name","order","slim","slotProps","tag","to"],A=["multiple","transition"],V=a.extend({name:"MountingPortal",inheritAttrs:!1,props:{append:{type:[Boolean,String]},bail:{type:Boolean},mountTo:{type:String,required:!0},disabled:{type:Boolean},name:{type:String,default:function(){return"mounted_"+String(j++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}},multiple:{type:Boolean,default:!1},targetSlim:{type:Boolean},targetSlotProps:{type:Object,default:function(){return{}}},targetTag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},created:function(){if("undefined"!==typeof document){var t=document.querySelector(this.mountTo);if(t){var e=this.$props;if(y.targets[e.name])e.bail?console.warn("[portal-vue]: Target ".concat(e.name," is already mounted.\n        Aborting because 'bail: true' is set")):this.portalTarget=y.targets[e.name];else{var n=e.append;if(n){var r="string"===typeof n?n:"DIV",a=document.createElement(r);t.appendChild(a),t=a}var i=p(this.$props,A);i.slim=this.targetSlim,i.tag=this.targetTag,i.slotProps=this.targetSlotProps,i.name=this.to,this.portalTarget=new w({el:t,parent:this.$parent||this,propsData:i})}}else console.error("[portal-vue]: Mount Point '".concat(this.mountTo,"' not found in document"))}},beforeDestroy:function(){var t=this.portalTarget;if(this.append){var e=t.$el;e.parentNode.removeChild(e)}t.$destroy()},render:function(t){if(!this.portalTarget)return console.warn("[portal-vue] Target wasn't mounted"),t();if(!this.$scopedSlots.manual){var e=p(this.$props,M);return t(z,{props:e,attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}var n=this.$scopedSlots.manual({to:this.to});return Array.isArray(n)&&(n=n[0]),n||t()}});function C(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.portalName||"Portal",z),t.component(e.portalTargetName||"PortalTarget",w),t.component(e.MountingPortalName||"MountingPortal",V)}var I={install:C};e.default=I,e.Portal=z,e.PortalTarget=w,e.MountingPortal=V,e.Wormhole=y},"2cf4":function(t,e,n){var r,a,i,o,s=n("da84"),c=n("1626"),l=n("d039"),u=n("0366"),h=n("1be4"),d=n("cc12"),f=n("1cdc"),p=n("605d"),v=s.setImmediate,m=s.clearImmediate,b=s.process,g=s.MessageChannel,y=s.Dispatch,O=0,z={},w="onreadystatechange";try{r=s.location}catch(C){}var j=function(t){if(z.hasOwnProperty(t)){var e=z[t];delete z[t],e()}},M=function(t){return function(){j(t)}},A=function(t){j(t.data)},V=function(t){s.postMessage(String(t),r.protocol+"//"+r.host)};v&&m||(v=function(t){var e=[],n=arguments.length,r=1;while(n>r)e.push(arguments[r++]);return z[++O]=function(){(c(t)?t:Function(t)).apply(void 0,e)},a(O),O},m=function(t){delete z[t]},p?a=function(t){b.nextTick(M(t))}:y&&y.now?a=function(t){y.now(M(t))}:g&&!f?(i=new g,o=i.port2,i.port1.onmessage=A,a=u(o.postMessage,o,1)):s.addEventListener&&c(s.postMessage)&&!s.importScripts&&r&&"file:"!==r.protocol&&!l(V)?(a=V,s.addEventListener("message",A,!1)):a=w in d("script")?function(t){h.appendChild(d("script"))[w]=function(){h.removeChild(this),j(t)}}:function(t){setTimeout(M(t),0)}),t.exports={set:v,clear:m}},"2d00":function(t,e,n){var r,a,i=n("da84"),o=n("342f"),s=i.process,c=i.Deno,l=s&&s.versions||c&&c.version,u=l&&l.v8;u?(r=u.split("."),a=r[0]<4?1:r[0]+r[1]):o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(a=r[1]))),t.exports=a&&+a},"2d83":function(t,e,n){"use strict";var r=n("387f");t.exports=function(t,e,n,a,i){var o=new Error(t);return r(o,e,n,a,i)}},"2dd8":function(t,e,n){},"2e67":function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"2f79":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("b42e");var r="_uid"},"30b5":function(t,e,n){"use strict";var r=n("c532");function a(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var o=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),o.push(a(e)+"="+a(t))})))})),i=o.join("&")}if(i){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),a=n("dc4a"),i=n("3f8c"),o=n("b622"),s=o("iterator");t.exports=function(t){if(void 0!=t)return a(t,s)||a(t,"@@iterator")||i[r(t)]}},3790:function(t,e,n){"use strict";n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return w})),n.d(e,"c",(function(){return j}));var r=n("2b0e"),a=n("e863"),i=n("50d3"),o=n("c9a9"),s=n("a874"),c=n("7b1e"),l=n("d82f"),u=n("686b");function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),t}var p=function(){function t(){h(this,t),this.$_config={}}return f(t,[{key:"setConfig",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(Object(c["k"])(e)){var n=Object(l["f"])(e);n.forEach((function(n){var r=e[n];"breakpoints"===n?!Object(c["a"])(r)||r.length<2||r.some((function(t){return!Object(c["n"])(t)||0===t.length}))?Object(u["a"])('"breakpoints" must be an array of at least 2 breakpoint names',i["b"]):t.$_config[n]=Object(o["a"])(r):Object(c["k"])(r)&&(t.$_config[n]=Object(l["f"])(r).reduce((function(t,e){return Object(c["o"])(r[e])||(t[e]=Object(o["a"])(r[e])),t}),t.$_config[n]||{}))}))}}},{key:"resetConfig",value:function(){this.$_config={}}},{key:"getConfig",value:function(){return Object(o["a"])(this.$_config)}},{key:"getConfigValue",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return Object(o["a"])(Object(s["b"])(this.$_config,t,e))}}]),t}(),v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r["default"];e.prototype[i["c"]]=r["default"].prototype[i["c"]]=e.prototype[i["c"]]||r["default"].prototype[i["c"]]||new p,e.prototype[i["c"]].setConfig(t)};function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=function(){var t=!1,e=["Multiple instances of Vue detected!","You may need to set up an alias for Vue in your bundler config.","See: https://bootstrap-vue.org/docs#using-module-bundlers"].join("\n");return function(n){t||r["default"]===n||a["j"]||Object(u["a"])(e),t=!0}}(),O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.components,n=t.directives,r=t.plugins,a=function t(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.installed||(t.installed=!0,y(a),v(i,a),V(a,e),I(a,n),M(a,r))};return a.installed=!1,a},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.components,n=t.directives,r=t.plugins,a=function t(a){t.installed||(t.installed=!0,y(a),V(a,e),I(a,n),M(a,r))};return a.installed=!1,a},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return b(b({},e),{},{install:O(t)})},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return b(b({},e),{},{install:z(t)})},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in e)n&&e[n]&&t.use(e[n])},A=function(t,e,n){t&&e&&n&&t.component(e,n)},V=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in e)A(t,n,e[n])},C=function(t,e,n){t&&e&&n&&t.directive(e.replace(/^VB/,"B"),n)},I=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in e)C(t,n,e[n])}},"37e8":function(t,e,n){var r=n("83ab"),a=n("9bf2"),i=n("825a"),o=n("df75");t.exports=r?Object.defineProperties:function(t,e){i(t);var n,r=o(e),s=r.length,c=0;while(s>c)a.f(t,n=r[c++],e[n]);return t}},"387f":function(t,e,n){"use strict";t.exports=function(t,e,n,r,a){return t.config=e,n&&(t.code=n),t.request=r,t.response=a,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},3934:function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=a(window.location.href),function(e){var n=r.isString(e)?a(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},"3a58":function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:NaN,n=parseInt(t,10);return isNaN(n)?e:n},a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:NaN,n=parseFloat(t);return isNaN(n)?e:n},i=function(t,e){return a(t).toFixed(r(e,0))}},"3bbe":function(t,e,n){var r=n("1626");t.exports=function(t){if("object"===typeof t||r(t))return t;throw TypeError("Can't set "+String(t)+" as a prototype")}},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},"3f8c":function(t,e){t.exports={}},"44ad":function(t,e,n){var r=n("d039"),a=n("c6b6"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?i.call(t,""):Object(t)}:Object},"44d2":function(t,e,n){var r=n("b622"),a=n("7c73"),i=n("9bf2"),o=r("unscopables"),s=Array.prototype;void 0==s[o]&&i.f(s,o,{configurable:!0,value:a(null)}),t.exports=function(t){s[o][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),o=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},"467f":function(t,e,n){"use strict";var r=n("2d83");t.exports=function(t,e,n){var a=n.config.validateStatus;n.status&&a&&!a(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},4840:function(t,e,n){var r=n("825a"),a=n("5087"),i=n("b622"),o=i("species");t.exports=function(t,e){var n,i=r(t).constructor;return void 0===i||void 0==(n=r(i)[o])?e:a(n)}},"485a":function(t,e,n){var r=n("1626"),a=n("861d");t.exports=function(t,e){var n,i;if("string"===e&&r(n=t.toString)&&!a(i=n.call(t)))return i;if(r(n=t.valueOf)&&!a(i=n.call(t)))return i;if("string"!==e&&r(n=t.toString)&&!a(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),a=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!a((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4a0c":function(t){t.exports=JSON.parse('{"_args":[["axios@0.21.4","C:\\\\Users\\\\torre\\\\OneDrive\\\\Desktop\\\\IDS\\\\Fronted"]],"_from":"axios@0.21.4","_id":"axios@0.21.4","_inBundle":false,"_integrity":"sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==","_location":"/axios","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"axios@0.21.4","name":"axios","escapedName":"axios","rawSpec":"0.21.4","saveSpec":null,"fetchSpec":"0.21.4"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/axios/-/axios-0.21.4.tgz","_spec":"0.21.4","_where":"C:\\\\Users\\\\torre\\\\OneDrive\\\\Desktop\\\\IDS\\\\Fronted","author":{"name":"Matt Zabriskie"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"bugs":{"url":"https://github.com/axios/axios/issues"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}],"dependencies":{"follow-redirects":"^1.14.0"},"description":"Promise based HTTP client for the browser and node.js","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"homepage":"https://axios-http.com","jsdelivr":"dist/axios.min.js","keywords":["xhr","http","ajax","promise","node"],"license":"MIT","main":"index.js","name":"axios","repository":{"type":"git","url":"git+https://github.com/axios/axios.git"},"scripts":{"build":"NODE_ENV=production grunt build","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","examples":"node ./examples/server.js","fix":"eslint --fix lib/**/*.js","postversion":"git push && git push --tags","preversion":"npm test","start":"node ./sandbox/server.js","test":"grunt test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},"typings":"./index.d.ts","unpkg":"dist/axios.min.js","version":"0.21.4"}')},"4a7b":function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){e=e||{};var n={},a=["url","method","data"],i=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function l(a){r.isUndefined(e[a])?r.isUndefined(t[a])||(n[a]=c(void 0,t[a])):n[a]=c(t[a],e[a])}r.forEach(a,(function(t){r.isUndefined(e[t])||(n[t]=c(void 0,e[t]))})),r.forEach(i,l),r.forEach(o,(function(a){r.isUndefined(e[a])?r.isUndefined(t[a])||(n[a]=c(void 0,t[a])):n[a]=c(void 0,e[a])})),r.forEach(s,(function(r){r in e?n[r]=c(t[r],e[r]):r in t&&(n[r]=c(void 0,t[r]))}));var u=a.concat(i).concat(o).concat(s),h=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===u.indexOf(t)}));return r.forEach(h,l),n}},"4d64":function(t,e,n){var r=n("fc6a"),a=n("50c4"),i=n("23cb"),o=function(t){return function(e,n,o){var s,c=r(e),l=a(c.length),u=i(o,l);if(t&&n!=n){while(l>u)if(s=c[u++],s!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},"4fc1":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var a;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(a||(a={}));const i={debug:a.DEBUG,verbose:a.VERBOSE,info:a.INFO,warn:a.WARN,error:a.ERROR,silent:a.SILENT},o=a.INFO,s={[a.DEBUG]:"log",[a.VERBOSE]:"log",[a.INFO]:"info",[a.WARN]:"warn",[a.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),a=s[e];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[a](`[${r}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in a))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,a.DEBUG,...t),this._logHandler(this,a.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,a.VERBOSE,...t),this._logHandler(this,a.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,a.INFO,...t),this._logHandler(this,a.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,a.WARN,...t),this._logHandler(this,a.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,a.ERROR,...t),this._logHandler(this,a.ERROR,...t)}}function u(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=i[e.level]),n.userLogHandler=null===t?null:(e,n,...i)=>{const o=i.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:a[n].toLowerCase(),message:o,args:i,type:e.name})}}}},5087:function(t,e,n){var r=n("68ee"),a=n("0d51");t.exports=function(t){if(r(t))return t;throw TypeError(a(t)+" is not a constructor")}},"50c4":function(t,e,n){var r=n("a691"),a=Math.min;t.exports=function(t){return t>0?a(r(t),9007199254740991):0}},"50d3":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r="BvConfig",a="$bvConfig",i=["xs","sm","md","lg","xl"]},5135:function(t,e,n){var r=n("7b0b"),a={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return a.call(r(t),e)}},5270:function(t,e,n){"use strict";var r=n("c532"),a=n("c401"),i=n("2e67"),o=n("2444");function s(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){s(t),t.headers=t.headers||{},t.data=a.call(t,t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||o.adapter;return e(t).then((function(e){return s(t),e.data=a.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(s(t),e&&e.response&&(e.response.data=a.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},5606:function(t,e,n){"use strict";n.d(e,"a",(function(){return W})),n.d(e,"b",(function(){return N})),n.d(e,"c",(function(){return R})),n.d(e,"d",(function(){return $})),n.d(e,"e",(function(){return X})),n.d(e,"f",(function(){return K})),n.d(e,"g",(function(){return Y}));var r=n("ffa6"),a=n("4fc1"),i=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(s(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function s(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",l="0.7.4",u=new a["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",v="@firebase/app-check",m="@firebase/auth",b="@firebase/auth-compat",g="@firebase/database",y="@firebase/database-compat",O="@firebase/functions",z="@firebase/functions-compat",w="@firebase/installations",j="@firebase/installations-compat",M="@firebase/messaging",A="@firebase/messaging-compat",V="@firebase/performance",C="@firebase/performance-compat",I="@firebase/remote-config",S="@firebase/remote-config-compat",k="@firebase/storage",T="@firebase/storage-compat",H="@firebase/firestore",L="@firebase/firestore-compat",B="firebase",P="9.1.3",E="[DEFAULT]",x={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[v]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[b]:"fire-auth-compat",[g]:"fire-rtdb",[y]:"fire-rtdb-compat",[O]:"fire-fn",[z]:"fire-fn-compat",[w]:"fire-iid",[j]:"fire-iid-compat",[M]:"fire-fcm",[A]:"fire-fcm-compat",[V]:"fire-perf",[C]:"fire-perf-compat",[I]:"fire-rc",[S]:"fire-rc-compat",[k]:"fire-gcs",[T]:"fire-gcs-compat",[H]:"fire-fst",[L]:"fire-fst-compat","fire-js":"fire-js",[B]:"fire-js-all"},_=new Map,F=new Map;function D(t,e){try{t.container.addComponent(e)}catch(n){u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function R(t){const e=t.name;if(F.has(e))return u.debug(`There were multiple attempts to register component ${e}.`),!1;F.set(e,t);for(const n of _.values())D(n,t);return!0}function N(t,e){return t.container.getProvider(e)}function $(t,e,n=E){N(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},q=new i["b"]("app","Firebase",U);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw q.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=P;function K(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:E,automaticDataCollectionEnabled:!1},e),a=n.name;if("string"!==typeof a||!a)throw q.create("bad-app-name",{appName:String(a)});const o=_.get(a);if(o){if(Object(i["g"])(t,o.options)&&Object(i["g"])(n,o.config))return o;throw q.create("duplicate-app",{appName:a})}const s=new r["b"](a);for(const r of F.values())s.addComponent(r);const c=new G(t,n,s);return _.set(a,c),c}function X(t=E){const e=_.get(t);if(!e)throw q.create("no-app",{appName:t});return e}function Y(t,e,n){var a;let i=null!==(a=x[t])&&void 0!==a?a:t;n&&(i+="-"+n);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void u.warn(t.join(" "))}R(new r["a"](i+"-version",()=>({library:i,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(t){R(new r["a"]("platform-logger",t=>new o(t),"PRIVATE")),Y(c,l,t),Y(c,l,"esm2017"),Y("fire-js","")}J("")},5692:function(t,e,n){var r=n("c430"),a=n("c6cd");(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.18.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),a=n("241c"),i=n("7418"),o=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=a.f(o(t)),n=i.f;return n?e.concat(n(t)):e}},"577e":function(t,e,n){var r=n("f5df");t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},"588e":function(t,e,n){"use strict";n.d(e,"a",(function(){return Qt})),n.d(e,"b",(function(){return te})),n.d(e,"c",(function(){return Zt})),n.d(e,"d",(function(){return Jt}));var r,a=n("5606"),i=n("1fd5"),o=n("ffa6");(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(r||(r={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s="firebasestorage.googleapis.com",c="storageBucket",l=12e4,u=6e5;class h extends i["c"]{constructor(t,e){super(d(t),`Firebase Storage: ${e} (${d(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(t){return d(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(t){return"storage/"+t}function f(){const t="An unknown error occurred, please check the error payload for server response.";return new h("unknown",t)}function p(t){return new h("object-not-found","Object '"+t+"' does not exist.")}function v(t){return new h("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h("unauthenticated",t)}function b(){return new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function g(t){return new h("unauthorized","User does not have permission to access '"+t+"'.")}function y(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function O(){return new h("canceled","User canceled the upload/download.")}function z(t){return new h("invalid-url","Invalid URL '"+t+"'.")}function w(t){return new h("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function j(){return new h("no-default-bucket","No default bucket found. Did you set the '"+c+"' property when initializing the app?")}function M(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function A(){return new h("no-download-url","The given file does not have any download URLs.")}function V(t){return new h("invalid-argument",t)}function C(){return new h("app-deleted","The Firebase app was deleted.")}function I(t){return new h("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function S(t,e){return new h("invalid-format","String does not match format '"+t+"': "+e)}function k(t){throw new h("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=r.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=r.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=r.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,r){if(this.sent_)throw k("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const a in r)r.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,r[a].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw k("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw k("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponseText(){if(!this.sent_)throw k("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}function H(){return new T}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{createConnection(){return H()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=B.makeFromUrl(t,e)}catch(r){return new B(t,"")}if(""===n.path)return n;throw w(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function a(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const i="(/(.*))?$",o=new RegExp("^gs://"+r+i,"i"),c={bucket:1,path:3};function l(t){t.path_=decodeURIComponent(t.path)}const u="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},v=e===s?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",b=new RegExp(`^https?://${v}/${r}/${m}`,"i"),g={bucket:1,path:2},y=[{regex:o,indices:c,postModify:a},{regex:f,indices:p,postModify:l},{regex:b,indices:g,postModify:l}];for(let s=0;s<y.length;s++){const e=y[s],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let a=r[e.indices.path];a||(a=""),n=new B(t,a),e.postModify(n);break}}if(null==n)throw z(t);return n}}class P{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e,n){let r=1,a=null,i=!1,o=0;function s(){return 2===o}let c=!1;function l(...t){c||(c=!0,e.apply(null,t))}function u(e){a=setTimeout(()=>{a=null,t(h,s())},e)}function h(t,...e){if(c)return;if(t)return void l.call(null,t,...e);const n=s()||i;if(n)return void l.call(null,t,...e);let a;r<64&&(r*=2),1===o?(o=2,a=0):a=1e3*(r+Math.random()),u(a)}let d=!1;function f(t){d||(d=!0,c||(null!==a?(t||(o=2),clearTimeout(a),u(0)):t||(o=1)))}return u(0),setTimeout(()=>{i=!0,f(!0)},n),f}function x(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t){return void 0!==t}function F(t){return"object"===typeof t&&!Array.isArray(t)}function D(t){return"string"===typeof t||t instanceof String}function R(t){return N()&&t instanceof Blob}function N(){return"undefined"!==typeof Blob}function $(t,e,n,r){if(r<e)throw V(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw V(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t,e,n){let r=e;return null==n&&(r="https://"+e),`${n}://${r}/v0${t}`}function q(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const a=e(r)+"="+e(t[r]);n=n+a+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,e,n,r,a,i,o,s,c,l,u){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=a,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=s,this.timeout_=c,this.progressCallback_=l,this.pool_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){const t=(t,e)=>{if(e)return void t(!1,new W(!1,null,!0));const n=this.pool_.createConnection();this.pendingConnection_=n;const a=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(a),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(a),this.pendingConnection_=null;const e=n.getErrorCode()===r.NO_ERROR,i=n.getStatus();if(!e||this.isRetryStatusCode_(i)){const e=n.getErrorCode()===r.ABORT;return void t(!1,new W(!1,null,e))}const o=-1!==this.successCodes_.indexOf(i);t(!0,new W(o,n))})},e=(t,e)=>{const n=this.resolve_,r=this.reject_,a=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(a,a.getResponseText());_(t)?n(t):n()}catch(i){r(i)}else if(null!==a){const t=f();t.serverResponse=a.getResponseText(),this.errorCallback_?r(this.errorCallback_(a,t)):r(t)}else if(e.canceled){const t=this.appDelete_?C():O();r(t)}else{const t=y();r(t)}};this.canceled_?e(!1,new W(!1,null,!0)):this.backoffId_=E(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&x(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],r=-1!==n.indexOf(t),a=-1!==this.additionalRetryCodes_.indexOf(t);return e||r||a}}class W{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function K(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function X(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function Y(t,e){e&&(t["X-Firebase-GMPID"]=e)}function J(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function Q(t,e,n,r,a,i){const o=q(t.urlParams),s=t.url+o,c=Object.assign({},t.headers);return Y(c,e),K(c,n),X(c,i),J(c,r),new G(s,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,a)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function tt(...t){const e=Z();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(N())return new Blob(t);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}function et(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class at{constructor(t,e){this.data=t,this.contentType=e||null}}function it(t,e){switch(t){case rt.RAW:return new at(ot(e));case rt.BASE64:case rt.BASE64URL:return new at(ct(t,e));case rt.DATA_URL:return new at(ut(e),ht(e))}throw f()}function ot(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const a=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(a){const a=r,i=t.charCodeAt(++n);r=65536|(1023&a)<<10|1023&i,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function st(t){let e;try{e=decodeURIComponent(t)}catch(n){throw S(rt.DATA_URL,"Malformed data URL.")}return ot(e)}function ct(t,e){switch(t){case rt.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw S(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case rt.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw S(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nt(e)}catch(a){throw S(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class lt{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw S(rt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=dt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function ut(t){const e=new lt(t);return e.base64?ct(rt.BASE64,e.rest):st(e.rest)}function ht(t){const e=new lt(t);return e.contentType}function dt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t,e){let n=0,r="";R(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(R(this.data_)){const n=this.data_,r=et(n,t,e);return null===r?null:new ft(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new ft(n,!0)}}static getBlob(...t){if(N()){const e=t.map(t=>t instanceof ft?t.data_:t);return new ft(tt.apply(null,e))}{const e=t.map(t=>D(t)?it(rt.RAW,t).data:t.data_);let n=0;e.forEach(t=>{n+=t.byteLength});const r=new Uint8Array(n);let a=0;return e.forEach(t=>{for(let e=0;e<t.length;e++)r[a++]=t[e]}),new ft(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return F(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function mt(t,e){const n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}function bt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,e){return e}class yt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||gt}}let Ot=null;function zt(t){return!D(t)||t.length<2?t:bt(t)}function wt(){if(Ot)return Ot;const t=[];function e(t,e){return zt(e)}t.push(new yt("bucket")),t.push(new yt("generation")),t.push(new yt("metageneration")),t.push(new yt("name","fullPath",!0));const n=new yt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const a=new yt("size");return a.xform=r,t.push(a),t.push(new yt("timeCreated")),t.push(new yt("updated")),t.push(new yt("md5Hash",null,!0)),t.push(new yt("cacheControl",null,!0)),t.push(new yt("contentDisposition",null,!0)),t.push(new yt("contentEncoding",null,!0)),t.push(new yt("contentLanguage",null,!0)),t.push(new yt("contentType",null,!0)),t.push(new yt("metadata","customMetadata",!0)),Ot=t,Ot}function jt(t,e){function n(){const n=t["bucket"],r=t["fullPath"],a=new B(n,r);return e._makeStorageReference(a)}Object.defineProperty(t,"ref",{get:n})}function Mt(t,e,n){const r={type:"file"},a=n.length;for(let i=0;i<a;i++){const t=n[i];r[t.local]=t.xform(r,e[t.server])}return jt(r,t),r}function At(t,e,n){const r=pt(e);if(null===r)return null;const a=r;return Mt(t,a,n)}function Vt(t,e,n,r){const a=pt(e);if(null===a)return null;if(!D(a["downloadTokens"]))return null;const i=a["downloadTokens"];if(0===i.length)return null;const o=encodeURIComponent,s=i.split(","),c=s.map(e=>{const a=t["bucket"],i=t["fullPath"],s="/b/"+o(a)+"/o/"+o(i),c=U(s,n,r),l=q({alt:"media",token:e});return c+l});return c[0]}function Ct(t,e){const n={},r=e.length;for(let a=0;a<r;a++){const r=e[a];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t){if(!t)throw f()}function kt(t,e){function n(n,r){const a=At(t,r,e);return St(null!==a),a}return n}function Tt(t,e){function n(n,r){const a=At(t,r,e);return St(null!==a),Vt(a,r,t.host,t._protocol)}return n}function Ht(t){function e(e,n){let r;return r=401===e.getStatus()?e.getResponseText().includes("Firebase App Check token is invalid")?b():m():402===e.getStatus()?v(t.bucket):403===e.getStatus()?g(t.path):n,r.serverResponse=n.serverResponse,r}return e}function Lt(t){const e=Ht(t);function n(n,r){let a=e(n,r);return 404===n.getStatus()&&(a=p(t.path)),a.serverResponse=r.serverResponse,a}return n}function Bt(t,e,n){const r=e.fullServerUrl(),a=U(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,s=new It(a,i,Tt(t,n),o);return s.errorHandler=Lt(e),s}function Pt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Et(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=Pt(null,e)),r}function xt(t,e,n,r,a){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function s(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=s();o["Content-Type"]="multipart/related; boundary="+c;const l=Et(e,r,a),u=Ct(l,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+c+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=ft.getBlob(h,r,d);if(null===f)throw M();const p={name:l["fullPath"]},v=U(i,t.host,t._protocol),m="POST",b=t.maxUploadRetryTime,g=new It(v,m,kt(t,n),b);return g.urlParams=p,g.headers=o,g.body=f.uploadData(),g.errorHandler=Ht(e),g}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t{constructor(t,e){this._service=t,this._location=e instanceof B?e:B.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new _t(t,e)}get root(){const t=new B(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bt(this._location.path)}get storage(){return this._service}get parent(){const t=vt(this._location.path);if(null===t)return null;const e=new B(this._location.bucket,t);return new _t(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw I(t)}}function Ft(t,e,n){t._throwIfRoot("uploadBytes");const r=xt(t.storage,t._location,wt(),new ft(e,!0),n);return t.storage.makeRequestWithTokens(r).then(t=>t.getPromise()).then(e=>({metadata:e,ref:t}))}async function Dt(t){t._throwIfRoot("getDownloadURL");const e=Bt(t.storage,t._location,wt());return(await t.storage.makeRequestWithTokens(e)).getPromise().then(t=>{if(null===t)throw A();return t})}function Rt(t,e){const n=mt(t._location.path,e),r=new B(t._location.bucket,n);return new _t(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t){return/^[A-Za-z]+:\/\//.test(t)}function $t(t,e){return new _t(t,e)}function Ut(t,e){if(t instanceof Wt){const n=t;if(null==n._bucket)throw j();const r=new _t(n,n._bucket);return null!=e?Ut(r,e):r}return void 0!==e?Rt(t,e):t}function qt(t,e){if(e&&Nt(e)){if(t instanceof Wt)return $t(t,e);throw V("To use ref(service, url), the first argument must be a Storage instance.")}return Ut(t,e)}function Gt(t,e){const n=null===e||void 0===e?void 0:e[c];return null==n?null:B.makeFromBucketSpec(n,t)}class Wt{constructor(t,e,n,r,a,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._pool=r,this._url=a,this._firebaseVersion=i,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=a?B.makeFromBucketSpec(a,this._host):Gt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=B.makeFromBucketSpec(this._url,t):this._bucket=Gt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new _t(this,t)}_makeRequest(t,e,n){if(this._deleted)return new P(C());{const r=Q(t,this._appId,e,n,this._pool,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(t){const[e,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n)}}const Kt="@firebase/storage",Xt="0.8.4",Yt="storage";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*!
 * BootstrapVue Icons, generated from Bootstrap Icons 1.2.2
 *
 * @link https://icons.getbootstrap.com/
 * @license MIT
 * https://github.com/twbs/icons/blob/master/LICENSE.md
 */},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var r=n("cc12"),a=r("span").classList,i=a&&a.constructor&&a.constructor.prototype;t.exports=i===Object.prototype?void 0:i},"7a77":function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},"7aac":function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,a,i,o){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(a)&&s.push("path="+a),r.isString(i)&&s.push("domain="+i),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7b1e":function(t,e,n){"use strict";n.d(e,"o",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"p",(function(){return u})),n.d(e,"f",(function(){return h})),n.d(e,"b",(function(){return d})),n.d(e,"n",(function(){return f})),n.d(e,"h",(function(){return p})),n.d(e,"i",(function(){return v})),n.d(e,"a",(function(){return m})),n.d(e,"j",(function(){return b})),n.d(e,"k",(function(){return g})),n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return O})),n.d(e,"e",(function(){return z})),n.d(e,"m",(function(){return w})),n.d(e,"l",(function(){return j}));var r=n("992e"),a=n("ca88");function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}var o=function(t){return i(t)},s=function(t){return Object.prototype.toString.call(t).slice(8,-1)},c=function(t){return void 0===t},l=function(t){return null===t},u=function(t){return c(t)||l(t)},h=function(t){return"function"===o(t)},d=function(t){return"boolean"===o(t)},f=function(t){return"string"===o(t)},p=function(t){return"number"===o(t)},v=function(t){return r["s"].test(String(t))},m=function(t){return Array.isArray(t)},b=function(t){return null!==t&&"object"===i(t)},g=function(t){return"[object Object]"===Object.prototype.toString.call(t)},y=function(t){return t instanceof Date},O=function(t){return t instanceof Event},z=function(t){return t instanceof a["b"]},w=function(t){return"RegExp"===s(t)},j=function(t){return!u(t)&&h(t.then)&&h(t.catch)}},"7c73":function(t,e,n){var r,a=n("825a"),i=n("37e8"),o=n("7839"),s=n("d012"),c=n("1be4"),l=n("cc12"),u=n("f772"),h=">",d="<",f="prototype",p="script",v=u("IE_PROTO"),m=function(){},b=function(t){return d+p+h+t+d+"/"+p+h},g=function(t){t.write(b("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){var t,e=l("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(b("document.F=Object")),t.close(),t.F},O=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}O="undefined"!=typeof document?document.domain&&r?g(r):y():g(r);var t=o.length;while(t--)delete O[f][o[t]];return O()};s[v]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[f]=a(t),n=new m,m[f]=null,n[v]=t):n=O(),void 0===e?n:i(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),a=n("c430"),i=n("5e77"),o=n("1626"),s=n("9ed3"),c=n("e163"),l=n("d2bb"),u=n("d44e"),h=n("9112"),d=n("6eeb"),f=n("b622"),p=n("3f8c"),v=n("ae93"),m=i.PROPER,b=i.CONFIGURABLE,g=v.IteratorPrototype,y=v.BUGGY_SAFARI_ITERATORS,O=f("iterator"),z="keys",w="values",j="entries",M=function(){return this};t.exports=function(t,e,n,i,f,v,A){s(n,e,i);var V,C,I,S=function(t){if(t===f&&B)return B;if(!y&&t in H)return H[t];switch(t){case z:return function(){return new n(this,t)};case w:return function(){return new n(this,t)};case j:return function(){return new n(this,t)}}return function(){return new n(this)}},k=e+" Iterator",T=!1,H=t.prototype,L=H[O]||H["@@iterator"]||f&&H[f],B=!y&&L||S(f),P="Array"==e&&H.entries||L;if(P&&(V=c(P.call(new t)),V!==Object.prototype&&V.next&&(a||c(V)===g||(l?l(V,g):o(V[O])||d(V,O,M)),u(V,k,!0,!0),a&&(p[k]=M))),m&&f==w&&L&&L.name!==w&&(!a&&b?h(H,"name",w):(T=!0,B=function(){return L.call(this)})),f)if(C={values:S(w),keys:v?B:S(z),entries:S(j)},A)for(I in C)(y||T||!(I in H))&&d(H,I,C[I]);else r({target:e,proto:!0,forced:y||T},C);return a&&!A||H[O]===B||d(H,O,B,{name:f}),p[e]=B,C}},"7f9a":function(t,e,n){var r=n("da84"),a=n("1626"),i=n("8925"),o=r.WeakMap;t.exports=a(o)&&/native code/.test(i(o))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(r(t))return t;throw TypeError(String(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"83b9":function(t,e,n){"use strict";var r=n("d925"),a=n("e683");t.exports=function(t,e){return t&&!r(e)?a(t,e):e}},8418:function(t,e,n){"use strict";var r=n("a04b"),a=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?a.f(t,o,i(0,n)):t[o]=n}},"848b":function(t,e,n){"use strict";var r=n("4a0c"),a={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){a[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var i={},o=r.version.split(".");function s(t,e){for(var n=e?e.split("."):o,r=t.split("."),a=0;a<3;a++){if(n[a]>r[a])return!0;if(n[a]<r[a])return!1}return!1}function c(t,e,n){if("object"!==typeof t)throw new TypeError("options must be an object");var r=Object.keys(t),a=r.length;while(a-- >0){var i=r[a],o=e[i];if(o){var s=t[i],c=void 0===s||o(s,i,t);if(!0!==c)throw new TypeError("option "+i+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+i)}}a.transitional=function(t,e,n){var a=e&&s(e);function o(t,e){return"[Axios v"+r.version+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return function(n,r,s){if(!1===t)throw new Error(o(r," has been removed in "+e));return a&&!i[r]&&(i[r]=!0,console.warn(o(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,s)}},t.exports={isOlderVersion:s,assertOptions:c,validators:a}},"861d":function(t,e,n){var r=n("1626");t.exports=function(t){return"object"===typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("1626"),a=n("c6cd"),i=Function.toString;r(a.inspectSource)||(a.inspectSource=function(t){return i.call(t)}),t.exports=a.inspectSource},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8c4f":function(t,e,n){"use strict";
/*!
  * vue-router v3.5.2
  * (c) 2021 Evan You
  * @license MIT
  */function r(t,e){0}function a(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,o=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,c=function(t){return encodeURIComponent(t).replace(i,o).replace(s,",")};function l(t){try{return decodeURIComponent(t)}catch(e){0}return t}function u(t,e,n){void 0===e&&(e={});var r,a=n||d;try{r=a(t||"")}catch(s){r={}}for(var i in e){var o=e[i];r[i]=Array.isArray(o)?o.map(h):h(o)}return r}var h=function(t){return null==t||"object"===typeof t?t:String(t)};function d(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=l(n.shift()),a=n.length>0?l(n.join("=")):null;void 0===e[r]?e[r]=a:Array.isArray(e[r])?e[r].push(a):e[r]=[e[r],a]})),e):e}function f(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return c(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(c(e)):r.push(c(e)+"="+c(t)))})),r.join("&")}return c(e)+"="+c(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var p=/\/?$/;function v(t,e,n,r){var a=r&&r.options.stringifyQuery,i=e.query||{};try{i=m(i)}catch(s){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:y(e,a),matched:t?g(t):[]};return n&&(o.redirectedFrom=y(n,a)),Object.freeze(o)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=m(t[n]);return e}return t}var b=v(null,{path:"/"});function g(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var a=t.hash;void 0===a&&(a="");var i=e||f;return(n||"/")+i(r)+a}function O(t,e,n){return e===b?t===e:!!e&&(t.path&&e.path?t.path.replace(p,"")===e.path.replace(p,"")&&(n||t.hash===e.hash&&z(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&z(t.query,e.query)&&z(t.params,e.params))))}function z(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,a){var i=t[n],o=r[a];if(o!==n)return!1;var s=e[n];return null==i||null==s?i===s:"object"===typeof i&&"object"===typeof s?z(i,s):String(i)===String(s)}))}function w(t,e){return 0===t.path.replace(p,"/").indexOf(e.path.replace(p,"/"))&&(!e.hash||t.hash===e.hash)&&j(t.query,e.query)}function j(t,e){for(var n in e)if(!(n in t))return!1;return!0}function M(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var a=n.instances[r],i=n.enteredCbs[r];if(a&&i){delete n.enteredCbs[r];for(var o=0;o<i.length;o++)a._isBeingDestroyed||i[o](a)}}}}var A={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,i=e.parent,o=e.data;o.routerView=!0;var s=i.$createElement,c=n.name,l=i.$route,u=i._routerViewCache||(i._routerViewCache={}),h=0,d=!1;while(i&&i._routerRoot!==i){var f=i.$vnode?i.$vnode.data:{};f.routerView&&h++,f.keepAlive&&i._directInactive&&i._inactive&&(d=!0),i=i.$parent}if(o.routerViewDepth=h,d){var p=u[c],v=p&&p.component;return v?(p.configProps&&V(v,o,p.route,p.configProps),s(v,o,r)):s()}var m=l.matched[h],b=m&&m.components[c];if(!m||!b)return u[c]=null,s();u[c]={component:b},o.registerRouteInstance=function(t,e){var n=m.instances[c];(e&&n!==t||!e&&n===t)&&(m.instances[c]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance),M(l)};var g=m.props&&m.props[c];return g&&(a(u[c],{route:l,configProps:g}),V(b,o,l,g)),s(b,o,r)}};function V(t,e,n,r){var i=e.props=C(n,r);if(i){i=e.props=a({},i);var o=e.attrs=e.attrs||{};for(var s in i)t.props&&s in t.props||(o[s]=i[s],delete i[s])}}function C(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function I(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var a=e.split("/");n&&a[a.length-1]||a.pop();for(var i=t.replace(/^\//,"").split("/"),o=0;o<i.length;o++){var s=i[o];".."===s?a.pop():"."!==s&&a.push(s)}return""!==a[0]&&a.unshift(""),a.join("/")}function S(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var a=t.indexOf("?");return a>=0&&(n=t.slice(a+1),t=t.slice(0,a)),{path:t,query:n,hash:e}}function k(t){return t.replace(/\/\//g,"/")}var T=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},H=J,L=_,B=F,P=N,E=Y,x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function _(t,e){var n,r=[],a=0,i=0,o="",s=e&&e.delimiter||"/";while(null!=(n=x.exec(t))){var c=n[0],l=n[1],u=n.index;if(o+=t.slice(i,u),i=u+c.length,l)o+=l[1];else{var h=t[i],d=n[2],f=n[3],p=n[4],v=n[5],m=n[6],b=n[7];o&&(r.push(o),o="");var g=null!=d&&null!=h&&h!==d,y="+"===m||"*"===m,O="?"===m||"*"===m,z=n[2]||s,w=p||v;r.push({name:f||a++,prefix:d||"",delimiter:z,optional:O,repeat:y,partial:g,asterisk:!!b,pattern:w?U(w):b?".*":"[^"+$(z)+"]+?"})}}return i<t.length&&(o+=t.substr(i)),o&&r.push(o),r}function F(t,e){return N(_(t,e),e)}function D(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function R(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function N(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",G(e)));return function(e,r){for(var a="",i=e||{},o=r||{},s=o.pretty?D:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!==typeof l){var u,h=i[l.name];if(null==h){if(l.optional){l.partial&&(a+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(T(h)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(u=s(h[d]),!n[c].test(u))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(u)+"`");a+=(0===d?l.prefix:l.delimiter)+u}}else{if(u=l.asterisk?R(h):s(h),!n[c].test(u))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+u+'"');a+=l.prefix+u}}else a+=l}return a}}function $(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function U(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function q(t,e){return t.keys=e,t}function G(t){return t&&t.sensitive?"":"i"}function W(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return q(t,e)}function K(t,e,n){for(var r=[],a=0;a<t.length;a++)r.push(J(t[a],e,n).source);var i=new RegExp("(?:"+r.join("|")+")",G(n));return q(i,e)}function X(t,e,n){return Y(_(t,n),e,n)}function Y(t,e,n){T(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,a=!1!==n.end,i="",o=0;o<t.length;o++){var s=t[o];if("string"===typeof s)i+=$(s);else{var c=$(s.prefix),l="(?:"+s.pattern+")";e.push(s),s.repeat&&(l+="(?:"+c+l+")*"),l=s.optional?s.partial?c+"("+l+")?":"(?:"+c+"("+l+"))?":c+"("+l+")",i+=l}}var u=$(n.delimiter||"/"),h=i.slice(-u.length)===u;return r||(i=(h?i.slice(0,-u.length):i)+"(?:"+u+"(?=$))?"),i+=a?"$":r&&h?"":"(?="+u+"|$)",q(new RegExp("^"+i,G(n)),e)}function J(t,e,n){return T(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?W(t,e):T(t)?K(t,e,n):X(t,e,n)}H.parse=L,H.compile=B,H.tokensToFunction=P,H.tokensToRegExp=E;var Q=Object.create(null);function Z(t,e,n){e=e||{};try{var r=Q[t]||(Q[t]=H.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(a){return""}finally{delete e[0]}}function tt(t,e,n,r){var i="string"===typeof t?{path:t}:t;if(i._normalized)return i;if(i.name){i=a({},t);var o=i.params;return o&&"object"===typeof o&&(i.params=a({},o)),i}if(!i.path&&i.params&&e){i=a({},i),i._normalized=!0;var s=a(a({},e.params),i.params);if(e.name)i.name=e.name,i.params=s;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;i.path=Z(c,s,"path "+e.path)}else 0;return i}var l=S(i.path||""),h=e&&e.path||"/",d=l.path?I(l.path,h,n||i.append):h,f=u(l.query,i.query,r&&r.options.parseQuery),p=i.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var et,nt=[String,Object],rt=[String,Array],at=function(){},it={name:"RouterLink",props:{to:{type:nt,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:rt,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,i=n.resolve(this.to,r,this.append),o=i.location,s=i.route,c=i.href,l={},u=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==u?"router-link-active":u,f=null==h?"router-link-exact-active":h,p=null==this.activeClass?d:this.activeClass,m=null==this.exactActiveClass?f:this.exactActiveClass,b=s.redirectedFrom?v(null,tt(s.redirectedFrom),null,n):s;l[m]=O(r,b,this.exactPath),l[p]=this.exact||this.exactPath?l[m]:w(r,b);var g=l[m]?this.ariaCurrentValue:null,y=function(t){ot(t)&&(e.replace?n.replace(o,at):n.push(o,at))},z={click:ot};Array.isArray(this.event)?this.event.forEach((function(t){z[t]=y})):z[this.event]=y;var j={class:l},M=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:s,navigate:y,isActive:l[p],isExactActive:l[m]});if(M){if(1===M.length)return M[0];if(M.length>1||!M.length)return 0===M.length?t():t("span",{},M)}if("a"===this.tag)j.on=z,j.attrs={href:c,"aria-current":g};else{var A=st(this.$slots.default);if(A){A.isStatic=!1;var V=A.data=a({},A.data);for(var C in V.on=V.on||{},V.on){var I=V.on[C];C in z&&(V.on[C]=Array.isArray(I)?I:[I])}for(var S in z)S in V.on?V.on[S].push(z[S]):V.on[S]=y;var k=A.data.attrs=a({},A.data.attrs);k.href=c,k["aria-current"]=g}else j.on=z}return t(this.tag,j,this.$slots.default)}};function ot(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function st(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=st(e.children)))return e}}function ct(t){if(!ct.installed||et!==t){ct.installed=!0,et=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",A),t.component("RouterLink",it);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var lt="undefined"!==typeof window;function ut(t,e,n,r,a){var i=e||[],o=n||Object.create(null),s=r||Object.create(null);t.forEach((function(t){ht(i,o,s,t,a)}));for(var c=0,l=i.length;c<l;c++)"*"===i[c]&&(i.push(i.splice(c,1)[0]),l--,c--);return{pathList:i,pathMap:o,nameMap:s}}function ht(t,e,n,r,a,i){var o=r.path,s=r.name;var c=r.pathToRegexpOptions||{},l=ft(o,a,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var u={path:l,regex:dt(l,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:s,parent:a,matchAs:i,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var a=i?k(i+"/"+r.path):void 0;ht(t,e,n,r,u,a)})),e[u.path]||(t.push(u.path),e[u.path]=u),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};ht(t,e,n,p,a,u.path||"/")}s&&(n[s]||(n[s]=u))}function dt(t,e){var n=H(t,[],e);return n}function ft(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:k(e.path+"/"+t)}function pt(t,e){var n=ut(t),r=n.pathList,a=n.pathMap,i=n.nameMap;function o(t){ut(t,r,a,i)}function s(t,e){var n="object"!==typeof t?i[t]:void 0;ut([e||t],r,a,i,n),n&&n.alias.length&&ut(n.alias.map((function(t){return{path:t,children:[e]}})),r,a,i,n)}function c(){return r.map((function(t){return a[t]}))}function l(t,n,o){var s=tt(t,n,!1,e),c=s.name;if(c){var l=i[c];if(!l)return d(null,s);var u=l.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof s.params&&(s.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in s.params)&&u.indexOf(h)>-1&&(s.params[h]=n.params[h]);return s.path=Z(l.path,s.params,'named route "'+c+'"'),d(l,s,o)}if(s.path){s.params={};for(var f=0;f<r.length;f++){var p=r[f],v=a[p];if(vt(v.regex,s.path,s.params))return d(v,s,o)}}return d(null,s)}function u(t,n){var r=t.redirect,a="function"===typeof r?r(v(t,n,null,e)):r;if("string"===typeof a&&(a={path:a}),!a||"object"!==typeof a)return d(null,n);var o=a,s=o.name,c=o.path,u=n.query,h=n.hash,f=n.params;if(u=o.hasOwnProperty("query")?o.query:u,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,s){i[s];return l({_normalized:!0,name:s,query:u,hash:h,params:f},void 0,n)}if(c){var p=mt(c,t),m=Z(p,f,'redirect route with path "'+p+'"');return l({_normalized:!0,path:m,query:u,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var r=Z(n,e.params,'aliased route with path "'+n+'"'),a=l({_normalized:!0,path:r});if(a){var i=a.matched,o=i[i.length-1];return e.params=a.params,d(o,e)}return d(null,e)}function d(t,n,r){return t&&t.redirect?u(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):v(t,n,r,e)}return{match:l,addRoute:s,getRoutes:c,addRoutes:o}}function vt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var a=1,i=r.length;a<i;++a){var o=t.keys[a-1];o&&(n[o.name||"pathMatch"]="string"===typeof r[a]?l(r[a]):r[a])}return!0}function mt(t,e){return I(t,e.parent?e.parent.path:"/",!0)}var bt=lt&&window.performance&&window.performance.now?window.performance:Date;function gt(){return bt.now().toFixed(3)}var yt=gt();function Ot(){return yt}function zt(t){return yt=t}var wt=Object.create(null);function jt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=a({},window.history.state);return n.key=Ot(),window.history.replaceState(n,"",e),window.addEventListener("popstate",Vt),function(){window.removeEventListener("popstate",Vt)}}function Mt(t,e,n,r){if(t.app){var a=t.options.scrollBehavior;a&&t.app.$nextTick((function(){var i=Ct(),o=a.call(t,e,n,r?i:null);o&&("function"===typeof o.then?o.then((function(t){Bt(t,i)})).catch((function(t){0})):Bt(o,i))}))}}function At(){var t=Ot();t&&(wt[t]={x:window.pageXOffset,y:window.pageYOffset})}function Vt(t){At(),t.state&&t.state.key&&zt(t.state.key)}function Ct(){var t=Ot();if(t)return wt[t]}function It(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),a=t.getBoundingClientRect();return{x:a.left-r.left-e.x,y:a.top-r.top-e.y}}function St(t){return Ht(t.x)||Ht(t.y)}function kt(t){return{x:Ht(t.x)?t.x:window.pageXOffset,y:Ht(t.y)?t.y:window.pageYOffset}}function Tt(t){return{x:Ht(t.x)?t.x:0,y:Ht(t.y)?t.y:0}}function Ht(t){return"number"===typeof t}var Lt=/^#\d/;function Bt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Lt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var a=t.offset&&"object"===typeof t.offset?t.offset:{};a=Tt(a),e=It(r,a)}else St(t)&&(e=kt(t))}else n&&St(t)&&(e=kt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Pt=lt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Et(t,e){At();var n=window.history;try{if(e){var r=a({},n.state);r.key=Ot(),n.replaceState(r,"",t)}else n.pushState({key:zt(gt())},"",t)}catch(i){window.location[e?"replace":"assign"](t)}}function xt(t){Et(t,!0)}function _t(t,e,n){var r=function(a){a>=t.length?n():t[a]?e(t[a],(function(){r(a+1)})):r(a+1)};r(0)}var Ft={redirected:2,aborted:4,cancelled:8,duplicated:16};function Dt(t,e){return Ut(t,e,Ft.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Gt(e)+'" via a navigation guard.')}function Rt(t,e){var n=Ut(t,e,Ft.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Nt(t,e){return Ut(t,e,Ft.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function $t(t,e){return Ut(t,e,Ft.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Ut(t,e,n,r){var a=new Error(r);return a._isRouter=!0,a.from=t,a.to=e,a.type=n,a}var qt=["params","query","hash"];function Gt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return qt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Wt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Kt(t,e){return Wt(t)&&t._isRouter&&(null==e||t.type===e)}function Xt(t){return function(e,n,r){var a=!1,i=0,o=null;Yt(t,(function(t,e,n,s){if("function"===typeof t&&void 0===t.cid){a=!0,i++;var c,l=te((function(e){Zt(e)&&(e=e.default),t.resolved="function"===typeof e?e:et.extend(e),n.components[s]=e,i--,i<=0&&r()})),u=te((function(t){var e="Failed to resolve async component "+s+": "+t;o||(o=Wt(t)?t:new Error(e),r(o))}));try{c=t(l,u)}catch(d){u(d)}if(c)if("function"===typeof c.then)c.then(l,u);else{var h=c.component;h&&"function"===typeof h.then&&h.then(l,u)}}})),a||r()}}function Yt(t,e){return Jt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Jt(t){return Array.prototype.concat.apply([],t)}var Qt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Zt(t){return t.__esModule||Qt&&"Module"===t[Symbol.toStringTag]}function te(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var ee=function(t,e){this.router=t,this.base=ne(e),this.current=b,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ne(t){if(!t)if(lt){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function re(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ae(t,e,n,r){var a=Yt(t,(function(t,r,a,i){var o=ie(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,r,a,i)})):n(o,r,a,i)}));return Jt(r?a.reverse():a)}function ie(t,e){return"function"!==typeof t&&(t=et.extend(t)),t.options[e]}function oe(t){return ae(t,"beforeRouteLeave",ce,!0)}function se(t){return ae(t,"beforeRouteUpdate",ce)}function ce(t,e){if(e)return function(){return t.apply(e,arguments)}}function le(t){return ae(t,"beforeRouteEnter",(function(t,e,n,r){return ue(t,n,r)}))}function ue(t,e,n){return function(r,a,i){return t(r,a,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),i(t)}))}}ee.prototype.listen=function(t){this.cb=t},ee.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},ee.prototype.onError=function(t){this.errorCbs.push(t)},ee.prototype.transitionTo=function(t,e,n){var r,a=this;try{r=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var i=this.current;this.confirmTransition(r,(function(){a.updateRoute(r),e&&e(r),a.ensureURL(),a.router.afterHooks.forEach((function(t){t&&t(r,i)})),a.ready||(a.ready=!0,a.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!a.ready&&(Kt(t,Ft.redirected)&&i===b||(a.ready=!0,a.readyErrorCbs.forEach((function(e){e(t)}))))}))},ee.prototype.confirmTransition=function(t,e,n){var a=this,i=this.current;this.pending=t;var o=function(t){!Kt(t)&&Wt(t)&&(a.errorCbs.length?a.errorCbs.forEach((function(e){e(t)})):(r(!1,"uncaught error during route navigation:"),console.error(t))),n&&n(t)},s=t.matched.length-1,c=i.matched.length-1;if(O(t,i)&&s===c&&t.matched[s]===i.matched[c])return this.ensureURL(),o(Rt(i,t));var l=re(this.current.matched,t.matched),u=l.updated,h=l.deactivated,d=l.activated,f=[].concat(oe(h),this.router.beforeHooks,se(u),d.map((function(t){return t.beforeEnter})),Xt(d)),p=function(e,n){if(a.pending!==t)return o(Nt(i,t));try{e(t,i,(function(e){!1===e?(a.ensureURL(!0),o($t(i,t))):Wt(e)?(a.ensureURL(!0),o(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(o(Dt(i,t)),"object"===typeof e&&e.replace?a.replace(e):a.push(e)):n(e)}))}catch(r){o(r)}};_t(f,p,(function(){var n=le(d),r=n.concat(a.router.resolveHooks);_t(r,p,(function(){if(a.pending!==t)return o(Nt(i,t));a.pending=null,e(t),a.router.app&&a.router.app.$nextTick((function(){M(t)}))}))}))},ee.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},ee.prototype.setupListeners=function(){},ee.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=b,this.pending=null};var he=function(t){function e(e,n){t.call(this,e,n),this._startLocation=de(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Pt&&n;r&&this.listeners.push(jt());var a=function(){var n=t.current,a=de(t.base);t.current===b&&a===t._startLocation||t.transitionTo(a,(function(t){r&&Mt(e,t,n,!0)}))};window.addEventListener("popstate",a),this.listeners.push((function(){window.removeEventListener("popstate",a)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,a=this,i=a.current;this.transitionTo(t,(function(t){Et(k(r.base+t.fullPath)),Mt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,a=this,i=a.current;this.transitionTo(t,(function(t){xt(k(r.base+t.fullPath)),Mt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(de(this.base)!==this.current.fullPath){var e=k(this.base+this.current.fullPath);t?Et(e):xt(e)}},e.prototype.getCurrentLocation=function(){return de(this.base)},e}(ee);function de(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(k(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var fe=function(t){function e(e,n,r){t.call(this,e,n),r&&pe(this.base)||ve()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Pt&&n;r&&this.listeners.push(jt());var a=function(){var e=t.current;ve()&&t.transitionTo(me(),(function(n){r&&Mt(t.router,n,e,!0),Pt||ye(n.fullPath)}))},i=Pt?"popstate":"hashchange";window.addEventListener(i,a),this.listeners.push((function(){window.removeEventListener(i,a)}))}},e.prototype.push=function(t,e,n){var r=this,a=this,i=a.current;this.transitionTo(t,(function(t){ge(t.fullPath),Mt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,a=this,i=a.current;this.transitionTo(t,(function(t){ye(t.fullPath),Mt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;me()!==e&&(t?ge(e):ye(e))},e.prototype.getCurrentLocation=function(){return me()},e}(ee);function pe(t){var e=de(t);if(!/^\/#/.test(e))return window.location.replace(k(t+"/#"+e)),!0}function ve(){var t=me();return"/"===t.charAt(0)||(ye("/"+t),!1)}function me(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function be(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ge(t){Pt?Et(be(t)):window.location.hash=t}function ye(t){Pt?xt(be(t)):window.location.replace(be(t))}var Oe=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Kt(t,Ft.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(ee),ze=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=pt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Pt&&!1!==t.fallback,this.fallback&&(e="hash"),lt||(e="abstract"),this.mode=e,e){case"history":this.history=new he(this,t.base);break;case"hash":this.history=new fe(this,t.base,this.fallback);break;case"abstract":this.history=new Oe(this,t.base);break;default:0}},we={currentRoute:{configurable:!0}};function je(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Me(t,e,n){var r="hash"===n?"#"+e:e;return t?k(t+"/"+r):r}ze.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},we.currentRoute.get=function(){return this.history&&this.history.current},ze.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof he||n instanceof fe){var r=function(t){var r=n.current,a=e.options.scrollBehavior,i=Pt&&a;i&&"fullPath"in t&&Mt(e,t,r,!1)},a=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),a,a)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},ze.prototype.beforeEach=function(t){return je(this.beforeHooks,t)},ze.prototype.beforeResolve=function(t){return je(this.resolveHooks,t)},ze.prototype.afterEach=function(t){return je(this.afterHooks,t)},ze.prototype.onReady=function(t,e){this.history.onReady(t,e)},ze.prototype.onError=function(t){this.history.onError(t)},ze.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},ze.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},ze.prototype.go=function(t){this.history.go(t)},ze.prototype.back=function(){this.go(-1)},ze.prototype.forward=function(){this.go(1)},ze.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},ze.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=tt(t,e,n,this),a=this.match(r,e),i=a.redirectedFrom||a.fullPath,o=this.history.base,s=Me(o,i,this.mode);return{location:r,route:a,href:s,normalizedTo:r,resolved:a}},ze.prototype.getRoutes=function(){return this.matcher.getRoutes()},ze.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==b&&this.history.transitionTo(this.history.getCurrentLocation())},ze.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==b&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(ze.prototype,we),ze.install=ct,ze.version="3.5.2",ze.isNavigationFailure=Kt,ze.NavigationFailureType=Ft,ze.START_LOCATION=b,lt&&window.Vue&&window.Vue.use(ze),e["a"]=ze},"8df4":function(t,e,n){"use strict";var r=n("7a77");function a(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var t,e=new a((function(e){t=e}));return{token:e,cancel:t}},t.exports=a},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Ir})),n.d(e,"b",(function(){return kr})),n.d(e,"c",(function(){return Sr})),n.d(e,"d",(function(){return Hr})),n.d(e,"e",(function(){return Tr})),n.d(e,"f",(function(){return Lr})),n.d(e,"g",(function(){return Br})),n.d(e,"h",(function(){return Vr})),n.d(e,"i",(function(){return Cr}));var r,a="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},i={},o=o||{},s=a||self;function c(){}function l(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function u(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function v(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:v,m.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function g(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var a=Array(arguments.length-2),i=2;i<arguments.length;i++)a[i-2]=arguments[i];return e.prototype[n].apply(t,a)}}function y(){this.s=this.s,this.o=this.o}var O=0,z={};y.prototype.s=!1,y.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=O)){var t=h(this);delete z[t]}},y.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},j=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,a="string"===typeof t?t.split(""):t;for(let i=0;i<r;i++)i in a&&e.call(n,a[i],i,t)};function M(t){t:{var e=Nn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let a=0;a<n;a++)if(a in r&&e.call(void 0,r[a],a,t)){e=a;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function A(t){return Array.prototype.concat.apply([],arguments)}function V(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function C(t){return/^[\s\xa0]*$/.test(t)}var I,S=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function k(t,e){return-1!=t.indexOf(e)}function T(t,e){return t<e?-1:t>e?1:0}t:{var H=s.navigator;if(H){var L=H.userAgent;if(L){I=L;break t}}I=""}function B(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function P(t){const e={};for(const n in t)e[n]=t[n];return e}var E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(t,e){let n,r;for(let a=1;a<arguments.length;a++){for(n in r=arguments[a],r)t[n]=r[n];for(let e=0;e<E.length;e++)n=E[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function _(t){return _[" "](t),t}function F(t){var e=Q;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}_[" "]=c;var D,R=k(I,"Opera"),N=k(I,"Trident")||k(I,"MSIE"),$=k(I,"Edge"),U=$||N,q=k(I,"Gecko")&&!(k(I.toLowerCase(),"webkit")&&!k(I,"Edge"))&&!(k(I,"Trident")||k(I,"MSIE"))&&!k(I,"Edge"),G=k(I.toLowerCase(),"webkit")&&!k(I,"Edge");function W(){var t=s.document;return t?t.documentMode:void 0}t:{var K="",X=function(){var t=I;return q?/rv:([^\);]+)(\)|;)/.exec(t):$?/Edge\/([\d\.]+)/.exec(t):N?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):G?/WebKit\/(\S+)/.exec(t):R?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(X&&(K=X?X[1]:""),N){var Y=W();if(null!=Y&&Y>parseFloat(K)){D=String(Y);break t}}D=K}var J,Q={};function Z(){return F((function(){let t=0;const e=S(String(D)).split("."),n=S("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var a=e[o]||"",i=n[o]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==a[0].length&&0==i[0].length)break;t=T(0==a[1].length?0:parseInt(a[1],10),0==i[1].length?0:parseInt(i[1],10))||T(0==a[2].length,0==i[2].length)||T(a[2],i[2]),a=a[3],i=i[3]}while(0==t)}return 0<=t}))}if(s.document&&N){var tt=W();J=tt||(parseInt(D,10)||void 0)}else J=void 0;var et=J,nt=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{s.addEventListener("test",c,e),s.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function at(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(q){t:{try{_(e.nodeName);var a=!0;break t}catch(i){}a=!1}a||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:it[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&at.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},g(at,rt);var it={2:"touch",3:"pen",4:"mouse"};at.prototype.h=function(){at.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),st=0;function ct(t,e,n,r,a){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=a,this.key=++st,this.ca=this.fa=!1}function lt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ut(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,a=t.g[n],i=w(a,e);(r=0<=i)&&Array.prototype.splice.call(a,i,1),r&&(lt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,r){for(var a=0;a<t.length;++a){var i=t[a];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return a}return-1}ut.prototype.add=function(t,e,n,r,a){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=dt(t,e,r,a);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,i,!!r,a),e.fa=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),pt={};function vt(t,e,n,r,a){if(r&&r.once)return gt(t,e,n,r,a);if(Array.isArray(e)){for(var i=0;i<e.length;i++)vt(t,e[i],n,r,a);return null}return n=At(n),t&&t[ot]?t.N(e,n,u(r)?!!r.capture:!!r,a):mt(t,e,n,!1,r,a)}function mt(t,e,n,r,a,i){if(!e)throw Error("Invalid event type");var o=u(a)?!!a.capture:!!a,s=jt(t);if(s||(t[ft]=s=new ut(t)),n=s.add(e,n,r,o,i),n.proxy)return n;if(r=bt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(a=o),void 0===a&&(a=!1),t.addEventListener(e.toString(),r,a);else if(t.attachEvent)t.attachEvent(zt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function bt(){function t(n){return e.call(t.src,t.listener,n)}var e=wt;return t}function gt(t,e,n,r,a){if(Array.isArray(e)){for(var i=0;i<e.length;i++)gt(t,e[i],n,r,a);return null}return n=At(n),t&&t[ot]?t.O(e,n,u(r)?!!r.capture:!!r,a):mt(t,e,n,!0,r,a)}function yt(t,e,n,r,a){if(Array.isArray(e))for(var i=0;i<e.length;i++)yt(t,e[i],n,r,a);else r=u(r)?!!r.capture:!!r,n=At(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=dt(i,n,r,a),-1<n&&(lt(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=jt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,r,a)),(n=-1<t?e[t]:null)&&Ot(n))}function Ot(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(zt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=jt(e))?(ht(n,t),0==n.h&&(n.src=null,e[ft]=null)):lt(t)}}}function zt(t){return t in pt?pt[t]:pt[t]="on"+t}function wt(t,e){if(t.ca)t=!0;else{e=new at(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Ot(t),t=n.call(r,e)}return t}function jt(t){return t=t[ft],t instanceof ut?t:null}var Mt="__closure_events_fn_"+(1e9*Math.random()>>>0);function At(t){return"function"===typeof t?t:(t[Mt]||(t[Mt]=function(e){return t.handleEvent(e)}),t[Mt])}function Vt(){y.call(this),this.i=new ut(this),this.P=this,this.I=null}function Ct(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var a=e;e=new rt(r,t),x(e,a)}if(a=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];a=It(o,r,!0,e)&&a}if(o=e.g=t,a=It(o,r,!0,e)&&a,a=It(o,r,!1,e)&&a,n)for(i=0;i<n.length;i++)o=e.g=n[i],a=It(o,r,!1,e)&&a}function It(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var a=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var s=o.listener,c=o.ia||o.src;o.fa&&ht(t.i,o),a=!1!==s.call(c,r)&&a}}return a&&!r.defaultPrevented}g(Vt,y),Vt.prototype[ot]=!0,Vt.prototype.removeEventListener=function(t,e,n,r){yt(this,t,e,n,r)},Vt.prototype.M=function(){if(Vt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)lt(n[r]);delete e.g[t],e.h--}}this.I=null},Vt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Vt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var St=s.JSON.stringify;function kt(){var t=Ft;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Tt{constructor(){this.h=this.g=null}add(t,e){const n=Lt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Ht,Lt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Bt,t=>t.reset());class Bt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Pt(t){s.setTimeout(()=>{throw t},0)}function Et(t,e){Ht||xt(),_t||(Ht(),_t=!0),Ft.add(t,e)}function xt(){var t=s.Promise.resolve(void 0);Ht=function(){t.then(Dt)}}var _t=!1,Ft=new Tt;function Dt(){for(var t;t=kt();){try{t.h.call(t.g)}catch(n){Pt(n)}var e=Lt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_t=!1}function Rt(t,e){Vt.call(this),this.h=t||1,this.g=e||s,this.j=m(this.kb,this),this.l=Date.now()}function Nt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function $t(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:s.setTimeout(t,e||0)}function Ut(t){t.g=$t(()=>{t.g=null,t.i&&(t.i=!1,Ut(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}g(Rt,Vt),r=Rt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ct(this,"tick"),this.da&&(Nt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Rt.Z.M.call(this),Nt(this),delete this.g};class qt extends y{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ut(this)}M(){super.M(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gt(t){y.call(this),this.h=t,this.g={}}g(Gt,y);var Wt=[];function Kt(t,e,n,r){Array.isArray(n)||(n&&(Wt[0]=n.toString()),n=Wt);for(var a=0;a<n.length;a++){var i=vt(e,n[a],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Xt(t){B(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Ot(t)}),t),t.g={}}function Yt(){this.g=!0}function Jt(t,e,n,r,a,i){t.info((function(){if(t.g)if(i)for(var o="",s=i.split("&"),c=0;c<s.length;c++){var l=s[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+a+"]: "+e+"\n"+n+"\n"+o}))}function Qt(t,e,n,r,a,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+a+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var a=r[1];if(Array.isArray(a)&&!(1>a.length)){var i=a[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<a.length;o++)a[o]=""}}}return St(n)}catch(s){return e}}Gt.prototype.M=function(){Gt.Z.M.call(this),Xt(this)},Gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Yt.prototype.Aa=function(){this.g=!1},Yt.prototype.info=function(){};var ne={},re=null;function ae(){return re=re||new Vt}function ie(t){rt.call(this,ne.Ma,t)}function oe(t){const e=ae();Ct(e,new ie(e,t))}function se(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ae();Ct(e,new se(e,t))}function le(t,e){rt.call(this,ne.Na,t),this.size=e}function ue(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return s.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",g(ie,rt),ne.STAT_EVENT="statevent",g(se,rt),ne.Na="timingevent",g(le,rt);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},de={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fe(){}function pe(t){return t.h||(t.h=t.i())}function ve(){}fe.prototype.h=null;var me,be={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ge(){rt.call(this,"d")}function ye(){rt.call(this,"c")}function Oe(){}function ze(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Gt(this),this.P=je,t=U?125:void 0,this.W=new Rt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new we}function we(){this.i=null,this.g="",this.h=!1}g(ge,rt),g(ye,rt),g(Oe,fe),Oe.prototype.g=function(){return new XMLHttpRequest},Oe.prototype.i=function(){return{}},me=new Oe;var je=45e3,Me={},Ae={};function Ve(t,e,n){t.K=1,t.v=Je(qe(e)),t.s=n,t.U=!0,Ce(t,null)}function Ce(t,e){t.F=Date.now(),Te(t),t.A=qe(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new we,t.g=yr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new qt(m(t.Ia,t,t.g),t.O)),Kt(t.V,t.g,"readystatechange",t.gb),e=t.H?P(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Jt(t.j,t.u,t.A,t.m,t.X,t.s)}function Ie(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Se(t,e,n){let r,a=!0;for(;!t.I&&t.C<n.length;){if(r=ke(t,n),r==Ae){4==e&&(t.o=4,ce(14),a=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Me){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),a=!1;break}Zt(t.j,t.m,r,null),Ee(t,r)}Ie(t)&&r!=Ae&&r!=Me&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),a=!1),t.i=t.i&&a,a?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Pe(t),Be(t))}function ke(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Ae:(n=Number(e.substring(n,r)),isNaN(n)?Me:(r+=1,r+n>e.length?Ae:(e=e.substr(r,n),t.C=r+n,e)))}function Te(t){t.Y=Date.now()+t.P,He(t,t.P)}function He(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ue(m(t.eb,t),e)}function Le(t){t.B&&(s.clearTimeout(t.B),t.B=null)}function Be(t){0==t.l.G||t.I||pr(t.l,t)}function Pe(t){Le(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Nt(t.W),Xt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ee(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||zn(n.i,t)))if(n.I=t.N,!t.J&&zn(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var a=r;if(0==a[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fr(n),er(n)}ur(n),ce(18)}}else n.ta=a[1],0<n.ta-n.U&&37500>a[2]&&n.N&&0==n.A&&!n.v&&(n.v=ue(m(n.ab,n),6e3));if(1>=On(n.i)&&n.ka){try{n.ka()}catch(l){}n.ka=void 0}}else mr(n,11)}else if((t.J||n.g==t)&&fr(n),!C(e))for(a=n.Ca.g.parse(e),e=0;e<a.length;e++){let l=a[e];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const e=l[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const a=l[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.i;!i.g&&(k(t,"spdy")||k(t,"quic")||k(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(wn(i,i.h),i.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Ye(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=gr(r,r.H?r.la:null,r.W),o.J){jn(r.i,o);var s=o,c=r.K;c&&s.setTimeout(c),s.B&&(Le(s),Te(s)),r.g=o}else lr(r);0<n.l.length&&ar(n)}else"stop"!=l[0]&&"close"!=l[0]||mr(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?mr(n,7):tr(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}oe(4)}catch(l){}}function xe(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(l(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function _e(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(l(t)||"string"===typeof t)j(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(l(t)||"string"===typeof t){n=[];for(var r=t.length,a=0;a<r;a++)n.push(a)}else for(a in n=[],r=0,t)n[r++]=a;r=xe(t),a=r.length;for(var i=0;i<a;i++)e.call(void 0,r[i],n&&n[i],t)}}function Fe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Fe)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function De(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Re(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var a={};for(n=e=0;e<t.g.length;)r=t.g[e],Re(a,r)||(t.g[n++]=r,a[r]=1),e++;t.g.length=n}}function Re(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=ze.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Kn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const h=Kn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||U||this.g&&(this.h.h||this.g.ga()||Xn(this.g)))){this.I||4!=h||7==e||oe(8==e||0>=d?3:2),Le(this);var n=this.g.ba();this.N=n;e:if(Ie(this)){var r=Xn(this.g);t="";var a=r.length,i=4==Kn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pe(this),Be(this);var o="";break e}this.h.i=new s.TextDecoder}for(e=0;e<a;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==a-1});r.splice(0,a),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Qt(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(c)){var u=c;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ce(12),Pe(this),Be(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ee(this,n)}this.U?(Se(this,h,o),U&&this.i&&3==h&&(Kt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Ee(this,o)),4==h&&Pe(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,Te(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Pe(this),Be(this)}}}catch(h){}},r.fb=function(){if(this.g){var t=Kn(this.g),e=this.g.ga();this.C<e.length&&(Le(this),Se(this,t,e),this.i&&4!=t&&Te(this))}},r.cancel=function(){this.I=!0,Pe(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Pe(this),this.o=2,Be(this)):He(this,this.Y-t)},r=Fe.prototype,r.R=function(){De(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return De(this),this.g.concat()},r.get=function(t,e){return Re(this.h,t)?this.h[t]:e},r.set=function(t,e){Re(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var a=n[r],i=this.get(a);t.call(e,i,a,this)}};var Ne=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $e(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),a=null;if(0<=r){var i=t[n].substring(0,r);a=t[n].substring(r+1)}else i=t[n];e(i,a?decodeURIComponent(a.replace(/\+/g," ")):"")}}}function Ue(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ue){this.g=void 0!==e?e:t.g,Ge(this,t.j),this.s=t.s,We(this,t.i),Ke(this,t.m),this.l=t.l,e=t.h;var n=new ln;n.i=e.i,e.g&&(n.g=new Fe(e.g),n.h=e.h),Xe(this,n),this.o=t.o}else t&&(n=String(t).match(Ne))?(this.g=!!e,Ge(this,n[1]||"",!0),this.s=tn(n[2]||""),We(this,n[3]||"",!0),Ke(this,n[4]),this.l=tn(n[5]||"",!0),Xe(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new ln(null,this.g))}function qe(t){return new Ue(t)}function Ge(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function We(t,e,n){t.i=n?tn(e,!0):e}function Ke(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xe(t,e,n){e instanceof ln?(t.h=e,vn(t.h,t.g)):(n||(e=en(e,sn)),t.h=new ln(e,t.g))}function Ye(t,e,n){t.h.set(e,n)}function Je(t){return Ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qe(t){return t instanceof Ue?qe(t):new Ue(t,void 0)}function Ze(t,e,n,r){var a=new Ue(null,void 0);return t&&Ge(a,t),e&&We(a,e),n&&Ke(a,n),r&&(a.l=r),a}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ue.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:an,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,an=/[#\?:]/g,on=/[#\?]/g,sn=/[#\?@]/g,cn=/#/g;function ln(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function un(t){t.g||(t.g=new Fe,t.h=0,t.i&&$e(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function hn(t,e){un(t),e=pn(t,e),Re(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Re(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&De(t)))}function dn(t,e){return un(t),e=pn(t,e),Re(t.g.h,e)}function fn(t,e,n){hn(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),V(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function vn(t,e){e&&!t.j&&(un(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(hn(this,e),fn(this,n,t))}),t)),t.j=e}r=ln.prototype,r.add=function(t,e){un(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){un(this),this.g.forEach((function(n,r){j(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){un(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var a=t[r],i=0;i<a.length;i++)n.push(e[r]);return n},r.R=function(t){un(this);var e=[];if("string"===typeof t)dn(this,t)&&(e=A(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=A(e,t[n])}return e},r.set=function(t,e){return un(this),this.i=null,t=pn(this,t),dn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],a=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=a;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function bn(t){this.l=t||gn,s.PerformanceNavigationTiming?(t=s.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(s.g&&s.g.Ea&&s.g.Ea()&&s.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gn=10;function yn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function On(t){return t.h?1:t.g?t.g.size:0}function zn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function wn(t,e){t.g?t.g.add(e):t.h=e}function jn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Mn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return V(t.i)}function An(){}function Vn(){this.g=new An}function Cn(t,e,n){const r=n||"";try{_e(t,(function(t,n){let a=t;u(t)&&(a=St(t)),e.push(r+n+"="+encodeURIComponent(a))}))}catch(a){throw e.push(r+"type="+encodeURIComponent("_badmap")),a}}function In(t,e){const n=new Yt;if(s.Image){const r=new Image;r.onload=b(Sn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=b(Sn,n,r,"TestLoadImage: error",!1,e),r.onabort=b(Sn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=b(Sn,n,r,"TestLoadImage: timeout",!1,e),s.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Sn(t,e,n,r,a){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,a(r)}catch(i){}}function kn(t){this.l=t.$b||null,this.j=t.ib||!1}function Tn(t,e){Vt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Hn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bn.prototype.cancel=function(){if(this.i=Mn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},An.prototype.stringify=function(t){return s.JSON.stringify(t,void 0)},An.prototype.parse=function(t){return s.JSON.parse(t,void 0)},g(kn,fe),kn.prototype.g=function(){return new Tn(this.l,this.j)},kn.prototype.i=function(t){return function(){return t}}({}),g(Tn,Vt);var Hn=0;function Ln(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Bn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pn(t)}function Pn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Tn.prototype,r.open=function(t,e){if(this.readyState!=Hn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||s).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Bn(this)),this.readyState=Hn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof s.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ln(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bn(this):Pn(this),3==this.readyState&&Ln(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Bn(this))},r.Ta=function(t){this.g&&(this.response=t,Bn(this))},r.ha=function(){this.g&&Bn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Tn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var En=s.JSON.parse;function xn(t){Vt.call(this),this.headers=new Fe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=_n,this.K=this.L=!1}g(xn,Vt);var _n="",Fn=/^https?$/i,Dn=["POST","PUT"];function Rn(t){return N&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Nn(t){return"content-type"==t.toLowerCase()}function $n(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Un(t),Gn(t)}function Un(t){t.D||(t.D=!0,Ct(t,"complete"),Ct(t,"error"))}function qn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Kn(t)||2!=t.ba()))if(t.v&&4==Kn(t))$t(t.Fa,0,t);else if(Ct(t,"readystatechange"),4==Kn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var a=String(t.H).match(Ne)[1]||null;if(!a&&s.self&&s.self.location){var i=s.self.location.protocol;a=i.substr(0,i.length-1)}r=!Fn.test(a?a.toLowerCase():"")}n=r}if(n)Ct(t,"complete"),Ct(t,"success");else{t.m=6;try{var c=2<Kn(t)?t.g.statusText:""}catch(l){c=""}t.j=c+" ["+t.ba()+"]",Un(t)}}finally{Gn(t)}}}function Gn(t,e){if(t.g){Wn(t);const r=t.g,a=t.C[0]?c:null;t.g=null,t.C=null,e||Ct(t,"ready");try{r.onreadystatechange=a}catch(n){}}}function Wn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(s.clearTimeout(t.A),t.A=null)}function Kn(t){return t.g?t.g.readyState:0}function Xn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case _n:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Yn(t){let e="";return B(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Jn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Yn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ye(t,e,n))}function Qn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Yt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Qn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Qn("baseRetryDelayMs",5e3,t),this.$a=Qn("retryDelaySeedMs",1e4,t),this.Ya=Qn("forwardChannelMaxRetries",2,t),this.ra=Qn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new bn(t&&t.concurrentRequestLimit),this.Ca=new Vn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=qe(t.F);Ye(n,"SID",t.J),Ye(n,"RID",e),Ye(n,"TYPE","terminate"),sr(t,n),e=new ze(t,t.h,e,void 0),e.K=2,e.v=Je(qe(n)),n=!1,s.navigator&&s.navigator.sendBeacon&&(n=s.navigator.sendBeacon(e.v.toString(),"")),!n&&s.Image&&((new Image).src=e.v,n=!0),n||(e.g=yr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Te(e)}br(t)}function er(t){t.g&&(hr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(s.clearTimeout(t.u),t.u=null),fr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&s.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&ar(t)}function ar(t){yn(t.i)||t.m||(t.m=!0,Et(t.Ha,t),t.C=0)}function ir(t,e){return!(On(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=ue(m(t.Ha,t,e),vr(t,t.C)),t.C++,!0))}function or(t,e){var n;n=e?e.m:t.V++;const r=qe(t.F);Ye(r,"SID",t.J),Ye(r,"RID",n),Ye(r,"AID",t.U),sr(t,r),t.o&&t.s&&Jn(r,t.o,t.s),n=new ze(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),wn(t.i,n),Ve(n,r,e)}function sr(t,e){t.j&&_e({},(function(t,n){Ye(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?m(t.j.Oa,t.j,t):null;t:{var a=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=a[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<n;s++){let n=a[s].h;const c=a[s].g;if(n-=e,0>n)e=Math.max(0,a[s].h-100),o=!1;else try{Cn(c,t,"req"+n+"_")}catch(i){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function lr(t){t.g||t.u||(t.Y=1,Et(t.Ga,t),t.A=0)}function ur(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=ue(m(t.Ga,t),vr(t,t.A)),t.A++,!0)}function hr(t){null!=t.B&&(s.clearTimeout(t.B),t.B=null)}function dr(t){t.g=new ze(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=qe(t.oa);Ye(e,"RID","rpc"),Ye(e,"SID",t.J),Ye(e,"CI",t.N?"0":"1"),Ye(e,"AID",t.U),sr(t,e),Ye(e,"TYPE","xmlhttp"),t.o&&t.s&&Jn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Je(qe(e)),n.s=null,n.U=!0,Ce(n,t)}function fr(t){null!=t.v&&(s.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){fr(t),hr(t),t.g=null;var r=2}else{if(!zn(t.i,e))return;n=e.D,jn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var a=t.C;r=ae(),Ct(r,new le(r,n,e,a)),ar(t)}else lr(t);else if(a=e.o,3==a||0==a&&0<t.I||!(1==r&&ir(t,e)||2==r&&ur(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),a){case 1:mr(t,5);break;case 4:mr(t,10);break;case 3:mr(t,6);break;default:mr(t,2)}}function vr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=m(t.jb,t);n||(n=new Ue("//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||Ge(n,"https"),Je(n)),In(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),br(t),nr(t)}function br(t){t.G=0,t.I=-1,t.j&&(0==Mn(t.i).length&&0==t.l.length||(t.i.i.length=0,V(t.l),t.l.length=0),t.j.ua())}function gr(t,e,n){let r=Qe(n);if(""!=r.i)e&&We(r,e+"."+r.i),Ke(r,r.m);else{const t=s.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&B(t.aa,(function(t,e){Ye(r,e,t)})),e=t.D,n=t.sa,e&&n&&Ye(r,e,n),Ye(r,"VER",t.ma),sr(t,r),r}function yr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new xn(new kn({ib:!0})):new xn(t.qa),e.L=t.H,e}function Or(){}function zr(){if(N&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function wr(t,e){Vt.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!C(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ar(this)}function jr(t){ge.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Mr(){ye.call(this),this.status=1}function Ar(t){this.g=t}r=xn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void $n(this,i)}t=n||"";const a=new Fe(this.headers);r&&_e(r,(function(t,e){a.set(e,t)})),r=M(a.T()),n=s.FormData&&t instanceof s.FormData,!(0<=w(Dn,e))||r||n||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),a.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wn(this),0<this.B&&((this.K=Rn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=$t(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){$n(this,i)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ct(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ct(this,"complete"),Ct(this,"abort"),Gn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gn(this,!0)),xn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?qn(this):this.cb())},r.cb=function(){qn(this)},r.ba=function(){try{return 2<Kn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),En(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const a=new ze(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=P(i),x(i,this.P)):i=this.P),null===this.o&&(a.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,a,e),n=qe(this.F),Ye(n,"RID",t),Ye(n,"CVER",22),this.D&&Ye(n,"X-HTTP-Session-Id",this.D),sr(this,n),this.o&&i&&Jn(n,this.o,i),wn(this.i,a),this.Ra&&Ye(n,"TYPE","init"),this.ja?(Ye(n,"$req",e),Ye(n,"SID","null"),a.$=!0,Ve(a,n,null)):Ve(a,n,e),this.G=2}}else 3==this.G&&(t?or(this,t):0==this.l.length||yn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ue(m(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),ur(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=Or.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},zr.prototype.g=function(t,e){return new wr(t,e)},g(wr,Vt),wr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Et(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=gr(t,null,t.W),ar(t)},wr.prototype.close=function(){tr(this.g)},wr.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=St(t),rr(this.g,e)):rr(this.g,t)},wr.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,wr.Z.M.call(this)},g(jr,ge),g(Mr,ye),g(Ar,Or),Ar.prototype.xa=function(){Ct(this.g,"a")},Ar.prototype.wa=function(t){Ct(this.g,new jr(t))},Ar.prototype.va=function(t){Ct(this.g,new Mr(t))},Ar.prototype.ua=function(){Ct(this.g,"b")},zr.prototype.createWebChannel=zr.prototype.g,wr.prototype.send=wr.prototype.u,wr.prototype.open=wr.prototype.m,wr.prototype.close=wr.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,de.COMPLETE="complete",ve.EventType=be,be.OPEN="a",be.CLOSE="b",be.ERROR="c",be.MESSAGE="d",Vt.prototype.listen=Vt.prototype.N,xn.prototype.listenOnce=xn.prototype.O,xn.prototype.getLastError=xn.prototype.La,xn.prototype.getLastErrorCode=xn.prototype.Da,xn.prototype.getStatus=xn.prototype.ba,xn.prototype.getResponseJson=xn.prototype.Qa,xn.prototype.getResponseText=xn.prototype.ga,xn.prototype.send=xn.prototype.ea;var Vr=i.createWebChannelTransport=function(){return new zr},Cr=i.getStatEventTarget=function(){return ae()},Ir=i.ErrorCode=he,Sr=i.EventType=de,kr=i.Event=ne,Tr=i.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Hr=i.FetchXmlHttpFactory=kn,Lr=i.WebChannel=ve,Br=i.XhrIo=xn}).call(this,n("c8ba"))},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),a=n("9bf2"),i=n("5c6c");t.exports=r?function(t,e,n){return a.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9263:function(t,e,n){"use strict";var r=n("577e"),a=n("ad6d"),i=n("9f7f"),o=n("5692"),s=n("7c73"),c=n("69f3").get,l=n("fce3"),u=n("107c"),h=RegExp.prototype.exec,d=o("native-string-replace",String.prototype.replace),f=h,p=function(){var t=/a/,e=/b*/g;return h.call(t,"a"),h.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),v=i.UNSUPPORTED_Y||i.BROKEN_CARET,m=void 0!==/()??/.exec("")[1],b=p||m||v||l||u;b&&(f=function(t){var e,n,i,o,l,u,b,g=this,y=c(g),O=r(t),z=y.raw;if(z)return z.lastIndex=g.lastIndex,e=f.call(z,O),g.lastIndex=z.lastIndex,e;var w=y.groups,j=v&&g.sticky,M=a.call(g),A=g.source,V=0,C=O;if(j&&(M=M.replace("y",""),-1===M.indexOf("g")&&(M+="g"),C=O.slice(g.lastIndex),g.lastIndex>0&&(!g.multiline||g.multiline&&"\n"!==O.charAt(g.lastIndex-1))&&(A="(?: "+A+")",C=" "+C,V++),n=new RegExp("^(?:"+A+")",M)),m&&(n=new RegExp("^"+A+"$(?!\\s)",M)),p&&(i=g.lastIndex),o=h.call(j?n:g,C),j?o?(o.input=o.input.slice(V),o[0]=o[0].slice(V),o.index=g.lastIndex,g.lastIndex+=o[0].length):g.lastIndex=0:p&&o&&(g.lastIndex=g.global?o.index+o[0].length:i),m&&o&&o.length>1&&d.call(o[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o&&w)for(o.groups=u=s(null),l=0;l<w.length;l++)b=w[l],u[b[0]]=o[b[1]];return o}),t.exports=f},"938d":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));var r=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r="undefined"!==typeof t&&t?Object({NODE_ENV:"production",BASE_URL:"/"})||!1:{};return e?r[e]||n:r},a=function(){return r("BOOTSTRAP_VUE_NO_WARN")||"production"===r("NODE_ENV")}}).call(this,n("f28c"))},"94ca":function(t,e,n){var r=n("d039"),a=n("1626"),i=/#|\.prototype\./,o=function(t,e){var n=c[s(t)];return n==u||n!=l&&(a(e)?r(e):!!e)},s=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(H){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),o=new S(r||[]);return i._invoke=A(t,n,o),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(H){return{type:"throw",arg:H}}}t.wrap=l;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",v={};function m(){}function b(){}function g(){}var y={};c(y,i,(function(){return this}));var O=Object.getPrototypeOf,z=O&&O(O(k([])));z&&z!==n&&r.call(z,i)&&(y=z);var w=g.prototype=m.prototype=Object.create(y);function j(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function M(t,e){function n(a,i,o,s){var c=u(t[a],t,i);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,o,s)}),(function(t){n("throw",t,o,s)})):e.resolve(h).then((function(t){l.value=t,o(l)}),(function(t){return n("throw",t,o,s)}))}s(c.arg)}var a;function i(t,r){function i(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(i,i):i()}this._invoke=i}function A(t,e,n){var r=h;return function(a,i){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===a)throw i;return T()}n.method=a,n.arg=i;while(1){var o=n.delegate;if(o){var s=V(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=u(t,e,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function V(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,V(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=u(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function k(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){while(++a<t.length)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:T}}function T(){return{value:e,done:!0}}return b.prototype=g,c(w,"constructor",g),c(g,"constructor",b),b.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},j(M.prototype),c(M.prototype,o,(function(){return this})),t.AsyncIterator=M,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new M(l(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},j(w),c(w,s,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return s.type="throw",s.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;I(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"992e":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"h",(function(){return i})),n.d(e,"k",(function(){return o})),n.d(e,"l",(function(){return s})),n.d(e,"m",(function(){return c})),n.d(e,"o",(function(){return l})),n.d(e,"p",(function(){return u})),n.d(e,"r",(function(){return h})),n.d(e,"s",(function(){return d})),n.d(e,"t",(function(){return f})),n.d(e,"v",(function(){return p})),n.d(e,"w",(function(){return v})),n.d(e,"x",(function(){return m})),n.d(e,"y",(function(){return b})),n.d(e,"z",(function(){return g})),n.d(e,"C",(function(){return y})),n.d(e,"D",(function(){return O})),n.d(e,"E",(function(){return z})),n.d(e,"F",(function(){return w})),n.d(e,"f",(function(){return j})),n.d(e,"g",(function(){return M})),n.d(e,"B",(function(){return A})),n.d(e,"n",(function(){return V})),n.d(e,"i",(function(){return C})),n.d(e,"j",(function(){return I})),n.d(e,"u",(function(){return S})),n.d(e,"b",(function(){return k})),n.d(e,"c",(function(){return T})),n.d(e,"e",(function(){return H})),n.d(e,"q",(function(){return L})),n.d(e,"A",(function(){return B}));var r=/\[(\d+)]/g,a=/^(BV?)/,i=/^\d+$/,o=/^\..+/,s=/^#/,c=/^#[A-Za-z]+[\w\-:.]*$/,l=/(<([^>]+)>)/gi,u=/\B([A-Z])/g,h=/([a-z])([A-Z])/g,d=/^[0-9]*\.?[0-9]+$/,f=/\+/g,p=/[-/\\^$*+?.()|[\]{}]/g,v=/[\s\uFEFF\xA0]+/g,m=/\s+/,b=/\/\*$/,g=/(\s|^)(\w)/g,y=/^\s+/,O=/\s+$/,z=/_/g,w=/-(\w)/g,j=/^\d+-\d\d?-\d\d?(?:\s|T|$)/,M=/-|\s|T/,A=/^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/,V=/^.*(#[^#]+)$/,C=/%2C/g,I=/[!'()*]/g,S=/^(\?|#|&)/,k=/^\d+(\.\d*)?[/:]\d+(\.\d*)?$/,T=/[/:]/,H=/^col-/,L=/^BIcon/,B=/-u-.+/},"99af":function(t,e,n){"use strict";var r=n("23e7"),a=n("d039"),i=n("e8b5"),o=n("861d"),s=n("7b0b"),c=n("50c4"),l=n("8418"),u=n("65f0"),h=n("1dde"),d=n("b622"),f=n("2d00"),p=d("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",b=f>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=h("concat"),y=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},O=!b||!g;r({target:"Array",proto:!0,forced:O},{concat:function(t){var e,n,r,a,i,o=s(this),h=u(o,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?o:arguments[e],y(i)){if(a=c(i.length),d+a>v)throw TypeError(m);for(n=0;n<a;n++,d++)n in i&&l(h,d,i[n])}else{if(d>=v)throw TypeError(m);l(h,d++,i)}return h.length=d,h}})},"9a1f":function(t,e,n){var r=n("59ed"),a=n("825a"),i=n("35a1");t.exports=function(t,e){var n=arguments.length<2?i(t):e;if(r(n))return a(n.call(t));throw TypeError(String(t)+" is not iterable")}},"9bf2":function(t,e,n){var r=n("83ab"),a=n("0cfb"),i=n("825a"),o=n("a04b"),s=Object.defineProperty;e.f=r?s:function(t,e,n){if(i(t),e=o(e),i(n),a)try{return s(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,a=n("7c73"),i=n("5c6c"),o=n("d44e"),s=n("3f8c"),c=function(){return this};t.exports=function(t,e,n){var l=e+" Iterator";return t.prototype=a(r,{next:i(1,n)}),o(t,l,!1,!0),s[l]=c,t}},"9f7f":function(t,e,n){var r=n("d039"),a=n("da84"),i=a.RegExp;e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a04b:function(t,e,n){var r=n("c04e"),a=n("d9b5");t.exports=function(t){var e=r(t,"string");return a(e)?e:String(e)}},a434:function(t,e,n){"use strict";var r=n("23e7"),a=n("23cb"),i=n("a691"),o=n("50c4"),s=n("7b0b"),c=n("65f0"),l=n("8418"),u=n("1dde"),h=u("splice"),d=Math.max,f=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!h},{splice:function(t,e){var n,r,u,h,m,b,g=s(this),y=o(g.length),O=a(t,y),z=arguments.length;if(0===z?n=r=0:1===z?(n=0,r=y-O):(n=z-2,r=f(d(i(e),0),y-O)),y+n-r>p)throw TypeError(v);for(u=c(g,r),h=0;h<r;h++)m=O+h,m in g&&l(u,h,g[m]);if(u.length=r,n<r){for(h=O;h<y-r;h++)m=h+r,b=h+n,m in g?g[b]=g[m]:delete g[b];for(h=y;h>y-r+n;h--)delete g[h-1]}else if(n>r)for(h=y-r;h>O;h--)m=h+r-1,b=h+n-1,m in g?g[b]=g[m]:delete g[b];for(h=0;h<n;h++)g[h+O]=arguments[h+2];return g.length=y-r+n,u}})},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},a723:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"g",(function(){return i})),n.d(e,"l",(function(){return s})),n.d(e,"n",(function(){return c})),n.d(e,"q",(function(){return l})),n.d(e,"t",(function(){return u})),n.d(e,"u",(function(){return h})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return p})),n.d(e,"f",(function(){return v})),n.d(e,"h",(function(){return m})),n.d(e,"i",(function(){return b})),n.d(e,"j",(function(){return g})),n.d(e,"k",(function(){return y})),n.d(e,"m",(function(){return O})),n.d(e,"p",(function(){return z})),n.d(e,"o",(function(){return w})),n.d(e,"r",(function(){return j})),n.d(e,"s",(function(){return M}));var r=void 0,a=Array,i=Boolean,o=Date,s=Function,c=Number,l=Object,u=RegExp,h=String,d=[a,s],f=[a,l],p=[a,l,h],v=[a,h],m=[i,c],b=[i,c,h],g=[i,h],y=[o,h],O=[s,h],z=[c,h],w=[c,l,h],j=[l,s],M=[l,h]},a79d:function(t,e,n){"use strict";var r=n("23e7"),a=n("c430"),i=n("fea9"),o=n("d039"),s=n("d066"),c=n("1626"),l=n("4840"),u=n("cdf9"),h=n("6eeb"),d=!!i&&o((function(){i.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(t){var e=l(this,s("Promise")),n=c(t);return this.then(n?function(n){return u(e,t()).then((function(){return n}))}:t,n?function(n){return u(e,t()).then((function(){throw n}))}:t)}}),!a&&c(i)){var f=s("Promise").prototype["finally"];i.prototype["finally"]!==f&&h(i.prototype,"finally",f,{unsafe:!0})}},a874:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return s}));var r=n("992e"),a=n("6c06"),i=n("7b1e"),o=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(e=Object(i["a"])(e)?e.join("."):e,!e||!Object(i["j"])(t))return n;if(e in t)return t[e];e=String(e).replace(r["a"],".$1");var o=e.split(".").filter(a["a"]);return 0===o.length?n:o.every((function(e){return Object(i["j"])(t)&&e in t&&!Object(i["p"])(t=t[e])}))?t:Object(i["g"])(t)?null:n},s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=o(t,e);return Object(i["p"])(r)?n:r}},a8c8:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return l}));var r=Math.min,a=Math.max,i=Math.abs,o=Math.ceil,s=Math.floor,c=Math.pow,l=Math.round},aa0d:function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return m}));var r=n("2b0e"),a=n("b42e"),i=n("c637"),o=n("a723"),s=n("6c06"),c=n("7b1e"),l=n("a8c8"),u=n("3a58"),h=n("cf75");function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={viewBox:"0 0 16 16",width:"1em",height:"1em",focusable:"false",role:"img","aria-label":"icon"},p={width:null,height:null,focusable:null,role:null,"aria-label":null},v={animation:Object(h["c"])(o["u"]),content:Object(h["c"])(o["u"]),flipH:Object(h["c"])(o["g"],!1),flipV:Object(h["c"])(o["g"],!1),fontScale:Object(h["c"])(o["p"],1),rotate:Object(h["c"])(o["p"],0),scale:Object(h["c"])(o["p"],1),shiftH:Object(h["c"])(o["p"],0),shiftV:Object(h["c"])(o["p"],0),stacked:Object(h["c"])(o["g"],!1),title:Object(h["c"])(o["u"]),variant:Object(h["c"])(o["u"])},m=r["default"].extend({name:i["nb"],functional:!0,props:v,render:function(t,e){var n,r=e.data,i=e.props,o=e.children,h=i.animation,v=i.content,m=i.flipH,b=i.flipV,g=i.stacked,y=i.title,O=i.variant,z=Object(l["d"])(Object(u["b"])(i.fontScale,1),0)||1,w=Object(l["d"])(Object(u["b"])(i.scale,1),0)||1,j=Object(u["b"])(i.rotate,0),M=Object(u["b"])(i.shiftH,0),A=Object(u["b"])(i.shiftV,0),V=m||b||1!==w,C=V||j,I=M||A,S=!Object(c["p"])(v),k=[C?"translate(8 8)":null,V?"scale(".concat((m?-1:1)*w," ").concat((b?-1:1)*w,")"):null,j?"rotate(".concat(j,")"):null,C?"translate(-8 -8)":null].filter(s["a"]),T=t("g",{attrs:{transform:k.join(" ")||null},domProps:S?{innerHTML:v||""}:{}},o);I&&(T=t("g",{attrs:{transform:"translate(".concat(16*M/16," ").concat(-16*A/16,")")}},[T])),g&&(T=t("g",[T]));var H=y?t("title",y):null,L=[H,T].filter(s["a"]);return t("svg",Object(a["a"])({staticClass:"b-icon bi",class:(n={},d(n,"text-".concat(O),O),d(n,"b-icon-animation-".concat(h),h),n),attrs:f,style:g?{}:{fontSize:1===z?null:"".concat(100*z,"%")}},r,g?{attrs:p}:{},{attrs:{xmlns:g?null:"http://www.w3.org/2000/svg",fill:"currentColor"}}),L)}})},ab13:function(t,e,n){var r=n("b622"),a=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[a]=!1,"/./"[t](e)}catch(r){}}return!1}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad3d:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return w}));var r=n("ecee"),a="undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{};function i(t,e){return e={exports:{}},t(e,e.exports),e.exports}var o=i((function(t){(function(e){var n=function(t,e,r){if(!l(e)||h(e)||d(e)||f(e)||c(e))return e;var a,i=0,o=0;if(u(e))for(a=[],o=e.length;i<o;i++)a.push(n(t,e[i],r));else for(var s in a={},e)Object.prototype.hasOwnProperty.call(e,s)&&(a[t(s,r)]=n(t,e[s],r));return a},r=function(t,e){e=e||{};var n=e.separator||"_",r=e.split||/(?=[A-Z])/;return t.split(r).join(n)},a=function(t){return p(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""})),t.substr(0,1).toLowerCase()+t.substr(1))},i=function(t){var e=a(t);return e.substr(0,1).toUpperCase()+e.substr(1)},o=function(t,e){return r(t,e).toLowerCase()},s=Object.prototype.toString,c=function(t){return"function"===typeof t},l=function(t){return t===Object(t)},u=function(t){return"[object Array]"==s.call(t)},h=function(t){return"[object Date]"==s.call(t)},d=function(t){return"[object RegExp]"==s.call(t)},f=function(t){return"[object Boolean]"==s.call(t)},p=function(t){return t-=0,t===t},v=function(t,e){var n=e&&"process"in e?e.process:e;return"function"!==typeof n?t:function(e,r){return n(e,t,r)}},m={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(t,e){return n(v(a,e),t)},decamelizeKeys:function(t,e){return n(v(o,e),t,e)},pascalizeKeys:function(t,e){return n(v(i,e),t)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=m:e.humps=m})(a)})),s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},h=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function d(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var n=e.indexOf(":"),r=o.camelize(e.slice(0,n)),a=e.slice(n+1).trim();return t[r]=a,t}),{})}function f(t){return t.split(/\s+/).reduce((function(t,e){return t[e]=!0,t}),{})}function p(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce((function(t,e){return Array.isArray(e)?t=t.concat(e):t.push(e),t}),[])}function v(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=(e.children||[]).map(v.bind(null,t)),i=Object.keys(e.attributes||{}).reduce((function(t,n){var r=e.attributes[n];switch(n){case"class":t["class"]=f(r);break;case"style":t["style"]=d(r);break;default:t.attrs[n]=r}return t}),{class:{},style:{},attrs:{}}),o=r.class,s=void 0===o?{}:o,c=r.style,h=void 0===c?{}:c,m=r.attrs,b=void 0===m?{}:m,g=u(r,["class","style","attrs"]);return"string"===typeof e?e:t(e.tag,l({class:p(i.class,s),style:l({},i.style,h),attrs:l({},i.attrs,b)},g,{props:n}),a)}var m=!1;try{m=!0}catch(j){}function b(){var t;!m&&console&&"function"===typeof console.error&&(t=console).error.apply(t,arguments)}function g(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?c({},t,e):{}}function y(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip-horizontal":"horizontal"===t.flip||"both"===t.flip,"fa-flip-vertical":"vertical"===t.flip||"both"===t.flip},c(e,"fa-"+t.size,null!==t.size),c(e,"fa-rotate-"+t.rotation,null!==t.rotation),c(e,"fa-pull-"+t.pull,null!==t.pull),c(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(n).map((function(t){return n[t]?t:null})).filter((function(t){return t}))}function O(t,e){var n=0===(t||"").length?[]:[t];return n.concat(e).join(" ")}function z(t){return r["d"].icon?r["d"].icon(t):null===t?null:"object"===("undefined"===typeof t?"undefined":s(t))&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"===typeof t?{prefix:"fas",iconName:t}:void 0}var w={name:"FontAwesomeIcon",functional:!0,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},render:function(t,e){var n=e.props,a=n.icon,i=n.mask,o=n.symbol,s=n.title,c=z(a),u=g("classes",y(n)),h=g("transform","string"===typeof n.transform?r["d"].transform(n.transform):n.transform),d=g("mask",z(i)),f=Object(r["b"])(c,l({},u,h,d,{symbol:o,title:s}));if(!f)return b("Could not find one or more icon(s)",c,d);var p=f.abstract,m=v.bind(null,t);return m(p[0],{},e.data)}};Boolean,Boolean}).call(this,n("c8ba"))},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae93:function(t,e,n){"use strict";var r,a,i,o=n("d039"),s=n("1626"),c=n("7c73"),l=n("e163"),u=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(i=[].keys(),"next"in i?(a=l(l(i)),a!==Object.prototype&&(r=a)):p=!0);var v=void 0==r||o((function(){var t={};return r[f].call(t)!==t}));v?r={}:d&&(r=c(r)),s(r[f])||u(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},b041:function(t,e,n){"use strict";var r=n("00ee"),a=n("f5df");t.exports=r?{}.toString:function(){return"[object "+a(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),a=n("5e77").EXISTS,i=n("9bf2").f,o=Function.prototype,s=o.toString,c=/^\s*function ([^ (]*)/,l="name";r&&!a&&i(o,l,{configurable:!0,get:function(){try{return s.call(this).match(c)[1]}catch(t){return""}}})},b1e0:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("3790"),a=n("0759"),i=n("5d4e"),o=n("7386"),s=Object(r["c"])({components:{BIcon:a["a"],BIconstack:i["a"],BIconBlank:o["Fc"],BIconAlarm:o["a"],BIconAlarmFill:o["b"],BIconAlignBottom:o["c"],BIconAlignCenter:o["d"],BIconAlignEnd:o["e"],BIconAlignMiddle:o["f"],BIconAlignStart:o["g"],BIconAlignTop:o["h"],BIconAlt:o["i"],BIconApp:o["j"],BIconAppIndicator:o["k"],BIconArchive:o["l"],BIconArchiveFill:o["m"],BIconArrow90degDown:o["n"],BIconArrow90degLeft:o["o"],BIconArrow90degRight:o["p"],BIconArrow90degUp:o["q"],BIconArrowBarDown:o["r"],BIconArrowBarLeft:o["s"],BIconArrowBarRight:o["t"],BIconArrowBarUp:o["u"],BIconArrowClockwise:o["v"],BIconArrowCounterclockwise:o["w"],BIconArrowDown:o["x"],BIconArrowDownCircle:o["y"],BIconArrowDownCircleFill:o["z"],BIconArrowDownLeft:o["A"],BIconArrowDownLeftCircle:o["B"],BIconArrowDownLeftCircleFill:o["C"],BIconArrowDownLeftSquare:o["D"],BIconArrowDownLeftSquareFill:o["E"],BIconArrowDownRight:o["F"],BIconArrowDownRightCircle:o["G"],BIconArrowDownRightCircleFill:o["H"],BIconArrowDownRightSquare:o["I"],BIconArrowDownRightSquareFill:o["J"],BIconArrowDownShort:o["K"],BIconArrowDownSquare:o["L"],BIconArrowDownSquareFill:o["M"],BIconArrowDownUp:o["N"],BIconArrowLeft:o["O"],BIconArrowLeftCircle:o["P"],BIconArrowLeftCircleFill:o["Q"],BIconArrowLeftRight:o["R"],BIconArrowLeftShort:o["S"],BIconArrowLeftSquare:o["T"],BIconArrowLeftSquareFill:o["U"],BIconArrowRepeat:o["V"],BIconArrowReturnLeft:o["W"],BIconArrowReturnRight:o["X"],BIconArrowRight:o["Y"],BIconArrowRightCircle:o["Z"],BIconArrowRightCircleFill:o["ab"],BIconArrowRightShort:o["bb"],BIconArrowRightSquare:o["cb"],BIconArrowRightSquareFill:o["db"],BIconArrowUp:o["eb"],BIconArrowUpCircle:o["fb"],BIconArrowUpCircleFill:o["gb"],BIconArrowUpLeft:o["hb"],BIconArrowUpLeftCircle:o["ib"],BIconArrowUpLeftCircleFill:o["jb"],BIconArrowUpLeftSquare:o["kb"],BIconArrowUpLeftSquareFill:o["lb"],BIconArrowUpRight:o["mb"],BIconArrowUpRightCircle:o["nb"],BIconArrowUpRightCircleFill:o["ob"],BIconArrowUpRightSquare:o["pb"],BIconArrowUpRightSquareFill:o["qb"],BIconArrowUpShort:o["rb"],BIconArrowUpSquare:o["sb"],BIconArrowUpSquareFill:o["tb"],BIconArrowsAngleContract:o["ub"],BIconArrowsAngleExpand:o["vb"],BIconArrowsCollapse:o["wb"],BIconArrowsExpand:o["xb"],BIconArrowsFullscreen:o["yb"],BIconArrowsMove:o["zb"],BIconAspectRatio:o["Ab"],BIconAspectRatioFill:o["Bb"],BIconAsterisk:o["Cb"],BIconAt:o["Db"],BIconAward:o["Eb"],BIconAwardFill:o["Fb"],BIconBack:o["Gb"],BIconBackspace:o["Hb"],BIconBackspaceFill:o["Ib"],BIconBackspaceReverse:o["Jb"],BIconBackspaceReverseFill:o["Kb"],BIconBadge4k:o["Lb"],BIconBadge4kFill:o["Mb"],BIconBadge8k:o["Nb"],BIconBadge8kFill:o["Ob"],BIconBadgeAd:o["Pb"],BIconBadgeAdFill:o["Qb"],BIconBadgeCc:o["Rb"],BIconBadgeCcFill:o["Sb"],BIconBadgeHd:o["Tb"],BIconBadgeHdFill:o["Ub"],BIconBadgeTm:o["Vb"],BIconBadgeTmFill:o["Wb"],BIconBadgeVo:o["Xb"],BIconBadgeVoFill:o["Yb"],BIconBag:o["Zb"],BIconBagCheck:o["ac"],BIconBagCheckFill:o["bc"],BIconBagDash:o["cc"],BIconBagDashFill:o["dc"],BIconBagFill:o["ec"],BIconBagPlus:o["fc"],BIconBagPlusFill:o["gc"],BIconBagX:o["hc"],BIconBagXFill:o["ic"],BIconBarChart:o["jc"],BIconBarChartFill:o["kc"],BIconBarChartLine:o["lc"],BIconBarChartLineFill:o["mc"],BIconBarChartSteps:o["nc"],BIconBasket:o["oc"],BIconBasket2:o["pc"],BIconBasket2Fill:o["qc"],BIconBasket3:o["rc"],BIconBasket3Fill:o["sc"],BIconBasketFill:o["tc"],BIconBattery:o["uc"],BIconBatteryCharging:o["vc"],BIconBatteryFull:o["wc"],BIconBatteryHalf:o["xc"],BIconBell:o["yc"],BIconBellFill:o["zc"],BIconBezier:o["Ac"],BIconBezier2:o["Bc"],BIconBicycle:o["Cc"],BIconBinoculars:o["Dc"],BIconBinocularsFill:o["Ec"],BIconBlockquoteLeft:o["Gc"],BIconBlockquoteRight:o["Hc"],BIconBook:o["Ic"],BIconBookFill:o["Jc"],BIconBookHalf:o["Kc"],BIconBookmark:o["Lc"],BIconBookmarkCheck:o["Mc"],BIconBookmarkCheckFill:o["Nc"],BIconBookmarkDash:o["Oc"],BIconBookmarkDashFill:o["Pc"],BIconBookmarkFill:o["Qc"],BIconBookmarkHeart:o["Rc"],BIconBookmarkHeartFill:o["Sc"],BIconBookmarkPlus:o["Tc"],BIconBookmarkPlusFill:o["Uc"],BIconBookmarkStar:o["Vc"],BIconBookmarkStarFill:o["Wc"],BIconBookmarkX:o["Xc"],BIconBookmarkXFill:o["Yc"],BIconBookmarks:o["Zc"],BIconBookmarksFill:o["ad"],BIconBookshelf:o["bd"],BIconBootstrap:o["cd"],BIconBootstrapFill:o["dd"],BIconBootstrapReboot:o["ed"],BIconBorderStyle:o["fd"],BIconBorderWidth:o["gd"],BIconBoundingBox:o["hd"],BIconBoundingBoxCircles:o["id"],BIconBox:o["jd"],BIconBoxArrowDown:o["kd"],BIconBoxArrowDownLeft:o["ld"],BIconBoxArrowDownRight:o["md"],BIconBoxArrowInDown:o["nd"],BIconBoxArrowInDownLeft:o["od"],BIconBoxArrowInDownRight:o["pd"],BIconBoxArrowInLeft:o["qd"],BIconBoxArrowInRight:o["rd"],BIconBoxArrowInUp:o["sd"],BIconBoxArrowInUpLeft:o["td"],BIconBoxArrowInUpRight:o["ud"],BIconBoxArrowLeft:o["vd"],BIconBoxArrowRight:o["wd"],BIconBoxArrowUp:o["xd"],BIconBoxArrowUpLeft:o["yd"],BIconBoxArrowUpRight:o["zd"],BIconBoxSeam:o["Ad"],BIconBraces:o["Bd"],BIconBricks:o["Cd"],BIconBriefcase:o["Dd"],BIconBriefcaseFill:o["Ed"],BIconBrightnessAltHigh:o["Fd"],BIconBrightnessAltHighFill:o["Gd"],BIconBrightnessAltLow:o["Hd"],BIconBrightnessAltLowFill:o["Id"],BIconBrightnessHigh:o["Jd"],BIconBrightnessHighFill:o["Kd"],BIconBrightnessLow:o["Ld"],BIconBrightnessLowFill:o["Md"],BIconBroadcast:o["Nd"],BIconBroadcastPin:o["Od"],BIconBrush:o["Pd"],BIconBrushFill:o["Qd"],BIconBucket:o["Rd"],BIconBucketFill:o["Sd"],BIconBug:o["Td"],BIconBugFill:o["Ud"],BIconBuilding:o["Vd"],BIconBullseye:o["Wd"],BIconCalculator:o["Xd"],BIconCalculatorFill:o["Yd"],BIconCalendar:o["Zd"],BIconCalendar2:o["ae"],BIconCalendar2Check:o["be"],BIconCalendar2CheckFill:o["ce"],BIconCalendar2Date:o["de"],BIconCalendar2DateFill:o["ee"],BIconCalendar2Day:o["fe"],BIconCalendar2DayFill:o["ge"],BIconCalendar2Event:o["he"],BIconCalendar2EventFill:o["ie"],BIconCalendar2Fill:o["je"],BIconCalendar2Minus:o["ke"],BIconCalendar2MinusFill:o["le"],BIconCalendar2Month:o["me"],BIconCalendar2MonthFill:o["ne"],BIconCalendar2Plus:o["oe"],BIconCalendar2PlusFill:o["pe"],BIconCalendar2Range:o["qe"],BIconCalendar2RangeFill:o["re"],BIconCalendar2Week:o["se"],BIconCalendar2WeekFill:o["te"],BIconCalendar2X:o["ue"],BIconCalendar2XFill:o["ve"],BIconCalendar3:o["we"],BIconCalendar3Event:o["xe"],BIconCalendar3EventFill:o["ye"],BIconCalendar3Fill:o["ze"],BIconCalendar3Range:o["Ae"],BIconCalendar3RangeFill:o["Be"],BIconCalendar3Week:o["Ce"],BIconCalendar3WeekFill:o["De"],BIconCalendar4:o["Ee"],BIconCalendar4Event:o["Fe"],BIconCalendar4Range:o["Ge"],BIconCalendar4Week:o["He"],BIconCalendarCheck:o["Ie"],BIconCalendarCheckFill:o["Je"],BIconCalendarDate:o["Ke"],BIconCalendarDateFill:o["Le"],BIconCalendarDay:o["Me"],BIconCalendarDayFill:o["Ne"],BIconCalendarEvent:o["Oe"],BIconCalendarEventFill:o["Pe"],BIconCalendarFill:o["Qe"],BIconCalendarMinus:o["Re"],BIconCalendarMinusFill:o["Se"],BIconCalendarMonth:o["Te"],BIconCalendarMonthFill:o["Ue"],BIconCalendarPlus:o["Ve"],BIconCalendarPlusFill:o["We"],BIconCalendarRange:o["Xe"],BIconCalendarRangeFill:o["Ye"],BIconCalendarWeek:o["Ze"],BIconCalendarWeekFill:o["af"],BIconCalendarX:o["bf"],BIconCalendarXFill:o["cf"],BIconCamera:o["df"],BIconCamera2:o["ef"],BIconCameraFill:o["ff"],BIconCameraReels:o["gf"],BIconCameraReelsFill:o["hf"],BIconCameraVideo:o["if"],BIconCameraVideoFill:o["jf"],BIconCameraVideoOff:o["kf"],BIconCameraVideoOffFill:o["lf"],BIconCapslock:o["mf"],BIconCapslockFill:o["nf"],BIconCardChecklist:o["of"],BIconCardHeading:o["pf"],BIconCardImage:o["qf"],BIconCardList:o["rf"],BIconCardText:o["sf"],BIconCaretDown:o["tf"],BIconCaretDownFill:o["uf"],BIconCaretDownSquare:o["vf"],BIconCaretDownSquareFill:o["wf"],BIconCaretLeft:o["xf"],BIconCaretLeftFill:o["yf"],BIconCaretLeftSquare:o["zf"],BIconCaretLeftSquareFill:o["Af"],BIconCaretRight:o["Bf"],BIconCaretRightFill:o["Cf"],BIconCaretRightSquare:o["Df"],BIconCaretRightSquareFill:o["Ef"],BIconCaretUp:o["Ff"],BIconCaretUpFill:o["Gf"],BIconCaretUpSquare:o["Hf"],BIconCaretUpSquareFill:o["If"],BIconCart:o["Jf"],BIconCart2:o["Kf"],BIconCart3:o["Lf"],BIconCart4:o["Mf"],BIconCartCheck:o["Nf"],BIconCartCheckFill:o["Of"],BIconCartDash:o["Pf"],BIconCartDashFill:o["Qf"],BIconCartFill:o["Rf"],BIconCartPlus:o["Sf"],BIconCartPlusFill:o["Tf"],BIconCartX:o["Uf"],BIconCartXFill:o["Vf"],BIconCash:o["Wf"],BIconCashStack:o["Xf"],BIconCast:o["Yf"],BIconChat:o["Zf"],BIconChatDots:o["ag"],BIconChatDotsFill:o["bg"],BIconChatFill:o["cg"],BIconChatLeft:o["dg"],BIconChatLeftDots:o["eg"],BIconChatLeftDotsFill:o["fg"],BIconChatLeftFill:o["gg"],BIconChatLeftQuote:o["hg"],BIconChatLeftQuoteFill:o["ig"],BIconChatLeftText:o["jg"],BIconChatLeftTextFill:o["kg"],BIconChatQuote:o["lg"],BIconChatQuoteFill:o["mg"],BIconChatRight:o["ng"],BIconChatRightDots:o["og"],BIconChatRightDotsFill:o["pg"],BIconChatRightFill:o["qg"],BIconChatRightQuote:o["rg"],BIconChatRightQuoteFill:o["sg"],BIconChatRightText:o["tg"],BIconChatRightTextFill:o["ug"],BIconChatSquare:o["vg"],BIconChatSquareDots:o["wg"],BIconChatSquareDotsFill:o["xg"],BIconChatSquareFill:o["yg"],BIconChatSquareQuote:o["zg"],BIconChatSquareQuoteFill:o["Ag"],BIconChatSquareText:o["Bg"],BIconChatSquareTextFill:o["Cg"],BIconChatText:o["Dg"],BIconChatTextFill:o["Eg"],BIconCheck:o["Fg"],BIconCheck2:o["Gg"],BIconCheck2All:o["Hg"],BIconCheck2Circle:o["Ig"],BIconCheck2Square:o["Jg"],BIconCheckAll:o["Kg"],BIconCheckCircle:o["Lg"],BIconCheckCircleFill:o["Mg"],BIconCheckSquare:o["Ng"],BIconCheckSquareFill:o["Og"],BIconChevronBarContract:o["Pg"],BIconChevronBarDown:o["Qg"],BIconChevronBarExpand:o["Rg"],BIconChevronBarLeft:o["Sg"],BIconChevronBarRight:o["Tg"],BIconChevronBarUp:o["Ug"],BIconChevronCompactDown:o["Vg"],BIconChevronCompactLeft:o["Wg"],BIconChevronCompactRight:o["Xg"],BIconChevronCompactUp:o["Yg"],BIconChevronContract:o["Zg"],BIconChevronDoubleDown:o["ah"],BIconChevronDoubleLeft:o["bh"],BIconChevronDoubleRight:o["ch"],BIconChevronDoubleUp:o["dh"],BIconChevronDown:o["eh"],BIconChevronExpand:o["fh"],BIconChevronLeft:o["gh"],BIconChevronRight:o["hh"],BIconChevronUp:o["ih"],BIconCircle:o["jh"],BIconCircleFill:o["kh"],BIconCircleHalf:o["lh"],BIconCircleSquare:o["mh"],BIconClipboard:o["nh"],BIconClipboardCheck:o["oh"],BIconClipboardData:o["ph"],BIconClipboardMinus:o["qh"],BIconClipboardPlus:o["rh"],BIconClipboardX:o["sh"],BIconClock:o["th"],BIconClockFill:o["uh"],BIconClockHistory:o["vh"],BIconCloud:o["wh"],BIconCloudArrowDown:o["xh"],BIconCloudArrowDownFill:o["yh"],BIconCloudArrowUp:o["zh"],BIconCloudArrowUpFill:o["Ah"],BIconCloudCheck:o["Bh"],BIconCloudCheckFill:o["Ch"],BIconCloudDownload:o["Dh"],BIconCloudDownloadFill:o["Eh"],BIconCloudFill:o["Fh"],BIconCloudMinus:o["Gh"],BIconCloudMinusFill:o["Hh"],BIconCloudPlus:o["Ih"],BIconCloudPlusFill:o["Jh"],BIconCloudSlash:o["Kh"],BIconCloudSlashFill:o["Lh"],BIconCloudUpload:o["Mh"],BIconCloudUploadFill:o["Nh"],BIconCode:o["Oh"],BIconCodeSlash:o["Ph"],BIconCodeSquare:o["Qh"],BIconCollection:o["Rh"],BIconCollectionFill:o["Sh"],BIconCollectionPlay:o["Th"],BIconCollectionPlayFill:o["Uh"],BIconColumns:o["Vh"],BIconColumnsGap:o["Wh"],BIconCommand:o["Xh"],BIconCompass:o["Yh"],BIconCompassFill:o["Zh"],BIconCone:o["ai"],BIconConeStriped:o["bi"],BIconController:o["ci"],BIconCpu:o["di"],BIconCpuFill:o["ei"],BIconCreditCard:o["fi"],BIconCreditCard2Back:o["gi"],BIconCreditCard2BackFill:o["hi"],BIconCreditCard2Front:o["ii"],BIconCreditCard2FrontFill:o["ji"],BIconCreditCardFill:o["ki"],BIconCrop:o["li"],BIconCup:o["mi"],BIconCupFill:o["ni"],BIconCupStraw:o["oi"],BIconCursor:o["pi"],BIconCursorFill:o["qi"],BIconCursorText:o["ri"],BIconDash:o["si"],BIconDashCircle:o["ti"],BIconDashCircleFill:o["ui"],BIconDashSquare:o["vi"],BIconDashSquareFill:o["wi"],BIconDiagram2:o["xi"],BIconDiagram2Fill:o["yi"],BIconDiagram3:o["zi"],BIconDiagram3Fill:o["Ai"],BIconDiamond:o["Bi"],BIconDiamondFill:o["Ci"],BIconDiamondHalf:o["Di"],BIconDice1:o["Ei"],BIconDice1Fill:o["Fi"],BIconDice2:o["Gi"],BIconDice2Fill:o["Hi"],BIconDice3:o["Ii"],BIconDice3Fill:o["Ji"],BIconDice4:o["Ki"],BIconDice4Fill:o["Li"],BIconDice5:o["Mi"],BIconDice5Fill:o["Ni"],BIconDice6:o["Oi"],BIconDice6Fill:o["Pi"],BIconDisc:o["Qi"],BIconDiscFill:o["Ri"],BIconDiscord:o["Si"],BIconDisplay:o["Ti"],BIconDisplayFill:o["Ui"],BIconDistributeHorizontal:o["Vi"],BIconDistributeVertical:o["Wi"],BIconDoorClosed:o["Xi"],BIconDoorClosedFill:o["Yi"],BIconDoorOpen:o["Zi"],BIconDoorOpenFill:o["aj"],BIconDot:o["bj"],BIconDownload:o["cj"],BIconDroplet:o["dj"],BIconDropletFill:o["ej"],BIconDropletHalf:o["fj"],BIconEarbuds:o["gj"],BIconEasel:o["hj"],BIconEaselFill:o["ij"],BIconEgg:o["jj"],BIconEggFill:o["kj"],BIconEggFried:o["lj"],BIconEject:o["mj"],BIconEjectFill:o["nj"],BIconEmojiAngry:o["oj"],BIconEmojiAngryFill:o["pj"],BIconEmojiDizzy:o["qj"],BIconEmojiDizzyFill:o["rj"],BIconEmojiExpressionless:o["sj"],BIconEmojiExpressionlessFill:o["tj"],BIconEmojiFrown:o["uj"],BIconEmojiFrownFill:o["vj"],BIconEmojiHeartEyes:o["wj"],BIconEmojiHeartEyesFill:o["xj"],BIconEmojiLaughing:o["yj"],BIconEmojiLaughingFill:o["zj"],BIconEmojiNeutral:o["Aj"],BIconEmojiNeutralFill:o["Bj"],BIconEmojiSmile:o["Cj"],BIconEmojiSmileFill:o["Dj"],BIconEmojiSmileUpsideDown:o["Ej"],BIconEmojiSmileUpsideDownFill:o["Fj"],BIconEmojiSunglasses:o["Gj"],BIconEmojiSunglassesFill:o["Hj"],BIconEmojiWink:o["Ij"],BIconEmojiWinkFill:o["Jj"],BIconEnvelope:o["Kj"],BIconEnvelopeFill:o["Lj"],BIconEnvelopeOpen:o["Mj"],BIconEnvelopeOpenFill:o["Nj"],BIconExclamation:o["Oj"],BIconExclamationCircle:o["Pj"],BIconExclamationCircleFill:o["Qj"],BIconExclamationDiamond:o["Rj"],BIconExclamationDiamondFill:o["Sj"],BIconExclamationOctagon:o["Tj"],BIconExclamationOctagonFill:o["Uj"],BIconExclamationSquare:o["Vj"],BIconExclamationSquareFill:o["Wj"],BIconExclamationTriangle:o["Xj"],BIconExclamationTriangleFill:o["Yj"],BIconExclude:o["Zj"],BIconEye:o["ak"],BIconEyeFill:o["bk"],BIconEyeSlash:o["ck"],BIconEyeSlashFill:o["dk"],BIconEyeglasses:o["ek"],BIconFacebook:o["fk"],BIconFile:o["gk"],BIconFileArrowDown:o["hk"],BIconFileArrowDownFill:o["ik"],BIconFileArrowUp:o["jk"],BIconFileArrowUpFill:o["kk"],BIconFileBarGraph:o["lk"],BIconFileBarGraphFill:o["mk"],BIconFileBinary:o["nk"],BIconFileBinaryFill:o["ok"],BIconFileBreak:o["pk"],BIconFileBreakFill:o["qk"],BIconFileCheck:o["rk"],BIconFileCheckFill:o["sk"],BIconFileCode:o["tk"],BIconFileCodeFill:o["uk"],BIconFileDiff:o["vk"],BIconFileDiffFill:o["wk"],BIconFileEarmark:o["xk"],BIconFileEarmarkArrowDown:o["yk"],BIconFileEarmarkArrowDownFill:o["zk"],BIconFileEarmarkArrowUp:o["Ak"],BIconFileEarmarkArrowUpFill:o["Bk"],BIconFileEarmarkBarGraph:o["Ck"],BIconFileEarmarkBarGraphFill:o["Dk"],BIconFileEarmarkBinary:o["Ek"],BIconFileEarmarkBinaryFill:o["Fk"],BIconFileEarmarkBreak:o["Gk"],BIconFileEarmarkBreakFill:o["Hk"],BIconFileEarmarkCheck:o["Ik"],BIconFileEarmarkCheckFill:o["Jk"],BIconFileEarmarkCode:o["Kk"],BIconFileEarmarkCodeFill:o["Lk"],BIconFileEarmarkDiff:o["Mk"],BIconFileEarmarkDiffFill:o["Nk"],BIconFileEarmarkEasel:o["Ok"],BIconFileEarmarkEaselFill:o["Pk"],BIconFileEarmarkExcel:o["Qk"],BIconFileEarmarkExcelFill:o["Rk"],BIconFileEarmarkFill:o["Sk"],BIconFileEarmarkFont:o["Tk"],BIconFileEarmarkFontFill:o["Uk"],BIconFileEarmarkImage:o["Vk"],BIconFileEarmarkImageFill:o["Wk"],BIconFileEarmarkLock:o["Xk"],BIconFileEarmarkLock2:o["Yk"],BIconFileEarmarkLock2Fill:o["Zk"],BIconFileEarmarkLockFill:o["al"],BIconFileEarmarkMedical:o["bl"],BIconFileEarmarkMedicalFill:o["cl"],BIconFileEarmarkMinus:o["dl"],BIconFileEarmarkMinusFill:o["el"],BIconFileEarmarkMusic:o["fl"],BIconFileEarmarkMusicFill:o["gl"],BIconFileEarmarkPerson:o["hl"],BIconFileEarmarkPersonFill:o["il"],BIconFileEarmarkPlay:o["jl"],BIconFileEarmarkPlayFill:o["kl"],BIconFileEarmarkPlus:o["ll"],BIconFileEarmarkPlusFill:o["ml"],BIconFileEarmarkPost:o["nl"],BIconFileEarmarkPostFill:o["ol"],BIconFileEarmarkPpt:o["pl"],BIconFileEarmarkPptFill:o["ql"],BIconFileEarmarkRichtext:o["rl"],BIconFileEarmarkRichtextFill:o["sl"],BIconFileEarmarkRuled:o["tl"],BIconFileEarmarkRuledFill:o["ul"],BIconFileEarmarkSlides:o["vl"],BIconFileEarmarkSlidesFill:o["wl"],BIconFileEarmarkSpreadsheet:o["xl"],BIconFileEarmarkSpreadsheetFill:o["yl"],BIconFileEarmarkText:o["zl"],BIconFileEarmarkTextFill:o["Al"],BIconFileEarmarkWord:o["Bl"],BIconFileEarmarkWordFill:o["Cl"],BIconFileEarmarkX:o["Dl"],BIconFileEarmarkXFill:o["El"],BIconFileEarmarkZip:o["Fl"],BIconFileEarmarkZipFill:o["Gl"],BIconFileEasel:o["Hl"],BIconFileEaselFill:o["Il"],BIconFileExcel:o["Jl"],BIconFileExcelFill:o["Kl"],BIconFileFill:o["Ll"],BIconFileFont:o["Ml"],BIconFileFontFill:o["Nl"],BIconFileImage:o["Ol"],BIconFileImageFill:o["Pl"],BIconFileLock:o["Ql"],BIconFileLock2:o["Rl"],BIconFileLock2Fill:o["Sl"],BIconFileLockFill:o["Tl"],BIconFileMedical:o["Ul"],BIconFileMedicalFill:o["Vl"],BIconFileMinus:o["Wl"],BIconFileMinusFill:o["Xl"],BIconFileMusic:o["Yl"],BIconFileMusicFill:o["Zl"],BIconFilePerson:o["am"],BIconFilePersonFill:o["bm"],BIconFilePlay:o["cm"],BIconFilePlayFill:o["dm"],BIconFilePlus:o["em"],BIconFilePlusFill:o["fm"],BIconFilePost:o["gm"],BIconFilePostFill:o["hm"],BIconFilePpt:o["im"],BIconFilePptFill:o["jm"],BIconFileRichtext:o["km"],BIconFileRichtextFill:o["lm"],BIconFileRuled:o["mm"],BIconFileRuledFill:o["nm"],BIconFileSlides:o["om"],BIconFileSlidesFill:o["pm"],BIconFileSpreadsheet:o["qm"],BIconFileSpreadsheetFill:o["rm"],BIconFileText:o["sm"],BIconFileTextFill:o["tm"],BIconFileWord:o["um"],BIconFileWordFill:o["vm"],BIconFileX:o["wm"],BIconFileXFill:o["xm"],BIconFileZip:o["ym"],BIconFileZipFill:o["zm"],BIconFiles:o["Am"],BIconFilesAlt:o["Bm"],BIconFilm:o["Cm"],BIconFilter:o["Dm"],BIconFilterCircle:o["Em"],BIconFilterCircleFill:o["Fm"],BIconFilterLeft:o["Gm"],BIconFilterRight:o["Hm"],BIconFilterSquare:o["Im"],BIconFilterSquareFill:o["Jm"],BIconFlag:o["Km"],BIconFlagFill:o["Lm"],BIconFlower1:o["Mm"],BIconFlower2:o["Nm"],BIconFlower3:o["Om"],BIconFolder:o["Pm"],BIconFolder2:o["Qm"],BIconFolder2Open:o["Rm"],BIconFolderCheck:o["Sm"],BIconFolderFill:o["Tm"],BIconFolderMinus:o["Um"],BIconFolderPlus:o["Vm"],BIconFolderSymlink:o["Wm"],BIconFolderSymlinkFill:o["Xm"],BIconFolderX:o["Ym"],BIconFonts:o["Zm"],BIconForward:o["an"],BIconForwardFill:o["bn"],BIconFront:o["cn"],BIconFullscreen:o["dn"],BIconFullscreenExit:o["en"],BIconFunnel:o["fn"],BIconFunnelFill:o["gn"],BIconGear:o["hn"],BIconGearFill:o["in"],BIconGearWide:o["jn"],BIconGearWideConnected:o["kn"],BIconGem:o["ln"],BIconGeo:o["mn"],BIconGeoAlt:o["nn"],BIconGeoAltFill:o["on"],BIconGeoFill:o["pn"],BIconGift:o["qn"],BIconGiftFill:o["rn"],BIconGithub:o["sn"],BIconGlobe:o["tn"],BIconGlobe2:o["un"],BIconGoogle:o["vn"],BIconGraphDown:o["wn"],BIconGraphUp:o["xn"],BIconGrid:o["yn"],BIconGrid1x2:o["zn"],BIconGrid1x2Fill:o["An"],BIconGrid3x2:o["Bn"],BIconGrid3x2Gap:o["Cn"],BIconGrid3x2GapFill:o["Dn"],BIconGrid3x3:o["En"],BIconGrid3x3Gap:o["Fn"],BIconGrid3x3GapFill:o["Gn"],BIconGridFill:o["Hn"],BIconGripHorizontal:o["In"],BIconGripVertical:o["Jn"],BIconHammer:o["Kn"],BIconHandIndex:o["Ln"],BIconHandIndexThumb:o["Mn"],BIconHandThumbsDown:o["Nn"],BIconHandThumbsUp:o["On"],BIconHandbag:o["Pn"],BIconHandbagFill:o["Qn"],BIconHash:o["Rn"],BIconHdd:o["Sn"],BIconHddFill:o["Tn"],BIconHddNetwork:o["Un"],BIconHddNetworkFill:o["Vn"],BIconHddRack:o["Wn"],BIconHddRackFill:o["Xn"],BIconHddStack:o["Yn"],BIconHddStackFill:o["Zn"],BIconHeadphones:o["ao"],BIconHeadset:o["bo"],BIconHeart:o["co"],BIconHeartFill:o["do"],BIconHeartHalf:o["eo"],BIconHeptagon:o["fo"],BIconHeptagonFill:o["go"],BIconHeptagonHalf:o["ho"],BIconHexagon:o["io"],BIconHexagonFill:o["jo"],BIconHexagonHalf:o["ko"],BIconHourglass:o["lo"],BIconHourglassBottom:o["mo"],BIconHourglassSplit:o["no"],BIconHourglassTop:o["oo"],BIconHouse:o["po"],BIconHouseDoor:o["qo"],BIconHouseDoorFill:o["ro"],BIconHouseFill:o["so"],BIconHr:o["to"],BIconImage:o["uo"],BIconImageAlt:o["vo"],BIconImageFill:o["wo"],BIconImages:o["xo"],BIconInbox:o["yo"],BIconInboxFill:o["zo"],BIconInboxes:o["Ao"],BIconInboxesFill:o["Bo"],BIconInfo:o["Co"],BIconInfoCircle:o["Do"],BIconInfoCircleFill:o["Eo"],BIconInfoSquare:o["Fo"],BIconInfoSquareFill:o["Go"],BIconInputCursor:o["Ho"],BIconInputCursorText:o["Io"],BIconInstagram:o["Jo"],BIconIntersect:o["Ko"],BIconJournal:o["Lo"],BIconJournalAlbum:o["Mo"],BIconJournalArrowDown:o["No"],BIconJournalArrowUp:o["Oo"],BIconJournalBookmark:o["Po"],BIconJournalBookmarkFill:o["Qo"],BIconJournalCheck:o["Ro"],BIconJournalCode:o["So"],BIconJournalMedical:o["To"],BIconJournalMinus:o["Uo"],BIconJournalPlus:o["Vo"],BIconJournalRichtext:o["Wo"],BIconJournalText:o["Xo"],BIconJournalX:o["Yo"],BIconJournals:o["Zo"],BIconJoystick:o["ap"],BIconJustify:o["bp"],BIconJustifyLeft:o["cp"],BIconJustifyRight:o["dp"],BIconKanban:o["ep"],BIconKanbanFill:o["fp"],BIconKey:o["gp"],BIconKeyFill:o["hp"],BIconKeyboard:o["ip"],BIconKeyboardFill:o["jp"],BIconLadder:o["kp"],BIconLamp:o["lp"],BIconLampFill:o["mp"],BIconLaptop:o["np"],BIconLaptopFill:o["op"],BIconLayers:o["pp"],BIconLayersFill:o["qp"],BIconLayersHalf:o["rp"],BIconLayoutSidebar:o["sp"],BIconLayoutSidebarInset:o["tp"],BIconLayoutSidebarInsetReverse:o["up"],BIconLayoutSidebarReverse:o["vp"],BIconLayoutSplit:o["wp"],BIconLayoutTextSidebar:o["xp"],BIconLayoutTextSidebarReverse:o["yp"],BIconLayoutTextWindow:o["zp"],BIconLayoutTextWindowReverse:o["Ap"],BIconLayoutThreeColumns:o["Bp"],BIconLayoutWtf:o["Cp"],BIconLifePreserver:o["Dp"],BIconLightning:o["Ep"],BIconLightningFill:o["Fp"],BIconLink:o["Gp"],BIconLink45deg:o["Hp"],BIconLinkedin:o["Ip"],BIconList:o["Jp"],BIconListCheck:o["Kp"],BIconListNested:o["Lp"],BIconListOl:o["Mp"],BIconListStars:o["Np"],BIconListTask:o["Op"],BIconListUl:o["Pp"],BIconLock:o["Qp"],BIconLockFill:o["Rp"],BIconMailbox:o["Sp"],BIconMailbox2:o["Tp"],BIconMap:o["Up"],BIconMapFill:o["Vp"],BIconMarkdown:o["Wp"],BIconMarkdownFill:o["Xp"],BIconMenuApp:o["Yp"],BIconMenuAppFill:o["Zp"],BIconMenuButton:o["aq"],BIconMenuButtonFill:o["bq"],BIconMenuButtonWide:o["cq"],BIconMenuButtonWideFill:o["dq"],BIconMenuDown:o["eq"],BIconMenuUp:o["fq"],BIconMic:o["gq"],BIconMicFill:o["hq"],BIconMicMute:o["iq"],BIconMicMuteFill:o["jq"],BIconMinecart:o["kq"],BIconMinecartLoaded:o["lq"],BIconMoon:o["mq"],BIconMouse:o["nq"],BIconMouse2:o["oq"],BIconMouse3:o["pq"],BIconMusicNote:o["qq"],BIconMusicNoteBeamed:o["rq"],BIconMusicNoteList:o["sq"],BIconMusicPlayer:o["tq"],BIconMusicPlayerFill:o["uq"],BIconNewspaper:o["vq"],BIconNodeMinus:o["wq"],BIconNodeMinusFill:o["xq"],BIconNodePlus:o["yq"],BIconNodePlusFill:o["zq"],BIconNut:o["Aq"],BIconNutFill:o["Bq"],BIconOctagon:o["Cq"],BIconOctagonFill:o["Dq"],BIconOctagonHalf:o["Eq"],BIconOption:o["Fq"],BIconOutlet:o["Gq"],BIconPaperclip:o["Hq"],BIconParagraph:o["Iq"],BIconPatchCheck:o["Jq"],BIconPatchCheckFill:o["Kq"],BIconPatchExclamation:o["Lq"],BIconPatchExclamationFill:o["Mq"],BIconPatchMinus:o["Nq"],BIconPatchMinusFill:o["Oq"],BIconPatchPlus:o["Pq"],BIconPatchPlusFill:o["Qq"],BIconPatchQuestion:o["Rq"],BIconPatchQuestionFill:o["Sq"],BIconPause:o["Tq"],BIconPauseBtn:o["Uq"],BIconPauseBtnFill:o["Vq"],BIconPauseCircle:o["Wq"],BIconPauseCircleFill:o["Xq"],BIconPauseFill:o["Yq"],BIconPeace:o["Zq"],BIconPeaceFill:o["ar"],BIconPen:o["br"],BIconPenFill:o["cr"],BIconPencil:o["dr"],BIconPencilFill:o["er"],BIconPencilSquare:o["fr"],BIconPentagon:o["gr"],BIconPentagonFill:o["hr"],BIconPentagonHalf:o["ir"],BIconPeople:o["jr"],BIconPeopleFill:o["kr"],BIconPercent:o["lr"],BIconPerson:o["mr"],BIconPersonBadge:o["nr"],BIconPersonBadgeFill:o["or"],BIconPersonBoundingBox:o["pr"],BIconPersonCheck:o["qr"],BIconPersonCheckFill:o["rr"],BIconPersonCircle:o["sr"],BIconPersonDash:o["tr"],BIconPersonDashFill:o["ur"],BIconPersonFill:o["vr"],BIconPersonLinesFill:o["wr"],BIconPersonPlus:o["xr"],BIconPersonPlusFill:o["yr"],BIconPersonSquare:o["zr"],BIconPersonX:o["Ar"],BIconPersonXFill:o["Br"],BIconPhone:o["Cr"],BIconPhoneFill:o["Dr"],BIconPhoneLandscape:o["Er"],BIconPhoneLandscapeFill:o["Fr"],BIconPhoneVibrate:o["Gr"],BIconPieChart:o["Hr"],BIconPieChartFill:o["Ir"],BIconPip:o["Jr"],BIconPipFill:o["Kr"],BIconPlay:o["Lr"],BIconPlayBtn:o["Mr"],BIconPlayBtnFill:o["Nr"],BIconPlayCircle:o["Or"],BIconPlayCircleFill:o["Pr"],BIconPlayFill:o["Qr"],BIconPlug:o["Rr"],BIconPlugFill:o["Sr"],BIconPlus:o["Tr"],BIconPlusCircle:o["Ur"],BIconPlusCircleFill:o["Vr"],BIconPlusSquare:o["Wr"],BIconPlusSquareFill:o["Xr"],BIconPower:o["Yr"],BIconPrinter:o["Zr"],BIconPrinterFill:o["as"],BIconPuzzle:o["bs"],BIconPuzzleFill:o["cs"],BIconQuestion:o["ds"],BIconQuestionCircle:o["es"],BIconQuestionCircleFill:o["fs"],BIconQuestionDiamond:o["gs"],BIconQuestionDiamondFill:o["hs"],BIconQuestionOctagon:o["is"],BIconQuestionOctagonFill:o["js"],BIconQuestionSquare:o["ks"],BIconQuestionSquareFill:o["ls"],BIconReceipt:o["ms"],BIconReceiptCutoff:o["ns"],BIconReception0:o["os"],BIconReception1:o["ps"],BIconReception2:o["qs"],BIconReception3:o["rs"],BIconReception4:o["ss"],BIconRecord:o["ts"],BIconRecord2:o["us"],BIconRecord2Fill:o["vs"],BIconRecordBtn:o["ws"],BIconRecordBtnFill:o["xs"],BIconRecordCircle:o["ys"],BIconRecordCircleFill:o["zs"],BIconRecordFill:o["As"],BIconReply:o["Bs"],BIconReplyAll:o["Cs"],BIconReplyAllFill:o["Ds"],BIconReplyFill:o["Es"],BIconRss:o["Fs"],BIconRssFill:o["Gs"],BIconScissors:o["Hs"],BIconScrewdriver:o["Is"],BIconSearch:o["Js"],BIconSegmentedNav:o["Ks"],BIconServer:o["Ls"],BIconShare:o["Ms"],BIconShareFill:o["Ns"],BIconShield:o["Os"],BIconShieldCheck:o["Ps"],BIconShieldExclamation:o["Qs"],BIconShieldFill:o["Rs"],BIconShieldFillCheck:o["Ss"],BIconShieldFillExclamation:o["Ts"],BIconShieldFillMinus:o["Us"],BIconShieldFillPlus:o["Vs"],BIconShieldFillX:o["Ws"],BIconShieldLock:o["Xs"],BIconShieldLockFill:o["Ys"],BIconShieldMinus:o["Zs"],BIconShieldPlus:o["at"],BIconShieldShaded:o["bt"],BIconShieldSlash:o["ct"],BIconShieldSlashFill:o["dt"],BIconShieldX:o["et"],BIconShift:o["ft"],BIconShiftFill:o["gt"],BIconShop:o["ht"],BIconShopWindow:o["it"],BIconShuffle:o["jt"],BIconSignpost:o["kt"],BIconSignpost2:o["lt"],BIconSignpost2Fill:o["mt"],BIconSignpostFill:o["nt"],BIconSignpostSplit:o["ot"],BIconSignpostSplitFill:o["pt"],BIconSim:o["qt"],BIconSimFill:o["rt"],BIconSkipBackward:o["st"],BIconSkipBackwardBtn:o["tt"],BIconSkipBackwardBtnFill:o["ut"],BIconSkipBackwardCircle:o["vt"],BIconSkipBackwardCircleFill:o["wt"],BIconSkipBackwardFill:o["xt"],BIconSkipEnd:o["yt"],BIconSkipEndBtn:o["zt"],BIconSkipEndBtnFill:o["At"],BIconSkipEndCircle:o["Bt"],BIconSkipEndCircleFill:o["Ct"],BIconSkipEndFill:o["Dt"],BIconSkipForward:o["Et"],BIconSkipForwardBtn:o["Ft"],BIconSkipForwardBtnFill:o["Gt"],BIconSkipForwardCircle:o["Ht"],BIconSkipForwardCircleFill:o["It"],BIconSkipForwardFill:o["Jt"],BIconSkipStart:o["Kt"],BIconSkipStartBtn:o["Lt"],BIconSkipStartBtnFill:o["Mt"],BIconSkipStartCircle:o["Nt"],BIconSkipStartCircleFill:o["Ot"],BIconSkipStartFill:o["Pt"],BIconSlack:o["Qt"],BIconSlash:o["Rt"],BIconSlashCircle:o["St"],BIconSlashCircleFill:o["Tt"],BIconSlashSquare:o["Ut"],BIconSlashSquareFill:o["Vt"],BIconSliders:o["Wt"],BIconSmartwatch:o["Xt"],BIconSortAlphaDown:o["Yt"],BIconSortAlphaDownAlt:o["Zt"],BIconSortAlphaUp:o["au"],BIconSortAlphaUpAlt:o["bu"],BIconSortDown:o["cu"],BIconSortDownAlt:o["du"],BIconSortNumericDown:o["eu"],BIconSortNumericDownAlt:o["fu"],BIconSortNumericUp:o["gu"],BIconSortNumericUpAlt:o["hu"],BIconSortUp:o["iu"],BIconSortUpAlt:o["ju"],BIconSoundwave:o["ku"],BIconSpeaker:o["lu"],BIconSpeakerFill:o["mu"],BIconSpellcheck:o["nu"],BIconSquare:o["ou"],BIconSquareFill:o["pu"],BIconSquareHalf:o["qu"],BIconStar:o["ru"],BIconStarFill:o["su"],BIconStarHalf:o["tu"],BIconStickies:o["uu"],BIconStickiesFill:o["vu"],BIconSticky:o["wu"],BIconStickyFill:o["xu"],BIconStop:o["yu"],BIconStopBtn:o["zu"],BIconStopBtnFill:o["Au"],BIconStopCircle:o["Bu"],BIconStopCircleFill:o["Cu"],BIconStopFill:o["Du"],BIconStoplights:o["Eu"],BIconStoplightsFill:o["Fu"],BIconStopwatch:o["Gu"],BIconStopwatchFill:o["Hu"],BIconSubtract:o["Iu"],BIconSuitClub:o["Ju"],BIconSuitClubFill:o["Ku"],BIconSuitDiamond:o["Lu"],BIconSuitDiamondFill:o["Mu"],BIconSuitHeart:o["Nu"],BIconSuitHeartFill:o["Ou"],BIconSuitSpade:o["Pu"],BIconSuitSpadeFill:o["Qu"],BIconSun:o["Ru"],BIconSunglasses:o["Su"],BIconTable:o["Tu"],BIconTablet:o["Uu"],BIconTabletFill:o["Vu"],BIconTabletLandscape:o["Wu"],BIconTabletLandscapeFill:o["Xu"],BIconTag:o["Yu"],BIconTagFill:o["Zu"],BIconTags:o["av"],BIconTagsFill:o["bv"],BIconTelephone:o["cv"],BIconTelephoneFill:o["dv"],BIconTelephoneForward:o["ev"],BIconTelephoneForwardFill:o["fv"],BIconTelephoneInbound:o["gv"],BIconTelephoneInboundFill:o["hv"],BIconTelephoneMinus:o["iv"],BIconTelephoneMinusFill:o["jv"],BIconTelephoneOutbound:o["kv"],BIconTelephoneOutboundFill:o["lv"],BIconTelephonePlus:o["mv"],BIconTelephonePlusFill:o["nv"],BIconTelephoneX:o["ov"],BIconTelephoneXFill:o["pv"],BIconTerminal:o["qv"],BIconTerminalFill:o["rv"],BIconTextCenter:o["sv"],BIconTextIndentLeft:o["tv"],BIconTextIndentRight:o["uv"],BIconTextLeft:o["vv"],BIconTextParagraph:o["wv"],BIconTextRight:o["xv"],BIconTextarea:o["yv"],BIconTextareaResize:o["zv"],BIconTextareaT:o["Av"],BIconThermometer:o["Bv"],BIconThermometerHalf:o["Cv"],BIconThreeDots:o["Dv"],BIconThreeDotsVertical:o["Ev"],BIconToggle2Off:o["Fv"],BIconToggle2On:o["Gv"],BIconToggleOff:o["Hv"],BIconToggleOn:o["Iv"],BIconToggles:o["Jv"],BIconToggles2:o["Kv"],BIconTools:o["Lv"],BIconTrash:o["Mv"],BIconTrash2:o["Nv"],BIconTrash2Fill:o["Ov"],BIconTrashFill:o["Pv"],BIconTree:o["Qv"],BIconTreeFill:o["Rv"],BIconTriangle:o["Sv"],BIconTriangleFill:o["Tv"],BIconTriangleHalf:o["Uv"],BIconTrophy:o["Vv"],BIconTrophyFill:o["Wv"],BIconTruck:o["Xv"],BIconTruckFlatbed:o["Yv"],BIconTv:o["Zv"],BIconTvFill:o["aw"],BIconTwitch:o["bw"],BIconTwitter:o["cw"],BIconType:o["dw"],BIconTypeBold:o["ew"],BIconTypeH1:o["fw"],BIconTypeH2:o["gw"],BIconTypeH3:o["hw"],BIconTypeItalic:o["iw"],BIconTypeStrikethrough:o["jw"],BIconTypeUnderline:o["kw"],BIconUiChecks:o["lw"],BIconUiChecksGrid:o["mw"],BIconUiRadios:o["nw"],BIconUiRadiosGrid:o["ow"],BIconUnion:o["pw"],BIconUnlock:o["qw"],BIconUnlockFill:o["rw"],BIconUpc:o["sw"],BIconUpcScan:o["tw"],BIconUpload:o["uw"],BIconVectorPen:o["vw"],BIconViewList:o["ww"],BIconViewStacked:o["xw"],BIconVinyl:o["yw"],BIconVinylFill:o["zw"],BIconVoicemail:o["Aw"],BIconVolumeDown:o["Bw"],BIconVolumeDownFill:o["Cw"],BIconVolumeMute:o["Dw"],BIconVolumeMuteFill:o["Ew"],BIconVolumeOff:o["Fw"],BIconVolumeOffFill:o["Gw"],BIconVolumeUp:o["Hw"],BIconVolumeUpFill:o["Iw"],BIconVr:o["Jw"],BIconWallet:o["Kw"],BIconWallet2:o["Lw"],BIconWalletFill:o["Mw"],BIconWatch:o["Nw"],BIconWifi:o["Ow"],BIconWifi1:o["Pw"],BIconWifi2:o["Qw"],BIconWifiOff:o["Rw"],BIconWindow:o["Sw"],BIconWrench:o["Tw"],BIconX:o["Uw"],BIconXCircle:o["Vw"],BIconXCircleFill:o["Ww"],BIconXDiamond:o["Xw"],BIconXDiamondFill:o["Yw"],BIconXOctagon:o["Zw"],BIconXOctagonFill:o["ax"],BIconXSquare:o["bx"],BIconXSquareFill:o["cx"],BIconYoutube:o["dx"],BIconZoomIn:o["ex"],BIconZoomOut:o["fx"]}})},b42e:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},a={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function i(t,e){return e?e.toUpperCase():""}function o(t){for(var e,n={},r=0,o=t.split(a.styleList);r<o.length;r++){var s=o[r].split(a.styleProp),c=s[0],l=s[1];(c=c.trim())&&("string"==typeof l&&(l=l.trim()),n[(e=c,e.replace(a.kebab,i))]=l)}return n}function s(){for(var t,e,n={},a=arguments.length;a--;)for(var i=0,s=Object.keys(arguments[a]);i<s.length;i++)switch(t=s[i]){case"class":case"style":case"directives":if(Array.isArray(n[t])||(n[t]=[]),"style"===t){var c=void 0;c=Array.isArray(arguments[a].style)?arguments[a].style:[arguments[a].style];for(var l=0;l<c.length;l++){var u=c[l];"string"==typeof u&&(c[l]=o(u))}arguments[a].style=c}n[t]=n[t].concat(arguments[a][t]);break;case"staticClass":if(!arguments[a][t])break;void 0===n[t]&&(n[t]=""),n[t]&&(n[t]+=" "),n[t]+=arguments[a][t].trim();break;case"on":case"nativeOn":n[t]||(n[t]={});for(var h=0,d=Object.keys(arguments[a][t]||{});h<d.length;h++)e=d[h],n[t][e]?n[t][e]=[].concat(n[t][e],arguments[a][t][e]):n[t][e]=arguments[a][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":n[t]||(n[t]={}),n[t]=r({},arguments[a][t],n[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:n[t]||(n[t]=arguments[a][t])}return n}},b508:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("d82f"),a=function(t){var e=Object(r["c"])(null);return function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var i=JSON.stringify(r);return e[i]=e[i]||t.apply(null,r)}}},b50d:function(t,e,n){"use strict";var r=n("c532"),a=n("467f"),i=n("7aac"),o=n("30b5"),s=n("83b9"),c=n("c345"),l=n("3934"),u=n("2d83");t.exports=function(t){return new Promise((function(e,n){var h=t.data,d=t.headers,f=t.responseType;r.isFormData(h)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(t.auth){var v=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";d.Authorization="Basic "+btoa(v+":"+m)}var b=s(t.baseURL,t.url);function g(){if(p){var r="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,i=f&&"text"!==f&&"json"!==f?p.response:p.responseText,o={data:i,status:p.status,statusText:p.statusText,headers:r,config:t,request:p};a(e,n,o),p=null}}if(p.open(t.method.toUpperCase(),o(b,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,"onloadend"in p?p.onloadend=g:p.onreadystatechange=function(){p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))&&setTimeout(g)},p.onabort=function(){p&&(n(u("Request aborted",t,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(u("Network Error",t,null,p)),p=null},p.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(u(e,t,t.transitional&&t.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var y=(t.withCredentials||l(b))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;y&&(d[t.xsrfHeaderName]=y)}"setRequestHeader"in p&&r.forEach(d,(function(t,e){"undefined"===typeof h&&"content-type"===e.toLowerCase()?delete d[e]:p.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(p.withCredentials=!!t.withCredentials),f&&"json"!==f&&(p.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){p&&(p.abort(),n(t),p=null)})),h||(h=null),p.send(h)}))}},b575:function(t,e,n){var r,a,i,o,s,c,l,u,h=n("da84"),d=n("06cf").f,f=n("2cf4").set,p=n("1cdc"),v=n("d4c3"),m=n("a4b4"),b=n("605d"),g=h.MutationObserver||h.WebKitMutationObserver,y=h.document,O=h.process,z=h.Promise,w=d(h,"queueMicrotask"),j=w&&w.value;j||(r=function(){var t,e;b&&(t=O.domain)&&t.exit();while(a){e=a.fn,a=a.next;try{e()}catch(n){throw a?o():i=void 0,n}}i=void 0,t&&t.enter()},p||b||m||!g||!y?!v&&z&&z.resolve?(l=z.resolve(void 0),l.constructor=z,u=l.then,o=function(){u.call(l,r)}):o=b?function(){O.nextTick(r)}:function(){f.call(h,r)}:(s=!0,c=y.createTextNode(""),new g(r).observe(c,{characterData:!0}),o=function(){c.data=s=!s})),t.exports=j||function(t){var e={fn:t,next:void 0};i&&(i.next=e),a||(a=e,o()),i=e}},b622:function(t,e,n){var r=n("da84"),a=n("5692"),i=n("5135"),o=n("90e3"),s=n("4930"),c=n("fdbf"),l=a("wks"),u=r.Symbol,h=c?u:u&&u.withoutSetter||o;t.exports=function(t){return i(l,t)&&(s||"string"==typeof l[t])||(s&&i(u,t)?l[t]=u[t]:l[t]=h("Symbol."+t)),l[t]}},b727:function(t,e,n){var r=n("0366"),a=n("44ad"),i=n("7b0b"),o=n("50c4"),s=n("65f0"),c=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,h=6==t,d=7==t,f=5==t||h;return function(p,v,m,b){for(var g,y,O=i(p),z=a(O),w=r(v,m,3),j=o(z.length),M=0,A=b||s,V=e?A(p,j):n||d?A(p,0):void 0;j>M;M++)if((f||M in z)&&(g=z[M],y=w(g,M,O),t))if(e)V[M]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return M;case 2:c.call(V,g)}else switch(t){case 4:return!1;case 7:c.call(V,g)}return h?-1:l||u?u:V}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},bc3a:function(t,e,n){t.exports=n("cee4")},c04e:function(t,e,n){var r=n("861d"),a=n("d9b5"),i=n("dc4a"),o=n("485a"),s=n("b622"),c=s("toPrimitive");t.exports=function(t,e){if(!r(t)||a(t))return t;var n,s=i(t,c);if(s){if(void 0===e&&(e="default"),n=s.call(t,e),!r(n)||a(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),o(t,e)}},c074:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var r={prefix:"fas",iconName:"door-open",icon:[640,512,[],"f52b","M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z"]},a={prefix:"fas",iconName:"file-download",icon:[384,512,[],"f56d","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"]}},c345:function(t,e,n){"use strict";var r=n("c532"),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,o={};return t?(r.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(o[e]&&a.indexOf(e)>=0)return;o[e]="set-cookie"===e?(o[e]?o[e]:[]).concat([n]):o[e]?o[e]+", "+n:n}})),o):o}},c401:function(t,e,n){"use strict";var r=n("c532"),a=n("2444");t.exports=function(t,e,n){var i=this||a;return r.forEach(n,(function(n){t=n.call(i,t,e)})),t}},c430:function(t,e){t.exports=!1},c532:function(t,e,n){"use strict";var r=n("1d2b"),a=Object.prototype.toString;function i(t){return"[object Array]"===a.call(t)}function o(t){return"undefined"===typeof t}function s(t){return null!==t&&!o(t)&&null!==t.constructor&&!o(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function c(t){return"[object ArrayBuffer]"===a.call(t)}function l(t){return"undefined"!==typeof FormData&&t instanceof FormData}function u(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function h(t){return"string"===typeof t}function d(t){return"number"===typeof t}function f(t){return null!==t&&"object"===typeof t}function p(t){if("[object Object]"!==a.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function v(t){return"[object Date]"===a.call(t)}function m(t){return"[object File]"===a.call(t)}function b(t){return"[object Blob]"===a.call(t)}function g(t){return"[object Function]"===a.call(t)}function y(t){return f(t)&&g(t.pipe)}function O(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function z(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function w(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function j(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),i(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.call(null,t[a],a,t)}function M(){var t={};function e(e,n){p(t[n])&&p(e)?t[n]=M(t[n],e):p(e)?t[n]=M({},e):i(e)?t[n]=e.slice():t[n]=e}for(var n=0,r=arguments.length;n<r;n++)j(arguments[n],e);return t}function A(t,e,n){return j(e,(function(e,a){t[a]=n&&"function"===typeof e?r(e,n):e})),t}function V(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}t.exports={isArray:i,isArrayBuffer:c,isBuffer:s,isFormData:l,isArrayBufferView:u,isString:h,isNumber:d,isObject:f,isPlainObject:p,isUndefined:o,isDate:v,isFile:m,isBlob:b,isFunction:g,isStream:y,isURLSearchParams:O,isStandardBrowserEnv:w,forEach:j,merge:M,extend:A,trim:z,stripBOM:V}},c637:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return h})),n.d(e,"j",(function(){return d})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return p})),n.d(e,"m",(function(){return v})),n.d(e,"n",(function(){return m})),n.d(e,"o",(function(){return b})),n.d(e,"p",(function(){return g})),n.d(e,"q",(function(){return y})),n.d(e,"r",(function(){return O})),n.d(e,"s",(function(){return z})),n.d(e,"t",(function(){return w})),n.d(e,"u",(function(){return j})),n.d(e,"v",(function(){return M})),n.d(e,"w",(function(){return A})),n.d(e,"x",(function(){return V})),n.d(e,"y",(function(){return C})),n.d(e,"z",(function(){return I})),n.d(e,"A",(function(){return S})),n.d(e,"C",(function(){return k})),n.d(e,"D",(function(){return T})),n.d(e,"E",(function(){return H})),n.d(e,"F",(function(){return L})),n.d(e,"G",(function(){return B})),n.d(e,"H",(function(){return P})),n.d(e,"I",(function(){return E})),n.d(e,"J",(function(){return x})),n.d(e,"K",(function(){return _})),n.d(e,"L",(function(){return F})),n.d(e,"M",(function(){return D})),n.d(e,"O",(function(){return R})),n.d(e,"P",(function(){return N})),n.d(e,"Q",(function(){return $})),n.d(e,"R",(function(){return U})),n.d(e,"S",(function(){return q})),n.d(e,"T",(function(){return G})),n.d(e,"U",(function(){return W})),n.d(e,"V",(function(){return K})),n.d(e,"W",(function(){return X})),n.d(e,"X",(function(){return Y})),n.d(e,"Y",(function(){return J})),n.d(e,"ab",(function(){return Q})),n.d(e,"bb",(function(){return Z})),n.d(e,"cb",(function(){return tt})),n.d(e,"db",(function(){return et})),n.d(e,"eb",(function(){return nt})),n.d(e,"fb",(function(){return rt})),n.d(e,"gb",(function(){return at})),n.d(e,"hb",(function(){return it})),n.d(e,"ib",(function(){return ot})),n.d(e,"jb",(function(){return st})),n.d(e,"kb",(function(){return ct})),n.d(e,"lb",(function(){return lt})),n.d(e,"mb",(function(){return ut})),n.d(e,"nb",(function(){return ht})),n.d(e,"ob",(function(){return dt})),n.d(e,"pb",(function(){return ft})),n.d(e,"qb",(function(){return pt})),n.d(e,"rb",(function(){return vt})),n.d(e,"sb",(function(){return mt})),n.d(e,"tb",(function(){return bt})),n.d(e,"ub",(function(){return gt})),n.d(e,"vb",(function(){return yt})),n.d(e,"wb",(function(){return Ot})),n.d(e,"xb",(function(){return zt})),n.d(e,"yb",(function(){return wt})),n.d(e,"zb",(function(){return jt})),n.d(e,"Ab",(function(){return Mt})),n.d(e,"Bb",(function(){return At})),n.d(e,"Cb",(function(){return Vt})),n.d(e,"Db",(function(){return Ct})),n.d(e,"Eb",(function(){return It})),n.d(e,"Fb",(function(){return St})),n.d(e,"Gb",(function(){return kt})),n.d(e,"Hb",(function(){return Tt})),n.d(e,"Ib",(function(){return Ht})),n.d(e,"Jb",(function(){return Lt})),n.d(e,"Kb",(function(){return Bt})),n.d(e,"Lb",(function(){return Pt})),n.d(e,"Mb",(function(){return Et})),n.d(e,"Nb",(function(){return xt})),n.d(e,"Ob",(function(){return _t})),n.d(e,"Pb",(function(){return Ft})),n.d(e,"Qb",(function(){return Dt})),n.d(e,"Ub",(function(){return Rt})),n.d(e,"Vb",(function(){return Nt})),n.d(e,"Wb",(function(){return $t})),n.d(e,"Xb",(function(){return Ut})),n.d(e,"Yb",(function(){return qt})),n.d(e,"Zb",(function(){return Gt})),n.d(e,"ac",(function(){return Wt})),n.d(e,"bc",(function(){return Kt})),n.d(e,"cc",(function(){return Xt})),n.d(e,"dc",(function(){return Yt})),n.d(e,"ec",(function(){return Jt})),n.d(e,"fc",(function(){return Qt})),n.d(e,"gc",(function(){return Zt})),n.d(e,"hc",(function(){return te})),n.d(e,"ic",(function(){return ee})),n.d(e,"jc",(function(){return ne})),n.d(e,"lc",(function(){return re})),n.d(e,"mc",(function(){return ae})),n.d(e,"nc",(function(){return ie})),n.d(e,"oc",(function(){return oe})),n.d(e,"pc",(function(){return se})),n.d(e,"qc",(function(){return ce})),n.d(e,"rc",(function(){return le})),n.d(e,"tc",(function(){return ue})),n.d(e,"wc",(function(){return he})),n.d(e,"B",(function(){return de})),n.d(e,"N",(function(){return fe})),n.d(e,"Z",(function(){return pe})),n.d(e,"Rb",(function(){return ve})),n.d(e,"Sb",(function(){return me})),n.d(e,"Tb",(function(){return be})),n.d(e,"kc",(function(){return ge})),n.d(e,"sc",(function(){return ye})),n.d(e,"uc",(function(){return Oe})),n.d(e,"vc",(function(){return ze})),n.d(e,"xc",(function(){return we})),n.d(e,"yc",(function(){return je})),n.d(e,"zc",(function(){return Me}));var r="BAlert",a="BAspect",i="BAvatar",o="BAvatarGroup",s="BBadge",c="BBreadcrumb",l="BBreadcrumbItem",u="BBreadcrumbLink",h="BButton",d="BButtonClose",f="BButtonGroup",p="BButtonToolbar",v="BCalendar",m="BCard",b="BCardBody",g="BCardFooter",y="BCardGroup",O="BCardHeader",z="BCardImg",w="BCardImgLazy",j="BCardSubTitle",M="BCardText",A="BCardTitle",V="BCarousel",C="BCarouselSlide",I="BCol",S="BCollapse",k="BContainer",T="BDropdown",H="BDropdownDivider",L="BDropdownForm",B="BDropdownGroup",P="BDropdownHeader",E="BDropdownItem",x="BDropdownItemButton",_="BDropdownText",F="BEmbed",D="BForm",R="BFormCheckbox",N="BFormCheckboxGroup",$="BFormDatalist",U="BFormDatepicker",q="BFormFile",G="BFormGroup",W="BFormInput",K="BFormInvalidFeedback",X="BFormRadio",Y="BFormRadioGroup",J="BFormRating",Q="BFormRow",Z="BFormSelect",tt="BFormSelectOption",et="BFormSelectOptionGroup",nt="BFormSpinbutton",rt="BFormTag",at="BFormTags",it="BFormText",ot="BFormTextarea",st="BFormTimepicker",ct="BFormValidFeedback",lt="BIcon",ut="BIconstack",ht="BIconBase",dt="BImg",ft="BImgLazy",pt="BInputGroup",vt="BInputGroupAddon",mt="BInputGroupAppend",bt="BInputGroupPrepend",gt="BInputGroupText",yt="BJumbotron",Ot="BLink",zt="BListGroup",wt="BListGroupItem",jt="BMedia",Mt="BMediaAside",At="BMediaBody",Vt="BModal",Ct="BMsgBox",It="BNav",St="BNavbar",kt="BNavbarBrand",Tt="BNavbarNav",Ht="BNavbarToggle",Lt="BNavForm",Bt="BNavItem",Pt="BNavItemDropdown",Et="BNavText",xt="BOverlay",_t="BPagination",Ft="BPaginationNav",Dt="BPopover",Rt="BProgress",Nt="BProgressBar",$t="BRow",Ut="BSidebar",qt="BSkeleton",Gt="BSkeletonIcon",Wt="BSkeletonImg",Kt="BSkeletonTable",Xt="BSkeletonWrapper",Yt="BSpinner",Jt="BTab",Qt="BTable",Zt="BTableCell",te="BTableLite",ee="BTableSimple",ne="BTabs",re="BTbody",ae="BTfoot",ie="BTh",oe="BThead",se="BTime",ce="BToast",le="BToaster",ue="BTooltip",he="BTr",de="BVCollapse",fe="BVFormBtnLabelControl",pe="BVFormRatingStar",ve="BVPopover",me="BVPopoverTemplate",be="BVPopper",ge="BVTabButton",ye="BVToastPop",Oe="BVTooltip",ze="BVTooltipTemplate",we="BVTransition",je="BVTransporter",Me="BVTransporterTarget"},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),a=n("ce4e"),i="__core-js_shared__",o=r[i]||a(i,{});t.exports=o},c8af:function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},c9a9:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("7b1e"),a=n("d82f");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){return d(t)||h(t)||u(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function h(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function d(t){if(Array.isArray(t))return f(t)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var p=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return Object(r["a"])(e)?e.reduce((function(e,n){return[].concat(c(e),[t(n,n)])}),[]):Object(r["k"])(e)?Object(a["h"])(e).reduce((function(n,r){return o(o({},n),{},s({},r,t(e[r],e[r])))}),{}):n}},ca84:function(t,e,n){var r=n("5135"),a=n("fc6a"),i=n("4d64").indexOf,o=n("d012");t.exports=function(t,e){var n,s=a(t),c=0,l=[];for(n in s)!r(o,n)&&r(s,n)&&l.push(n);while(e.length>c)r(s,n=e[c++])&&(~i(l,n)||l.push(n));return l}},ca88:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return b})),n.d(e,"d",(function(){return g})),n.d(e,"b",(function(){return y}));var r=n("e863");function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function s(t){var e=d();return function(){var n,r=v(t);if(e){var a=v(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){var e="function"===typeof Map?new Map:void 0;return u=function(t){if(null===t||!f(t))return t;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return h(t,arguments,v(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),p(n,t)},u(t)}function h(t,e,n){return h=d()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var a=Function.bind.apply(t,r),i=new a;return n&&p(i,n.prototype),i},h.apply(null,arguments)}function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var m=r["h"]?r["k"].Element:function(t){o(n,t);var e=s(n);function n(){return i(this,n),e.apply(this,arguments)}return n}(u(Object)),b=r["h"]?r["k"].HTMLElement:function(t){o(n,t);var e=s(n);function n(){return i(this,n),e.apply(this,arguments)}return n}(m),g=r["h"]?r["k"].SVGElement:function(t){o(n,t);var e=s(n);function n(){return i(this,n),e.apply(this,arguments)}return n}(m),y=r["h"]?r["k"].File:function(t){o(n,t);var e=s(n);function n(){return i(this,n),e.apply(this,arguments)}return n}(u(Object))},caad:function(t,e,n){"use strict";var r=n("23e7"),a=n("4d64").includes,i=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},cc12:function(t,e,n){var r=n("da84"),a=n("861d"),i=r.document,o=a(i)&&a(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),a=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==a},{assign:a})},cdf9:function(t,e,n){var r=n("825a"),a=n("861d"),i=n("f069");t.exports=function(t,e){if(r(t),a(e)&&e.constructor===t)return e;var n=i.f(t),o=n.resolve;return o(e),n.promise}},ce4e:function(t,e,n){var r=n("da84");t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},cee4:function(t,e,n){"use strict";var r=n("c532"),a=n("1d2b"),i=n("0a06"),o=n("4a7b"),s=n("2444");function c(t){var e=new i(t),n=a(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n}var l=c(s);l.Axios=i,l.create=function(t){return c(o(l.defaults,t))},l.Cancel=n("7a77"),l.CancelToken=n("8df4"),l.isCancel=n("2e67"),l.all=function(t){return Promise.all(t)},l.spread=n("0df6"),l.isAxiosError=n("5f02"),t.exports=l,t.exports.default=l},cf75:function(t,e,n){"use strict";n.d(e,"f",(function(){return f})),n.d(e,"h",(function(){return p})),n.d(e,"g",(function(){return v})),n.d(e,"c",(function(){return m})),n.d(e,"a",(function(){return b})),n.d(e,"e",(function(){return g})),n.d(e,"d",(function(){return O})),n.d(e,"b",(function(){return w}));var r=n("a723"),a=n("c9a9"),i=n("228e"),o=n("6c06"),s=n("7b1e"),c=n("d82f"),l=n("fa73");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(t,e){return t+Object(l["j"])(e)},p=function(t,e){return Object(l["d"])(e.replace(t,""))},v=function(t,e){return e+(t?Object(l["j"])(t):"")},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r["a"],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,i=!0===n;return a=i?a:n,h(h(h({},t?{type:t}:{}),i?{required:i}:Object(s["o"])(e)?{}:{default:Object(s["j"])(e)?function(){return e}:e}),Object(s["o"])(a)?{}:{validator:a})},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o["a"];if(Object(s["a"])(t))return t.map(e);var n={};for(var r in t)Object(c["g"])(t,r)&&(n[e(r)]=Object(s["j"])(t[r])?Object(c["b"])(t[r]):t[r]);return n},g=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o["a"];return(Object(s["a"])(t)?t.slice():Object(c["h"])(t)).reduce((function(t,r){return t[n(r)]=e[r],t}),{})},y=function(t,e,n){return h(h({},Object(a["a"])(t)),{},{default:function(){var r=Object(i["c"])(n,e,t.default);return Object(s["f"])(r)?r():r}})},O=function(t,e){return Object(c["h"])(t).reduce((function(n,r){return h(h({},n),{},d({},r,y(t[r],r,e)))}),{})},z=y({},"","").default.name,w=function(t){return Object(s["f"])(t)&&t.name!==z}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),a=n("1626"),i=function(t){return a(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,i=a&&!r.call({1:2},1);e.f=i?function(t){var e=a(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("825a"),a=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(i){}return function(n,i){return r(n),a(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),a=n("6eeb"),i=n("b041");r||a(Object.prototype,"toString",i,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,a=n("5135"),i=n("b622"),o=i("toStringTag");t.exports=function(t,e,n){t&&!a(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),a=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==a.Pebble},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("9263"),i=n("d039"),o=n("b622"),s=n("9112"),c=o("species"),l=RegExp.prototype;t.exports=function(t,e,n,u){var h=o(t),d=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),f=d&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!d||!f||n){var p=/./[h],v=e(h,""[t],(function(t,e,n,r,i){var o=e.exec;return o===a||o===l.exec?d&&!i?{done:!0,value:p.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}));r(String.prototype,t,v[0]),r(l,h,v[1])}u&&s(l[h],"sham",!0)}},d82f:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return h})),n.d(e,"h",(function(){return d})),n.d(e,"g",(function(){return f})),n.d(e,"n",(function(){return p})),n.d(e,"b",(function(){return v})),n.d(e,"k",(function(){return m})),n.d(e,"j",(function(){return b})),n.d(e,"i",(function(){return g})),n.d(e,"m",(function(){return y})),n.d(e,"l",(function(){return O}));var r=n("7b1e");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){return Object.assign.apply(Object,arguments)},c=function(t,e){return Object.create(t,e)},l=function(t,e){return Object.defineProperties(t,e)},u=function(t,e,n){return Object.defineProperty(t,e,n)},h=function(t){return Object.getOwnPropertyNames(t)},d=function(t){return Object.keys(t)},f=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},p=function(t){return Object.prototype.toString.call(t)},v=function(t){return i({},t)},m=function(t,e){return d(t).filter((function(t){return-1!==e.indexOf(t)})).reduce((function(e,n){return i(i({},e),{},o({},n,t[n]))}),{})},b=function(t,e){return d(t).filter((function(t){return-1===e.indexOf(t)})).reduce((function(e,n){return i(i({},e),{},o({},n,t[n]))}),{})},g=function t(e,n){return Object(r["j"])(e)&&Object(r["j"])(n)&&d(n).forEach((function(a){Object(r["j"])(n[a])?(e[a]&&Object(r["j"])(e[a])||(e[a]=n[a]),t(e[a],n[a])):s(e,o({},a,n[a]))})),e},y=function(t){return d(t).sort().reduce((function(e,n){return i(i({},e),{},o({},n,t[n]))}),{})},O=function(){return{enumerable:!0,configurable:!1,writable:!1}}},d925:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},d9b5:function(t,e,n){var r=n("1626"),a=n("d066"),i=n("fdbf");t.exports=i?function(t){return"symbol"==typeof t}:function(t){var e=a("Symbol");return r(e)&&Object(t)instanceof e}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(t,e,n){var r=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},dd40:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},df75:function(t,e,n){var r=n("ca84"),a=n("7839");t.exports=Object.keys||function(t){return r(t,a)}},e163:function(t,e,n){var r=n("5135"),a=n("1626"),i=n("7b0b"),o=n("f772"),s=n("e177"),c=o("IE_PROTO"),l=Object.prototype;t.exports=s?Object.getPrototypeOf:function(t){var e=i(t);if(r(e,c))return e[c];var n=e.constructor;return a(n)&&e instanceof n?n.prototype:e instanceof Object?l:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),a=n("44d2"),i=n("3f8c"),o=n("69f3"),s=n("7dd0"),c="Array Iterator",l=o.set,u=o.getterFor(c);t.exports=s(Array,"Array",(function(t,e){l(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=u(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,a("keys"),a("values"),a("entries")},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var a in e)r(t,a,e[a],n);return t}},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e683:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},e6cf:function(t,e,n){"use strict";var r,a,i,o,s=n("23e7"),c=n("c430"),l=n("da84"),u=n("d066"),h=n("fea9"),d=n("6eeb"),f=n("e2cc"),p=n("d2bb"),v=n("d44e"),m=n("2626"),b=n("59ed"),g=n("1626"),y=n("861d"),O=n("19aa"),z=n("8925"),w=n("2266"),j=n("1c7e"),M=n("4840"),A=n("2cf4").set,V=n("b575"),C=n("cdf9"),I=n("44de"),S=n("f069"),k=n("e667"),T=n("69f3"),H=n("94ca"),L=n("b622"),B=n("6069"),P=n("605d"),E=n("2d00"),x=L("species"),_="Promise",F=T.get,D=T.set,R=T.getterFor(_),N=h&&h.prototype,$=h,U=N,q=l.TypeError,G=l.document,W=l.process,K=S.f,X=K,Y=!!(G&&G.createEvent&&l.dispatchEvent),J=g(l.PromiseRejectionEvent),Q="unhandledrejection",Z="rejectionhandled",tt=0,et=1,nt=2,rt=1,at=2,it=!1,ot=H(_,(function(){var t=z($),e=t!==String($);if(!e&&66===E)return!0;if(c&&!U["finally"])return!0;if(E>=51&&/native code/.test(t))return!1;var n=new $((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},a=n.constructor={};return a[x]=r,it=n.then((function(){}))instanceof r,!it||!e&&B&&!J})),st=ot||!j((function(t){$.all(t)["catch"]((function(){}))})),ct=function(t){var e;return!(!y(t)||!g(e=t.then))&&e},lt=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;V((function(){var r=t.value,a=t.state==et,i=0;while(n.length>i){var o,s,c,l=n[i++],u=a?l.ok:l.fail,h=l.resolve,d=l.reject,f=l.domain;try{u?(a||(t.rejection===at&&ft(t),t.rejection=rt),!0===u?o=r:(f&&f.enter(),o=u(r),f&&(f.exit(),c=!0)),o===l.promise?d(q("Promise-chain cycle")):(s=ct(o))?s.call(o,h,d):h(o)):d(r)}catch(p){f&&!c&&f.exit(),d(p)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&ht(t)}))}},ut=function(t,e,n){var r,a;Y?(r=G.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),l.dispatchEvent(r)):r={promise:e,reason:n},!J&&(a=l["on"+t])?a(r):t===Q&&I("Unhandled promise rejection",n)},ht=function(t){A.call(l,(function(){var e,n=t.facade,r=t.value,a=dt(t);if(a&&(e=k((function(){P?W.emit("unhandledRejection",r,n):ut(Q,n,r)})),t.rejection=P||dt(t)?at:rt,e.error))throw e.value}))},dt=function(t){return t.rejection!==rt&&!t.parent},ft=function(t){A.call(l,(function(){var e=t.facade;P?W.emit("rejectionHandled",e):ut(Z,e,t.value)}))},pt=function(t,e,n){return function(r){t(e,r,n)}},vt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=nt,lt(t,!0))},mt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw q("Promise can't be resolved itself");var r=ct(e);r?V((function(){var n={done:!1};try{r.call(e,pt(mt,n,t),pt(vt,n,t))}catch(a){vt(n,a,t)}})):(t.value=e,t.state=et,lt(t,!1))}catch(a){vt({done:!1},a,t)}}};if(ot&&($=function(t){O(this,$,_),b(t),r.call(this);var e=F(this);try{t(pt(mt,e),pt(vt,e))}catch(n){vt(e,n)}},U=$.prototype,r=function(t){D(this,{type:_,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:tt,value:void 0})},r.prototype=f(U,{then:function(t,e){var n=R(this),r=K(M(this,$));return r.ok=!g(t)||t,r.fail=g(e)&&e,r.domain=P?W.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=tt&&lt(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),a=function(){var t=new r,e=F(t);this.promise=t,this.resolve=pt(mt,e),this.reject=pt(vt,e)},S.f=K=function(t){return t===$||t===i?new a(t):X(t)},!c&&g(h)&&N!==Object.prototype)){o=N.then,it||(d(N,"then",(function(t,e){var n=this;return new $((function(t,e){o.call(n,t,e)})).then(t,e)}),{unsafe:!0}),d(N,"catch",U["catch"],{unsafe:!0}));try{delete N.constructor}catch(bt){}p&&p(N,U)}s({global:!0,wrap:!0,forced:ot},{Promise:$}),v($,_,!1,!0),m(_),i=u(_),s({target:_,stat:!0,forced:ot},{reject:function(t){var e=K(this);return e.reject.call(void 0,t),e.promise}}),s({target:_,stat:!0,forced:c||ot},{resolve:function(t){return C(c&&this===i?$:this,t)}}),s({target:_,stat:!0,forced:st},{all:function(t){var e=this,n=K(e),r=n.resolve,a=n.reject,i=k((function(){var n=b(e.resolve),i=[],o=0,s=1;w(t,(function(t){var c=o++,l=!1;i.push(void 0),s++,n.call(e,t).then((function(t){l||(l=!0,i[c]=t,--s||r(i))}),a)})),--s||r(i)}));return i.error&&a(i.value),n.promise},race:function(t){var e=this,n=K(e),r=n.reject,a=k((function(){var a=b(e.resolve);w(t,(function(t){a.call(e,t).then(n.resolve,r)}))}));return a.error&&r(a.value),n.promise}})},e71f:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]})),n.d(e,"d",(function(){return r["d"]})),n.d(e,"e",(function(){return r["e"]})),n.d(e,"f",(function(){return r["f"]})),n.d(e,"g",(function(){return r["g"]})),n.d(e,"h",(function(){return r["h"]})),n.d(e,"i",(function(){return r["i"]}))},e863:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"f",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"i",(function(){return c})),n.d(e,"k",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"j",(function(){return f})),n.d(e,"d",(function(){return p})),n.d(e,"g",(function(){return v})),n.d(e,"e",(function(){return m})),n.d(e,"b",(function(){return b}));var r="undefined"!==typeof window,a="undefined"!==typeof document,i="undefined"!==typeof navigator,o="undefined"!==typeof Promise,s="undefined"!==typeof MutationObserver||"undefined"!==typeof WebKitMutationObserver||"undefined"!==typeof MozMutationObserver,c=r&&a&&i,l=r?window:{},u=a?document:{},h=i?navigator:{},d=(h.userAgent||"").toLowerCase(),f=d.indexOf("jsdom")>0,p=(/msie|trident/.test(d),function(){var t=!1;if(c)try{var e={get passive(){t=!0}};l.addEventListener("test",e,e),l.removeEventListener("test",e,e)}catch(n){t=!1}return t}()),v=c&&("ontouchstart"in u.documentElement||h.maxTouchPoints>0),m=c&&Boolean(l.PointerEvent||l.MSPointerEvent),b=c&&"IntersectionObserver"in l&&"IntersectionObserverEntry"in l&&"intersectionRatio"in l.IntersectionObserverEntry.prototype},e893:function(t,e,n){var r=n("5135"),a=n("56ef"),i=n("06cf"),o=n("9bf2");t.exports=function(t,e){for(var n=a(e),s=o.f,c=i.f,l=0;l<n.length;l++){var u=n[l];r(t,u)||s(t,u,c(e,u))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),a=n("3f8c"),i=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(a.Array===t||o[i]===t)}},ea7b:function(t,e,n){"use strict";n.d(e,"a",(function(){return ar})),n.d(e,"b",(function(){return oe}));var r=n("1fd5"),a=n("5606");function i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}Object.create;Object.create;var o=n("4fc1"),s=n("ffa6");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r["b"]("auth","Firebase",c()),h=new o["b"]("@firebase/auth");function d(t,...e){h.logLevel<=o["a"].ERROR&&h.error(`Auth (${a["a"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw m(t,...e)}function p(t,...e){return m(t,...e)}function v(t,e,n){const a=Object.assign(Object.assign({},l()),{[e]:n}),i=new r["b"]("auth","Firebase",a);return i.create(e,{appName:t.name})}function m(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return u.create(t,...e)}function b(t,e,...n){if(!t)throw m(e,...n)}function g(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function y(t,e){t||g(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=new Map;function z(t){y(t instanceof Function,"Expected a class definition");let e=O.get(t);return e?(y(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,O.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t,e){const n=Object(a["b"])(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),a=n.getOptions();if(Object(r["g"])(a,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const i=n.initialize({options:e});return i}function j(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(z);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function A(){return"http:"===V()||"https:"===V()}function V(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(A()||Object(r["k"])()||"connection"in navigator))||navigator.onLine}function I(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,e){this.shortDelay=t,this.longDelay=e,y(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(r["p"])()||Object(r["q"])()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){y(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void g("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void g("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void g("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},L=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,a,i={}){return E(t,i,()=>{let i={},o={};a&&("GET"===e?o=a:i={body:JSON.stringify(a)});const s=Object(r["t"])(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(T.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),T.fetch()(_(t,t.config.apiHost,n,s),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function E(t,e,n){t._canInitEmulator=!1;const a=Object.assign(Object.assign({},H),e);try{const e=new F(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw D(t,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const e=r.ok?i.errorMessage:i.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw D(t,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw D(t,"email-already-in-use",i);const s=a[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw v(t,s,o);f(t,s)}}catch(i){if(i instanceof r["c"])throw i;f(t,"network-request-failed")}}async function x(t,e,n,r,a={}){const i=await P(t,e,n,r,a);return"mfaPendingCredential"in i&&f(t,"multi-factor-auth-required",{serverResponse:i}),i}function _(t,e,n,r){const a=`${e}${n}?${r}`;return t.config.emulator?k(t.config,a):`${t.config.apiScheme}://${a}`}class F{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(p(this.auth,"timeout")),L.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function D(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const a=p(t,e,r);return a.customData._tokenResponse=n,a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function N(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(t,e=!1){const n=Object(r["i"])(t),a=await n.getIdToken(e),i=G(a);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"===typeof i.firebase?i.firebase:void 0,s=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:i,token:a,authTime:$(q(i.auth_time)),issuedAtTime:$(q(i.iat)),expirationTime:$(q(i.exp)),signInProvider:s||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function q(t){return 1e3*Number(t)}function G(t){const[e,n,a]=t.split(".");if(void 0===e||void 0===n||void 0===a)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(r["d"])(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(i){return d("Caught error parsing JWT payload as JSON",i),null}}function W(t){const e=G(t);return b(e,"internal-error"),b("undefined"!==typeof e.exp,"internal-error"),b("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t,e,n=!1){if(n)return e;try{return await e}catch(a){throw a instanceof r["c"]&&X(a)&&t.auth.currentUser===t&&await t.auth.signOut(),a}}function X({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){var e;const n=t.auth,r=await t.getIdToken(),a=await K(t,N(n,{idToken:r}));b(null===a||void 0===a?void 0:a.users.length,n,"internal-error");const i=a.users[0];t._notifyReloadListener(i);const o=(null===(e=i.providerUserInfo)||void 0===e?void 0:e.length)?et(i.providerUserInfo):[],s=tt(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(null===s||void 0===s?void 0:s.length),u=!!c&&l,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new J(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Z(t){const e=Object(r["i"])(t);await Q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function et(t){return t.map(t=>{var{providerId:e}=t,n=i(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await E(t,{},()=>{const n=Object(r["t"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:i}=t.config,o=_(t,a,"/v1/token","key="+i);return T.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){b(t.idToken,"internal-error"),b("undefined"!==typeof t.idToken,"internal-error"),b("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):W(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return b(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:a}=await nt(t,e);this.updateTokensAndExpiration(n,r,Number(a))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:a}=e,i=new rt;return n&&(b("string"===typeof n,"internal-error",{appName:t}),i.refreshToken=n),r&&(b("string"===typeof r,"internal-error",{appName:t}),i.accessToken=r),a&&(b("number"===typeof a,"internal-error",{appName:t}),i.expirationTime=a),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return g("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e){b("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class it{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,a=i(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.metadata=new J(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const e=await K(this,this.stsTokenManager.getToken(this.auth,t));return b(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return U(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(b(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new it(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await K(this,R(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,a,i,o,s,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(a=e.phoneNumber)&&void 0!==a?a:void 0,f=null!==(i=e.photoURL)&&void 0!==i?i:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,v=null!==(s=e._redirectEventId)&&void 0!==s?s:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,g=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:O,isAnonymous:z,providerData:w,stsTokenManager:j}=e;b(y&&j,t,"internal-error");const M=rt.fromJSON(this.name,j);b("string"===typeof y,t,"internal-error"),at(u,t.name),at(h,t.name),b("boolean"===typeof O,t,"internal-error"),b("boolean"===typeof z,t,"internal-error"),at(d,t.name),at(f,t.name),at(p,t.name),at(v,t.name),at(m,t.name),at(g,t.name);const A=new it({uid:y,auth:t,email:h,emailVerified:O,displayName:u,isAnonymous:z,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:M,createdAt:m,lastLoginAt:g});return w&&Array.isArray(w)&&(A.providerData=w.map(t=>Object.assign({},t))),v&&(A._redirectEventId=v),A}static async _fromIdTokenResponse(t,e,n=!1){const r=new rt;r.updateFromServerResponse(e);const a=new it({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Q(a),a}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const st=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class lt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:a}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,a),this.fullPersistenceKey=ct("persistence",r.apiKey,a),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?it._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new lt(z(st),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let a=r[0]||z(st);const i=ct(n,t.config.apiKey,t.name);let o=null;for(const l of e)try{const e=await l._get(i);if(e){const n=it._fromJSON(t,e);l!==a&&(o=n),a=l;break}}catch(c){}const s=r.filter(t=>t._shouldAllowMigration);return a._shouldAllowMigration&&s.length?(a=s[0],o&&await a._set(i,o.toJSON()),await Promise.all(e.map(async t=>{if(t!==a)try{await t._remove(i)}catch(c){}})),new lt(a,t,n)):new lt(a,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mt(e))return"Blackberry";if(bt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(vt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=Object(r["j"])()){return/firefox\//i.test(t)}function dt(t=Object(r["j"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=Object(r["j"])()){return/crios\//i.test(t)}function pt(t=Object(r["j"])()){return/iemobile/i.test(t)}function vt(t=Object(r["j"])()){return/android/i.test(t)}function mt(t=Object(r["j"])()){return/blackberry/i.test(t)}function bt(t=Object(r["j"])()){return/webos/i.test(t)}function gt(t=Object(r["j"])()){return/iphone|ipad|ipod/i.test(t)}function yt(t=Object(r["j"])()){var e;return gt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Ot(){return Object(r["n"])()&&10===document.documentMode}function zt(t=Object(r["j"])()){return gt(t)||vt(t)||bt(t)||mt(t)||/windows phone/i.test(t)||pt(t)}function wt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,e=[]){let n;switch(t){case"Browser":n=ut(Object(r["j"])());break;case"Worker":n=`${ut(Object(r["j"])())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${a["a"]}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vt(this),this.idTokenSubscription=new Vt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=z(e)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await lt.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,a=null===n||void 0===n?void 0:n._redirectEventId,i=await this.tryRedirectSignIn(t);r&&r!==a||!(null===i||void 0===i?void 0:i.user)||(n=i.user)}return n?n._redirectEventId?(b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Q(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=I()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(r["i"])(t):null;return e&&b(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&b(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(z(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&z(t)||this._popupRedirectResolver;b(e,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[z(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const a="function"===typeof e?e:e.next.bind(e),i=this._isInitialized?Promise.resolve():this._initializationPromise;return b(i,this,"internal-error"),i.then(()=>a(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=jt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function At(t){return Object(r["i"])(t)}class Vt{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(r["f"])(t=>this.observer=t)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return g("not implemented")}_getIdTokenResponse(t){return g("not implemented")}_linkToIdToken(t,e){return g("not implemented")}_getReauthenticationResolver(t){return g("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function St(t,e){return x(t,"POST","/v1/accounts:signInWithPassword",B(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function kt(t,e){return x(t,"POST","/v1/accounts:signInWithEmailLink",B(t,e))}async function Tt(t,e){return x(t,"POST","/v1/accounts:signInWithEmailLink",B(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Ct{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Ht(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Ht(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return St(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return kt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return It(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Tt(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(t,e){return x(t,"POST","/v1/accounts:signInWithIdp",B(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="http://localhost";class Pt extends Ct{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Pt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,a=i(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Pt(n,r);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Lt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Lt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Lt(t,e)}buildRequest(){const t={requestUri:Bt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(r["t"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",B(t,e))}async function xt(t,e){return x(t,"POST","/v1/accounts:signInWithPhoneNumber",B(t,e))}async function _t(t,e){const n=await x(t,"POST","/v1/accounts:signInWithPhoneNumber",B(t,e));if(n.temporaryProof)throw D(t,"account-exists-with-different-credential",n);return n}const Ft={["USER_NOT_FOUND"]:"user-not-found"};async function Dt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return x(t,"POST","/v1/accounts:signInWithPhoneNumber",B(t,n),Ft)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Ct{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Rt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Rt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return xt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return _t(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Dt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:a}=t;return n||e||r||a?new Rt({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:a}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $t(t){const e=Object(r["u"])(Object(r["h"])(t))["link"],n=e?Object(r["u"])(Object(r["h"])(e))["deep_link_id"]:null,a=Object(r["u"])(Object(r["h"])(t))["deep_link_id"],i=a?Object(r["u"])(Object(r["h"])(a))["link"]:null;return i||a||n||e||t}class Ut{constructor(t){var e,n,a,i,o,s;const c=Object(r["u"])(Object(r["h"])(t)),l=null!==(e=c["apiKey"])&&void 0!==e?e:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Nt(null!==(a=c["mode"])&&void 0!==a?a:null);b(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(s=c["tenantId"])&&void 0!==s?s:null}static parseLink(t){const e=$t(t);try{return new Ut(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(){this.providerId=qt.PROVIDER_ID}static credential(t,e){return Ht._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Ut.parseLink(e);return b(n,"argument-error"),Ht._fromEmailAndCode(t,n.code,n.tenantId)}}qt.PROVIDER_ID="password",qt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",qt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Gt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt extends Wt{constructor(){super("facebook.com")}static credential(t){return Pt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Kt.credential(t.oauthAccessToken)}catch(e){return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Kt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Wt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Pt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Xt.credential(e,n)}catch(r){return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com",Xt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Wt{constructor(){super("github.com")}static credential(t){return Pt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Yt.credential(t.oauthAccessToken)}catch(e){return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com",Yt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends Wt{constructor(){super("twitter.com")}static credential(t,e){return Pt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Jt.credential(e,n)}catch(r){return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com",Jt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const a=await it._fromIdTokenResponse(t,n,r),i=Zt(n),o=new Qt({user:a,providerId:i,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Zt(n);return new Qt({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Zt(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te extends r["c"]{constructor(t,e,n,r){var a;super(e.code,e.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,te.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(a=t.tenantId)&&void 0!==a?a:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,n,r){return new te(t,e,n,r)}}function ee(t,e,n,r){const a="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return a.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw te._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(t,e,n=!1){const r=await K(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qt._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function re(t,e,n=!1){const{auth:r}=t,a="reauthenticate";try{const i=await K(t,ee(r,a,e,t),n);b(i.idToken,r,"internal-error");const o=G(i.idToken);b(o,r,"internal-error");const{sub:s}=o;return b(t.uid===s,r,"user-mismatch"),Qt._forOperation(t,a,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&f(r,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(t,e,n=!1){const r="signIn",a=await ee(t,r,e),i=await Qt._fromIdTokenResponse(t,r,a);return n||await t._updateCurrentUser(i.user),i}async function ie(t,e){return ae(At(t),e)}function oe(t,e,n){return ie(Object(r["i"])(t),qt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function se(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",B(t,e))}function ce(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",B(t,e))}new WeakMap;const le="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(le,"1"),this.storage.removeItem(le),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){const t=Object(r["j"])();return dt(t)||gt(t)}const de=1e3,fe=10;class pe extends ue{constructor(){super(window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=he()&&wt(),this.fallbackToPolling=zt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},a=this.storage.getItem(n);Ot()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,fe):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},de)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}pe.type="LOCAL";const ve=pe;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends ue{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}me.type="SESSION";const be=me;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new ye(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:a}=e.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map(async t=>t(e.origin,a)),s=await ge(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oe(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ye.receivers=[];class ze{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let a,i;return new Promise((o,s)=>{const c=Oe("",20);r.port1.start();const l=setTimeout(()=>{s(new Error("unsupported_event"))},n);i={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),a=setTimeout(()=>{s(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),o(e.data.response);break;default:clearTimeout(l),clearTimeout(a),s(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return window}function je(t){we().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return"undefined"!==typeof we()["WorkerGlobalScope"]&&"function"===typeof we()["importScripts"]}async function Ae(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Ve(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ce(){return Me()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="firebaseLocalStorageDb",Se=1,ke="firebaseLocalStorage",Te="fbase_key";class He{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Le(t,e){return t.transaction([ke],e?"readwrite":"readonly").objectStore(ke)}function Be(){const t=indexedDB.deleteDatabase(Ie);return new He(t).toPromise()}function Pe(){const t=indexedDB.open(Ie,Se);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(ke,{keyPath:Te})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(ke)?e(n):(n.close(),await Be(),e(await Pe()))})})}async function Ee(t,e,n){const r=Le(t,!0).put({[Te]:e,value:n});return new He(r).toPromise()}async function xe(t,e){const n=Le(t,!1).get(e),r=await new He(n).toPromise();return void 0===r?null:r.value}function _e(t,e){const n=Le(t,!0).delete(e);return new He(n).toPromise()}const Fe=800,De=3;class Re{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Pe()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>De)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Me()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ye._getInstance(Ce()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Ae(),!this.activeServiceWorker)return;this.sender=new ze(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Ve()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Pe();return await Ee(t,le,"1"),await _e(t,le),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ee(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>xe(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>_e(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=Le(t,!1).getAll();return new He(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:a}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(a)&&(this.notifyListeners(r,a),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Re.type="LOCAL";const Ne=Re;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",B(t,e))}function Ue(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",B(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qe(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Ge(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",qe().appendChild(r)})}function We(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
We("rcb"),new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ke="recaptcha";async function Xe(t,e,n){var r;const a=await n.verify();try{let i;if(b("string"===typeof a,t,"argument-error"),b(n.type===Ke,t,"argument-error"),i="string"===typeof e?{phoneNumber:e}:e,"session"in i){const e=i.session;if("phoneNumber"in i){b("enroll"===e.type,t,"internal-error");const n=await se(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:a}});return n.phoneSessionInfo.sessionInfo}{b("signin"===e.type,t,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;b(n,t,"missing-multi-factor-info");const o=await $e(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:a}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Et(t,{phoneNumber:i.phoneNumber,recaptchaToken:a});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(t){this.providerId=Ye.PROVIDER_ID,this.auth=At(t)}verifyPhoneNumber(t,e){return Xe(this.auth,t,Object(r["i"])(e))}static credential(t,e){return Rt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Ye.credentialFromTaggedObject(e)}static credentialFromError(t){return Ye.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Rt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Je(t,e){return e?z(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.PROVIDER_ID="phone",Ye.PHONE_SIGN_IN_METHOD="phone";class Qe extends Ct{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Lt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Lt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Lt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Ze(t){return ae(t.auth,new Qe(t),t.bypassAuthState)}function tn(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),re(n,new Qe(t),t.bypassAuthState)}async function en(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),ne(n,new Qe(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e,n,r,a=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:a,error:i,type:o}=t;if(i)return void this.reject(i);const s={auth:this.auth,requestUri:e,sessionId:n,tenantId:a||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ze;case"linkViaPopup":case"linkViaRedirect":return en;case"reauthViaPopup":case"reauthViaRedirect":return tn;default:f(this.auth,"internal-error")}}resolve(t){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new S(2e3,1e4);class an extends nn{constructor(t,e,n,r,a){super(t,e,r,a),this.provider=n,this.authWindow=null,this.pollId=null,an.currentPopupAction&&an.currentPopupAction.cancel(),an.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return b(t,this.auth,"internal-error"),t}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const t=Oe();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,an.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,rn.get())};t()}}an.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const on="pendingRedirect",sn=new Map;class cn extends nn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=sn.get(this.auth._key());if(!t){try{const e=await ln(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}sn.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function ln(t,e){const n=hn(e),r="true"===await un(t)._get(n);return await un(t)._remove(n),r}function un(t){return z(t._redirectPersistence)}function hn(t){return ct(on,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(t,e,n=!1){const r=At(t),a=Je(r,e),i=new cn(r,a,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fn=6e5;class pn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!bn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!mn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=fn&&this.cachedEventUids.clear(),this.cachedEventUids.has(vn(t))}saveEventToCache(t){this.cachedEventUids.add(vn(t)),this.lastProcessedEventTime=Date.now()}}function vn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function mn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function bn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(t,e={}){return P(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,On=/^https?/;async function zn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gn(t);for(const r of e)try{if(wn(r))return}catch(n){}f(t,"unauthorized-domain")}function wn(t){const e=M(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return""===a.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===r}if(!On.test(n))return!1;if(yn.test(t))return r===t;const a=t.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+a+"|"+a+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new S(3e4,6e4);function Mn(){const t=we().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function An(t){return new Promise((e,n)=>{var r,a,i;function o(){Mn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mn(),n(p(t,"network-request-failed"))},timeout:jn.get()})}if(null===(a=null===(r=we().gapi)||void 0===r?void 0:r.iframes)||void 0===a?void 0:a.Iframe)e(gapi.iframes.getContext());else{if(!(null===(i=we().gapi)||void 0===i?void 0:i.load)){const e=We("iframefcb");return we()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},Ge("https://apis.google.com/js/api.js?onload="+e)}o()}}).catch(t=>{throw Vn=null,t})}let Vn=null;function Cn(t){return Vn=Vn||An(t),Vn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new S(5e3,15e3),Sn="__/auth/iframe",kn="emulator/auth/iframe",Tn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Hn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ln(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?k(e,kn):`https://${t.config.authDomain}/${Sn}`,i={apiKey:e.apiKey,appName:t.name,v:a["a"]},o=Hn.get(t.config.apiHost);o&&(i.eid=o);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Object(r["t"])(i).slice(1)}`}async function Bn(t){const e=await Cn(t),n=we().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:Ln(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tn,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const a=p(t,"network-request-failed"),i=we().setTimeout(()=>{r(a)},In.get());function o(){we().clearTimeout(i),n(e)}e.ping(o).then(o,()=>{r(a)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},En=500,xn=600,_n="_blank",Fn="http://localhost";class Dn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Rn(t,e,n,a=En,i=xn){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-a)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Pn),{width:a.toString(),height:i.toString(),top:o,left:s}),u=Object(r["j"])().toLowerCase();n&&(c=ft(u)?_n:n),ht(u)&&(e=e||Fn,l.scrollbars="yes");const h=Object.entries(l).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(yt(u)&&"_self"!==c)return Nn(e||"",c),new Dn(null);const d=window.open(e||"",c,h);b(d,t,"popup-blocked");try{d.focus()}catch(f){}return new Dn(d)}function Nn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="__/auth/handler",Un="emulator/auth/handler";function qn(t,e,n,i,o,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:a["a"],eventId:o};if(e instanceof Gt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(r["m"])(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))c[t]=e}if(e instanceof Wt){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];return`${Gn(t)}?${Object(r["t"])(l).slice(1)}`}function Gn({config:t}){return t.emulator?k(t,Un):`https://${t.authDomain}/${$n}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="webStorageSupport";class Kn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=be,this._completeRedirectFn=dn}async _openPopup(t,e,n,r){var a;y(null===(a=this.eventManagers[t._key()])||void 0===a?void 0:a.manager,"_initialize() not called before _openPopup()");const i=qn(t,e,n,M(),r);return Rn(t,i,Oe())}async _openRedirect(t,e,n,r){return await this._originValidation(t),je(qn(t,e,n,M(),r)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await Bn(t),n=new pn(t);return e.register("authEvent",e=>{b(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Wn,{type:Wn},n=>{var r;const a=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Wn];void 0!==a&&e(!!a),f(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=zn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return zt()||dt()||gt()}}const Xn=Kn;class Yn{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return g("unexpected MultiFactorSessionType")}}}class Jn extends Yn{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Jn(t)}_finalizeEnroll(t,e,n){return ce(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Ue(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Qn{constructor(){}static assertion(t){return Jn._fromCredential(t)}}Qn.FACTOR_ID="phone";var Zn="@firebase/auth",tr="0.18.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class er{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rr(t){Object(a["c"])(new s["a"]("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:a,authDomain:i}=r.options;return(e=>{b(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),b(!(null===i||void 0===i?void 0:i.includes(":")),"argument-error",{appName:e.name});const r={apiKey:a,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jt(t)},o=new Mt(e,r);return j(o,n),o})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),Object(a["c"])(new s["a"]("auth-internal",t=>{const e=At(t.getProvider("auth").getImmediate());return(t=>new er(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(a["g"])(Zn,tr,nr(t)),Object(a["g"])(Zn,tr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t=Object(a["e"])()){const e=Object(a["b"])(t,"auth");return e.isInitialized()?e.getImmediate():w(t,{popupRedirectResolver:Xn,persistence:[Ne,ve,be]})}rr("Browser")},ecee:function(t,e,n){"use strict";(function(t){
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){s(t,e,n[e])}))}return t}function l(t,e){return d(t)||p(t,e)||m()}function u(t){return h(t)||f(t)||v()}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function d(t){if(Array.isArray(t))return t}function f(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function p(t,e){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){a=!0,i=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(a)throw i}}return n}function v(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}n.d(e,"b",(function(){return ce})),n.d(e,"a",(function(){return $})),n.d(e,"e",(function(){return le})),n.d(e,"c",(function(){return ie})),n.d(e,"d",(function(){return se}));var b=function(){},g={},y={},O={mark:b,measure:b};try{"undefined"!==typeof window&&(g=window),"undefined"!==typeof document&&(y=document),"undefined"!==typeof MutationObserver&&MutationObserver,"undefined"!==typeof performance&&(O=performance)}catch(ue){}var z=g.navigator||{},w=z.userAgent,j=void 0===w?"":w,M=g,A=y,V=O,C=(M.document,!!A.documentElement&&!!A.head&&"function"===typeof A.addEventListener&&"function"===typeof A.createElement),I=~j.indexOf("MSIE")||~j.indexOf("Trident/"),S="___FONT_AWESOME___",k=16,T="fa",H="svg-inline--fa",L="data-fa-i2svg",B=(function(){try{}catch(ue){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),P=B.concat([11,12,13,14,15,16,17,18,19,20]),E={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},x=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",E.GROUP,E.SWAP_OPACITY,E.PRIMARY,E.SECONDARY].concat(B.map((function(t){return"".concat(t,"x")}))).concat(P.map((function(t){return"w-".concat(t)}))),M.FontAwesomeConfig||{});function _(t){var e=A.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function F(t){return""===t||"false"!==t&&("true"===t||t)}if(A&&"function"===typeof A.querySelector){var D=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];D.forEach((function(t){var e=l(t,2),n=e[0],r=e[1],a=F(_(n));void 0!==a&&null!==a&&(x[r]=a)}))}var R={familyPrefix:T,replacementClass:H,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},N=c({},R,x);N.autoReplaceSvg||(N.observeMutations=!1);var $=c({},N);M.FontAwesomeConfig=$;var U=M||{};U[S]||(U[S]={}),U[S].styles||(U[S].styles={}),U[S].hooks||(U[S].hooks={}),U[S].shims||(U[S].shims=[]);var q=U[S],G=[],W=function t(){A.removeEventListener("DOMContentLoaded",t),K=1,G.map((function(t){return t()}))},K=!1;C&&(K=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),K||A.addEventListener("DOMContentLoaded",W));var X,Y="pending",J="settled",Q="fulfilled",Z="rejected",tt=function(){},et="undefined"!==typeof t&&"undefined"!==typeof t.process&&"function"===typeof t.process.emit,nt="undefined"===typeof setImmediate?setTimeout:setImmediate,rt=[];function at(){for(var t=0;t<rt.length;t++)rt[t][0](rt[t][1]);rt=[],X=!1}function it(t,e){rt.push([t,e]),X||(X=!0,nt(at,0))}function ot(t,e){function n(t){lt(e,t)}function r(t){ht(e,t)}try{t(n,r)}catch(ue){r(ue)}}function st(t){var e=t.owner,n=e._state,r=e._data,a=t[n],i=t.then;if("function"===typeof a){n=Q;try{r=a(r)}catch(ue){ht(i,ue)}}ct(i,r)||(n===Q&&lt(i,r),n===Z&&ht(i,r))}function ct(t,e){var n;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"===typeof e||"object"===r(e))){var a=e.then;if("function"===typeof a)return a.call(e,(function(r){n||(n=!0,e===r?ut(t,r):lt(t,r))}),(function(e){n||(n=!0,ht(t,e))})),!0}}catch(ue){return n||ht(t,ue),!0}return!1}function lt(t,e){t!==e&&ct(t,e)||ut(t,e)}function ut(t,e){t._state===Y&&(t._state=J,t._data=e,it(ft,t))}function ht(t,e){t._state===Y&&(t._state=J,t._data=e,it(pt,t))}function dt(t){t._then=t._then.forEach(st)}function ft(t){t._state=Q,dt(t)}function pt(e){e._state=Z,dt(e),!e._handled&&et&&t.process.emit("unhandledRejection",e._data,e)}function vt(e){t.process.emit("rejectionHandled",e)}function mt(t){if("function"!==typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof mt===!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],ot(t,this)}mt.prototype={constructor:mt,_state:Y,_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(tt),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,this._state===Z&&et&&it(vt,this)),this._state===Q||this._state===Z?it(st,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},mt.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new mt((function(e,n){var r=[],a=0;function i(t){return a++,function(n){r[t]=n,--a||e(r)}}for(var o,s=0;s<t.length;s++)o=t[s],o&&"function"===typeof o.then?o.then(i(s),n):r[s]=o;a||e(r)}))},mt.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new mt((function(e,n){for(var r,a=0;a<t.length;a++)r=t[a],r&&"function"===typeof r.then?r.then(e,n):e(r)}))},mt.resolve=function(t){return t&&"object"===r(t)&&t.constructor===mt?t:new mt((function(e){e(t)}))},mt.reject=function(t){return new mt((function(e,n){n(t)}))};var bt=k,gt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yt(t){if(t&&C){var e=A.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=A.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return A.head.insertBefore(e,r),t}}var Ot="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function zt(){var t=12,e="";while(t-- >0)e+=Ot[62*Math.random()|0];return e}function wt(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jt(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,'="').concat(wt(t[n]),'" ')}),"").trim()}function Mt(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,": ").concat(t[n],";")}),"")}function At(t){return t.size!==gt.size||t.x!==gt.x||t.y!==gt.y||t.rotate!==gt.rotate||t.flipX||t.flipY}function Vt(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*e.x,", ").concat(32*e.y,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:l}}function Ct(t){var e=t.transform,n=t.width,r=void 0===n?k:n,a=t.height,i=void 0===a?k:a,o=t.startCentered,s=void 0!==o&&o,c="";return c+=s&&I?"translate(".concat(e.x/bt-r/2,"em, ").concat(e.y/bt-i/2,"em) "):s?"translate(calc(-50% + ".concat(e.x/bt,"em), calc(-50% + ").concat(e.y/bt,"em)) "):"translate(".concat(e.x/bt,"em, ").concat(e.y/bt,"em) "),c+="scale(".concat(e.size/bt*(e.flipX?-1:1),", ").concat(e.size/bt*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var It={x:0,y:0,width:"100%",height:"100%"};function St(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function kt(t){return"g"===t.tag?t.children:[t]}function Tt(t){var e=t.children,n=t.attributes,r=t.main,a=t.mask,i=t.maskId,o=t.transform,s=r.width,l=r.icon,u=a.width,h=a.icon,d=Vt({transform:o,containerWidth:u,iconWidth:s}),f={tag:"rect",attributes:c({},It,{fill:"white"})},p=l.children?{children:l.children.map(St)}:{},v={tag:"g",attributes:c({},d.inner),children:[St(c({tag:l.tag,attributes:c({},l.attributes,d.path)},p))]},m={tag:"g",attributes:c({},d.outer),children:[v]},b="mask-".concat(i||zt()),g="clip-".concat(i||zt()),y={tag:"mask",attributes:c({},It,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,m]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:kt(h)},y]};return e.push(O,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(b,")")},It)}),{children:e,attributes:n}}function Ht(t){var e=t.children,n=t.attributes,r=t.main,a=t.transform,i=t.styles,o=Mt(i);if(o.length>0&&(n["style"]=o),At(a)){var s=Vt({transform:a,containerWidth:r.width,iconWidth:r.width});e.push({tag:"g",attributes:c({},s.outer),children:[{tag:"g",attributes:c({},s.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:c({},r.icon.attributes,s.path)}]}]})}else e.push(r.icon);return{children:e,attributes:n}}function Lt(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(At(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a["style"]=Mt(c({},i,{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Bt(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=!0===i?"".concat(e,"-").concat($.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c({},a,{id:o}),children:r}]}]}function Pt(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,u=t.maskId,h=t.titleId,d=t.extra,f=t.watchable,p=void 0!==f&&f,v=r.found?r:n,m=v.width,b=v.height,g="fak"===a,y=g?"":"fa-w-".concat(Math.ceil(m/b*16)),O=[$.replacementClass,i?"".concat($.familyPrefix,"-").concat(i):"",y].filter((function(t){return-1===d.classes.indexOf(t)})).filter((function(t){return""!==t||!!t})).concat(d.classes).join(" "),z={children:[],attributes:c({},d.attributes,{"data-prefix":a,"data-icon":i,class:O,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(b)})},w=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/b*16*.0625,"em")}:{};p&&(z.attributes[L]=""),l&&z.children.push({tag:"title",attributes:{id:z.attributes["aria-labelledby"]||"title-".concat(h||zt())},children:[l]});var j=c({},z,{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:c({},w,d.styles)}),M=r.found&&n.found?Tt(j):Ht(j),A=M.children,V=M.attributes;return j.children=A,j.attributes=V,s?Bt(j):Lt(j)}function Et(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=void 0!==s&&s,u=c({},o.attributes,i?{title:i}:{},{class:o.classes.join(" ")});l&&(u[L]="");var h=c({},o.styles);At(a)&&(h["transform"]=Ct({transform:a,startCentered:!0,width:n,height:r}),h["-webkit-transform"]=h["transform"]);var d=Mt(h);d.length>0&&(u["style"]=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}var xt=function(){},_t=($.measurePerformance&&V&&V.mark&&V.measure,function(t,e){return function(n,r,a,i){return t.call(e,n,r,a,i)}}),Ft=function(t,e,n,r){var a,i,o,s=Object.keys(t),c=s.length,l=void 0!==r?_t(e,r):e;for(void 0===n?(a=1,o=t[s[0]]):(a=0,o=n);a<c;a++)i=s[a],o=l(o,t[i],i,t);return o};function Dt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,a=void 0!==r&&r,i=Object.keys(e).reduce((function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t}),{});"function"!==typeof q.hooks.addPack||a?q.styles[t]=c({},q.styles[t]||{},i):q.hooks.addPack(t,i),"fas"===t&&Dt("fa",e)}var Rt=q.styles,Nt=q.shims,$t=function(){var t=function(t){return Ft(Rt,(function(e,n,r){return e[r]=Ft(n,t,{}),e}),{})};t((function(t,e,n){return e[3]&&(t[e[3]]=n),t})),t((function(t,e,n){var r=e[2];return t[n]=n,r.forEach((function(e){t[e]=n})),t}));var e="far"in Rt;Ft(Nt,(function(t,n){var r=n[0],a=n[1],i=n[2];return"far"!==a||e||(a="fas"),t[r]={prefix:a,iconName:i},t}),{})};$t();q.styles;function Ut(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function qt(t){var e=t.tag,n=t.attributes,r=void 0===n?{}:n,a=t.children,i=void 0===a?[]:a;return"string"===typeof t?wt(t):"<".concat(e," ").concat(jt(r),">").concat(i.map(qt).join(""),"</").concat(e,">")}var Gt=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce((function(t,e){var n=e.toLowerCase().split("-"),r=n[0],a=n.slice(1).join("-");if(r&&"h"===a)return t.flipX=!0,t;if(r&&"v"===a)return t.flipY=!0,t;if(a=parseFloat(a),isNaN(a))return t;switch(r){case"grow":t.size=t.size+a;break;case"shrink":t.size=t.size-a;break;case"left":t.x=t.x-a;break;case"right":t.x=t.x+a;break;case"up":t.y=t.y-a;break;case"down":t.y=t.y+a;break;case"rotate":t.rotate=t.rotate+a;break}return t}),e):e};function Wt(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}Wt.prototype=Object.create(Error.prototype),Wt.prototype.constructor=Wt;var Kt={fill:"currentColor"},Xt={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},Yt=(c({},Kt,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),c({},Xt,{attributeName:"opacity"}));c({},Kt,{cx:"256",cy:"364",r:"28"}),c({},Xt,{attributeName:"r",values:"28;14;28;28;14;28;"}),c({},Yt,{values:"1;0;1;1;0;1;"}),c({},Kt,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),c({},Yt,{values:"1;0;0;0;0;1;"}),c({},Kt,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),c({},Yt,{values:"0;0;1;1;0;0;"}),q.styles;function Jt(t){var e=t[0],n=t[1],r=t.slice(4),a=l(r,1),i=a[0],o=null;return o=Array.isArray(i)?{tag:"g",attributes:{class:"".concat($.familyPrefix,"-").concat(E.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(E.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(E.PRIMARY),fill:"currentColor",d:i[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}q.styles;var Qt='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';function Zt(){var t=T,e=H,n=$.familyPrefix,r=$.replacementClass,a=Qt;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var te=function(){function t(){a(this,t),this.definitions={}}return o(t,[{key:"add",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach((function(e){t.definitions[e]=c({},t.definitions[e]||{},a[e]),Dt(e,a[e]),$t()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map((function(e){var r=n[e],a=r.prefix,i=r.iconName,o=r.icon;t[a]||(t[a]={}),t[a][i]=o})),t}}]),t}();function ee(){$.autoAddCss&&!oe&&(yt(Zt()),oe=!0)}function ne(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return qt(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(C){var e=A.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function re(t){var e=t.prefix,n=void 0===e?"fa":e,r=t.iconName;if(r)return Ut(ie.definitions,n,r)||Ut(q.styles,n,r)}function ae(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(e||{}).icon?e:re(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:re(a||{})),t(r,c({},n,{mask:a}))}}var ie=new te,oe=!1,se={transform:function(t){return Gt(t)}},ce=ae((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?gt:n,a=e.symbol,i=void 0!==a&&a,o=e.mask,s=void 0===o?null:o,l=e.maskId,u=void 0===l?null:l,h=e.title,d=void 0===h?null:h,f=e.titleId,p=void 0===f?null:f,v=e.classes,m=void 0===v?[]:v,b=e.attributes,g=void 0===b?{}:b,y=e.styles,O=void 0===y?{}:y;if(t){var z=t.prefix,w=t.iconName,j=t.icon;return ne(c({type:"icon"},t),(function(){return ee(),$.autoA11y&&(d?g["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(p||zt()):(g["aria-hidden"]="true",g["focusable"]="false")),Pt({icons:{main:Jt(j),mask:s?Jt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:w,transform:c({},gt,r),symbol:i,title:d,maskId:u,titleId:p,extra:{attributes:g,styles:O,classes:m}})}))}})),le=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?gt:n,a=e.title,i=void 0===a?null:a,o=e.classes,s=void 0===o?[]:o,l=e.attributes,h=void 0===l?{}:l,d=e.styles,f=void 0===d?{}:d;return ne({type:"text",content:t},(function(){return ee(),Et({content:t,transform:c({},gt,r),title:i,extra:{attributes:h,styles:f,classes:["".concat($.familyPrefix,"-layers-text")].concat(u(s))}})}))}}).call(this,n("c8ba"))},f069:function(t,e,n){"use strict";var r=n("59ed"),a=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new a(t)}},f0bd:function(t,e,n){"use strict";(function(t){
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var n="undefined"!==typeof window&&"undefined"!==typeof document&&"undefined"!==typeof navigator,r=function(){for(var t=["Edge","Trident","Firefox"],e=0;e<t.length;e+=1)if(n&&navigator.userAgent.indexOf(t[e])>=0)return 1;return 0}();function a(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then((function(){e=!1,t()})))}}function i(t){var e=!1;return function(){e||(e=!0,setTimeout((function(){e=!1,t()}),r))}}var o=n&&window.Promise,s=o?a:i;function c(t){var e={};return t&&"[object Function]"===e.toString.call(t)}function l(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView,r=n.getComputedStyle(t,null);return e?r[e]:r}function u(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function h(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=l(t),n=e.overflow,r=e.overflowX,a=e.overflowY;return/(auto|scroll|overlay)/.test(n+a+r)?t:h(u(t))}function d(t){return t&&t.referenceNode?t.referenceNode:t}var f=n&&!(!window.MSInputMethodContext||!document.documentMode),p=n&&/MSIE 10/.test(navigator.userAgent);function v(t){return 11===t?f:10===t?p:f||p}function m(t){if(!t)return document.documentElement;var e=v(10)?document.body:null,n=t.offsetParent||null;while(n===e&&t.nextElementSibling)n=(t=t.nextElementSibling).offsetParent;var r=n&&n.nodeName;return r&&"BODY"!==r&&"HTML"!==r?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===l(n,"position")?m(n):n:t?t.ownerDocument.documentElement:document.documentElement}function b(t){var e=t.nodeName;return"BODY"!==e&&("HTML"===e||m(t.firstElementChild)===t)}function g(t){return null!==t.parentNode?g(t.parentNode):t}function y(t,e){if(!t||!t.nodeType||!e||!e.nodeType)return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?t:e,a=n?e:t,i=document.createRange();i.setStart(r,0),i.setEnd(a,0);var o=i.commonAncestorContainer;if(t!==o&&e!==o||r.contains(a))return b(o)?o:m(o);var s=g(t);return s.host?y(s.host,e):y(t,g(e).host)}function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===e?"scrollTop":"scrollLeft",r=t.nodeName;if("BODY"===r||"HTML"===r){var a=t.ownerDocument.documentElement,i=t.ownerDocument.scrollingElement||a;return i[n]}return t[n]}function z(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=O(e,"top"),a=O(e,"left"),i=n?-1:1;return t.top+=r*i,t.bottom+=r*i,t.left+=a*i,t.right+=a*i,t}function w(t,e){var n="x"===e?"Left":"Top",r="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"])+parseFloat(t["border"+r+"Width"])}function j(t,e,n,r){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],v(10)?parseInt(n["offset"+t])+parseInt(r["margin"+("Height"===t?"Top":"Left")])+parseInt(r["margin"+("Height"===t?"Bottom":"Right")]):0)}function M(t){var e=t.body,n=t.documentElement,r=v(10)&&getComputedStyle(n);return{height:j("Height",e,n,r),width:j("Width",e,n,r)}}var A=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},V=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),C=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},I=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function S(t){return I({},t,{right:t.left+t.width,bottom:t.top+t.height})}function k(t){var e={};try{if(v(10)){e=t.getBoundingClientRect();var n=O(t,"top"),r=O(t,"left");e.top+=n,e.left+=r,e.bottom+=n,e.right+=r}else e=t.getBoundingClientRect()}catch(d){}var a={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},i="HTML"===t.nodeName?M(t.ownerDocument):{},o=i.width||t.clientWidth||a.width,s=i.height||t.clientHeight||a.height,c=t.offsetWidth-o,u=t.offsetHeight-s;if(c||u){var h=l(t);c-=w(h,"x"),u-=w(h,"y"),a.width-=c,a.height-=u}return S(a)}function T(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=v(10),a="HTML"===e.nodeName,i=k(t),o=k(e),s=h(t),c=l(e),u=parseFloat(c.borderTopWidth),d=parseFloat(c.borderLeftWidth);n&&a&&(o.top=Math.max(o.top,0),o.left=Math.max(o.left,0));var f=S({top:i.top-o.top-u,left:i.left-o.left-d,width:i.width,height:i.height});if(f.marginTop=0,f.marginLeft=0,!r&&a){var p=parseFloat(c.marginTop),m=parseFloat(c.marginLeft);f.top-=u-p,f.bottom-=u-p,f.left-=d-m,f.right-=d-m,f.marginTop=p,f.marginLeft=m}return(r&&!n?e.contains(s):e===s&&"BODY"!==s.nodeName)&&(f=z(f,e)),f}function H(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,r=T(t,n),a=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),o=e?0:O(n),s=e?0:O(n,"left"),c={top:o-r.top+r.marginTop,left:s-r.left+r.marginLeft,width:a,height:i};return S(c)}function L(t){var e=t.nodeName;if("BODY"===e||"HTML"===e)return!1;if("fixed"===l(t,"position"))return!0;var n=u(t);return!!n&&L(n)}function B(t){if(!t||!t.parentElement||v())return document.documentElement;var e=t.parentElement;while(e&&"none"===l(e,"transform"))e=e.parentElement;return e||document.documentElement}function P(t,e,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},o=a?B(t):y(t,d(e));if("viewport"===r)i=H(o,a);else{var s=void 0;"scrollParent"===r?(s=h(u(e)),"BODY"===s.nodeName&&(s=t.ownerDocument.documentElement)):s="window"===r?t.ownerDocument.documentElement:r;var c=T(s,o,a);if("HTML"!==s.nodeName||L(o))i=c;else{var l=M(t.ownerDocument),f=l.height,p=l.width;i.top+=c.top-c.marginTop,i.bottom=f+c.top,i.left+=c.left-c.marginLeft,i.right=p+c.left}}n=n||0;var v="number"===typeof n;return i.left+=v?n:n.left||0,i.top+=v?n:n.top||0,i.right-=v?n:n.right||0,i.bottom-=v?n:n.bottom||0,i}function E(t){var e=t.width,n=t.height;return e*n}function x(t,e,n,r,a){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var o=P(n,r,i,a),s={top:{width:o.width,height:e.top-o.top},right:{width:o.right-e.right,height:o.height},bottom:{width:o.width,height:o.bottom-e.bottom},left:{width:e.left-o.left,height:o.height}},c=Object.keys(s).map((function(t){return I({key:t},s[t],{area:E(s[t])})})).sort((function(t,e){return e.area-t.area})),l=c.filter((function(t){var e=t.width,r=t.height;return e>=n.clientWidth&&r>=n.clientHeight})),u=l.length>0?l[0].key:c[0].key,h=t.split("-")[1];return u+(h?"-"+h:"")}function _(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=r?B(e):y(e,d(n));return T(n,a,r)}function F(t){var e=t.ownerDocument.defaultView,n=e.getComputedStyle(t),r=parseFloat(n.marginTop||0)+parseFloat(n.marginBottom||0),a=parseFloat(n.marginLeft||0)+parseFloat(n.marginRight||0),i={width:t.offsetWidth+a,height:t.offsetHeight+r};return i}function D(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,(function(t){return e[t]}))}function R(t,e,n){n=n.split("-")[0];var r=F(t),a={width:r.width,height:r.height},i=-1!==["right","left"].indexOf(n),o=i?"top":"left",s=i?"left":"top",c=i?"height":"width",l=i?"width":"height";return a[o]=e[o]+e[c]/2-r[c]/2,a[s]=n===s?e[s]-r[l]:e[D(s)],a}function N(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function $(t,e,n){if(Array.prototype.findIndex)return t.findIndex((function(t){return t[e]===n}));var r=N(t,(function(t){return t[e]===n}));return t.indexOf(r)}function U(t,e,n){var r=void 0===n?t:t.slice(0,$(t,"name",n));return r.forEach((function(t){t["function"]&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t["function"]||t.fn;t.enabled&&c(n)&&(e.offsets.popper=S(e.offsets.popper),e.offsets.reference=S(e.offsets.reference),e=n(e,t))})),e}function q(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=_(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=x(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=R(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=U(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function G(t,e){return t.some((function(t){var n=t.name,r=t.enabled;return r&&n===e}))}function W(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),r=0;r<e.length;r++){var a=e[r],i=a?""+a+n:t;if("undefined"!==typeof document.body.style[i])return i}return null}function K(){return this.state.isDestroyed=!0,G(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[W("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function X(t){var e=t.ownerDocument;return e?e.defaultView:window}function Y(t,e,n,r){var a="BODY"===t.nodeName,i=a?t.ownerDocument.defaultView:t;i.addEventListener(e,n,{passive:!0}),a||Y(h(i.parentNode),e,n,r),r.push(i)}function J(t,e,n,r){n.updateBound=r,X(t).addEventListener("resize",n.updateBound,{passive:!0});var a=h(t);return Y(a,"scroll",n.updateBound,n.scrollParents),n.scrollElement=a,n.eventsEnabled=!0,n}function Q(){this.state.eventsEnabled||(this.state=J(this.reference,this.options,this.state,this.scheduleUpdate))}function Z(t,e){return X(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)})),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e}function tt(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=Z(this.reference,this.state))}function et(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function nt(t,e){Object.keys(e).forEach((function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&et(e[n])&&(r="px"),t.style[n]=e[n]+r}))}function rt(t,e){Object.keys(e).forEach((function(n){var r=e[n];!1!==r?t.setAttribute(n,e[n]):t.removeAttribute(n)}))}function at(t){return nt(t.instance.popper,t.styles),rt(t.instance.popper,t.attributes),t.arrowElement&&Object.keys(t.arrowStyles).length&&nt(t.arrowElement,t.arrowStyles),t}function it(t,e,n,r,a){var i=_(a,e,t,n.positionFixed),o=x(n.placement,i,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",o),nt(e,{position:n.positionFixed?"fixed":"absolute"}),n}function ot(t,e){var n=t.offsets,r=n.popper,a=n.reference,i=Math.round,o=Math.floor,s=function(t){return t},c=i(a.width),l=i(r.width),u=-1!==["left","right"].indexOf(t.placement),h=-1!==t.placement.indexOf("-"),d=c%2===l%2,f=c%2===1&&l%2===1,p=e?u||h||d?i:o:s,v=e?i:s;return{left:p(f&&!h&&e?r.left-1:r.left),top:v(r.top),bottom:v(r.bottom),right:p(r.right)}}var st=n&&/Firefox/i.test(navigator.userAgent);function ct(t,e){var n=e.x,r=e.y,a=t.offsets.popper,i=N(t.instance.modifiers,(function(t){return"applyStyle"===t.name})).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var o=void 0!==i?i:e.gpuAcceleration,s=m(t.instance.popper),c=k(s),l={position:a.position},u=ot(t,window.devicePixelRatio<2||!st),h="bottom"===n?"top":"bottom",d="right"===r?"left":"right",f=W("transform"),p=void 0,v=void 0;if(v="bottom"===h?"HTML"===s.nodeName?-s.clientHeight+u.bottom:-c.height+u.bottom:u.top,p="right"===d?"HTML"===s.nodeName?-s.clientWidth+u.right:-c.width+u.right:u.left,o&&f)l[f]="translate3d("+p+"px, "+v+"px, 0)",l[h]=0,l[d]=0,l.willChange="transform";else{var b="bottom"===h?-1:1,g="right"===d?-1:1;l[h]=v*b,l[d]=p*g,l.willChange=h+", "+d}var y={"x-placement":t.placement};return t.attributes=I({},y,t.attributes),t.styles=I({},l,t.styles),t.arrowStyles=I({},t.offsets.arrow,t.arrowStyles),t}function lt(t,e,n){var r=N(t,(function(t){var n=t.name;return n===e})),a=!!r&&t.some((function(t){return t.name===n&&t.enabled&&t.order<r.order}));if(!a){var i="`"+e+"`",o="`"+n+"`";console.warn(o+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return a}function ut(t,e){var n;if(!lt(t.instance.modifiers,"arrow","keepTogether"))return t;var r=e.element;if("string"===typeof r){if(r=t.instance.popper.querySelector(r),!r)return t}else if(!t.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var a=t.placement.split("-")[0],i=t.offsets,o=i.popper,s=i.reference,c=-1!==["left","right"].indexOf(a),u=c?"height":"width",h=c?"Top":"Left",d=h.toLowerCase(),f=c?"left":"top",p=c?"bottom":"right",v=F(r)[u];s[p]-v<o[d]&&(t.offsets.popper[d]-=o[d]-(s[p]-v)),s[d]+v>o[p]&&(t.offsets.popper[d]+=s[d]+v-o[p]),t.offsets.popper=S(t.offsets.popper);var m=s[d]+s[u]/2-v/2,b=l(t.instance.popper),g=parseFloat(b["margin"+h]),y=parseFloat(b["border"+h+"Width"]),O=m-t.offsets.popper[d]-g-y;return O=Math.max(Math.min(o[u]-v,O),0),t.arrowElement=r,t.offsets.arrow=(n={},C(n,d,Math.round(O)),C(n,f,""),n),t}function ht(t){return"end"===t?"start":"start"===t?"end":t}var dt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],ft=dt.slice(3);function pt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=ft.indexOf(t),r=ft.slice(n+1).concat(ft.slice(0,n));return e?r.reverse():r}var vt={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function mt(t,e){if(G(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=P(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),r=t.placement.split("-")[0],a=D(r),i=t.placement.split("-")[1]||"",o=[];switch(e.behavior){case vt.FLIP:o=[r,a];break;case vt.CLOCKWISE:o=pt(r);break;case vt.COUNTERCLOCKWISE:o=pt(r,!0);break;default:o=e.behavior}return o.forEach((function(s,c){if(r!==s||o.length===c+1)return t;r=t.placement.split("-")[0],a=D(r);var l=t.offsets.popper,u=t.offsets.reference,h=Math.floor,d="left"===r&&h(l.right)>h(u.left)||"right"===r&&h(l.left)<h(u.right)||"top"===r&&h(l.bottom)>h(u.top)||"bottom"===r&&h(l.top)<h(u.bottom),f=h(l.left)<h(n.left),p=h(l.right)>h(n.right),v=h(l.top)<h(n.top),m=h(l.bottom)>h(n.bottom),b="left"===r&&f||"right"===r&&p||"top"===r&&v||"bottom"===r&&m,g=-1!==["top","bottom"].indexOf(r),y=!!e.flipVariations&&(g&&"start"===i&&f||g&&"end"===i&&p||!g&&"start"===i&&v||!g&&"end"===i&&m),O=!!e.flipVariationsByContent&&(g&&"start"===i&&p||g&&"end"===i&&f||!g&&"start"===i&&m||!g&&"end"===i&&v),z=y||O;(d||b||z)&&(t.flipped=!0,(d||b)&&(r=o[c+1]),z&&(i=ht(i)),t.placement=r+(i?"-"+i:""),t.offsets.popper=I({},t.offsets.popper,R(t.instance.popper,t.offsets.reference,t.placement)),t=U(t.instance.modifiers,t,"flip"))})),t}function bt(t){var e=t.offsets,n=e.popper,r=e.reference,a=t.placement.split("-")[0],i=Math.floor,o=-1!==["top","bottom"].indexOf(a),s=o?"right":"bottom",c=o?"left":"top",l=o?"width":"height";return n[s]<i(r[c])&&(t.offsets.popper[c]=i(r[c])-n[l]),n[c]>i(r[s])&&(t.offsets.popper[c]=i(r[s])),t}function gt(t,e,n,r){var a=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+a[1],o=a[2];if(!i)return t;if(0===o.indexOf("%")){var s=void 0;switch(o){case"%p":s=n;break;case"%":case"%r":default:s=r}var c=S(s);return c[e]/100*i}if("vh"===o||"vw"===o){var l=void 0;return l="vh"===o?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0),l/100*i}return i}function yt(t,e,n,r){var a=[0,0],i=-1!==["right","left"].indexOf(r),o=t.split(/(\+|\-)/).map((function(t){return t.trim()})),s=o.indexOf(N(o,(function(t){return-1!==t.search(/,|\s/)})));o[s]&&-1===o[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var c=/\s*,\s*|\s+/,l=-1!==s?[o.slice(0,s).concat([o[s].split(c)[0]]),[o[s].split(c)[1]].concat(o.slice(s+1))]:[o];return l=l.map((function(t,r){var a=(1===r?!i:i)?"height":"width",o=!1;return t.reduce((function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,o=!0,t):o?(t[t.length-1]+=e,o=!1,t):t.concat(e)}),[]).map((function(t){return gt(t,a,e,n)}))})),l.forEach((function(t,e){t.forEach((function(n,r){et(n)&&(a[e]+=n*("-"===t[r-1]?-1:1))}))})),a}function Ot(t,e){var n=e.offset,r=t.placement,a=t.offsets,i=a.popper,o=a.reference,s=r.split("-")[0],c=void 0;return c=et(+n)?[+n,0]:yt(n,i,o,s),"left"===s?(i.top+=c[0],i.left-=c[1]):"right"===s?(i.top+=c[0],i.left+=c[1]):"top"===s?(i.left+=c[0],i.top-=c[1]):"bottom"===s&&(i.left+=c[0],i.top+=c[1]),t.popper=i,t}function zt(t,e){var n=e.boundariesElement||m(t.instance.popper);t.instance.reference===n&&(n=m(n));var r=W("transform"),a=t.instance.popper.style,i=a.top,o=a.left,s=a[r];a.top="",a.left="",a[r]="";var c=P(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed);a.top=i,a.left=o,a[r]=s,e.boundaries=c;var l=e.priority,u=t.offsets.popper,h={primary:function(t){var n=u[t];return u[t]<c[t]&&!e.escapeWithReference&&(n=Math.max(u[t],c[t])),C({},t,n)},secondary:function(t){var n="right"===t?"left":"top",r=u[n];return u[t]>c[t]&&!e.escapeWithReference&&(r=Math.min(u[n],c[t]-("right"===t?u.width:u.height))),C({},n,r)}};return l.forEach((function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";u=I({},u,h[e](t))})),t.offsets.popper=u,t}function wt(t){var e=t.placement,n=e.split("-")[0],r=e.split("-")[1];if(r){var a=t.offsets,i=a.reference,o=a.popper,s=-1!==["bottom","top"].indexOf(n),c=s?"left":"top",l=s?"width":"height",u={start:C({},c,i[c]),end:C({},c,i[c]+i[l]-o[l])};t.offsets.popper=I({},o,u[r])}return t}function jt(t){if(!lt(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=N(t.instance.modifiers,(function(t){return"preventOverflow"===t.name})).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}function Mt(t){var e=t.placement,n=e.split("-")[0],r=t.offsets,a=r.popper,i=r.reference,o=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return a[o?"left":"top"]=i[n]-(s?a[o?"width":"height"]:0),t.placement=D(e),t.offsets.popper=S(a),t}var At={shift:{order:100,enabled:!0,fn:wt},offset:{order:200,enabled:!0,fn:Ot,offset:0},preventOverflow:{order:300,enabled:!0,fn:zt,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:bt},arrow:{order:500,enabled:!0,fn:ut,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:mt,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:Mt},hide:{order:800,enabled:!0,fn:jt},computeStyle:{order:850,enabled:!0,fn:ct,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:at,onLoad:it,gpuAcceleration:void 0}},Vt={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:At},Ct=function(){function t(e,n){var r=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};A(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=s(this.update.bind(this)),this.options=I({},t.Defaults,a),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(I({},t.Defaults.modifiers,a.modifiers)).forEach((function(e){r.options.modifiers[e]=I({},t.Defaults.modifiers[e]||{},a.modifiers?a.modifiers[e]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(t){return I({name:t},r.options.modifiers[t])})).sort((function(t,e){return t.order-e.order})),this.modifiers.forEach((function(t){t.enabled&&c(t.onLoad)&&t.onLoad(r.reference,r.popper,r.options,t,r.state)})),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return V(t,[{key:"update",value:function(){return q.call(this)}},{key:"destroy",value:function(){return K.call(this)}},{key:"enableEventListeners",value:function(){return Q.call(this)}},{key:"disableEventListeners",value:function(){return tt.call(this)}}]),t}();Ct.Utils=("undefined"!==typeof window?window:t).PopperUtils,Ct.placements=dt,Ct.Defaults=Vt,e["a"]=Ct}).call(this,n("c8ba"))},f28c:function(t,e){var n,r,a=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}function c(t){if(r===clearTimeout)return clearTimeout(t);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{return r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(t){r=o}})();var l,u=[],h=!1,d=-1;function f(){h&&l&&(h=!1,l.length?u=l.concat(u):d=-1,u.length&&p())}function p(){if(!h){var t=s(f);h=!0;var e=u.length;while(e){l=u,u=[];while(++d<e)l&&l[d].run();d=-1,e=u.length}l=null,h=!1,c(t)}}function v(t,e){this.fun=t,this.array=e}function m(){}a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new v(t,e)),1!==u.length||h||s(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},f5df:function(t,e,n){var r=n("00ee"),a=n("1626"),i=n("c6b6"),o=n("b622"),s=o("toStringTag"),c="Arguments"==i(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=Object(t),s))?n:c?i(e):"Object"==(r=i(e))&&a(e.callee)?"Arguments":r}},f6b4:function(t,e,n){"use strict";var r=n("c532");function a(){this.handlers=[]}a.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},a.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},a.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=a},f772:function(t,e,n){var r=n("5692"),a=n("90e3"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=a(t))}},f9e3:function(t,e,n){},fa73:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"j",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"g",(function(){return h})),n.d(e,"i",(function(){return d})),n.d(e,"h",(function(){return f})),n.d(e,"c",(function(){return p}));var r=n("992e"),a=n("7b1e"),i=function(t){return t.replace(r["p"],"-$1").toLowerCase()},o=function(t){return t=i(t).replace(r["F"],(function(t,e){return e?e.toUpperCase():""})),t.charAt(0).toUpperCase()+t.slice(1)},s=function(t){return t.replace(r["E"]," ").replace(r["r"],(function(t,e,n){return e+" "+n})).replace(r["z"],(function(t,e,n){return e+n.toUpperCase()}))},c=function(t){return t=Object(a["n"])(t)?t.trim():String(t),t.charAt(0).toLowerCase()+t.slice(1)},l=function(t){return t=Object(a["n"])(t)?t.trim():String(t),t.charAt(0).toUpperCase()+t.slice(1)},u=function(t){return t.replace(r["v"],"\\$&")},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Object(a["p"])(t)?"":Object(a["a"])(t)||Object(a["k"])(t)&&t.toString===Object.prototype.toString?JSON.stringify(t,null,e):String(t)},d=function(t){return h(t).replace(r["C"],"")},f=function(t){return h(t).trim()},p=function(t){return h(t).toLowerCase()}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),a=n("e8b5"),i=n("68ee"),o=n("861d"),s=n("23cb"),c=n("50c4"),l=n("fc6a"),u=n("8418"),h=n("b622"),d=n("1dde"),f=d("slice"),p=h("species"),v=[].slice,m=Math.max;r({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var n,r,h,d=l(this),f=c(d.length),b=s(t,f),g=s(void 0===e?f:e,f);if(a(d)&&(n=d.constructor,i(n)&&(n===Array||a(n.prototype))?n=void 0:o(n)&&(n=n[p],null===n&&(n=void 0)),n===Array||void 0===n))return v.call(d,b,g);for(r=new(void 0===n?Array:n)(m(g-b,0)),h=0;b<g;b++,h++)b in d&&u(r,h,d[b]);return r.length=h,r}})},fc6a:function(t,e,n){var r=n("44ad"),a=n("1d80");t.exports=function(t){return r(a(t))}},fce3:function(t,e,n){var r=n("d039"),a=n("da84"),i=a.RegExp;t.exports=r((function(){var t=i(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise},ffa6:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return p}));function r(t,e,n,r){function a(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function o(t){try{c(r.next(t))}catch(e){i(e)}}function s(t){try{c(r["throw"](t))}catch(e){i(e)}}function c(t){t.done?n(t.value):a(t.value).then(o,s)}c((r=r.apply(t,e||[])).next())}))}function a(t,e){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(t){return function(e){return c([t,e])}}function c(i){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,r&&(a=2&i[0]?r["return"]:i[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(a=o.trys,!(a=a.length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=e.call(t,o)}catch(s){i=[6,s],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}Object.create;function i(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,a,i=n.call(t),o=[];try{while((void 0===e||e-- >0)&&!(r=i.next()).done)o.push(r.value)}catch(s){a={error:s}}finally{try{r&&!r.done&&(n=i["return"])&&n.call(i)}finally{if(a)throw a.error}}return o}function s(t,e,n){if(n||2===arguments.length)for(var r,a=0,i=e.length;a<i;a++)!r&&a in e||(r||(r=Array.prototype.slice.call(e,0,a)),r[a]=e[a]);return t.concat(r||Array.prototype.slice.call(e))}Object.create;var c=n("1fd5"),l=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),u="[DEFAULT]",h=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new c["a"];if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(a){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(r)return null;throw a}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(f(t))try{this.getOrInitializeService({instanceIdentifier:u})}catch(p){}try{for(var r=i(this.instancesDeferred.entries()),a=r.next();!a.done;a=r.next()){var s=o(a.value,2),c=s[0],l=s[1],h=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:h});l.resolve(d)}catch(p){}}}catch(v){e={error:v}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=u),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return r(this,void 0,void 0,(function(){var t;return a(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(s(s([],o(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),o(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=u),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=u),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var r=t.options,a=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:s,options:a});try{for(var l=i(this.instancesDeferred.entries()),u=l.next();!u.done;u=l.next()){var h=o(u.value,2),d=h[0],f=h[1],p=this.normalizeInstanceIdentifier(d);s===p&&f.resolve(c)}}catch(v){e={error:v}}finally{try{u&&!u.done&&(n=l.return)&&n.call(l)}finally{if(e)throw e.error}}return c},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),a=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;a.add(t),this.onInitCallbacks.set(r,a);var i=this.instances.get(r);return i&&t(i,r),function(){a.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,r,a=this.onInitCallbacks.get(e);if(a)try{for(var o=i(a),s=o.next();!s.done;s=o.next()){var c=s.value;try{c(t,e)}catch(l){}}}catch(u){n={error:u}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e=t.instanceIdentifier,n=t.options,r=void 0===n?{}:n,a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:d(e),options:r}),this.instances.set(e,a),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch(i){}return a||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=u),this.component?this.component.multipleInstances?t:u:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();function d(t){return t===u?void 0:t}function f(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){var e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new h(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}()}}]);
//# sourceMappingURL=chunk-vendors.410f2833.js.map