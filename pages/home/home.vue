<template name="components">
	<view>
		<scroll-view scroll-y class="page">
			<view class="background">
				<view class="background-img">
					<image src="/static/workbench_bgk.png" mode="widthFix" class="response" style="border-radius: 15upx;"></image>
				</view>
			</view>
			<view class="nav-list">
				<navigator hover-class='none' :url="'/pages/component/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.icon"></text>
				</navigator>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				elements: [{
						title: '预定会议室',
						name: 'boardroom',
						color: 'orange',
						icon: 'timefill'
					},
					{
						title: '办公 ',
						name: 'office',
						color: 'purple',
						icon: 'formfill'
					},
					{
						title: '知识库',
						name: 'Document',
						color: 'pink',
						icon: 'list'
					},
					/* {
						title: '操作条',
						name: 'bar',
						color: 'mauve',
						icon: 'vipcard'
					}, */
					{
						title: '聊天',
						name: 'chat',
						color: 'green',
						icon: 'messagefill'
					},
					{
						title: '会议通知',
						name: 'meeting notice',
						color: 'olive',
						icon: 'album'
					},
					{
						title: '考勤',
						name: 'check work',
						color: 'grey',
						icon: 'squarecheckfill'
					},
					{
						title: '个人简报',
						name: 'brief report',
						color: 'cyan',
						icon: 'roundcheckfill'
					},{
						title: '个人信息',
						name: 'me',
						color: 'brown',
						icon: 'newsfill'
					}
				],
			};
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}

	.background {
		.background-img {
			position: relative;
			box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.2);
		}
	}

	.nav-list {
		margin: -52px auto 11px auto;
	}
</style>
