//
//
// Demo of ScrollableTable

var table = window.table = new Datacomb.ScrollableTable({

  //
  el: document.querySelector('#table-target'),

  //
  data: _.range(1000).map(function(ndx) {
    return {
      index: ndx,
      color: _.sample(['red', 'blue', 'green', 'pink']),
      random: Math.ceil(Math.random() * 100)
    };
  }),

  //
  heightFn: function() { return 20; },
  visibleHeight: 200,

  //
  buildRow: function(rowData) {
    var node = document.createElement('div');
    node.classList.add('test-row');
    node.innerHTML =
      "<div class='test-col index'>"+rowData.index+"</div>"+
      "<div class='test-col color'>"+rowData.color+"</div>"+
      "<div class='test-col random'>"+rowData.random+"</div>";
    return node;
  },

  //
  updateRow: function(rowData, rowEl) {
    rowEl.childNodes[0].textContent = rowData.index;
    rowEl.childNodes[1].textContent = rowData.color;
    rowEl.childNodes[2].textContent = rowData.random;
  }
});
