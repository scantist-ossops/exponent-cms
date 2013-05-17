/*
YUI 3.10.1 (build 8bc088e)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("calendar-base",function(e,t){function M(){M.superclass.constructor.apply(this,arguments)}var n=e.ClassNameManager.getClassName,r="calendar",i=n(r,"grid"),s=n(r,"left-grid"),o=n(r,"right-grid"),u=n(r,"body"),a=n(r,"header"),f=n(r,"header-label"),l=n(r,"weekdayrow"),c=n(r,"weekday"),h=n(r,"column-hidden"),p=n(r,"day-selected"),d=n(r,"selection-disabled"),v=n(r,"row"),m=n(r,"day"),g=n(r,"prevmonth-day"),y=n(r,"nextmonth-day"),b=n(r,"anchor"),w=n(r,"pane"),E=n(r,"status"),S=e.Lang,x=S.sub,T=e.Array.each,N=e.Object.each,C=e.Array.indexOf,k=e.Object.hasKey,L=e.Object.setValue,A=e.Object.isEmpty,O=e.DataType.Date;e.CalendarBase=e.extend(M,e.Widget,{_paneProperties:{},_paneNumber:1,_calendarId:null,_selectedDates:{},_rules:{},_filterFunction:null,_storedDateCells:{},initializer:function(){this._paneProperties={},this._calendarId=e.guid("calendar"),this._selectedDates={},A(this._rules)&&(this._rules={}),this._storedDateCells={}},renderUI:function(){var e=this.get("contentBox");e.appendChild(this._initCalendarHTML(this.get("date"))),this.get("showPrevMonth")&&this._afterShowPrevMonthChange(),this.get("showNextMonth")&&this._afterShowNextMonthChange(),this._renderCustomRules(),this._renderSelectedDates(),this.get("boundingBox").setAttribute("aria-labelledby",this._calendarId+"_header")},bindUI:function(){this.after("dateChange",this._afterDateChange),this.after("showPrevMonthChange",this._afterShowPrevMonthChange),this.after("showNextMonthChange",this._afterShowNextMonthChange),this.after("headerRendererChange",this._afterHeaderRendererChange),this.after("customRendererChange",this._afterCustomRendererChange),this.after("enabledDatesRuleChange",this._afterCustomRendererChange),this.after("disabledDatesRuleChange",this._afterCustomRendererChange),this.after("focusedChange",this._afterFocusedChange),this.after("selectionChange",this._renderSelectedDates),this._bindCalendarEvents()},_getSelectedDatesList:function(){var e=[];return N(this._selectedDates,function(t){N(t,function(t){N(t,function(t){e.push(t)},this)},this)},this),e},_getSelectedDatesInMonth:function(t){var n=t.getFullYear(),r=t.getMonth();return k(this._selectedDates,n)&&k(this._selectedDates[n],r)?e.Object.values(this._selectedDates[n][r]):[]},_isNumInList:function(e,t){if(t==="all")return!0;var n=t.split(","),r=n.length,i;while(r--){i=n[r].split("-");if(i.length===2&&e>=parseInt(i[0],10)&&e<=parseInt(i[1],10))return!0;if(i.length===1&&parseInt(n[r],10)===e)return!0}return!1},_getRulesForDate:function(e){var t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),i=e.getDay(),s=this._rules,o=[],u,a,f,l;for(u in s)if(this._isNumInList(t,u))if(S.isString(s[u]))o.push(s[u]);else for(a in s[u])if(this._isNumInList(n,a))if(S.isString(s[u][a]))o.push(s[u][a]);else for(f in s[u][a])if(this._isNumInList(r,f))if(S.isString(s[u][a][f]))o.push(s[u][a][f]);else for(l in s[u][a][f])this._isNumInList(i,l)&&S.isString(s[u][a][f][l])&&o.push(s[u][a][f][l]);return o},_matchesRule:function(e,t){return C(this._getRulesForDate(e),t)>=0},_canBeSelected:function(e){var t=this.get("enabledDatesRule"),n=this.get("disabledDatesRule");return t?this._matchesRule(e,t):n?!this._matchesRule(e,n):!0},selectDates:function(e){return O.isValidDate(e)?this._addDateToSelection(e):S.isArray(e)&&this._addDatesToSelection(e),this},deselectDates:function(e){return e?O.isValidDate(e)?this._removeDateFromSelection(e):S.isArray(e)&&this._removeDatesFromSelection(e):this._clearSelection(),this},_addDateToSelection:function(e,t){if(this._canBeSelected(e)){var n=e.getFullYear(),r=e.getMonth(),i=e.getDate();k(this._selectedDates,n)?k(this._selectedDates[n],r)?this._selectedDates[n][r][i]=e:(this._selectedDates[n][r]={},this._selectedDates[n][r][i]=e):(this._selectedDates[n]={},this._selectedDates[n][r]={},this._selectedDates[n][r][i]=e),this._selectedDates=L(this._selectedDates,[n,r,i],e),t||this._fireSelectionChange()}},_addDatesToSelection:function(e){T(e,this._addDateToSelection,this),this._fireSelectionChange()},_addDateRangeToSelection:function(e,t){var n=(t.getTimezoneOffset()-e.getTimezoneOffset())*6e4,r=e.getTime(),i=t.getTime(),s,o,u;r>i?(s=r,r=i,i=s+n):i-=n;for(o=r;o<=i;o+=864e5)u=new Date(o),u.setHours(12),this._addDateToSelection(u,o);this._fireSelectionChange()},_removeDateFromSelection:function(e,t){var n=e.getFullYear(),r=e.getMonth(),i=e.getDate();k(this._selectedDates,n)&&k(this._selectedDates[n],r)&&k(this._selectedDates[n][r],i)&&(delete this._selectedDates[n][r][i],t||this._fireSelectionChange())},_removeDatesFromSelection:function(e){T(e,this._removeDateFromSelection,this),this._fireSelectionChange()},_removeDateRangeFromSelection:function(e,t){var n=e.getTime(),r=t.getTime(),i;for(i=n;i<=r;i+=864e5)this._removeDateFromSelection(new Date(i),i);this._fireSelectionChange()},_clearSelection:function(e){this._selectedDates={},this.get("contentBox").all("."+p).removeClass(p).setAttribute("aria-selected",!1),e||this._fireSelectionChange()},_fireSelectionChange:function(){this.fire("selectionChange",{newSelection:this._getSelectedDatesList()})},_restoreModifiedCells:function(){var e=this.get("contentBox"),t;for(t in this._storedDateCells)e.one("#"+t).replace(this._storedDateCells[t]),delete this._storedDateCells[t]},_renderCustomRules:function(){this.get("contentBox").all("."+m+",."+y).removeClass(d).setAttribute("aria-disabled",!1);if(!A(this._rules)){var t,n,r;for(t=0;t<this._paneNumber;t++)n=O.addMonths(this.get("date"),t),r=O.listOfDatesInMonth(n),T(r,e.bind(this._renderCustomRulesHelper,this))}},_renderCustomRulesHelper:function(e){var t=this.get("enabledDatesRule"),n=this.get("disabledDatesRule"),r,i;r=this._getRulesForDate(e),r.length>0?(i=this._dateToNode(e),(t&&C(r,t)<0||!t&&n&&C(r,n)>=0)&&i.addClass(d).setAttribute("aria-disabled",!0),S.isFunction(this._filterFunction)&&(this._storedDateCells[i.get("id")]=i.cloneNode(!0),this._filterFunction(e,i,r))):t&&(i=this._dateToNode(e),i.addClass(d).setAttribute("aria-disabled",!0))},_renderSelectedDates:function(){this.
get("contentBox").all("."+p).removeClass(p).setAttribute("aria-selected",!1);var t,n,r;for(t=0;t<this._paneNumber;t++)n=O.addMonths(this.get("date"),t),r=this._getSelectedDatesInMonth(n),T(r,e.bind(this._renderSelectedDatesHelper,this))},_renderSelectedDatesHelper:function(e){this._dateToNode(e).addClass(p).setAttribute("aria-selected",!0)},_dateToNode:function(e){var t=e.getDate(),n=0,r=t%7,i=(12+e.getMonth()-this.get("date").getMonth())%12,s=this._calendarId+"_pane_"+i,o=this._paneProperties[s].cutoffCol;switch(r){case 0:o>=6?n=12:n=5;break;case 1:n=6;break;case 2:o>0?n=7:n=0;break;case 3:o>1?n=8:n=1;break;case 4:o>2?n=9:n=2;break;case 5:o>3?n=10:n=3;break;case 6:o>4?n=11:n=4}return this.get("contentBox").one("#"+this._calendarId+"_pane_"+i+"_"+n+"_"+t)},_nodeToDate:function(e){var t=e.get("id").split("_").reverse(),n=parseInt(t[2],10),r=parseInt(t[0],10),i=O.addMonths(this.get("date"),n),s=i.getFullYear(),o=i.getMonth();return new Date(s,o,r,12,0,0,0)},_bindCalendarEvents:function(){},_normalizeDate:function(e){return e?new Date(e.getFullYear(),e.getMonth(),1,12,0,0,0):null},_getCutoffColumn:function(e,t){var n=this._normalizeDate(e).getDay()-t,r=6-(n+7)%7;return r},_turnPrevMonthOn:function(e){var t=e.get("id"),n=this._paneProperties[t].paneDate,r=O.daysInMonth(O.addMonths(n,-1)),i;this._paneProperties[t].hasOwnProperty("daysInPrevMonth")||(this._paneProperties[t].daysInPrevMonth=0);if(r!==this._paneProperties[t].daysInPrevMonth){this._paneProperties[t].daysInPrevMonth=r;for(i=5;i>=0;i--)e.one("#"+t+"_"+i+"_"+(i-5)).set("text",r--)}},_turnPrevMonthOff:function(e){var t=e.get("id"),n;this._paneProperties[t].daysInPrevMonth=0;for(n=5;n>=0;n--)e.one("#"+t+"_"+n+"_"+(n-5)).setContent("&nbsp;")},_cleanUpNextMonthCells:function(e){var t=e.get("id");e.one("#"+t+"_6_29").removeClass(y),e.one("#"+t+"_7_30").removeClass(y),e.one("#"+t+"_8_31").removeClass(y),e.one("#"+t+"_0_30").removeClass(y),e.one("#"+t+"_1_31").removeClass(y)},_turnNextMonthOn:function(e){var t=1,n=e.get("id"),r=this._paneProperties[n].daysInMonth,i=this._paneProperties[n].cutoffCol,s,o;for(s=r-22;s<i+7;s++)e.one("#"+n+"_"+s+"_"+(s+23)).set("text",t++).addClass(y);o=i,r===31&&i<=1?o=2:r===30&&i===0&&(o=1);for(s=o;s<i+7;s++)e.one("#"+n+"_"+s+"_"+(s+30)).set("text",t++).addClass(y)},_turnNextMonthOff:function(e){var t=e.get("id"),n=this._paneProperties[t].daysInMonth,r=this._paneProperties[t].cutoffCol,i,s;for(i=n-22;i<=12;i++)e.one("#"+t+"_"+i+"_"+(i+23)).setContent("&nbsp;").addClass(y);s=0,n===31&&r<=1?s=2:n===30&&r===0&&(s=1);for(i=s;i<=12;i++)e.one("#"+t+"_"+i+"_"+(i+30)).setContent("&nbsp;").addClass(y)},_afterShowNextMonthChange:function(){var e=this.get("contentBox"),t=e.one("#"+this._calendarId+"_pane_"+(this._paneNumber-1));this._cleanUpNextMonthCells(t),this.get("showNextMonth")?this._turnNextMonthOn(t):this._turnNextMonthOff(t)},_afterShowPrevMonthChange:function(){var e=this.get("contentBox"),t=e.one("#"+this._calendarId+"_pane_"+0);this.get("showPrevMonth")?this._turnPrevMonthOn(t):this._turnPrevMonthOff(t)},_afterHeaderRendererChange:function(){var e=this.get("contentBox").one("."+f);e.setContent(this._updateCalendarHeader(this.get("date")))},_afterCustomRendererChange:function(){this._restoreModifiedCells(),this._renderCustomRules()},_afterDateChange:function(){var e=this.get("contentBox"),t=e.one("."+a).one("."+f),n=e.all("."+i),r=this.get("date"),s=0;e.setStyle("visibility","hidden"),t.setContent(this._updateCalendarHeader(r)),this._restoreModifiedCells(),n.each(function(e){this._rerenderCalendarPane(O.addMonths(r,s++),e)},this),this._afterShowPrevMonthChange(),this._afterShowNextMonthChange(),this._renderCustomRules(),this._renderSelectedDates(),e.setStyle("visibility","visible")},_initCalendarPane:function(e,t){var n=this.get("strings.very_short_weekdays")||["Su","Mo","Tu","We","Th","Fr","Sa"],r=this.get("strings.weekdays")||["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=this.get("strings.first_weekday")||0,s=this._getCutoffColumn(e,i),o=O.daysInMonth(e),u=["","","","","",""],a={},f,l,c,p,d,v,b,w;a.weekday_row="";for(f=i;f<=i+6;f++)a.weekday_row+=x(M.WEEKDAY_TEMPLATE,{weekdayname:n[f%7],full_weekdayname:r[f%7]});a.weekday_row_template=x(M.WEEKDAY_ROW_TEMPLATE,a);for(l=0;l<=5;l++)for(c=0;c<=12;c++){p=7*l-5+c,d=t+"_"+c+"_"+p,v=m,p<1?v=g:p>o&&(v=y);if(p<1||p>o)p="&nbsp;";b=c>=s&&c<s+7?"":h,u[l]+=x(M.CALDAY_TEMPLATE,{day_content:p,calendar_col_class:"calendar_col"+c,calendar_col_visibility_class:b,calendar_day_class:v,calendar_day_id:d})}return a.body_template="",T(u,function(e){a.body_template+=x(M.CALDAY_ROW_TEMPLATE,{calday_row:e})}),a.calendar_pane_id=t,a.calendar_pane_tabindex=this.get("tabIndex"),a.pane_arialabel=O.format(e,{format:"%B %Y"}),w=x(x(M.CALENDAR_GRID_TEMPLATE,a),M.CALENDAR_STRINGS),this._paneProperties[t]={cutoffCol:s,daysInMonth:o,paneDate:e},w},_rerenderCalendarPane:function(e,t){var n=this.get("strings.first_weekday")||0,r=this._getCutoffColumn(e,n),i=O.daysInMonth(e),s=t.get("id"),o,u,a;t.setStyle("visibility","hidden"),t.setAttribute("aria-label",O.format(e,{format:"%B %Y"}));for(o=0;o<=12;o++){u=t.all(".calendar_col"+o),u.removeClass(h);if(o<r||o>=r+7)u.addClass(h);else switch(o){case 0:a=t.one("#"+s+"_0_30"),i>=30?(a.set("text","30"),a.removeClass(y).addClass(m)):(a.setContent("&nbsp;"),a.addClass(y).addClass(m));break;case 1:a=t.one("#"+s+"_1_31"),i>=31?(a.set("text","31"),a.removeClass(y).addClass(m)):(a.setContent("&nbsp;"),a.removeClass(m).addClass(y));break;case 6:a=t.one("#"+s+"_6_29"),i>=29?(a.set("text","29"),a.removeClass(y).addClass(m)):(a.setContent("&nbsp;"),a.removeClass(m).addClass(y));break;case 7:a=t.one("#"+s+"_7_30"),i>=30?(a.set("text","30"),a.removeClass(y).addClass(m)):(a.setContent("&nbsp;"),a.removeClass(m).addClass(y));break;case 8:a=t.one("#"+s+"_8_31"),i>=31?(a.set("text","31"),a.removeClass(y).addClass(m)):(a.setContent("&nbsp;"),a.removeClass(m).addClass(y))}}this._paneProperties[s].cutoffCol=r,this._paneProperties[s].daysInMonth=
i,this._paneProperties[s].paneDate=e,t.setStyle("visibility","visible")},_updateCalendarHeader:function(t){var n="",r=this.get("headerRenderer");return e.Lang.isString(r)?n=O.format(t,{format:r}):r instanceof Function&&(n=r.call(this,t)),n},_initCalendarHeader:function(e){return x(x(M.HEADER_TEMPLATE,{calheader:this._updateCalendarHeader(e),calendar_id:this._calendarId}),M.CALENDAR_STRINGS)},_initCalendarHTML:function(t){function o(){return i=this._initCalendarPane(O.addMonths(t,r),n.calendar_id+"_pane_"+r),r++,i}var n={},r=0,i,s;return n.header_template=this._initCalendarHeader(t),n.calendar_id=this._calendarId,n.body_template=x(x(M.CONTENT_TEMPLATE,n),M.CALENDAR_STRINGS),s=n.body_template.replace(/\{calendar_grid_template\}/g,e.bind(o,this)),this._paneNumber=r,s}},{CALENDAR_STRINGS:{calendar_grid_class:i,calendar_body_class:u,calendar_hd_class:a,calendar_hd_label_class:f,calendar_weekdayrow_class:l,calendar_weekday_class:c,calendar_row_class:v,calendar_day_class:m,calendar_dayanchor_class:b,calendar_pane_class:w,calendar_right_grid_class:o,calendar_left_grid_class:s,calendar_status_class:E},CONTENT_TEMPLATE:'<div class="yui3-g {calendar_pane_class}" id="{calendar_id}">{header_template}<div class="yui3-u-1">{calendar_grid_template}</div></div>',ONE_PANE_TEMPLATE:'<div class="yui3-g {calendar_pane_class}" id="{calendar_id}">{header_template}<div class="yui3-u-1">{calendar_grid_template}</div></div>',TWO_PANE_TEMPLATE:'<div class="yui3-g {calendar_pane_class}" id="{calendar_id}">{header_template}<div class="yui3-u-1-2"><div class = "{calendar_left_grid_class}">{calendar_grid_template}</div></div><div class="yui3-u-1-2"><div class = "{calendar_right_grid_class}">{calendar_grid_template}</div></div></div>',THREE_PANE_TEMPLATE:'<div class="yui3-g {calendar_pane_class}" id="{calendar_id}">{header_template}<div class="yui3-u-1-3"><div class="{calendar_left_grid_class}">{calendar_grid_template}</div></div><div class="yui3-u-1-3">{calendar_grid_template}</div><div class="yui3-u-1-3"><div class="{calendar_right_grid_class}">{calendar_grid_template}</div></div></div>',CALENDAR_GRID_TEMPLATE:'<table class="{calendar_grid_class}" id="{calendar_pane_id}" role="grid" aria-readonly="true" aria-label="{pane_arialabel}" tabindex="{calendar_pane_tabindex}"><thead>{weekday_row_template}</thead><tbody>{body_template}</tbody></table>',HEADER_TEMPLATE:'<div class="yui3-g {calendar_hd_class}"><div class="yui3-u {calendar_hd_label_class}" id="{calendar_id}_header" aria-role="heading">{calheader}</div></div>',WEEKDAY_ROW_TEMPLATE:'<tr class="{calendar_weekdayrow_class}" role="row">{weekday_row}</tr>',CALDAY_ROW_TEMPLATE:'<tr class="{calendar_row_class}" role="row">{calday_row}</tr>',WEEKDAY_TEMPLATE:'<th class="{calendar_weekday_class}" role="columnheader" aria-label="{full_weekdayname}">{weekdayname}</th>',CALDAY_TEMPLATE:'<td class="{calendar_col_class} {calendar_day_class} {calendar_col_visibility_class}" id="{calendar_day_id}" role="gridcell" tabindex="-1">{day_content}</td>',NAME:"calendarBase",ATTRS:{tabIndex:{value:1},date:{value:new Date,setter:function(e){var t=this._normalizeDate(e);return O.areEqual(t,this.get("date"))?this.get("date"):t}},showPrevMonth:{value:!1},showNextMonth:{value:!1},strings:{valueFn:function(){return e.Intl.get("calendar-base")}},headerRenderer:{value:"%B %Y"},enabledDatesRule:{value:null},disabledDatesRule:{value:null},selectedDates:{readOnly:!0,getter:function(){return this._getSelectedDatesList()}},customRenderer:{lazyAdd:!1,value:{},setter:function(e){this._rules=e.rules,this._filterFunction=e.filterFunction}}}})},"3.10.1",{requires:["widget","datatype-date","datatype-date-math","cssgrids"],lang:["de","en","es","es-AR","fr","it","ja","nb-NO","nl","pt-BR","ru","zh-HANT-TW"],skinnable:!0});
