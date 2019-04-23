<template>
	<view class="content">
		<view class="content-header">
			<view class="solid-bottom text-xl padding">
				<text class="text-black text-bold">MINI</text>
			</view>
			<!-- 搜索框 -->
			<view class="input-box">
				<!-- <text class="cuIcon-search"></text> -->
				<input placeholder="搜索" placeholder-style="color:#c0c0c0;" @tap="toSearch()" />
				<view class="icon search"></view>
			</view>
		</view>
		<view class="message-list">
			<wkiwi-swipe-action :options="options" :messagesList="messages"></wkiwi-swipe-action>
		</view>
	</view>
</template>

<script>
	import wkiwiSwipeAction from "../../components/message/wkiwi-swipe-action.vue";
	export default {
		components: {
			wkiwiSwipeAction
		},
		data() {
			return {
				focus: false,
				isShowView: true,
				options: [{
						text: "置顶",
						style: {
							backgroundColor: "#C7C6CD"
						}
					},
					{
						text: "删除",
						style: {
							backgroundColor: "#dd524d"
						}
					}
				],
				messages: [{
						title: "系统消息",
						url: [
							"http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg"
						],
						message: "您的快递已到楼下,请及时下楼领取",
						time: "15:15",
						count: 5,
						stick: false, //是否为置顶状态
						disabled: false, //是否禁止滑动
						type: 1 //通知类型消息
					},
					{
						title: "消息任务",
						url: [
							"http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg"
						],
						message: "您有5条待办等待批示,请及时处理",
						time: "15:15",
						count: 5,
						stick: false, //是否为置顶状态
						disabled: false, //是否禁止滑动
						type: 1 //通知类型消息
					},
					{
						title: "王培",
						url: [
							"/static/chat/demo/face/wangpei.jpg"
						],
						message: "想不想修仙",
						time: "15:15",
						count: 5,
						stick: false, //是否为置顶状态
						disabled: true, //是否禁止滑动
						type: 2 //普通用户类型消息
					},
					{
						title: "picc需求确认群",
						url: [
							"/static/chat/demo/face/sunqi.jpg",
							"/static/chat/demo/face/wangpei.jpg",
							"/static/chat/demo/face/xiansong.jpg",
							"/static/chat/demo/face/zhangmin.jpg"
						],
						message: "王培:看到了",
						time: "15:15",
						count: 22,
						stick: true,
						disabled: false, //是否禁止滑动
						type: 3 //群组消息
					},
					{
						title: "张敏",
						url: [
							"/static/chat/demo/face/zhangmin.jpg"
						],
						message: "这个是啥错误",
						time: "12:13",
						count: 1,
						stick: false,
						disabled: false, //是否禁止滑动
						type: 2 //普通用户类型消息
					},
					{
						title: "三缺一",
						url: [
							"/static/chat/demo/face/xiansong.jpg",
							"/static/chat/demo/face/wangpei.jpg",
							"/static/chat/demo/face/zhangmin.jpg"
						],
						message: "张敏:[语音]32秒",
						time: "15:15",
						count: 22,
						stick: true,
						disabled: false, //是否禁止滑动
						type: 3 //群组消息
					},
					{
						title: "马云",
						url: [
							"/static/chat/demo/face/mayun.png"
						],
						message: "小伙子,我很看好你",
						time: "12:11",
						count: 0,
						stick: false,
						disabled: false, //是否禁止滑动
						type: 2 //普通用户类型消息
					},
					{
						title: "马化腾",
						url: [
							"/static/chat/demo/face/mahuateng.jpg"
						],
						message: "充钱使你快乐,越充钱越快乐",
						time: "08:23",
						count: 0,
						stick: false,
						disabled: false, //是否禁止滑动
						type: 2 //普通用户类型消息
					},
					{
						title: "刘强东",
						url: [
							"/static/chat/demo/face/liuqiangdong.jpg"
						],
						message: "京东到家为您服务",
						time: "11:35",
						count: 0,
						stick: false,
						disabled: false, //是否禁止滑动
						type: 2 //普通用户类型消息
					},
					{
						title: "小程序",
						url: [
							"http://img1.3lian.com/gif/more/11/201212/3fab6379b6ef53e7c17a1cc772eed0d6.jpg"
						],
						message: "这个IDE方便都不要配置了",
						time: "03:21",
						count: 5,
						stick: false,
						disabled: false, //是否禁止滑动
						type: 2 //普通用户类型消息
					},
					{
						title: "微信应用号开发群",
						url: [
							"http://img1.3lian.com/gif/more/11/201212/8f3762fb4d791410ec970baa2641344d.jpg"
						],
						message: "开发的局限性太大了",
						time: "03:08",
						count: 99,
						stick: false,
						disabled: false, //是否禁止滑动
						type: 2 //普通用户类型消息
					},
					{
						title: "后台",
						url: [
							"http://img1.3lian.com/gif/more/11/201212/411cffabcd6e4474b48f1ecac76e1b3f.jpg"
						],
						message: "不看好小程序",
						time: "02:45",
						count: 0,
						stick: false,
						disabled: false, //是否禁止滑动
						type: 2 //普通用户类型消息
					},
					{
						title: "闯天下",
						url: [
							"http://img1.3lian.com/gif/more/11/201212/04378257474004fcdd62f619d724db0c.jpg"
						],
						message: "微信太强大了",
						time: "01:09",
						count: 0,
						stick: false,
						disabled: false, //是否禁止滑动
						type: 2 //普通用户类型消息
					},
					{
						title: "小程序",
						url: [
							"http://img1.3lian.com/gif/more/11/201212/58ec7c89b16c529fc9d0dc440a72e14d.jpg"
						],
						message: "有快来看直播啦，学习开始啦",
						time: "00:24",
						count: 2,
						stick: false,
						disabled: false, //是否禁止滑动
						type: 2 //普通用户类型消息
					}
				]
			};
		},
		onLoad() {},
		methods: {
			tosearch() {
				uni.navigateTo({
					url: "../common/message/search/index"
				});
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				this.floatingMenuShow = !this.floatingMenuShow;
			}
		}
	};
</script>

<style scoped="true" lang="scss">
	.search-box {
		height: 100upx;
		width: 100%;
		background: #4191ea;
		display: flex;
		flex-flow: nowrap;

		.search-bg {
			box-sizing: border-box;
			height: 80upx;
			padding: 0 30upx;
			line-height: 80upx;
			width: 710upx;
			margin: auto;
			background: rgba(255, 255, 255, 1);
			border-radius: 40upx;
			color: #999;
			display: flex;
			flex-flow: nowrap;

			.search {
				flex: 1;
				height: 80upx;
				line-height: 80upx;
			}

			.iconfont {
				margin-left: 15upx;
			}
		}
	}

	.floating-menus {
		position: fixed;
		top: 0;
		right: 20upx;
		z-index: 10;
		opacity: 0;
		transition: all 0.4s;
		height: 0;
		overflow: hidden;
	}

	.message-list {
		wkiwi-swipe-action {
			margin: 10upx;
		}
	}

	.floating-menus {
		&.show {
			opacity: 1;
			height: auto;
		}

		&.hidden {
			opacity: 0;
			height: 0;
		}
	}

	.input-box {
		width: 93%;
		height: 60upx;
		background-color: #f5f5f5;
		border-radius: 30upx;
		position: relative;
		display: flex;
		align-items: center;
		margin: 30upx;

		.icon {
			display: flex;
			align-items: center;
			position: absolute;
			top: 0;
			right: 0;
			width: 60upx;
			height: 60upx;
			font-size: 34upx;
			color: #c0c0c0;
		}

		input {
			padding-left: 28upx;
			height: 28upx;
			font-size: 28upx;
		}
	}
</style>
