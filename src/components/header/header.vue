<template>
	<div class="header">
		<div class="content-wrapper" @click="showDetail">
			<div class="avatar">
				<img width="64" height="64" :src="seller.avatar" />
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div v-if="seller.supports" class="support">
					<span class="icon"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
		</div>
		<div class="bullentin-wrapper">
			好吃好吃好吃好吃好吃好吃
		</div>
		<div class="detail" v-show="detailShow" @click="showDetail"></div>
	</div>
</template>

<script>
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		created() {

		},
		data() {
			return {
				detailShow: false
			}
		},
		methods: {
			showDetail: function() {
				this.detailShow = !this.detailShow
			}
		}
	}
</script> 

<style>
	.header{
		padding: 10px;
		background: #ccc;
	}
	.avatar{
		display: inline-block;
	}
	.content{
		margin-left: 10px;
		display: inline-block;
	}
	.detail{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		height: 100%;
		overflow: auto;
		background: rgba(7,17,27,0.8)
	}
</style>
