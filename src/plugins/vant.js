// 按需全局引入 vant组件
import Vue from 'vue';
import {
  Button,
  Cell,
  CellGroup,
  Tabbar,
  TabbarItem,
  Lazyload,
  NavBar,
  Collapse,
  CollapseItem,
  Toast,
  Dialog,
  ImagePreview,
  Field,
  Form,
  Col,
  Row,
  Icon,
  Search,
  Popup,
  Swipe,
  SwipeItem,
  PullRefresh,
  Uploader,
  Image,
} from 'vant';
[
  Button,
  Cell,
  CellGroup,
  Tabbar,
  TabbarItem,
  NavBar,
  Collapse,
  CollapseItem,
  Field,
  Form,
  Toast,
  Dialog,
  Col,
  Row,
  Icon,
  Search,
  Popup,
  Swipe,
  SwipeItem,
  PullRefresh,
  Uploader,
  Image,
].forEach((e) => {
  Vue.use(e);
});

Vue.use(Lazyload, {
  loading: require('../assets/icons/download.svg'),
  error: require('../assets/icons/imgerror.svg'),
  preLoad: 1,
});

// vant 图片预览
Vue.prototype.$imgPreview = ImagePreview;
