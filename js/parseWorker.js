function dateWrapper(){this.dateLibLoaded=!0,Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"am",pmDesignator:"pm",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^sun(day)?/i,mon:/^mon(day)?/i,tue:/^tue(s(day)?)?/i,wed:/^wed(nesday)?/i,thu:/^thu(rsday)?/i,fri:/^fri(day)?/i,sat:/^sat(urday)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,yesterday:/^yesterday/i,today:/^today/i,tomorrow:/^tom(orrow)?/i,soon:/^soon/i,later:/^later/i,now:/^now/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a(?!u|p)|p)/i},timezones:[{name:"UTC",offset:"-000"},{name:"GMT",offset:"-000"},{name:"EST",offset:"-0500"},{name:"EDT",offset:"-0400"},{name:"CST",offset:"-0600"},{name:"CDT",offset:"-0500"},{name:"MST",offset:"-0700"},{name:"MDT",offset:"-0600"},{name:"PST",offset:"-0800"},{name:"PDT",offset:"-0700"}]},function(){var t=Date,e=t.prototype,n=t.CultureInfo,r=function(t,e){return e||(e=2),("000"+t).slice(-1*e)};e.clearTime=function(){return this.setHours(0),this.setMinutes(0),this.setSeconds(0),this.setMilliseconds(0),this},e.setTimeToNow=function(){var t=new Date;return this.setHours(t.getHours()),this.setMinutes(t.getMinutes()),this.setSeconds(t.getSeconds()),this.setMilliseconds(t.getMilliseconds()),this},t.today=function(){return(new Date).clearTime()},t.compare=function(t,e){if(isNaN(t)||isNaN(e))throw new Error(t+" - "+e);if(t instanceof Date&&e instanceof Date)return e>t?-1:t>e?1:0;throw new TypeError(t+" - "+e)},t.equals=function(t,e){return 0===t.compareTo(e)},t.getDayNumberFromName=function(t){for(var e=n.dayNames,r=n.abbreviatedDayNames,i=n.shortestDayNames,s=t.toLowerCase(),a=0;a<e.length;a++)if(e[a].toLowerCase()==s||r[a].toLowerCase()==s||i[a].toLowerCase()==s)return a;return-1},t.getMonthNumberFromName=function(t){for(var e=n.monthNames,r=n.abbreviatedMonthNames,i=t.toLowerCase(),s=0;s<e.length;s++)if(e[s].toLowerCase()==i||r[s].toLowerCase()==i)return s;return-1},t.isLeapYear=function(t){return t%4===0&&t%100!==0||t%400===0},t.getDaysInMonth=function(e,n){return[31,t.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][n]},t.getTimezoneAbbreviation=function(t){for(var e=n.timezones,r=0;r<e.length;r++)if(e[r].offset===t)return e[r].name;return null},t.getTimezoneOffset=function(t){for(var e=n.timezones,r=0;r<e.length;r++)if(e[r].name===t.toUpperCase())return e[r].offset;return null},e.clone=function(){var t=new Date(this.getTime());return t._explicitTime=this._explicitTime,t},e.compareTo=function(t){return Date.compare(this,t)},e.equals=function(t){return Date.equals(this,t||new Date)},e.between=function(t,e){return this.getTime()>=t.getTime()&&this.getTime()<=e.getTime()},e.isAfter=function(t){return 1===this.compareTo(t||new Date)},e.isBefore=function(t){return-1===this.compareTo(t||new Date)},e.isToday=function(){return this.isSameDay(new Date)},e.isSameDay=function(t){return this.clone().clearTime().equals(t.clone().clearTime())},e.addMilliseconds=function(t){return this.setMilliseconds(this.getMilliseconds()+t),this},e.addSeconds=function(t){return this.addMilliseconds(1e3*t)},e.addMinutes=function(t){return this.addMilliseconds(6e4*t)},e.addHours=function(t){return this.addMilliseconds(36e5*t)},e.addDays=function(t){return this.setDate(this.getDate()+t),this},e.addWeeks=function(t){return this.addDays(7*t)},e.addMonths=function(e){var n=this.getDate();return this.setDate(1),this.setMonth(this.getMonth()+e),this.setDate(Math.min(n,t.getDaysInMonth(this.getFullYear(),this.getMonth()))),this},e.addYears=function(t){return this.addMonths(12*t)},e.add=function(t){if("number"==typeof t)return this._orient=t,this;var e=t;return e.millisecond&&this.addMilliseconds(e.millisecond),e.second&&this.addSeconds(e.second),e.minute&&this.addMinutes(e.minute),e.hour&&this.addHours(e.hour),e.week&&this.addWeeks(e.week),e.month&&this.addMonths(e.month),e.years&&this.addYears(e.years),e.days&&this.addDays(e.days),e.setExplicitTime&&(this._explicitTime=!0),this};var i,s,a;e.getWeek=function(){var t,e,n,r,o,h,u,c,d,l;return i=i?i:this.getFullYear(),s=s?s:this.getMonth()+1,a=a?a:this.getDate(),2>=s?(t=i-1,e=(t/4|0)-(t/100|0)+(t/400|0),n=((t-1)/4|0)-((t-1)/100|0)+((t-1)/400|0),d=e-n,o=0,h=a-1+31*(s-1)):(t=i,e=(t/4|0)-(t/100|0)+(t/400|0),n=((t-1)/4|0)-((t-1)/100|0)+((t-1)/400|0),d=e-n,o=d+1,h=a+(153*(s-3)+2)/5+58+d),u=(t+e)%7,r=(h+u-o)%7,c=h+3-r|0,l=0>c?53-((u-d)/5|0):c>364+d?1:(c/7|0)+1,i=s=a=null,l},e.getISOWeek=function(){return i=this.getUTCFullYear(),s=this.getUTCMonth()+1,a=this.getUTCDate(),r(this.getWeek())},e.setWeek=function(t){return this.moveToDayOfWeek(1).addWeeks(t-this.getWeek())},t._validate=function(t,e,n,r){if("undefined"==typeof t)return!1;if("number"!=typeof t)throw new TypeError(t+" is not a Number.");if(e>t||t>n)throw new RangeError(t+" is not a valid value for "+r+".");return!0},t.validateMillisecond=function(e){return t._validate(e,0,999,"millisecond")},t.validateSecond=function(e){return t._validate(e,0,59,"second")},t.validateMinute=function(e){return t._validate(e,0,59,"minute")},t.validateHour=function(e){return t._validate(e,0,23,"hour")},t.validateDay=function(e,n,r){return t._validate(e,1,t.getDaysInMonth(n,r),"day")},t.validateMonth=function(e){return t._validate(e,0,11,"month")},t.validateYear=function(e){return t._validate(e,0,9999,"year")},e.set=function(e){return t.validateMillisecond(e.millisecond)&&this.addMilliseconds(e.millisecond-this.getMilliseconds()),t.validateSecond(e.second)&&this.addSeconds(e.second-this.getSeconds()),t.validateMinute(e.minute)&&this.addMinutes(e.minute-this.getMinutes()),t.validateHour(e.hour)&&this.addHours(e.hour-this.getHours()),t.validateMonth(e.month)&&this.addMonths(e.month-this.getMonth()),t.validateYear(e.year)&&this.addYears(e.year-this.getFullYear()),t.validateDay(e.day,this.getFullYear(),this.getMonth())&&this.addDays(e.day-this.getDate()),e.timezone&&this.setTimezone(e.timezone),e.timezoneOffset&&this.setTimezoneOffset(e.timezoneOffset),e.week&&t._validate(e.week,0,53,"week")&&this.setWeek(e.week),e.setExplicitTime&&(this._explicitTime=!0),this},e.moveToFirstDayOfMonth=function(){return this.set({day:1})},e.moveToLastDayOfMonth=function(){return this.set({day:t.getDaysInMonth(this.getFullYear(),this.getMonth())})},e.moveToNthOccurrence=function(t,e){var n=0;if(e>0)n=e-1;else if(-1===e)return this.moveToLastDayOfMonth(),this.getDay()!==t&&this.moveToDayOfWeek(t,-1),this;return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(t,1).addWeeks(n)},e.moveToDayOfWeek=function(t,e){var n=(t-this.getDay()+7*(e||1))%7;return this.addDays(0===n?n+=7*(e||1):n)},e.moveToMonth=function(t,e){var n=(t-this.getMonth()+12*(e||1))%12;return this.addMonths(0===n?n+=12*(e||1):n)},e.getOrdinalNumber=function(){return Math.ceil((this.clone().clearTime()-new Date(this.getFullYear(),0,1))/864e5)+1},e.getTimezone=function(){return t.getTimezoneAbbreviation(this.getUTCOffset())},e.setTimezoneOffset=function(t){var e=this.getTimezoneOffset(),n=-6*Number(t)/10;return this.addMinutes(n-e)},e.setTimezone=function(e){return this.setTimezoneOffset(t.getTimezoneOffset(e))},e.hasDaylightSavingTime=function(){return Date.today().set({month:0,day:1}).getTimezoneOffset()!==Date.today().set({month:6,day:1}).getTimezoneOffset()},e.isDaylightSavingTime=function(){return this.hasDaylightSavingTime()&&(new Date).getTimezoneOffset()===Date.today().set({month:6,day:1}).getTimezoneOffset()},e.getUTCOffset=function(){var t,e=-10*this.getTimezoneOffset()/6;return 0>e?(t=(e-1e4).toString(),t.charAt(0)+t.substr(2)):(t=(e+1e4).toString(),"+"+t.substr(1))},e.getElapsed=function(t){return(t||new Date)-this},e.toISOString||(e.toISOString=function(){function t(t){return 10>t?"0"+t:t}return'"'+this.getUTCFullYear()+"-"+t(this.getUTCMonth()+1)+"-"+t(this.getUTCDate())+"T"+t(this.getUTCHours())+":"+t(this.getUTCMinutes())+":"+t(this.getUTCSeconds())+'Z"'}),e._toString=e.toString,e.toString=function(t){var e=this;if(t&&1==t.length){var i=n.formatPatterns;switch(e.t=e.toString,t){case"d":return e.t(i.shortDate);case"D":return e.t(i.longDate);case"F":return e.t(i.fullDateTime);case"m":return e.t(i.monthDay);case"r":return e.t(i.rfc1123);case"s":return e.t(i.sortableDateTime);case"t":return e.t(i.shortTime);case"T":return e.t(i.longTime);case"u":return e.t(i.universalSortableDateTime);case"y":return e.t(i.yearMonth)}}var s=function(t){switch(1*t){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}};return t?t.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g,function(t){if("\\"===t.charAt(0))return t.replace("\\","");switch(e.h=e.getHours,t){case"hh":return r(e.h()<13?0===e.h()?12:e.h():e.h()-12);case"h":return e.h()<13?0===e.h()?12:e.h():e.h()-12;case"HH":return r(e.h());case"H":return e.h();case"mm":return r(e.getMinutes());case"m":return e.getMinutes();case"ss":return r(e.getSeconds());case"s":return e.getSeconds();case"yyyy":return r(e.getFullYear(),4);case"yy":return r(e.getFullYear());case"dddd":return n.dayNames[e.getDay()];case"ddd":return n.abbreviatedDayNames[e.getDay()];case"dd":return r(e.getDate());case"d":return e.getDate();case"MMMM":return n.monthNames[e.getMonth()];case"MMM":return n.abbreviatedMonthNames[e.getMonth()];case"MM":return r(e.getMonth()+1);case"M":return e.getMonth()+1;case"t":return e.h()<12?n.amDesignator.substring(0,1):n.pmDesignator.substring(0,1);case"tt":return e.h()<12?n.amDesignator:n.pmDesignator;case"S":return s(e.getDate());default:return t}}):this._toString()}}(),function(){var t=Date,e=t.prototype,n=t.CultureInfo,r=Number.prototype;e._orient=1,e._nth=null,e._is=!1,e._same=!1,e._explicitTime=!1,e._isSecond=!1,r._dateElement="day",e.next=function(){return this._orient=1,this},t.next=function(){return t.today().next()},e.last=e.prev=e.previous=function(){return this._orient=-1,this},t.last=t.prev=t.previous=function(){return t.today().last()},e.is=function(){return this._is=!0,this},e.same=function(){return this._same=!0,this._isSecond=!1,this},e.today=function(){return this.same().day()},e.weekday=function(){return this._is?(this._is=!1,!this.is().sat()&&!this.is().sun()):!1},e.at=function(e){return"string"==typeof e?t.parse(this.toString("d")+" "+e):this.set(e)},r.fromNow=r.after=function(t){var e={};return e[this._dateElement]=this,(t?t.clone():new Date).add(e)},r.ago=r.before=function(t){var e={};return e[this._dateElement]=-1*this,(t?t.clone():new Date).add(e)};var i,s="sunday monday tuesday wednesday thursday friday saturday".split(/\s/),a="january february march april may june july august september october november december".split(/\s/),o=[],h=[],u="final first second third fourth fifth".split(/\s/);e.toObject=function(){for(var t={},e=0;e<o.length;e++)t[o[e].toLowerCase()]=this["get"+h[e]]();return t},t.fromObject=function(t){return t.week=null,Date.today().set(t)};for(var c=function(e){return function(){if(this._is)return this._is=!1,this.getDay()==e;if(null!==this._nth){this._isSecond&&this.addSeconds(-1*this._orient),this._isSecond=!1;var n=this._nth;this._nth=null;var r=this.clone().moveToLastDayOfMonth();if(this.moveToNthOccurrence(e,n),this>r)throw new RangeError(t.getDayName(e)+" does not occur "+n+" times in the month of "+t.getMonthName(r.getMonth())+" "+r.getFullYear()+".");return this}return this.moveToDayOfWeek(e,this._orient)}},d=function(e){return function(){var r=t.today(),i=e-r.getDay();return(0===e&&1===n.firstDayOfWeek&&0!==r.getDay()||0>i)&&(i+=7),r.addDays(i)}},l=0;l<s.length;l++)t[s[l].toUpperCase()]=t[s[l].toUpperCase().substring(0,3)]=l,t[s[l]]=t[s[l].substring(0,3)]=d(l),e[s[l]]=e[s[l].substring(0,3)]=c(l);for(var f=function(t){return function(){return this._is?(this._is=!1,this.getMonth()===t):this.moveToMonth(t,this._orient)}},m=function(e){return function(){return t.today().set({month:e,day:1})}},y=0;y<a.length;y++)t[a[y].toUpperCase()]=t[a[y].toUpperCase().substring(0,3)]=y,t[a[y]]=t[a[y].substring(0,3)]=m(y),e[a[y]]=e[a[y].substring(0,3)]=f(y);for(var g=function(t){return function(){if(this._isSecond)return this._isSecond=!1,this;if(this._same){this._same=this._is=!1;for(var e=this.toObject(),n=(arguments[0]||new Date).toObject(),r="",i=t.toLowerCase(),s=o.length-1;s>-1;s--){if(r=o[s].toLowerCase(),e[r]!=n[r])return!1;if(i==r)break}return!0}return"s"!=t.substring(t.length-1)&&(t+="s"),this["add"+t](this._orient)}},p=function(t){return function(){return this._dateElement=t,this}},v=0;v<o.length;v++)i=o[v].toLowerCase(),e[i]=e[i+"s"]=g(o[v]),r[i]=r[i+"s"]=p(i);e._ss=g("Second");for(var M=function(t){return function(e){return this._same?this._ss(arguments[0]):e||0===e?this.moveToNthOccurrence(e,t):(this._nth=t,2!==t||void 0!==e&&null!==e?this:(this._isSecond=!0,this.addSeconds(this._orient)))}},D=0;D<u.length;D++)e[u[D]]=M(0===D?-1:D)}(),function(){Date.Parsing={Exception:function(t){this.message="Parse error at '"+t.substring(0,10)+" ...'"}};for(var t=Date.Parsing,e=t.Operators={rtoken:function(e){return function(n){var r=n.match(e);if(r)return[r[0],n.substring(r[0].length)];throw new t.Exception(n)}},token:function(){return function(t){return e.rtoken(new RegExp("^s*"+t+"s*"))(t)}},stoken:function(t){return e.rtoken(new RegExp("^"+t))},until:function(t){return function(e){for(var n=[],r=null;e.length;){try{r=t.call(this,e)}catch(i){n.push(r[0]),e=r[1];continue}break}return[n,e]}},many:function(t){return function(e){for(var n=[],r=null;e.length;){try{r=t.call(this,e)}catch(i){return[n,e]}n.push(r[0]),e=r[1]}return[n,e]}},optional:function(t){return function(e){var n=null;try{n=t.call(this,e)}catch(r){return[null,e]}return[n[0],n[1]]}},not:function(e){return function(n){try{e.call(this,n)}catch(r){return[null,n]}throw new t.Exception(n)}},ignore:function(t){return t?function(e){var n=null;return n=t.call(this,e),[null,n[1]]}:null},product:function(){for(var t=arguments[0],n=Array.prototype.slice.call(arguments,1),r=[],i=0;i<t.length;i++)r.push(e.each(t[i],n));return r},cache:function(e){var n={},r=null;return function(i){try{r=n[i]=n[i]||e.call(this,i)}catch(s){r=n[i]=s}if(r instanceof t.Exception)throw r;return r}},any:function(){var e=arguments;return function(n){for(var r=null,i=0;i<e.length;i++)if(null!=e[i]){try{r=e[i].call(this,n)}catch(s){r=null}if(r)return r}throw new t.Exception(n)}},each:function(){var e=arguments;return function(n){for(var r=[],i=null,s=0;s<e.length;s++)if(null!=e[s]){try{i=e[s].call(this,n)}catch(a){throw new t.Exception(n)}r.push(i[0]),n=i[1]}return[r,n]}},all:function(){var t=arguments,e=e;return e.each(e.optional(t))},sequence:function(n,r,i){return r=r||e.rtoken(/^\s*/),i=i||null,1==n.length?n[0]:function(e){for(var s=null,a=null,o=[],h=0;h<n.length;h++){try{s=n[h].call(this,e)}catch(u){break}o.push(s[0]);try{a=r.call(this,s[1])}catch(c){a=null;break}e=a[1]}if(!s)throw new t.Exception(e);if(a)throw new t.Exception(a[1]);if(i)try{s=i.call(this,s[1])}catch(d){throw new t.Exception(s[1])}return[o,s?s[1]:e]}},between:function(t,n,i){i=i||t;var s=e.each(e.ignore(t),n,e.ignore(i));return function(t){var e=s.call(this,t);return[[e[0][0],r[0][2]],e[1]]}},list:function(t,n,r){return n=n||e.rtoken(/^\s*/),r=r||null,t instanceof Array?e.each(e.product(t.slice(0,-1),e.ignore(n)),t.slice(-1),e.ignore(r)):e.each(e.many(e.each(t,e.ignore(n))),px,e.ignore(r))},set:function(n,r,i){return r=r||e.rtoken(/^\s*/),i=i||null,function(s){for(var a=null,o=null,h=null,u=null,c=[[],s],d=!1,l=0;l<n.length;l++){h=null,o=null,a=null,d=1==n.length;try{a=n[l].call(this,s)}catch(f){continue}if(u=[[a[0]],a[1]],a[1].length>0&&!d)try{h=r.call(this,a[1])}catch(m){d=!0}else d=!0;if(d||0!==h[1].length||(d=!0),!d){for(var y=[],g=0;g<n.length;g++)l!=g&&y.push(n[g]);o=e.set(y,r).call(this,h[1]),o[0].length>0&&(u[0]=u[0].concat(o[0]),u[1]=o[1])}if(u[1].length<c[1].length&&(c=u),0===c[1].length)break}if(0===c[0].length)return c;if(i){try{h=i.call(this,c[1])}catch(p){throw new t.Exception(c[1])}c[1]=h[1]}return c}},forward:function(t,e){return function(n){return t[e].call(this,n)}},replace:function(t,e){return function(n){var r=t.call(this,n);return[e,r[1]]}},process:function(t,e){return function(n){var r=t.call(this,n);return[e.call(this,r[0]),r[1]]}},min:function(e,n){return function(r){var i=n.call(this,r);if(i[0].length<e)throw new t.Exception(r);return i}}},n=function(t){return function(){var e=null,n=[];if(arguments.length>1?e=Array.prototype.slice.call(arguments):arguments[0]instanceof Array&&(e=arguments[0]),!e)return t.apply(null,arguments);for(var r=0,i=e.shift();r<i.length;r++)return e.unshift(i[r]),n.push(t.apply(null,e)),e.shift(),n}},i="optional not ignore cache".split(/\s/),s=0;s<i.length;s++)e[i[s]]=n(e[i[s]]);for(var a=function(t){return function(){return arguments[0]instanceof Array?t.apply(null,arguments[0]):t.apply(null,arguments)}},o="each any all".split(/\s/),h=0;h<o.length;h++)e[o[h]]=a(e[o[h]])}(),function(){var t=Date,e=(t.prototype,t.CultureInfo),n=function(t){for(var e=[],r=0;r<t.length;r++)t[r]instanceof Array?e=e.concat(n(t[r])):t[r]&&e.push(t[r]);return e};t.Grammar={},t.Translator={hour:function(t){return function(){this.hour=Number(t),this.setExplicitTime=!0}},minute:function(t){return function(){this.minute=Number(t),this.setExplicitTime=!0}},second:function(t){return function(){this.second=Number(t),this.setExplicitTime=!0}},meridian:function(t){return function(){this.meridian=t.slice(0,1).toLowerCase()}},timezone:function(t){return function(){var e=t.replace(/[^\d\+\-]/g,"");e.length?this.timezoneOffset=Number(e):this.timezone=t.toLowerCase()}},day:function(t){var e=t[0];return function(){this.day=Number(e.match(/\d+/)[0])}},month:function(t){return function(){this.month=3==t.length?"jan feb mar apr may jun jul aug sep oct nov dec".indexOf(t)/4:Number(t)-1}},year:function(t){return function(){var n=Number(t);this.year=t.length>2?n:n+(n+2e3<e.twoDigitYearMax?2e3:1900)}},rday:function(t){return function(){(new Date).getDate();switch(t){case"yesterday":this.days=-1;break;case"later":this.days=5;break;case"soon":this.days=2;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0,this.now=!0}}},finishExact:function(e){e=e instanceof Array?e:[e];for(var n=0;n<e.length;n++)e[n]&&e[n].call(this);var r=new Date;if(!this.hour&&!this.minute||this.month||this.year||this.day||(this.day=r.getDate()),this.year||(this.year=r.getFullYear(),this.month<r.getMonth()&&this.year++),this.month||0===this.month||(this.month=r.getMonth()),this.day||(this.day=1),this.hour||(this.hour=0),this.minute||(this.minute=0),this.second||(this.second=0),this.meridian&&this.hour&&("p"==this.meridian&&this.hour<12?this.hour=this.hour+12:"a"==this.meridian&&12==this.hour&&(this.hour=0)),this.day>t.getDaysInMonth(this.year,this.month))throw new RangeError(this.day+" is not a valid value for days.");var i=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);return i._explicitTime=this.setExplicitTime,this.timezone?i.set({timezone:this.timezone}):this.timezoneOffset&&i.set({timezoneOffset:this.timezoneOffset}),i},finish:function(e){if(e=e instanceof Array?n(e):[e],0===e.length)return null;for(var r=0;r<e.length;r++)"function"==typeof e[r]&&e[r].call(this);var i=t.today();if(this.now&&!this.unit&&!this.operator)return new Date;this.now&&(i=new Date);var s,a,o,h=!!this.year,u=!!(this.days&&null!==this.days||this.orient||this.operator);if(o="past"==this.orient||"subtract"==this.operator?-1:1,this.now||-1=="hour minute second".indexOf(this.unit)||i.setTimeToNow(),(this.month||0===this.month)&&-1!="year day hour minute second".indexOf(this.unit)&&(this.value=this.month+1,this.month=null,u=!0),!u&&this.weekday&&!this.day&&!this.days){var c=Date[this.weekday]();this.day=c.getDate(),this.month||(this.month=c.getMonth()),this.year=c.getFullYear()}if(u&&this.weekday&&"month"!=this.unit&&(this.unit="day",s=t.getDayNumberFromName(this.weekday)-i.getDay(),a=7,this.days=s?(s+o*a)%a:o*a),this.month&&"day"==this.unit&&this.operator&&(this.value=this.month+1,this.month=null),null!=this.value&&null!=this.month&&null!=this.year&&(this.day=1*this.value),this.month&&!this.day&&this.value&&(i.set({day:1*this.value}),u||(this.day=1*this.value)),this.month||!this.value||"month"!=this.unit||this.now||(this.month=this.value,u=!0),u&&(this.month||0===this.month)&&"year"!=this.unit&&(this.unit="month",s=this.month-i.getMonth(),a=12,this.months=s?(s+o*a)%a:o*a,this.month=null),this.unit||(this.unit="day"),!this.value&&this.operator&&null!==this.operator&&this[this.unit+"s"]&&null!==this[this.unit+"s"]?this[this.unit+"s"]=this[this.unit+"s"]+("add"==this.operator?1:-1)+(this.value||0)*o:(null==this[this.unit+"s"]||null!=this.operator)&&(this.value||(this.value=1),this[this.unit+"s"]=this.value*o),this.meridian&&this.hour&&("p"==this.meridian&&this.hour<12?this.hour=this.hour+12:"a"==this.meridian&&12==this.hour&&(this.hour=0)),this.weekday&&!this.day&&!this.days){var c=Date[this.weekday]();this.day=c.getDate(),c.getMonth()!==i.getMonth()&&(this.month=c.getMonth())}return!this.month&&0!==this.month||this.day||(this.day=1),this.orient||this.operator||"week"!=this.unit||!this.value||this.day||this.month?(u&&this.timezone&&this.day&&this.days&&(this.day=this.days),!h&&this.month<i.getMonth()&&(this.year=i.getFullYear()+1),u?i.add(this):i.set(this)):Date.today().setWeek(this.value)}};var r,i=t.Parsing.Operators,s=t.Grammar,a=t.Translator;s.datePartDelimiter=i.rtoken(/^([\s\-\.\,\/\x27]+)/),s.timePartDelimiter=i.stoken(":"),s.whiteSpace=i.rtoken(/^\s*/),s.generalDelimiter=i.rtoken(/^(([\s\,]|at|@|on)+)/);var o={};s.ctoken=function(t){var n=o[t];if(!n){for(var r=e.regexPatterns,s=t.split(/\s+/),a=[],h=0;h<s.length;h++)a.push(i.replace(i.rtoken(r[s[h]]),s[h]));n=o[t]=i.any.apply(null,a)}return n},s.ctoken2=function(t){return i.rtoken(e.regexPatterns[t])},s.h=i.cache(i.process(i.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),a.hour)),s.hh=i.cache(i.process(i.rtoken(/^(0[0-9]|1[0-2])/),a.hour)),s.H=i.cache(i.process(i.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),a.hour)),s.HH=i.cache(i.process(i.rtoken(/^([0-1][0-9]|2[0-3])/),a.hour)),s.m=i.cache(i.process(i.rtoken(/^([0-5][0-9]|[0-9])/),a.minute)),s.mm=i.cache(i.process(i.rtoken(/^[0-5][0-9]/),a.minute)),s.s=i.cache(i.process(i.rtoken(/^([0-5][0-9]|[0-9])/),a.second)),s.ss=i.cache(i.process(i.rtoken(/^[0-5][0-9]/),a.second)),s.hms=i.cache(i.sequence([s.H,s.m,s.s],s.timePartDelimiter)),s.t=i.cache(i.process(s.ctoken2("shortMeridian"),a.meridian)),s.tt=i.cache(i.process(s.ctoken2("longMeridian"),a.meridian)),s.z=i.cache(i.process(i.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),a.timezone)),s.zz=i.cache(i.process(i.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),a.timezone)),s.zzz=i.cache(i.process(s.ctoken2("timezone"),a.timezone)),s.timeSuffix=i.each(i.ignore(s.whiteSpace),i.set([s.tt,s.zzz])),s.time=i.each(i.optional(i.ignore(i.stoken("T"))),s.hms,s.timeSuffix),s.d=i.cache(i.process(i.each(i.rtoken(/^([0-2]\d|3[0-1]|\d)/),i.optional(s.ctoken2("ordinalSuffix"))),a.day)),s.dd=i.cache(i.process(i.each(i.rtoken(/^([0-2]\d|3[0-1])/),i.optional(s.ctoken2("ordinalSuffix"))),a.day)),s.rday=i.cache(i.process(s.ctoken("yesterday tomorrow soon later today now"),a.rday)),s.ddd=s.dddd=i.cache(i.process(s.ctoken("sun mon tue wed thu fri sat"),function(t){return function(){this.weekday=t}})),s.M=i.cache(i.process(i.rtoken(/^(1[0-2]|0\d|\d)/),a.month)),s.MM=i.cache(i.process(i.rtoken(/^(1[0-2]|0\d)/),a.month)),s.MMM=s.MMMM=i.cache(i.process(s.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),a.month)),s.y=i.cache(i.process(i.rtoken(/^(\d\d?)/),a.year)),s.yy=i.cache(i.process(i.rtoken(/^(\d\d)/),a.year)),s.yyy=i.cache(i.process(i.rtoken(/^(\d\d?\d?\d?)/),a.year)),s.yyyy=i.cache(i.process(i.rtoken(/^(\d\d\d\d)/),a.year)),r=function(){return i.each(i.any.apply(null,arguments),i.not(s.ctoken2("timeContext")))},s.day=r(s.d,s.dd,s.rday),s.month=r(s.M,s.MMM),s.year=r(s.yyyy,s.yy),s.orientation=i.process(s.ctoken("past future"),function(t){return function(){this.orient=t}}),s.value=i.process(i.rtoken(/^\d\d?(st|nd|rd|th)?/),function(t){return function(){this.value=t.replace(/\D/g,"")}}),s.expression=i.set([s.rday,s.value,s.orientation,s.ddd,s.MMM]),r=function(){return i.set(arguments,s.datePartDelimiter)},s.mdy=r(s.ddd,s.month,s.day,s.year),s.ymd=r(s.ddd,s.year,s.month,s.day),s.dmy=r(s.ddd,s.day,s.month,s.year),s.date=function(t){return(s[e.dateElementOrder]||s.mdy).call(this,t)},s.format=i.process(i.many(i.any(i.process(i.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(e){if(s[e])return s[e];throw t.Parsing.Exception(e)}),i.process(i.rtoken(/^[^dMyhHmstz]+/),function(t){return i.ignore(i.stoken(t))}))),function(t){return i.process(i.each.apply(null,t),a.finishExact)});var h={},u=function(t){return h[t]=h[t]||s.format(t)[0]};s.formats=function(t){if(t instanceof Array){for(var e=[],n=0;n<t.length;n++)e.push(u(t[n]));return i.any.apply(null,e)}return u(t)};var c=["M/d H","M-d H","MMddyyyy","ddMMyyyy","Mddyyyy","ddMyyyy","Mdyyyy","dMyyyy","yyyy","Mdyy","dMyy"];s._formats=s.formats(c),s._start=i.process(i.set([s.date,s.time,s.expression],s.generalDelimiter,s.whiteSpace),a.finish),s.start=function(t){try{var e=s._formats.call({},t);if(0===e[1].length)return e}catch(n){}return s._start.call({},t)},t._parse=t.parse,t.parse=function(e){var n=null;if(!e)return null;if(e instanceof Date)return e;try{n=t.Grammar.start.call({},e.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1"))}catch(r){return null}return 0===n[1].length?n[0]:null},t.getParseFunction=function(e){var n=t.Grammar.formats(e);return function(t){var e=null;try{e=n.call({},t)}catch(r){return null}return 0===e[1].length?e[0]:null}},t.parseExact=function(e,n){return t.getParseFunction(n)(e)}}()}function DuchessHelpersWrapper(t){function e(t){return String(t).replace(/[&\"<>]/g,function(t){return a[t]})}function n(t){var e=t.replace(/[:,\.\'\"\)\]]$/g,"");return e}this.helperLibLoaded=!0;var r="@",i="+",s=-1!=navigator.userAgent.indexOf("Win")?"ctrl":"⌘";String.prototype.insertTag=function(t,e,n,r){return this.substr(0,t)+e+this.substr(t,n)+r+this.substr(t+n)},"function"!=typeof String.prototype.startsWith&&(String.prototype.startsWith=function(t){return 0===this.lastIndexOf(t,0)});var a={"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"},o=["YESTERDAY","TODAY","TOMORROW"],h=/(^#|[\(\s]#)([^\s\),]+)/g,u=/(?:^@|[\(\s]@)([^\s\)]+)(\s[^\s\)@]+)?(\s[^\s\)@]+)?/g,c=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/g,d=/(?:^|[\s\(\[])([^\(\[@\s]+\.(?:com|org|net))/gi;t.parseText=function(a,o,l,f){var m=!1,y=a,g=[];if(0===a.length)return{parsedText:void 0};var p=a,v=!1,M=a.length;a=e(a),M!==a.length&&(v=!0);var D,T,w,k=[];if(f&&f.___info___.count>0&&a.indexOf(i)>=0){for(var b=a.split(" "),x=0,S=0;S<b.length;S++){if(0===b[S].indexOf(i)){for(var _=void 0,O=b[S].substring(1),z=1;4>z;z++){var N=n(O);if(""===f[N]&&(_=N),!(S+z<b.length))break;O+=" "+b[S+z]}_&&g.push({name:_,lineIndex:x})}x+=b[S].length+1}if(g.length>0)for(var S=g.length-1;S>=0;S--)a=a.insertTag(g[S].lineIndex,'<p class="contact">',g[S].name.length+1,"</p>"),v=!0}for(h.lastIndex=0;D=h.exec(a);){var W=D.index+D[1].length-1,E=D[2].length+1;":"==D[2].charAt(D[2].length-1)&&E--,a=a.insertTag(W,'<p class="tag" title="'+s+'+click to search">',E,"</p>"),v=!0}for(u.lastIndex=0;D=u.exec(a);){for(var H,C=D[0].indexOf(r),L=!1,S=1;S<D.length&&D[S];++S)if(L)D[S]=void 0;else{var F=D[S][D[S].length-1];(":"===F||","===F||"."===F)&&(D[S]=D[S].slice(0,-1),L=!0)}H=D[1]+(D[2]?D[2]:"")+(D[3]?D[3]:"");var Y=Date.parse(H);if(!Y&&D[3]&&(H=D[1]+(D[2]?D[2]:""),Y=Date.parse(H)),!Y&&D[2]&&(H=D[1],Y=Date.parse(H)),Y){var A=t.computeDateInfo(o,l,Y,H);if(A.replacedDate){dateLength=A.text.length+1;var U=D.index+C+1;a=a.substr(0,U)+A.text+a.substr(U+H.length),a=a.insertTag(D.index+C,'<p class="date">',dateLength,"</p>");var I=y.indexOf(H);y=y.substr(0,I)+A.text+y.substr(I+H.length),m=!0,k.push({date:A.date,text:A.text,explicitTime:Y._explicitTime})}else dateLength=H.length+1,a=a.insertTag(D.index+C,'<p class="date">',dateLength,"</p>"),k.push({date:A.date,text:H,explicitTime:Y._explicitTime});v=!0;break}}if(c.lastIndex=0,D=c.exec(a)){var j=D[0].startsWith("http")?D[0]:"http://"+D[0];T="<a target='_blank' href='"+j+"' title='"+s+"+click to navigate'>",w="</a>",a=a.insertTag(D.index,T,D[0].length,w),v=!0}else if(d.lastIndex=0,D=d.exec(a)){var C=D[0].length-D[1].length,j=D[1].startsWith("http")?D[1]:"http://"+D[1];T="<a target='_blank' href='"+j+"' title='"+s+"+click to navigate'>",w="</a>",a=a.insertTag(D.index+C,T,D[1].length,w),v=!0}return{text:p,styledText:a,parsedText:m?y:void 0,dates:k,hasStyle:v,numContacts:g.length}},t.computeDateInfo=function(t,e,n,r){function i(t){var e=864e5,n=new Date(t).clearTime()-(new Date).clearTime();return 0>n?n>=-e?"yesterday":t.toString("M/d"):e>=n&&t.isToday()?"today":2*e>=n?"tomorrow":void 0}var s,a=r,h=!1;if(e)s=n;else if(s=new Date(t),void 0!==t&&n.getTime()!==t){if(o.indexOf(r.toUpperCase())>=0){var u=n._explicitTime;s=new Date(t);var c=i(s);c&&(a=c,u&&(a+=" "+s.toString("h:mmtt")),h=!0)}}else void 0===t&&(s=n);return{text:a,date:s,replacedDate:h}}}function parseWorkerWrapper(){DuchessHelpersWrapper&&!this.helperLibLoaded&&DuchessHelpersWrapper(this.DuchessHelpers=this.DuchessHelpers||{}),dateWrapper&&!this.dateLibLoaded&&dateWrapper(),log=postMessage;var t;onmessage=function(e){if(e.data.contacts&&(t=e.data.contacts),e.data.items){for(var n=Date.now(),r=new Array(e.data.items.length),i=0;i<e.data.items.length;i++){var s=e.data.items[i];r[i]=DuchessHelpers.parseText(s.text,s.prevDate,s.isUpdate,t)}postMessage({id:e.data.id,styles:r,done:!0,start:n,end:Date.now()})}else postMessage({id:e.data.id,done:!1,msg:"ERROR: No items passed to the worker"})}}this.document&&(window.dateWrapper=dateWrapper),this.dateLibLoaded||dateWrapper(),this.document&&(window.helperWrapper=DuchessHelpersWrapper),this.helperLibLoaded||DuchessHelpersWrapper(this.DuchessHelpers=this.DuchessHelpers||{}),!this.document,this.document?window.parseWorkerWrapper=parseWorkerWrapper:parseWorkerWrapper();