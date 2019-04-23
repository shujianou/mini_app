<template>
	<view>
		<home v-if="PageCur=='workbench'"></home>
		<message v-if="PageCur=='message'"></message>
		<book v-if="PageCur=='book'"></book>
		<me v-if="PageCur=='me'"></me>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="message">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/message' + [PageCur == 'message'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='message'?'text-green':'text-gray'">消息</view>
			</view>
			<view class="action" @click="NavChange" data-cur="workbench">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/workbench' + [PageCur=='workbench'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='workbench'?'text-green':'text-gray'">工作台</view>
			</view>
			<view class="action" @click="NavChange" data-cur="book">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/book' + [PageCur == 'book'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='book'?'text-green':'text-gray'">通讯录</view>
			</view>
			<view class="action" @click="NavChange" data-cur="me">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/me' + [PageCur == 'me'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='me'?'text-green':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'workbench'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
