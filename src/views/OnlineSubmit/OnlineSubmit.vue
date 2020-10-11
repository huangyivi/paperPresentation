<template>
    <div id="OnlineSubmit">
        <Banner :imgSrc="imgBase"/>
        <div class="submit-pane">
            <div>
                ———
                <span>在线投稿</span>
                ———
            </div>
            <p>ONLINE SUBMISSION</p>
            <div class="submit-title">
                <span>期刊名称</span>
                <input type="text">
                <strong>*</strong>
            </div>
            <div class="submit-message">
                <div>
                    <div>
                        <span>作者姓名</span>
                        <input type="text">
                        <strong>*</strong>
                    </div>
                    <p>写第一作者或联系人</p>
                </div>
                <div>
                    <div>
                        <span>联系电话</span>
                        <input type="text">
                        <strong>*</strong>
                    </div>
                    <p>请填写正确的联系电话</p>
                </div>
                
            </div>
            <div class="submit-select">
                <div>
                    <span>上传稿件</span>
                    <div>
                        选择文件
                        <input type="file">
                    </div>
                </div>

                <div>
                    <span>基金项目</span>
                    <span>开具发票</span>
                </div>
            </div>

            <div>
                <button>清除</button>
                <button>提交投稿</button>
            </div>
        </div>
        <div class="message-list">
            <div class="new-magazines">
                <p> 最新投稿</p>
                <div>
                    <ul>
                        <li v-for="item in magazines.slice(0,6)" :key="item.index">
                            <span>{{item.author}}</span>
                            <span :title="item.works">{{item.works}}</span>
                            <span>{{item.time}}</span>
                        </li>
                    </ul>
                    <ul>
                        <li  v-for="item in magazines.slice(6,12)" :key="item.index">
                            <span>{{item.author}}</span>
                            <span :title="item.works">{{item.works}}</span>
                            <span>{{item.time}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="employ-messages">
                <p> 录用通知
                    <a href="" @click.prevent>查看更多</a>
                </p>
                <div>
                    <ul>
                        <li v-for="item in messages.slice(0,6)" :key="item.index">
                            <a href="" @click.prevent>
                                <span :title="item.notice">{{item.notice}}</span>
                                <span>{{item.time}}</span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li  v-for="item in messages.slice(6,12)" :key="item.index">
                            <a href="" @click.prevent>
                                <span :title="item.notice">{{item.notice}}</span>
                                <span>{{item.time}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import Banner from '../../components/Banner/Banner'

    export default{
        data(){
            return{
                imgBase: 'http://zhimaikeji.net/imgs/wf/onlineSub.png',
                magazines: [
                    {
                        author: '利己',
                        works: '《全面小康，我们来了》',
                        time: '2020-10-23',
                    },
                    {
                        author: '利己',
                        works: '《文艺生活》',
                        time: '2020-10-23',
                    },
                    {
                        author: '利己',
                        works: '《核心力量训练对青少年跨栏运动员跨栏步节奏的影响》',
                        time: '2020-10-23',
                    },
                    {
                        author: '利己',
                        works: '《文艺生活》',
                        time: '2020-10-23',
                    },
                    {
                        author: '利己',
                        works: '《文艺生活》',
                        time: '2020-10-23',
                    },
                    {
                        author: '利己6',
                        works: '《核心力量训练对青少年跨栏运动员跨栏步节奏的影响》',
                        time: '2020-10-23',
                    },
                    {
                        author: '利己',
                        works: '《文艺生活》',
                        time: '2020-10-23',
                    },
                    {
                        author: '利己',
                        works: '《文艺生活》',
                        time: '2020-10-23',
                    },
                    {
                        author: '利己3',
                        works: '《文艺生活》',
                        time: '2020-10-23',
                    },
                    {
                        author: '利己1',
                        works: '《核心力量训练对青少年跨栏运动员跨栏步节奏的影响》',
                        time: '2020-10-23',
                    },
                    {
                        author: '利己13',
                        works: '《文艺生活》',
                        time: '2020-10-23',
                    },
                    {
                        author: '利己2',
                        works: '《核心力量训练对青少年跨栏运动员跨栏步节奏的影响》',
                        time: '2020-10-23',
                    },
                    {
                        author: '利己4',
                        works: '《文艺生活》',
                        time: '2020-10-23',
                    },
                ],
                messages: [
                    {
                        notice: '《检验检疫学刊》编辑部 录用证明',
                        time: '2020-09-20',
                    },
                    {
                        notice: '《检验检疫学刊》编辑部 录用证明',
                        time: '2020-09-20',
                    },
                    {
                        notice: '《检验检疫学刊》编辑部 录用证明',
                        time: '2020-09-20',
                    },
                    {
                        notice: '《检验检疫学刊》编辑部 录用证明',
                        time: '2020-09-20',
                    },
                    {
                        notice: '《检验检疫学刊》编辑部 录用证明',
                        time: '2020-09-20',
                    },
                    {
                        notice: '《检验检疫学刊》编辑部 录用证明',
                        time: '2020-09-20',
                    },
                    {
                        notice: '《检验检疫学刊》编辑部 录用证明',
                        time: '2020-09-20',
                    },
                    {
                        notice: '《建筑工程技术与设计》录用通知 ',
                        time: '2020-09-20',
                    },
                    {
                        notice: '《检验检疫学刊》编辑部 录用证明',
                        time: '2020-09-20',
                    },
                    {
                        notice: '《检验检疫学刊》编辑部 录用证明',
                        time: '2020-09-20',
                    },
                    {
                        notice: '《建筑工程技术与设计》录用通知 ',
                        time: '2020-09-20',
                    },
                    {
                        notice: '《建筑工程技术与设计》录用通知 ',
                        time: '2020-09-20',
                    },
                ]

            }
        },
        components:{
            Banner
        }
    }
    
</script>


<style lang="scss" scoped>

@import './OnlineSubmit.scss'


</style>