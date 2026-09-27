import {
  data_default
} from "./chunk-S7M5ZIRT.js";
import {
  Et
} from "./chunk-E6JHFIG4.js";

// output/native-current/foodMenus-DESI84ow.js
var r = "猪脚饭 汉堡薯条 麻辣烫 烧腊饭 黄焖鸡米饭 煲仔饭 酸辣粉 肠粉 沙县小吃 热干面 重庆小面 兰州拉面 凉皮 生煎 锅贴 炒饭 冒菜 鸭血粉丝汤 胡辣汤 砂锅粥 螺蛳粉 水饺 茶餐厅 馄饨抄手 披萨 桂林米粉 川菜 湘菜 粤菜 日本料理 韩国料理 焗饭 泡面 麻辣香锅 沙拉轻食 馄饨 拉面 烩面 热干面 刀削面 油泼面 炸酱面 炒面 重庆小面 米线 酸辣粉 土豆粉 螺狮粉 凉皮儿 麻辣烫 肉夹馍 羊肉汤 炒饭 盖浇饭 卤肉饭 烤肉饭 黄焖鸡米饭 驴肉火烧 川菜 麻辣香锅 火锅 酸菜鱼 烤串 披萨 烤鸭 汉堡 炸鸡 寿司 蟹黄包 煎饼果子 生煎 炒年糕", s = Et(r), o = () => {
  data_default.set("eatMenus", ""), s.value = r;
}, a = (t2) => {
  data_default.set("eatMenus", t2);
};
data_default.get("eatMenus").then((e2) => {
  e2 && (s.value = e2);
});

export {
  r,
  s,
  o,
  a
};
