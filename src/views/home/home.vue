<template>
  <div class="home">
    <van-nav-bar title="首页" />
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      :clearable="true"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template></van-search
    >

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div style="margin-bottom: 66px">
        <div v-for="(item, index) in form_list" :key="index">
          <div v-if="item.hasPoster" class="item">
            <router-link :to="'/article/details/' + item.id">
              <div class="content">
                <div class="title">{{ item.title }}</div>
                <div style="display: flex">
                  <div style="flex-shrink: 0; margin-right: auto">
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
                  <div
                    class="article-poster"
                    style="display: flex; justify-content: flex-end"
                  >
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
                  <div style="flex-shrink: 0; margin-right: auto">
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
import { GetArticle, FindArticle } from "@/plugins/api";
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
  mounted() {
    this.GetAllArticle();
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.GetAllArticle();
      }, 1000);
    },
    onSearch() {
      FindArticle({ title: this.value }).then((res) => {
        console.log(res);
        if (res.code === 200) {
          this.form_list = res.data;
          this.$toast.success("搜索成功");
        } else {
          this.$toast.fail("请输入搜索内容");
        }
      });
    },
    GetAllArticle() {
      GetArticle().then((res) => {
        console.log(res);
        this.form_list = res.data;
      });
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
  margin-right: 10px;
  float: right;
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