let dataB = {
  'name': '流程B',
  'nodeList': [
    {
      'id': 'nodeA',
      'name': '节点A-不可拖拽',
      'type': 'task',
      'left': '18px',
      'top': '223px',
      'ico': 'el-icon-odometer',
      'background': '#84f7f4',
      'remark': '',
      'tags': [],
      'state': 'success'
    },
    {
      'id': 'nodeB',
      'type': 'task',
      'name': '流程B-节点B',
      'left': '351px',
      'top': '96px',
      'ico': 'el-icon-odometer',
      'background': '#84f7f4',
      'remark': '',
      'tags': [],
      'state': 'error'
    },
    {
      'id': 'nodeC',
      'name': '流程B-节点C',
      'type': 'task',
      'left': '354px',
      'top': '351px',
      'ico': 'el-icon-odometer',
      'background': '#84f7f4',
      'remark': '',
      'tags': [],
      'state': 'warning'
    },
    {
      'id': 'nodeD',
      'name': '流程B-节点D</br>123</br>321',
      'type': 'task',
      'left': '737px',
      'top': '162px',
      'ico': 'el-icon-odometer',
      'background': '#84f7f4',
      'remark': '',
      'tags': [
        'tag1',
        'tag2'
      ],
      'state': 'running'
    },
    {
      'id': 't71otytggh',
      'name': '数据接入',
      'type': 'timer',
      'left': '369px',
      'top': '213px',
      'ico': 'el-icon-time',
      'background': '#e7d0ff',
      'remark': '',
      'tags': [],
      'state': 'success'
    },
    {
      'id': 'elb9tearln',
      'name': '数据接入1',
      'type': 'timer',
      'left': '943px',
      'top': '368px',
      'ico': 'el-icon-time',
      'background': '#e7d0ff',
      'remark': '',
      'tags': [],
      'state': 'success'
    },
    {
      'id': 'ushvigti05',
      'name': '数据清理',
      'type': 'over',
      'left': '805px',
      'top': '522px',
      'ico': 'el-icon-shopping-cart-full',
      'background': '#f8ffd2',
      'tags': [],
      'remark': '',
      'state': 'success'
    },
    {
      'id': 'llw3bsgbw',
      'name': '流程结束',
      'type': 'end',
      'left': '515px',
      'top': '528px',
      'ico': 'el-icon-caret-right',
      'background': '#409eff',
      'tags': [],
      'remark': '',
      'state': 'success'
    }
  ],
  'lineList': [
    {
      'from': 'nodeA',
      'to': 'nodeB',
      'label': '条件A'
    },
    {
      'from': 'nodeA',
      'to': 'nodeC',
      'label': '条件B'
    },
    {
      'from': 'nodeB',
      'to': 'nodeD'
    },
    {
      'from': 'nodeC',
      'to': 'nodeD'
    },
    {
      'from': 'nodeA',
      'to': 't71otytggh',
      'label': '条件'
    },
    {
      'from': 't71otytggh',
      'to': 'nodeD',
      'label': '条件'
    },
    {
      'from': 'nodeC',
      'to': 'elb9tearln',
      'label': '条件'
    },
    {
      'from': 't71otytggh',
      'to': 'elb9tearln',
      'label': '条件'
    },
    {
      'from': 'elb9tearln',
      'to': 'ushvigti05',
      'label': '条件'
    },
    {
      'from': 'ushvigti05',
      'to': 'llw3bsgbw',
      'label': '条件'
    }
  ]
}

export function getDataB () {
  return dataB
}
