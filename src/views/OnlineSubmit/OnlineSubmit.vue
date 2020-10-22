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
                        <input type="text" v-model="phone" :class="{redBorder: phoneState}">
                        <strong>*</strong>
                    </div>
                    <p>请填写正确的联系电话</p>
                </div>
            </div>
            <div class="submit-title">
                <span>电子邮箱</span>
                <input type="text" v-model="email" :class="{redBorder: emailState}">
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
                    >
                        <p slot="header" style="color:#2880da;background:#fff;text-align:center;font-size:20px;">
                            论文所属基金选择
                        </p>
                        <div class="fund-pane">
                            <div>
                                <label>项目号：</label>
                                <input type="text">
                            </div>
                            <div>
                                <label>项目名称：</label>
                                <input type="text">
                            </div>
                            <div>
                                <label>立项单位/部门：</label>
                                <input type="text">
                            </div>
                            <div>
                                <label>项目名称(英文)：</label>
                                <input type="text">
                            </div>
                            <div>
                                <label>项目备注：</label>
                                <input type="text">
                            </div>
                        </div>
                    </Modal>
                    <!-- <span>开具发票</span> -->
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
                <Button type="primary" size="large" @click="submitDocu">提交投稿</Button>
            </div>
        </div>
        <!-- <div class="message-list">
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
                        <li  v-for="item in magazines.slice(-6)" :key="item.index">
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
                        <li  v-for="item in messages.slice(-6)" :key="item.index">
                            <a href="" @click.prevent>
                                <span :title="item.notice">{{item.notice}}</span>
                                <span>{{item.time}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>

    import Banner from '../../components/Banner/Banner'

    export default{
        data(){
            return{
                imgBase: 'http://zhimaikeji.net/imgs/wf/onlineSub.png',
                // magazines: [],  
                // messages: [],   
                author:'', //作者
                phone:'', //电话
                email:'', //电子邮箱
                docName: '', //文献名称
                summary: '', //摘要
                countTags: ['Java', 'Vue','biaoqian'], //标签组
                inputVisible: false, //是否显示输入框
                inputValue: '', //输入框的内容
                modal1: false,
                emailState: false,  //邮箱输入框状态
                phoneState: false,  //电话输入框状态
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
            },
            //检查电话
            isPhone(phone){
                let reg = /^1[0-9]{10}$/;;
                if(!reg.test(phone)) return false;
                else return true;
            },
            //提交投稿
            submitDocu(){
                let data = new FormData();
                let time = new Date();
                time = time.toLocaleDateString();
                console.log(time);
                let state = this.checkParams();
                if(!state){
                    console.log(false);
                }
                data.append('title',this.docName);
                data.append('keyword',this.countTags);
                data.append('author',this.author);
                data.append('publishTime',time);
                data.append('email',this.email);
                data.append('phone',this.phone);
                // data.append('paperType',)
            },
            //检查
            checkParams(){
                let state = true;
                this.phoneState = false;
                this.emailState = false;
                if(!this.isEmail(this.email)){
                    this.emailState = true;
                    state = false;
                }
                if(!this.isPhone(this.phone)){
                    this.phoneState = true;
                    state = false;
                }

                if(!state){
                    this.$Message.error('请检查字段');
                }

                return state;
            }
            /*
            获取最新投稿
            getNewDocu(){
                this.$http.get('http://39.98.41.126:30007/doc',{
                    params:{
                        pageNum: 1,
                        pageSize: 12,
                    }
                })
                .then(res=>{
                    let data = res.data.data;
                    console.log(res);
                    data.list.forEach((item,index)=>{
                        this.magazines.push({
                            author: item.author,
                            works: `《${item.title}》`,
                            time: item.publishTime,
                        });
                        this.messages.push({
                            notice: `《${item.fromJournal}》 录用证明`,
                            time: item.publishTime,
                        })
                    })
                })
            }
            */
        },
        mounted(){
            // this.getNewDocu();
        }
    }
    
</script>


<style lang="scss" scoped>

@import './OnlineSubmit.scss'


</style>