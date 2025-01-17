import Taro, { Component, Config } from '@tarojs/taro';
import F2Canvas from "../../../components/f2-canvas/f2-canvas";
import {View} from '@tarojs/components';
import {fixF2} from "../../../common/f2-tool"

const F2 = require("@antv/f2");

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '区域图',
    disableScroll: true,
  };

  state = { };
  initChart (canvas, width, height) {
    fixF2(F2);
    const data = [{ "country": "USA", "value": null, "year": 1940 }, { "country": "USA", "value": null, "year": 1941 }, { "country": "USA", "value": null, "year": 1942 }, { "country": "USA", "value": null, "year": 1943 }, { "country": "USA", "value": null, "year": 1944 }, { "country": "USA", "value": 6, "year": 1945 }, { "country": "USA", "value": 11, "year": 1946 }, { "country": "USA", "value": 32, "year": 1947 }, { "country": "USA", "value": 110, "year": 1948 }, { "country": "USA", "value": 235, "year": 1949 }, { "country": "USA", "value": 369, "year": 1950 }, { "country": "USA", "value": 640, "year": 1951 }, { "country": "USA", "value": 1005, "year": 1952 }, { "country": "USA", "value": 1436, "year": 1953 }, { "country": "USA", "value": 2063, "year": 1954 }, { "country": "USA", "value": 3057, "year": 1955 }, { "country": "USA", "value": 4618, "year": 1956 }, { "country": "USA", "value": 6444, "year": 1957 }, { "country": "USA", "value": 9822, "year": 1958 }, { "country": "USA", "value": 15468, "year": 1959 }, { "country": "USA", "value": 20434, "year": 1960 }, { "country": "USA", "value": 24126, "year": 1961 }, { "country": "USA", "value": 27387, "year": 1962 }, { "country": "USA", "value": 29459, "year": 1963 }, { "country": "USA", "value": 31056, "year": 1964 }, { "country": "USA", "value": 31982, "year": 1965 }, { "country": "USA", "value": 32040, "year": 1966 }, { "country": "USA", "value": 31233, "year": 1967 }, { "country": "USA", "value": 29224, "year": 1968 }, { "country": "USA", "value": 27342, "year": 1969 }, { "country": "USA", "value": 26662, "year": 1970 }, { "country": "USA", "value": 26956, "year": 1971 }, { "country": "USA", "value": 27912, "year": 1972 }, { "country": "USA", "value": 28999, "year": 1973 }, { "country": "USA", "value": 28965, "year": 1974 }, { "country": "USA", "value": 27826, "year": 1975 }, { "country": "USA", "value": 25579, "year": 1976 }, { "country": "USA", "value": 25722, "year": 1977 }, { "country": "USA", "value": 24826, "year": 1978 }, { "country": "USA", "value": 24605, "year": 1979 }, { "country": "USA", "value": 24304, "year": 1980 }, { "country": "USA", "value": 23464, "year": 1981 }, { "country": "USA", "value": 23708, "year": 1982 }, { "country": "USA", "value": 24099, "year": 1983 }, { "country": "USA", "value": 24357, "year": 1984 }, { "country": "USA", "value": 24237, "year": 1985 }, { "country": "USA", "value": 24401, "year": 1986 }, { "country": "USA", "value": 24344, "year": 1987 }, { "country": "USA", "value": 23586, "year": 1988 }, { "country": "USA", "value": 22380, "year": 1989 }, { "country": "USA", "value": 21004, "year": 1990 }, { "country": "USA", "value": 17287, "year": 1991 }, { "country": "USA", "value": 14747, "year": 1992 }, { "country": "USA", "value": 13076, "year": 1993 }, { "country": "USA", "value": 12555, "year": 1994 }, { "country": "USA", "value": 12144, "year": 1995 }, { "country": "USA", "value": 11009, "year": 1996 }, { "country": "USA", "value": 10950, "year": 1997 }, { "country": "USA", "value": 10871, "year": 1998 }, { "country": "USA", "value": 10824, "year": 1999 }, { "country": "USA", "value": 10577, "year": 2000 }, { "country": "USA", "value": 10527, "year": 2001 }, { "country": "USA", "value": 10475, "year": 2002 }, { "country": "USA", "value": 10421, "year": 2003 }, { "country": "USA", "value": 10358, "year": 2004 }, { "country": "USA", "value": 10295, "year": 2005 }, { "country": "USA", "value": 10104, "year": 2006 }, { "country": "USA", "value": 9914, "year": 2007 }, { "country": "USA", "value": 9620, "year": 2008 }, { "country": "USA", "value": 9326, "year": 2009 }, { "country": "USA", "value": 5113, "year": 2010 }, { "country": "USA", "value": 5113, "year": 2011 }, { "country": "USA", "value": 4954, "year": 2012 }, { "country": "USA", "value": 4804, "year": 2013 }, { "country": "USA", "value": 4761, "year": 2014 }, { "country": "USA", "value": 4717, "year": 2015 }, { "country": "USA", "value": 4368, "year": 2016 }, { "country": "USA", "value": 4018, "year": 2017 }, { "country": "USSR/Russia", "value": null, "year": 1940 }, { "country": "USSR/Russia", "value": null, "year": 1941 }, { "country": "USSR/Russia", "value": null, "year": 1942 }, { "country": "USSR/Russia", "value": null, "year": 1943 }, { "country": "USSR/Russia", "value": null, "year": 1944 }, { "country": "USSR/Russia", "value": null, "year": 1945 }, { "country": "USSR/Russia", "value": null, "year": 1946 }, { "country": "USSR/Russia", "value": null, "year": 1947 }, { "country": "USSR/Russia", "value": null, "year": 1948 }, { "country": "USSR/Russia", "value": null, "year": 1949 }, { "country": "USSR/Russia", "value": 5, "year": 1950 }, { "country": "USSR/Russia", "value": 25, "year": 1951 }, { "country": "USSR/Russia", "value": 50, "year": 1952 }, { "country": "USSR/Russia", "value": 120, "year": 1953 }, { "country": "USSR/Russia", "value": 150, "year": 1954 }, { "country": "USSR/Russia", "value": 200, "year": 1955 }, { "country": "USSR/Russia", "value": 426, "year": 1956 }, { "country": "USSR/Russia", "value": 660, "year": 1957 }, { "country": "USSR/Russia", "value": 869, "year": 1958 }, { "country": "USSR/Russia", "value": 1060, "year": 1959 }, { "country": "USSR/Russia", "value": 1605, "year": 1960 }, { "country": "USSR/Russia", "value": 2471, "year": 1961 }, { "country": "USSR/Russia", "value": 3322, "year": 1962 }, { "country": "USSR/Russia", "value": 4238, "year": 1963 }, { "country": "USSR/Russia", "value": 5221, "year": 1964 }, { "country": "USSR/Russia", "value": 6129, "year": 1965 }, { "country": "USSR/Russia", "value": 7089, "year": 1966 }, { "country": "USSR/Russia", "value": 8339, "year": 1967 }, { "country": "USSR/Russia", "value": 9399, "year": 1968 }, { "country": "USSR/Russia", "value": 10538, "year": 1969 }, { "country": "USSR/Russia", "value": 11643, "year": 1970 }, { "country": "USSR/Russia", "value": 13092, "year": 1971 }, { "country": "USSR/Russia", "value": 14478, "year": 1972 }, { "country": "USSR/Russia", "value": 15915, "year": 1973 }, { "country": "USSR/Russia", "value": 17385, "year": 1974 }, { "country": "USSR/Russia", "value": 19055, "year": 1975 }, { "country": "USSR/Russia", "value": 21205, "year": 1976 }, { "country": "USSR/Russia", "value": 23044, "year": 1977 }, { "country": "USSR/Russia", "value": 25393, "year": 1978 }, { "country": "USSR/Russia", "value": 27935, "year": 1979 }, { "country": "USSR/Russia", "value": 30062, "year": 1980 }, { "country": "USSR/Russia", "value": 32049, "year": 1981 }, { "country": "USSR/Russia", "value": 33952, "year": 1982 }, { "country": "USSR/Russia", "value": 35804, "year": 1983 }, { "country": "USSR/Russia", "value": 37431, "year": 1984 }, { "country": "USSR/Russia", "value": 39197, "year": 1985 }, { "country": "USSR/Russia", "value": 45000, "year": 1986 }, { "country": "USSR/Russia", "value": 43000, "year": 1987 }, { "country": "USSR/Russia", "value": 41000, "year": 1988 }, { "country": "USSR/Russia", "value": 39000, "year": 1989 }, { "country": "USSR/Russia", "value": 37000, "year": 1990 }, { "country": "USSR/Russia", "value": 35000, "year": 1991 }, { "country": "USSR/Russia", "value": 33000, "year": 1992 }, { "country": "USSR/Russia", "value": 31000, "year": 1993 }, { "country": "USSR/Russia", "value": 29000, "year": 1994 }, { "country": "USSR/Russia", "value": 27000, "year": 1995 }, { "country": "USSR/Russia", "value": 25000, "year": 1996 }, { "country": "USSR/Russia", "value": 24000, "year": 1997 }, { "country": "USSR/Russia", "value": 23000, "year": 1998 }, { "country": "USSR/Russia", "value": 22000, "year": 1999 }, { "country": "USSR/Russia", "value": 21000, "year": 2000 }, { "country": "USSR/Russia", "value": 20000, "year": 2001 }, { "country": "USSR/Russia", "value": 19000, "year": 2002 }, { "country": "USSR/Russia", "value": 18000, "year": 2003 }, { "country": "USSR/Russia", "value": 18000, "year": 2004 }, { "country": "USSR/Russia", "value": 17000, "year": 2005 }, { "country": "USSR/Russia", "value": 16000, "year": 2006 }, { "country": "USSR/Russia", "value": 15537, "year": 2007 }, { "country": "USSR/Russia", "value": 14162, "year": 2008 }, { "country": "USSR/Russia", "value": 12787, "year": 2009 }, { "country": "USSR/Russia", "value": 12600, "year": 2010 }, { "country": "USSR/Russia", "value": 11400, "year": 2011 }, { "country": "USSR/Russia", "value": 5500, "year": 2012 }, { "country": "USSR/Russia", "value": 4512, "year": 2013 }, { "country": "USSR/Russia", "value": 4502, "year": 2014 }, { "country": "USSR/Russia", "value": 4502, "year": 2015 }, { "country": "USSR/Russia", "value": 4500, "year": 2016 }, { "country": "USSR/Russia", "value": 4500, "year": 2017 }];
    const chart = new F2.Chart({
      el: canvas,
      width,
      height
    });
    chart.source(data);
    chart.scale('year', {
      tickCount: 5
    });
    chart.axis('year', {
      label(text, index, total) {
        const textCfg = {};
        if (index === 0) {
          textCfg.textAlign = 'left';
        }
        if (index === total - 1) {
          textCfg.textAlign = 'right';
        }
        return textCfg;
      }
    });
    chart.axis('value', {
      label(text) {
        return {
          text: text / 1000 + 'k'
        };
      }
    });
    // tooltip 与图例结合
    chart.tooltip({
      showCrosshairs: true,
      custom: true, // 自定义 tooltip 内容框
      onChange(obj) {
        const legend = chart.get('legendController').legends.top[0];
        const tooltipItems = obj.items;
        const legendItems = legend.items;
        const map = {};
        legendItems.map(item => {
          map[item.name] = Object.assign({}, item);
        });
        tooltipItems.map(item => {
          const { name, value } = item;
          if (map[name]) {
            map[name].value = value;
          }
        });
        legend.setItems(Object.values(map));
      },
      onHide() {
        const legend = chart.get('legendController').legends.top[0];
        legend.setItems(chart.getLegendItems().country);
      }
    });
    chart.area().position('year*value').color('country').shape('smooth');
    chart.line().position('year*value').color('country').shape('smooth');
    chart.render();
    return chart;
  }

  render () {
    return (
      <View className='full-screen'><F2Canvas onCanvasInit={this.initChart.bind(this)}></F2Canvas></View>
    )
  }
}

