<template>
  <div class="home">
    <van-nav-bar title="首页" />
    <van-search value="" placeholder="请输入搜索关键词" />
    <!-- <div class="p-2">
      <div class="card1">
        <div class="top">
          <div class="text">
            <h3>How to memorize English words efficiently</h3>
            <p>如何高效背英语单词</p>
          </div>
          <div class="pic">
            <img src="../../assets/image/1.png" alt="" />
            <em class="tip">2.0万</em>
          </div>
        </div>
        <div class="bottom">初阶（高级） 两天前</div>
      </div>
      <div class="card1">
        <div class="top">
          <div class="text">
            <h3>Never say die.never give up</h3>
            <p>永不言败,永不放弃</p>
          </div>
          <div class="pic">
            <img src="../../assets/image/2.jpeg" alt="" />
            <em class="tip">3.0万</em>
          </div>
        </div>
        <div class="bottom">初阶（高级） 两天前</div>
      </div>
      <div class="card1">
        <div class="top">
          <div class="text">
            <h3>Show yourself and reach new heightsl</h3>
            <p>展现自我，争创新高</p>
          </div>
          <div class="pic">
            <img src="../../assets/image/3.jpeg" alt="" />
            <em class="tip">3.0万</em>
          </div>
        </div>
        <div class="bottom">初阶（高级） 两天前</div>
      </div>
      <div class="card1">
        <div class="top">
          <div class="text">
            <h3>Where there is a will,there is a way</h3>
            <p>有志者，事竟成</p>
          </div>
          <div class="pic">
            <img src="../../assets/image/4.jpeg" alt="" />
            <em class="tip">3.0万</em>
          </div>
        </div>
        <div class="bottom">初阶（高级） 两天前</div>
      </div>
      <div class="card1">
        <div class="top">
          <div class="text">
            <h3>Sow today,reap tomorrow</h3>
            <p>耕耘今天，收获明天</p>
          </div>
          <div class="pic">
            <img src="../../assets/image/5.jpeg" alt="" />
            <em class="tip">3.0万</em>
          </div>
        </div>
        <div class="bottom">初阶（高级） 两天前</div>
      </div>
      <div class="card1">
        <div class="top">
          <div class="text">
            <h3>Don't be shy,just have a try</h3>
            <p>不要胆怯，勇于尝试</p>
          </div>
          <div class="pic">
            <img src="../../assets/image/6.jpeg" alt="" />
            <em class="tip">3.0万</em>
          </div>
        </div>
        <div class="bottom">初阶（高级） 两天前</div>
      </div>
      <div class="card1">
        <div class="top">
          <div class="text">
            <h3>Love dose not close,and your long</h3>
            <p>爱不贵亲密，而贵长久</p>
          </div>
          <div class="pic">
            <img src="../../assets/image/1.png" alt="" />
            <em class="tip">3.0万</em>
          </div>
        </div>
        <div class="bottom">初阶（高级） 两天前</div>
      </div>
      <div class="card1">
        <div class="top">
          <div class="text">
            <h3>Life is a fiower of which love is the honey</h3>
            <p>人生是花朵，爱情如甜蜜</p>
          </div>
          <div class="pic">
            <img src="../../assets/image/2.jpeg" alt="" />
            <em class="tip">3.0万</em>
          </div>
        </div>
        <div class="bottom">初阶（高级） 两天前</div>
      </div>
      <div class="card1">
        <div class="top">
          <div class="text">
            <h3>Life is a happy day fot a wise man</h3>
            <p>生活只是聪明人的喜庆日</p>
          </div>
          <div class="pic">
            <img src="../../assets/image/3.jpeg" alt="" />
            <em class="tip">3.0万</em>
          </div>
        </div>
        <div class="bottom">初阶（高级） 两天前</div>
      </div>
      <div class="card1">
        <div class="top">
          <div class="text">
            <h3>One love to drive out another love</h3>
            <p>一个爱情驱散另一个爱情</p>
          </div>
          <div class="pic">
            <img src="../../assets/image/4.jpeg" alt="" />
            <em class="tip">3.0万</em>
          </div>
        </div>
        <div class="bottom">初阶（高级） 两天前</div>
      </div>
      <div class="card1">
        <div class="top">
          <div class="text">
            <h3>Life is a maze,and love is a mystery</h3>
            <p>生活是座迷宫，爱情是个迷</p>
          </div>
          <div class="pic">
            <img src="../../assets/image/5.jpeg" alt="" />
            <em class="tip">3.0万</em>
          </div>
        </div>
        <div class="bottom">初阶（高级） 两天前</div>
      </div>
    </div> -->

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div style="margin-bottom: 66px">
        <div v-for="(item, index) in form_list" :key="index">
          <div v-if="item.hasPoster" class="item">
            <router-link :to="'/article/details/' + item.id">
              <div class="content">
                <div class="title">{{ item.title }}</div>
                <div style="display: flex">
                  <div>
                    <div class="author">
                      <van-image
                        round
                        width="20"
                        height="20"
                        :src="item.avatar"
                      />
                      <span class="author-name">{{
                        item.author.nickname
                      }}</span>
                      <van-icon
                        color="#06f"
                        style="padding-left: 7px"
                        name="wechat-pay"
                      />
                    </div>
                    <div class="article">
                      {{ item.article.content }}
                    </div>
                  </div>
                  <div class="article-poster">
                    <van-image
                      width="100px"
                      height="63px"
                      fit="contain"
                      :src="item.poster"
                    />
                  </div>
                </div>
                <div class="star-bar">
                  <span class="star-bar-count"
                    >{{ item.agreeCount }}人赞同 ·
                    {{ item.commentCount }}条评论</span
                  >
                  <van-icon
                    color="#909399"
                    style="float: right; padding-top: 3px"
                    name="ellipsis"
                  />
                </div>
              </div>
            </router-link>
          </div>

          <div v-if="!item.hasPoster" class="item">
            <router-link :to="'/article/details/' + item.id">
              <div class="content">
                <div class="title">{{ item.title }}</div>
                <div style="display: flex">
                  <div>
                    <div class="author">
                      <van-image
                        round
                        width="20"
                        height="20"
                        :src="item.avatar"
                      />
                      <span class="author-name">{{ item.nickname }}</span>
                      <van-icon
                        color="#06f"
                        style="padding-left: 7px"
                        name="wechat-pay"
                      />
                    </div>
                    <div class="article">
                      {{ item.content }}
                    </div>
                  </div>
                </div>
                <div class="star-bar">
                  <span class="star-bar-count"
                    >{{ item.agreeCount }}人赞同 ·
                    {{ item.commentCount }}条评论</span
                  >
                  <van-icon
                    color="#909399"
                    style="float: right; padding-top: 3px"
                    name="ellipsis"
                  />
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </van-pull-refresh>
    <div class="d">没有更多内容了</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value: "",
      activeNames: 1,
      isLoading: false,
      form_list: [{}],
    };
  },
  mounted() {},
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.home-header {
  display: flex;
  align-items: center;
  padding: 20px;
  h2 {
    margin: 0 0 0 20px;
    font-size: 28px;
    font-weight: 500;
  }
}
home {
  width: 100%;
  height: 90vh;
  background: #f5f6f7 !important;
}
>>> .van-tabs__line {
  width: 20px;
  background-color: #0066ff;
}
.d {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
}
.article-poster {
  min-width: 100px;
  min-height: 63px;
  border-radius: 5px;
  margin: 15px 0 0 10px;
  object-fit: fill;
}
.item {
  width: 100%;
  background: #ffffff;
  margin-bottom: 10px;
}
.content {
  padding: 10px;
}
.title {
  letter-spacing: 1px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.9);
}
.author {
  display: flex;
  padding-top: 10px;
}
.author-name {
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.9);
}
.author-des {
  padding-left: 3px;
  font-size: 12px;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.6);
}
.article {
  font-size: 14px;
  letter-spacing: 1px;
  padding: 5px 0;
  color: rgba(0, 0, 0, 0.8);
  max-height: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.star-bar {
  height: 25px;
  padding-top: 8px;
}
.star-bar-count {
  font-size: 13px;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.5);
}
</style>