import Taro, { Component, Config } from '@tarojs/taro';
import F2Canvas from "../../../components/f2-canvas/f2-canvas";
import {fixF2} from "../../../common/f2-tool"
import {View} from '@tarojs/components';


const F2 = require("@antv/f2");



export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '双 Y 轴',
    disableScroll: true,
  };

  state = { };

    initChart (canvas, width, height) {
    fixF2(F2);
    const data = [
      { time: '周一', tem: 6.9, rain: 10 },
      { time: '周二', tem: 9.5, rain: 13 },
      { time: '周三', tem: 14.5, rain: 14 },
      { time: '周四', tem: 18.2, rain: 10 },
      { time: '周五', tem: 21.5, rain: 12 },
      { time: '周六', tem: 25.2, rain: 16 },
      { time: '周日', tem: 26.5, rain: 13 }
    ];
    const chart = new F2.Chart({
      el: canvas,
      width,
      height
    });

    chart.source(data, {
      tem: {
        min: 0,
        max: 30,
        tickInterval: 10,
        nice: false
      },
      rain: {
        min: 0,
        max: 30,
        tickInterval: 10,
        nice: false
      }
    });

    chart.axis('time', {
      grid: null
    });
    chart.tooltip({
      showCrosshairs: true
    });

    chart.interval().position('time*tem');
    chart.line().position('time*rain')
      .color('#5ed470')
      .shape('smooth');
    chart.point().position('time*rain').style({
      stroke: '#5ed470',
      fill: '#fff',
      lineWidth: 2
    });

    // 绘制辅助线
    chart.guide().line({
      start(xScale, yScales) {
        let sum = 0;
        const yScale = yScales[1];
        yScale.values.forEach(v => (sum += v));
        return ['min', sum / yScale.values.length];
      },
      end(xScale, yScales) {
        let sum = 0;
        const yScale = yScales[1];
        yScale.values.forEach(v => (sum += v));

        return ['max', sum / yScale.values.length];
      },
      style: {
        stroke: '#5ed470', // 线的颜色
        lineDash: [0, 2, 2], // 虚线的设置
        lineWidth: 1 // 线的宽度
      } // 图形样式配置
    });
    chart.guide().text({
      position(xScale, yScales) {
        let sum = 0;
        const yScale = yScales[1];
        yScale.values.forEach(v => (sum += v));
        return ['max', sum / yScale.values.length];
      },
      content: '平均降雨量',
      style: {
        textAlign: 'end',
        textBaseline: 'top',
        fill: '#5ed470'
      },
      offsetY: 5
    });
    chart.render();
    return chart;
  }

  render () {
    return (
      <View className='full-screen'><F2Canvas onCanvasInit={this.initChart.bind(this)}></F2Canvas></View>
    )
  }
}

