/*! Copyright Elasticsearch B.V. and/or license to Elasticsearch B.V. under one or more contributor license agreements
 * Licensed under the Elastic License; you may not use this file except in compliance with the Elastic License. */(function(modules){function webpackJsonpCallback(data){var chunkIds=data[0];var moreModules=data[1];var executeModules=data[2];var moduleId,chunkId,i=0,resolves=[];for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(installedChunks[chunkId]){resolves.push(installedChunks[chunkId][0])}installedChunks[chunkId]=0}for(moduleId in moreModules){if(Object.prototype.hasOwnProperty.call(moreModules,moduleId)){modules[moduleId]=moreModules[moduleId]}}if(parentJsonpFunction)parentJsonpFunction(data);while(resolves.length){resolves.shift()()}deferredModules.push.apply(deferredModules,executeModules||[]);return checkDeferredModules()}function checkDeferredModules(){var result;for(var i=0;i<deferredModules.length;i++){var deferredModule=deferredModules[i];var fulfilled=true;for(var j=1;j<deferredModule.length;j++){var depId=deferredModule[j];if(installedChunks[depId]!==0)fulfilled=false}if(fulfilled){deferredModules.splice(i--,1);result=__webpack_require__(__webpack_require__.s=deferredModule[0])}}return result}var installedModules={};var installedChunks={14:0};var deferredModules=[];function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="__REPLACE_WITH_PUBLIC_PATH__";var jsonpArray=window["webpackJsonp"]=window["webpackJsonp"]||[];var oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback;jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;deferredModules.push([4987,0]);return checkDeferredModules()})({4987:function(module,exports,__webpack_require__){"use strict";__webpack_require__(75);__webpack_require__(76);__webpack_require__(77);__webpack_require__(78);__webpack_require__(79);__webpack_require__(80);__webpack_require__(81);__webpack_require__(82);__webpack_require__(83);__webpack_require__(84);__webpack_require__(85);__webpack_require__(86);__webpack_require__(87);__webpack_require__(88);__webpack_require__(89);__webpack_require__(90);__webpack_require__(91);__webpack_require__(92);__webpack_require__(93);__webpack_require__(94);__webpack_require__(95);__webpack_require__(96);__webpack_require__(97);__webpack_require__(98);__webpack_require__(99);__webpack_require__(100);__webpack_require__(101);__webpack_require__(102);__webpack_require__(103);__webpack_require__(104);__webpack_require__(105);__webpack_require__(106);__webpack_require__(107);__webpack_require__(108);__webpack_require__(109);__webpack_require__(110);__webpack_require__(111);__webpack_require__(112);__webpack_require__(113);__webpack_require__(114);__webpack_require__(115);__webpack_require__(116);__webpack_require__(117);__webpack_require__(118);__webpack_require__(119);__webpack_require__(120);__webpack_require__(121);__webpack_require__(122);__webpack_require__(123);__webpack_require__(124);__webpack_require__(125);__webpack_require__(126);__webpack_require__(127);__webpack_require__(128);__webpack_require__(129);__webpack_require__(130);__webpack_require__(131);__webpack_require__(132);__webpack_require__(133);__webpack_require__(134);__webpack_require__(135);__webpack_require__(136);__webpack_require__(137);__webpack_require__(138);__webpack_require__(139);__webpack_require__(140);__webpack_require__(141);__webpack_require__(142);__webpack_require__(143);__webpack_require__(144);__webpack_require__(145);__webpack_require__(146);__webpack_require__(147);__webpack_require__(148);__webpack_require__(149);__webpack_require__(150);__webpack_require__(151);__webpack_require__(152);__webpack_require__(153);__webpack_require__(154);__webpack_require__(155);__webpack_require__(156);__webpack_require__(157);__webpack_require__(158);__webpack_require__(159);__webpack_require__(160);__webpack_require__(161);__webpack_require__(162);__webpack_require__(163);__webpack_require__(164);__webpack_require__(165);__webpack_require__(166);__webpack_require__(167);__webpack_require__(168);__webpack_require__(169);__webpack_require__(170);__webpack_require__(171);__webpack_require__(172);__webpack_require__(173);__webpack_require__(185);var _i18n=__webpack_require__(9);var _kibanaCore__=__webpack_require__(174);var injectedMetadata=JSON.parse(document.querySelector("kbn-injected-metadata").getAttribute("data"));_i18n.i18n.init(injectedMetadata.legacyMetadata.translations);new _kibanaCore__.CoreSystem({injectedMetadata:injectedMetadata,rootDomElement:document.body,requireLegacyFiles:function requireLegacyFiles(){__webpack_require__(4988)}}).start()},4988:function(module,exports,__webpack_require__){"use strict";__webpack_require__(255);__webpack_require__(561);var _modules=__webpack_require__(4);var _chrome=__webpack_require__(8);var _chrome2=_interopRequireDefault(_chrome);var _render=__webpack_require__(4989);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}_chrome2.default.setRootTemplate(__webpack_require__(4996)).setRootController("ui",function($scope,buildNum,buildSha){$scope.$$postDigest(function(){(0,_render.renderStatusPage)(buildNum,buildSha.substr(0,8));$scope.$on("$destroy",_render.destroyStatusPage)})});_modules.uiModules.get("kibana").config(function(appSwitcherEnsureNavigationProvider){appSwitcherEnsureNavigationProvider.forceNavigation(true)})},4989:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.renderStatusPage=renderStatusPage;exports.destroyStatusPage=destroyStatusPage;var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactDom=__webpack_require__(15);var _react3=__webpack_require__(3);var _status_app=__webpack_require__(4990);var _status_app2=_interopRequireDefault(_status_app);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var STATUS_PAGE_DOM_NODE_ID="createStatusPageReact";function renderStatusPage(buildNum,buildSha){var node=document.getElementById(STATUS_PAGE_DOM_NODE_ID);if(!node){return}(0,_reactDom.render)(_react2.default.createElement(_react3.I18nProvider,null,_react2.default.createElement(_status_app2.default,{buildNum:buildNum,buildSha:buildSha})),node)}function destroyStatusPage(){var node=document.getElementById(STATUS_PAGE_DOM_NODE_ID);node&&(0,_reactDom.unmountComponentAtNode)(node)}},4990:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _load_status=__webpack_require__(4991);var _load_status2=_interopRequireDefault(_load_status);var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(11);var _propTypes2=_interopRequireDefault(_propTypes);var _eui=__webpack_require__(2);var _react3=__webpack_require__(3);var _metric_tiles=__webpack_require__(4992);var _metric_tiles2=_interopRequireDefault(_metric_tiles);var _status_table=__webpack_require__(4994);var _status_table2=_interopRequireDefault(_status_table);var _server_status=__webpack_require__(4995);var _server_status2=_interopRequireDefault(_server_status);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{return Promise.resolve(value).then(function(value){step("next",value)},function(err){step("throw",err)})}}return step("next")})}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var StatusApp=function(_Component){_inherits(StatusApp,_Component);function StatusApp(){_classCallCheck(this,StatusApp);var _this=_possibleConstructorReturn(this,(StatusApp.__proto__||Object.getPrototypeOf(StatusApp)).call(this));_this.componentDidMount=_asyncToGenerator(regeneratorRuntime.mark(function _callee(){var data;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return(0,_load_status2.default)();case 2:data=_context.sent;if(data){this.setState({loading:false,data:data})}else{this.setState({fetchError:true,loading:false})}case 4:case"end":return _context.stop()}}},_callee,this)}));_this.state={loading:true,fetchError:false,data:null};return _this}_createClass(StatusApp,[{key:"render",value:function render(){var _props=this.props,buildNum=_props.buildNum,buildSha=_props.buildSha;var _state=this.state,loading=_state.loading,fetchError=_state.fetchError,data=_state.data;if(loading){return _react2.default.createElement(_eui.EuiLoadingSpinner,{size:"l"})}if(fetchError){return _react2.default.createElement(_eui.EuiText,{color:"danger"},_react2.default.createElement(_react3.FormattedMessage,{id:"statusPage.statusApp.loadingErrorText",defaultMessage:"An error occurred loading the status"}))}var metrics=data.metrics,statuses=data.statuses,serverState=data.serverState,name=data.name;return _react2.default.createElement(_eui.EuiPage,{className:"stsPage"},_react2.default.createElement(_eui.EuiPageBody,{restrictWidth:true},_react2.default.createElement(_server_status2.default,{name:name,serverState:serverState}),_react2.default.createElement(_eui.EuiSpacer,null),_react2.default.createElement(_metric_tiles2.default,{metrics:metrics}),_react2.default.createElement(_eui.EuiSpacer,null),_react2.default.createElement(_eui.EuiPageContent,{grow:false},_react2.default.createElement(_eui.EuiFlexGroup,{alignItems:"center",justifyContent:"spaceBetween"},_react2.default.createElement(_eui.EuiFlexItem,{grow:false},_react2.default.createElement(_eui.EuiTitle,{size:"s"},_react2.default.createElement("h2",null,_react2.default.createElement(_react3.FormattedMessage,{id:"statusPage.statusApp.statusTitle",defaultMessage:"Plugin status"})))),_react2.default.createElement(_eui.EuiFlexItem,{grow:false},_react2.default.createElement(_eui.EuiFlexGroup,null,_react2.default.createElement(_eui.EuiFlexItem,{grow:false},_react2.default.createElement(_eui.EuiText,{size:"s"},_react2.default.createElement("p",null,_react2.default.createElement(_react3.FormattedMessage,{id:"statusPage.statusApp.statusActions.buildText",defaultMessage:"BUILD {buildNum}",values:{buildNum:_react2.default.createElement("strong",null,buildNum)}})))),_react2.default.createElement(_eui.EuiFlexItem,{grow:false},_react2.default.createElement(_eui.EuiText,{size:"s"},_react2.default.createElement("p",null,_react2.default.createElement(_react3.FormattedMessage,{id:"statusPage.statusApp.statusActions.commitText",defaultMessage:"COMMIT {buildSha}",values:{buildSha:_react2.default.createElement("strong",null,buildSha)}}))))))),_react2.default.createElement(_eui.EuiSpacer,null),_react2.default.createElement(_status_table2.default,{statuses:statuses}))))}}]);return StatusApp}(_react.Component);StatusApp.propTypes={buildNum:_propTypes2.default.number.isRequired,buildSha:_propTypes2.default.string.isRequired};exports.default=StatusApp;module.exports=exports["default"]},4991:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var fetchData=function(){var _ref=_asyncToGenerator(regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",fetch(_chrome2.default.addBasePath("/api/status"),{method:"get",credentials:"same-origin"}));case 1:case"end":return _context.stop()}}},_callee,this)}));return function fetchData(){return _ref.apply(this,arguments)}}();var loadStatus=function(){var _ref2=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(){var fetchFn=arguments.length>0&&arguments[0]!==undefined?arguments[0]:fetchData;var response,serverIsDownErrorMessage,serverStatusCodeErrorMessage,data;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(errorNotif){errorNotif.clear();errorNotif=null}response=void 0;_context2.prev=2;_context2.next=5;return fetchFn();case 5:response=_context2.sent;_context2.next=13;break;case 8:_context2.prev=8;_context2.t0=_context2["catch"](2);serverIsDownErrorMessage=_i18n.i18n.translate("statusPage.loadStatus.serverIsDownErrorMessage",{defaultMessage:"Failed to request server status. Perhaps your server is down?"});errorNotif=_notify.toastNotifications.addDanger(serverIsDownErrorMessage);return _context2.abrupt("return",_context2.t0);case 13:if(!(response.status>=400)){_context2.next=17;break}serverStatusCodeErrorMessage=_i18n.i18n.translate("statusPage.loadStatus.serverStatusCodeErrorMessage",{defaultMessage:"Failed to request server status with status code {responseStatus}",values:{responseStatus:response.status}});errorNotif=_notify.toastNotifications.addDanger(serverStatusCodeErrorMessage);return _context2.abrupt("return");case 17:_context2.next=19;return response.json();case 19:data=_context2.sent;return _context2.abrupt("return",{name:data.name,statuses:data.status.statuses.map(formatStatus),serverState:formatStatus(data.status.overall).state,metrics:formatMetrics(data)});case 21:case"end":return _context2.stop()}}},_callee2,this,[[2,8]])}));return function loadStatus(){return _ref2.apply(this,arguments)}}();var _lodash=__webpack_require__(1);var _lodash2=_interopRequireDefault(_lodash);var _chrome=__webpack_require__(8);var _chrome2=_interopRequireDefault(_chrome);var _notify=__webpack_require__(10);var _i18n=__webpack_require__(9);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{return Promise.resolve(value).then(function(value){step("next",value)},function(err){step("throw",err)})}}return step("next")})}}var errorNotif=void 0;function formatMetrics(data){if(!data.metrics){return null}return[{name:_i18n.i18n.translate("statusPage.metricsTiles.columns.heapTotalHeader",{defaultMessage:"Heap total"}),value:_lodash2.default.get(data.metrics,"process.memory.heap.size_limit"),type:"byte"},{name:_i18n.i18n.translate("statusPage.metricsTiles.columns.heapUsedHeader",{defaultMessage:"Heap used"}),value:_lodash2.default.get(data.metrics,"process.memory.heap.used_in_bytes"),type:"byte"},{name:_i18n.i18n.translate("statusPage.metricsTiles.columns.loadHeader",{defaultMessage:"Load"}),value:[_lodash2.default.get(data.metrics,"os.load.1m"),_lodash2.default.get(data.metrics,"os.load.5m"),_lodash2.default.get(data.metrics,"os.load.15m")],type:"float"},{name:_i18n.i18n.translate("statusPage.metricsTiles.columns.resTimeAvgHeader",{defaultMessage:"Response time avg"}),value:_lodash2.default.get(data.metrics,"response_times.avg_in_millis"),type:"ms"},{name:_i18n.i18n.translate("statusPage.metricsTiles.columns.resTimeMaxHeader",{defaultMessage:"Response time max"}),value:_lodash2.default.get(data.metrics,"response_times.max_in_millis"),type:"ms"},{name:_i18n.i18n.translate("statusPage.metricsTiles.columns.requestsPerSecHeader",{defaultMessage:"Requests per second"}),value:_lodash2.default.get(data.metrics,"requests.total")*1e3/_lodash2.default.get(data.metrics,"collection_interval_in_millis")}]}function formatStatus(status){return{id:status.id,state:{id:status.state,title:status.title,message:status.message,uiColor:status.uiColor}}}exports.default=loadStatus;module.exports=exports["default"]},4992:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.MetricTile=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _format_number=__webpack_require__(4993);var _format_number2=_interopRequireDefault(_format_number);var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _prop_types=__webpack_require__(808);var _propTypes=__webpack_require__(11);var _propTypes2=_interopRequireDefault(_propTypes);var _eui=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var MetricTile=exports.MetricTile=function(_Component){_inherits(MetricTile,_Component);function MetricTile(){_classCallCheck(this,MetricTile);return _possibleConstructorReturn(this,(MetricTile.__proto__||Object.getPrototypeOf(MetricTile)).apply(this,arguments))}_createClass(MetricTile,[{key:"formattedMetric",value:function formattedMetric(){var _props$metric=this.props.metric,value=_props$metric.value,type=_props$metric.type;var metrics=[].concat(value);return metrics.map(function(metric){return(0,_format_number2.default)(metric,type)}).join(", ")}},{key:"render",value:function render(){var name=this.props.metric.name;return _react2.default.createElement(_eui.EuiCard,{layout:"horizontal",title:this.formattedMetric(),description:name})}}]);return MetricTile}(_react.Component);MetricTile.propTypes={metric:_prop_types.Metric.isRequired};var MetricTiles=function MetricTiles(_ref){var metrics=_ref.metrics;return _react2.default.createElement(_eui.EuiFlexGrid,{columns:3},metrics.map(function(metric){return _react2.default.createElement(_eui.EuiFlexItem,{key:metric.name},_react2.default.createElement(MetricTile,{metric:metric}))}))};MetricTiles.propTypes={metrics:_propTypes2.default.arrayOf(_prop_types.Metric).isRequired};exports.default=MetricTiles},4993:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=formatNumber;var _numeral=__webpack_require__(666);var _numeral2=_interopRequireDefault(_numeral);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function formatNumber(num,which){var format="0.00";var postfix="";switch(which){case"byte":format+=" b";break;case"ms":postfix=" ms";break;case"integer":format="0";break}return(0,_numeral2.default)(num).format(format)+postfix}module.exports=exports["default"]},4994:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(11);var _propTypes2=_interopRequireDefault(_propTypes);var _prop_types=__webpack_require__(808);var _eui=__webpack_require__(2);var _i18n=__webpack_require__(9);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var StatusTable=function(_Component){_inherits(StatusTable,_Component);function StatusTable(){_classCallCheck(this,StatusTable);return _possibleConstructorReturn(this,(StatusTable.__proto__||Object.getPrototypeOf(StatusTable)).apply(this,arguments))}_createClass(StatusTable,[{key:"render",value:function render(){var statuses=this.props.statuses;if(!statuses){return null}return _react2.default.createElement(_eui.EuiBasicTable,{columns:StatusTable.columns,items:statuses,rowProps:StatusTable.getRowProps,"data-test-subj":"statusBreakdown"})}}]);return StatusTable}(_react.Component);StatusTable.propTypes={statuses:_propTypes2.default.arrayOf(_propTypes2.default.shape({id:_propTypes2.default.string.isRequired,state:_prop_types.State.isRequired}))};StatusTable.columns=[{field:"state",name:"",render:function render(state){return _react2.default.createElement(_eui.EuiIcon,{type:"dot","aria-hidden":true,color:state.uiColor})},width:"32px"},{field:"id",name:_i18n.i18n.translate("statusPage.statusTable.columns.idHeader",{defaultMessage:"ID"})},{field:"state",name:_i18n.i18n.translate("statusPage.statusTable.columns.statusHeader",{defaultMessage:"Status"}),render:function render(state){return _react2.default.createElement("span",null,state.message)}}];StatusTable.getRowProps=function(_ref){var state=_ref.state;return{className:"status-table-row-"+state.uiColor}};exports.default=StatusTable;module.exports=exports["default"]},4995:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(11);var _propTypes2=_interopRequireDefault(_propTypes);var _prop_types=__webpack_require__(808);var _eui=__webpack_require__(2);var _react3=__webpack_require__(3);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var ServerState=function ServerState(_ref){var name=_ref.name,serverState=_ref.serverState;return _react2.default.createElement(_eui.EuiFlexGroup,{alignItems:"center",justifyContent:"spaceBetween",style:{flexGrow:0}},_react2.default.createElement(_eui.EuiFlexItem,{grow:false},_react2.default.createElement(_eui.EuiTitle,null,_react2.default.createElement("h2",null,_react2.default.createElement(_react3.FormattedMessage,{id:"statusPage.serverStatus.statusTitle",defaultMessage:"Kibana status is {kibanaStatus}",values:{kibanaStatus:_react2.default.createElement(_eui.EuiBadge,{color:serverState.uiColor},serverState.title)}})))),_react2.default.createElement(_eui.EuiFlexItem,{grow:false},_react2.default.createElement(_eui.EuiText,null,_react2.default.createElement("p",null,name))))};ServerState.propTypes={name:_propTypes2.default.string.isRequired,serverState:_prop_types.State.isRequired};exports.default=ServerState;module.exports=exports["default"]},4996:function(module,exports){module.exports='<div id="createStatusPageReact"></div>\n'},7:function(module,exports){module.exports=vendors},808:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Metric=exports.State=undefined;var _propTypes=__webpack_require__(11);var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var State=exports.State=_propTypes2.default.shape({id:_propTypes2.default.string.isRequired,message:_propTypes2.default.string,title:_propTypes2.default.string,uiColor:_propTypes2.default.string.isRequired});var Metric=exports.Metric=_propTypes2.default.shape({name:_propTypes2.default.string.isRequired,value:_propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.number),_propTypes2.default.number]).isRequired,type:_propTypes2.default.string})}});