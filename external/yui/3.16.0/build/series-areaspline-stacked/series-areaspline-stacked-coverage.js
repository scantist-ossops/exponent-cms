/*
YUI 3.16.0 (build 76f0e08)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/series-areaspline-stacked/series-areaspline-stacked.js']) {
   __coverage__['build/series-areaspline-stacked/series-areaspline-stacked.js'] = {"path":"build/series-areaspline-stacked/series-areaspline-stacked.js","s":{"1":0,"2":0,"3":0,"4":0},"b":{},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":37},"end":{"line":1,"column":56}}},"2":{"name":"(anonymous_2)","line":28,"loc":{"start":{"line":28,"column":16},"end":{"line":29,"column":4}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":50,"column":68}},"2":{"start":{"line":20,"column":0},"end":{"line":46,"column":3}},"3":{"start":{"line":30,"column":8},"end":{"line":30,"column":33}},"4":{"start":{"line":31,"column":8},"end":{"line":31,"column":37}}},"branchMap":{},"code":["(function () { YUI.add('series-areaspline-stacked', function (Y, NAME) {","","/**"," * Provides functionality for creating a stacked area spline series."," *"," * @module charts"," * @submodule series-areaspline-stacked"," */","/**"," * StackedAreaSplineSeries creates a stacked area chart with points data points connected by a curve."," *"," * @class StackedAreaSplineSeries"," * @extends AreaSeries"," * @uses CurveUtil"," * @uses StackingUtil"," * @constructor"," * @param {Object} config (optional) Configuration parameters."," * @submodule series-areaspline-stacked"," */","Y.StackedAreaSplineSeries = Y.Base.create(\"stackedAreaSplineSeries\", Y.AreaSeries, [Y.CurveUtil, Y.StackingUtil], {","    /**","     * @protected","     *","     * Draws the series.","     *","     * @method drawSeries","     */","    drawSeries: function()","    {","        this._stackCoordinates();","        this.drawStackedAreaSpline();","    }","}, {","    ATTRS : {","        /**","         * Read-only attribute indicating the type of series.","         *","         * @attribute type","         * @type String","         * @default stackedAreaSpline","         */","        type: {","            value:\"stackedAreaSpline\"","        }","    }","});","","","","}, '3.16.0', {\"requires\": [\"series-stacked\", \"series-areaspline\"]});","","}());"]};
}
var __cov_97r89EIoQABsxd_0RbmAoA = __coverage__['build/series-areaspline-stacked/series-areaspline-stacked.js'];
__cov_97r89EIoQABsxd_0RbmAoA.s['1']++;YUI.add('series-areaspline-stacked',function(Y,NAME){__cov_97r89EIoQABsxd_0RbmAoA.f['1']++;__cov_97r89EIoQABsxd_0RbmAoA.s['2']++;Y.StackedAreaSplineSeries=Y.Base.create('stackedAreaSplineSeries',Y.AreaSeries,[Y.CurveUtil,Y.StackingUtil],{drawSeries:function(){__cov_97r89EIoQABsxd_0RbmAoA.f['2']++;__cov_97r89EIoQABsxd_0RbmAoA.s['3']++;this._stackCoordinates();__cov_97r89EIoQABsxd_0RbmAoA.s['4']++;this.drawStackedAreaSpline();}},{ATTRS:{type:{value:'stackedAreaSpline'}}});},'3.16.0',{'requires':['series-stacked','series-areaspline']});
