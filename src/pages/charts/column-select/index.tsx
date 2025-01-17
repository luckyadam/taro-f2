import Taro, { Component, Config } from '@tarojs/taro';
import F2Canvas from "../../../components/f2-canvas/f2-canvas";
import {fixF2} from "../../../common/f2-tool"
import {View} from '@tarojs/components';

const F2 = require("@antv/f2");

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '柱状图选中交互(可取消选中)',
    disableScroll: true,
  };

  state = { };
    initChart (canvas, width, height) {
    fixF2(F2);
    const data = [
      { year: '1951 年', sales: 38 },
      { year: '1952 年', sales: 52 },
      { year: '1956 年', sales: 61 },
      { year: '1957 年', sales: 145 },
      { year: '1958 年', sales: 48 },
      { year: '1959 年', sales: 38 },
      { year: '1960 年', sales: 38 },
      { year: '1962 年', sales: 38 },
    ];
    const chart = new F2.Chart({
      el: canvas,
      width,
      height
    });

    chart.source(data, {
      sales: {
        tickCount: 5
      }
    });
    chart.tooltip(false);
    chart.interval().position('year*sales');
    chart.render();

    // 绘制柱状图文本
    const offset = -5;
    const chartCanvas = chart.get('canvas');
    const group = chartCanvas.addGroup();
    const shapes = {};
    data.map(obj => {
      const point = chart.getPosition(obj);
      const text = group.addShape('text', {
        attrs: {
          x: point.x,
          y: point.y + offset,
          text: obj.sales,
          textAlign: 'center',
          textBaseline: 'bottom',
          fill: '#808080'
        }
      });

      shapes[obj.year] = text; // 缓存该 shape, 便于后续查找
    });

    let lastTextShape; // 上一个被选中的 text
    // 配置柱状图点击交互
    chart.interaction('interval-select', {
      selectAxisStyle: {
        fill: '#000',
        fontWeight: 'bold'
      },
      mode: 'range',
      onEnd(ev) {
        const { data, selected } = ev;
        lastTextShape && lastTextShape.attr({
          fill: '#808080',
          fontWeight: 'normal'
        });
        if (selected) {
          const textShape = shapes[data.year];
          textShape.attr({
            fill: '#000',
            fontWeight: 'bold'
          });
          lastTextShape = textShape;
        }
        chartCanvas.draw();
      }
    });
    return chart;
  }

  render () {
    return (
      <View className='full-screen'><F2Canvas onCanvasInit={this.initChart.bind(this)}></F2Canvas></View>
    )
  }
}

