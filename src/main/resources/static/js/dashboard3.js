/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  'use strict';

  // Make the dashboard widgets sortable Using jquery UI
  $('.connectedSortable').sortable({
    placeholder         : 'sort-highlight',
    connectWith         : '.connectedSortable',
    handle              : '.box-header, .nav-tabs',
    forcePlaceholderSize: true,
    zIndex              : 999999
  });
  $('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');

  // jQuery UI sortable for the todo list
  $('.todo-list').sortable({
    placeholder         : 'sort-highlight',
    handle              : '.handle',
    forcePlaceholderSize: true,
    zIndex              : 999999
  });

  // bootstrap WYSIHTML5 - text editor
  $('.textarea').wysihtml5();

  $('.daterange').daterangepicker({
    ranges   : {
      'Today'       : [moment(), moment()],
      'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month'  : [moment().startOf('month'), moment().endOf('month')],
      'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    startDate: moment().subtract(29, 'days'),
    endDate  : moment()
  }, function (start, end) {
    window.alert('You chose: ' + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  });

  /* jQueryKnob */
  $('.knob').knob();

  // jvectormap data
  var visitorsData = {
    US: 20, // USA
   // SA: 400, // Saudi Arabia
    //CA: 1000, // Canada
    //DE: 500, // Germany
    FR: 15, // France
    CN: 10, // China
    //AU: 700, // Australia
   // BR: 600, // Brazil
    IN: 20, // India
    //GB: 320, // Great Britain
    //RU: 3000 // Russia
  };
  // World map by jvectormap
  $('#world-map').vectorMap({
    map              : 'world_mill_en',
    backgroundColor  : 'transparent',
    regionStyle      : {
      initial: {
        fill            : '#e4e4e4',
        'fill-opacity'  : 1,
        stroke          : 'none',
        'stroke-width'  : 0,
        'stroke-opacity': 1
      }
    },
    series           : {
      regions: [
        {
          values           : visitorsData,
          scale            : ['#92c1dc', '#ebf4f9'],
          normalizeFunction: 'polynomial'
        }
      ]
    },
    onRegionLabelShow: function (e, el, code) {
      if (typeof visitorsData[code] != 'undefined')
        el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
    }
  });

  // Sparkline charts
  var myvalues = [20, 16, 10, 20];
  $('#sparkline-1').sparkline(myvalues, {
    type     : 'line',
    lineColor: '#92c1dc',
    fillColor: '#ebf4f9',
    height   : '50',
    width    : '80'
  });
  myvalues = [19, 12, 10, 17];
  $('#sparkline-2').sparkline(myvalues, {
    type     : 'line',
    lineColor: '#92c1dc',
    fillColor: '#ebf4f9',
    height   : '50',
    width    : '80'
  });
  myvalues = [20, 16, 10, 20];
  $('#sparkline-3').sparkline(myvalues, {
    type     : 'line',
    lineColor: '#92c1dc',
    fillColor: '#ebf4f9',
    height   : '50',
    width    : '80'
  });

  // The Calender
  $('#calendar').datepicker();

  // SLIMSCROLL FOR CHAT WIDGET
  $('#chat-box').slimScroll({
    height: '250px'
  });

  /* Morris.js Charts */
  // Sales chart
 var area = new Morris.Line({
    element   : 'faults-chart',
    data      : [
      { y: '27-Jul', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0 },
      { y: '28-Jul', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0 },
      { y: '29-Jul', item1: 0, item2: 0, item3: 0, item4: 0, item5: 0, item6: 0 },
      { y: '30-Jul', item1: 1, item2: 2, item3: 2, item4: 3, item5: 3, item6: 5 },
      { y: '31-Jul', item1: 2, item2: 2, item3: 3, item4: 2, item5: 4, item6: 6 }     
    ],
    xkey      : 'y',
    ykeys     : ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'],
    labels    : ['Critical', 'Major', 'Minor', 'Warning', 'Info', 'Clear'],
    lineColors: ['red', 'orange', 'blue', 'grey', 'brown', 'green'],
    hideHover : 'auto',
    lineWidth        : 2,
    gridTextColor    : '#fff',
    gridStrokeWidth  : 0.4,
    pointSize        : 4,
    pointStrokeColors: ['red', 'orange', 'blue', 'grey', 'brown', 'green'],
    gridTextFamily   : 'Open Sans',
    gridTextSize     : 10,
    resize    : true,
    labelColor : "red"
  });
  
  var line = new Morris.Line({
    element          : 'line-chart',
    resize           : true,
    data             : [
      { y: '2014', item1: 6 },
      { y: '2015', item1: 4 },
      { y: '2016', item1: 5 },
      { y: '2017', item1: 5 },
      { y: '2018', item1: 3 },
      { y: '2019', item1: 3 }, 
    ],
    xkey             : 'y',
    ykeys            : ['item1'],
    labels           : ['Devices Configured'],
    lineColors       : ['#1a75ff'],
    lineWidth        : 2,
    hideHover        : 'auto',
    gridTextColor    : '#fff',
    gridStrokeWidth  : 0.4,
    pointSize        : 4,
    pointStrokeColors: ['#1a75ff'],
    gridLineColor    : '#efefef',
    gridTextFamily   : 'Open Sans',
    gridTextSize     : 10
  });
  
  var bar = new Morris.Bar({
      element: 'cpu-chart',
      resize: true,
      data: [
        {y: 'inba.2', a: 100},
        {y: 'inba.1', a: 100},
        {y: 'inba.4', a: 98},
        {y: 'inba.11', a: 94},
        {y: 'inba.3', a: 92},
        {y: 'inba.7', a: 89},
        {y: 'inba.5', a: 89},
        {y: 'inba.8', a: 75},
        {y: 'inba.9', a: 70},
        {y: 'inba.6', a: 65},
      ],
      barColors: ['#f56954'],
      xkey: 'y',
      ykeys: ['a'],
      xLabelAngle: 45,
      labels: ['CPU Load'],
      hideHover: 'auto'
    });

  // Donut Chart
 /* var donut = new Morris.Donut({
    element  : 'sales-chart',
    resize   : true,
    colors   : ['#3c8dbc', '#f56954', '#00a65a'],
    data     : [
      { label: 'Installed Devices', value: 55 },
      { label: 'Devices Online', value: 53 },
      { label: 'Faulty Devices', value: 2 }
    ],
    hideHover: 'auto'
  });
*/
  // Fix for charts under tabs
  $('.box ul.nav a').on('shown.bs.tab', function () {
    area.redraw();
    donut.redraw();
    line.redraw();
  });

  /* The todo list plugin */
  $('.todo-list').todoList({
    onCheck  : function () {
      window.console.log($(this), 'The element has been checked');
    },
    onUnCheck: function () {
      window.console.log($(this), 'The element has been unchecked');
    }
  });
  
  var lineChartData = {
	        labels: ['27-Jul-2018', '28-Jul-2018', '29-Jul-2018', '30-Jul-2018', '31-Jul-2018'],
	        datasets: [{
	            label: 'Critical',
	            backgroundColor: "red",
	            borderColor: "red",
	            fill: false,
	            lineTension: 0.5,
	            data: [0, 1, 0, 2, 3]
	        }, {
	            label: 'Major',
	            backgroundColor: "orange",
	            borderColor: "orange",
	            fill: false,
	            lineTension: 0.5,
	            data: [1, 2, 1, 3, 2]
	        }, {
	            label: 'Minor',
	            backgroundColor: "blue",
	            borderColor: "blue",
	            fill: false,
	            lineTension: 0.5,
	            data: [3, 2, 1, 0, 1]
	        }, {
	            label: 'Warning',
	            backgroundColor: "yellow",
	            borderColor: "yellow",
	            fill: false,
	            lineTension: 0.5,
	            data: [1, 2, 2, 3, 1]
	        }, {
	            label: 'Info',
	            backgroundColor: "brown",
	            borderColor: "brown",
	            fill: false,
	            lineTension: 0.5,
	            data: [3, 4, 5, 0, 0]
	        }, {
	            label: 'Clear',
	            backgroundColor: "green",
	            borderColor: "green",
	            fill: false,
	            lineTension: 0.5,
	            data: [0, 3, 4, 5, 1]
	        }]

	    };
	var ctx = document.getElementById("#faulttrend").getContext("2d");
	var myLine = new Chart(ctx, {
	    type: 'line',
	    data: lineChartData,
	    options: {
	          // Elements options apply to all of the options unless overridden in a dataset
	          // In this case, we are setting the border of each bar to be 2px wide and green
	     
	          
	          responsive: true,
	          legend: {
	              position: 'bottom',
	          },
	          scales: {
	              xAxes: [{
	              	gridLines: {
	                       color: "rgba(255,255,255,0)"
	                   },
	                   scaleLabel: {
	                          display: true,
	                          labelString: 'Date'
	                   }
	              }],
	              yAxes: [{
	              	scaleLabel: {
	                      display: true,
	                      labelString: 'Fault Count'
	                    }
	              }]
	          }
	      }
	  });

});
