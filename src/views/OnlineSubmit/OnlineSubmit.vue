<template>
    <div class="OnlineSubmit">
        <Banner :imgSrc="imgBase"/>
        <div class="submit-pane">
            <div>
                ———
                <span>在线投稿</span>
                ———
            </div>
            <p>ONLINE SUBMISSION</p>
            <div class="submit-title">
                <span>文献名称</span>
                <input type="text" v-model="docName">
                <strong>*</strong>
            </div>
            <div class="submit-message">
                <div>
                    <div>
                        <span>作者姓名</span>
                        <input type="text" v-model="author">
                        <strong>*</strong>
                    </div>
                    <p>写第一作者或联系人</p>
                </div>
                <div>
                    <div>
                        <span>联系电话</span>
                        <input type="text" v-model="phone">
                        <strong>*</strong>
                    </div>
                    <p>请填写正确的联系电话</p>
                </div>
            </div>
            <div class="submit-title">
                <span>电子邮箱</span>
                <input type="text" v-model="email">
                <strong>*</strong>
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
                    <span @click="modal1 = true">基金项目</span>
                    <Modal
                        v-model="modal1"
                        title="论文所属基金选择"
                        @on-ok="ok"
                        @on-cancel="cancel">
                        <p>Content of dialog</p>
                        <p>Content of dialog</p>
                        <p>Content of dialog</p>
                    </Modal>
                    <span>开具发票</span>
                </div>
            </div>
            <div class="message-add">
                <div class="keywords">
                    <span>关键词</span>
                    <div class="tags">
                        <Tag 
                        color="primary"
                        v-for="item in countTags"
                        :key="item.index"
                        :name="item"
                        type="border" 
                        closable
                        @on-close="handleClose"
                        >
                        {{item}}
                        </Tag>
                        <Input
                        class="input-new-tag"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                        />
                        <Button v-else
                        type="primary"
                        icon="ios-add" 
                       
                        size="small" 
                        @click="handleAdd">
                            添加标签
                        </Button>
                    </div>
                </div>
                <div class="summary">
                    <span>摘要</span>
                    <textarea cols="30" rows="10" v-model="summary"></textarea>
                </div>
            </div>

            <div>
                <Button type="default" size="large" @click="clear">清空</Button>
                <Button type="primary" size="large">提交投稿</Button>
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
                ],
                author:'', //作者
                phone:'', //电话
                email:'', //电子邮箱
                docName: '', //文献名称
                summary: '', //摘要
                countTags: ['Java', 'Vue','biaoqian'], //标签组
                inputVisible: false, //是否显示输入框
                inputValue: '', //输入框的内容
                modal1: false,
            }
        },
        components:{
            Banner
        },
        methods:{
            //清空所有
            clear(){
                this.author = ''; 
                this.docName = '';
                this.phone = '';
                this.summary = '';
                this.email = '';
            },
            //点击添加标签
            handleAdd(){
                //输入框出现
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },
            //删除标签
            handleClose(event,name){
                const index = this.countTags.indexOf(name);
                this.countTags.splice(index,1);
            },
            //生成标签
            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    //添加到数组里
                    this.countTags.push(inputValue);   
                }
                this.inputVisible = false;
                this.inputValue = '';
            },
            //校验邮箱
            isEmail(email){
                let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
                if(!reg.test(email)) return false;
                else return true;
            }
        }
    }
    
</script>


<style lang="scss" scoped>

@import './OnlineSubmit.scss'


</style>