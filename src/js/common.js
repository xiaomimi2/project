var mycommonEvent = (function(){
    //这里只支持a标签，可以优化一下去data-herf
    function Tab(dom,fn) {
        this.tab = dom;
        this.id = this.tab.attr('href')
        if(fn && typeof fn === 'function'){
            this.fn = fn
        }
        this.switch()
    }
    Tab.prototype.switch = function(){
        var that = this
        var id = this.id
        var render
        this.tab.on('click',function(ev){
            ev.preventDefault()
            $(this).addClass('active')
                    .siblings()
                    .removeClass('active');
            $(id).siblings()
                    .hide()
                    .end()
                    .show();
            if(that.fn){
                render = getSingle(that.fn)
                render()
            }
        })
        
    }
    
    function getSingle (fn) {
        var result 
        return function(){
            if(!result) {
                result = fn.apply(this,arguments)
            }
            return result;
        }
    }

    /**
     * [saveSearchResult description] 保存搜索结果
     * @param  {[type]} school  [description] 学校 string
     * @param  {[type]} subject [description] 科目 string
     * @param  {[type]} grage   [description] 年纪 string
     * @param  {[type]} result  [description] 数组 array
     * @return {[type]}         [description]
     */
    function saveSearchResult(school, subject, grage, result) {
        var data = {};
        return function() {
            if(!data[school]) {
                data[school] = {}
            }
            if(!data[school][subject]){
                data[school][subject] = {}
            }
            if(!data[school][subject][grade]) {
                data[school][subject][grade] = result;
            }

        }
    }

    /**
     * 验证对象
     */
     function Validator(dom) {
        this.cache = []
     }
     Validator.prototype.add = function(dom,rule,errMsg){
        var ary = rule.split(':')
        this.cache.push(function(){
            var strategy = ary.shift()
            ary.unshift(dom.value)
            ary.push(errMsg)
            return validators[strategy].apply(dom,ary)
        })
     }

     Validator.prototype.start = function(){
        for(var i = 0; i < this.cache.length; i++) {
            var msg = this.cache[i]()
            if(msg) {
                return msg
            }
        }
     }

     validators = {
        isNotEmpty: function(value,errMsg) {
            if (value === '')  return errMsg ;
        }
     }

    /**
     * 对象池 
     */
    var videoFactory = function (createDom) {
        var videoPool = [];
        return {
            create: function() {
                var obj;
                if (videoPool.length === 0) {
                    obj = createDom.apply(this,arguments)
                    return obj
                } else {
                    obj = videoPool.shift()
                }
            },
            recover: function (obj) {
                videoPool.push(obj)
            }
        }
    }
    //将video显示的实现格式化为00:00:00的格式
    var formatVideoTime = function (time) {
        var left = parseInt(time)
        var hour = '00'
        var minutes = '00'
        

        if(parseInt(time) > 3600) {
            hour = behaveTowNumber(Math.floor(time / 3600))
            left = time % 3600
        }
        if(left > 60) {
            minutes = behaveTowNumber(Math.floor(left / 60))
        }
        if(left >= 0) {
            var seconds = behaveTowNumber(left % 60)
        }
        return hour+':'+minutes+':'+seconds
    }
    function behaveTowNumber(num) {
        if(num < 10){
            return '0' + num 
        }
        return num + ''
    }
    //当前时间日期
    function formdate () {
        var date = new Date()
        var year = date.getFullYear()
        var month = behaveTowNumber(date.getMonth() + 1)
        var day = behaveTowNumber(date.getDate())
        var hour = behaveTowNumber(date.getHours())
        var minutes = behaveTowNumber(date.getMinutes())
        return year + '-' + month + '-' + day + '&nbsp;' + hour + ':' + minutes 
    }

    //瀑布流函数，这个适用于offsetparent是html的元素和window比较,然后比较元素的高度不用固定
    function waterfallOfNotFIxedHeight(dom) {
        var $dom = $(dom)
        var wScroll = $(window).scrollTop()
        var wClient = $(window).height()
        var dHeight = $dom.height()
        var doffsetTop = $dom.offset().top
        if(dHeight +  doffsetTop < wScroll + wClient + 500){
            return true
        }else {
            return false
        } 
    }

    function Test(videourl,videouser,videopwd,roomid,realname) {
        var result = "ystpy://" + videourl+ "," + videouser+ "," +videopwd+ "," +roomid+"," +realname;
        location.href = result;
    }

    return {
        Tab: Tab,
        getSingle: getSingle,
        saveSearchResult: saveSearchResult,
        videoFactory: videoFactory,
        Validator: Validator,
        formatVideoTime:formatVideoTime,
        waterfallOfNotFIxedHeight:waterfallOfNotFIxedHeight,
        formdate:formdate,
        openNet:Test
    }
})()

//每页都有搜索框的话。这个后期要加到每页去
$(function(){
    //checkLogined
    if(localStorage.getItem('USER')) {
        var user = JSON.parse(localStorage.getItem('USER'))
        $('.loginer').find('img').attr('src',user.img)
        $('.loginer').find('a:eq(1)').text(user.realname)
    }else {
        window.location.href = "enter.html"
    }
})
 
// const INVITED_PEOPLE
// const COMMENTS
// const NOTES
//假数据笔记
var user
if(localStorage.getItem('USER')){
    user = JSON.parse(localStorage.getItem('USER'))
}
// var dataComments = [{
//     name:'李老师',
//     content:'这一部分讲的很好！',
//     videotime:2,
//     date: '2017-4-21&nbsp;17:42:52',
//     img:'image/user1.jpg'
// },
// {
//     name:'张三',
//     content:'这一部分讲的很好！这一部分讲的很好！',
//     videotime:3,
//     date: '2017-04-24 161914',
//     img:'image/user1.jpg'
// },
// {
//     name:'张三',
//     content:'这一部分讲的很好！这一部分讲的很好！这一部分讲的很好！',
//     videotime:3,
//     date: '20170424161918',
//     img:'image/user1.jpg'
// },
// {
//     name:'李四',
//     content:'这一部分讲的很好！这一部分讲的很好！',
//     videotime:3,
//     date: '2017-04-24 161914',
//     img:'image/user1.jpg'
// },
//  {
//     name:'小吴',
//     content:'这个课程给我了很多帮助多谢老师的教导',
//     videotime:16,
//     date: '2017-4-7&nbsp;15:30',
//     img:'image/user1.jpg'
// },
// {
//     name:'小红',
//     content:'这一点讲得非常的到位，可以从中学到很多。来得及发了房间辣会计分录看得开了罚款了房间打开',
//     videotime:11,
//     date: '2017-4-3&nbsp;15:30',
//     img:'image/user2.jpg'
// },
// {
//     name:'小郭',
//     content:'既返垃圾分类会计分录卡死机离开健康路附近大户等方式里地福建省地附近的司法急急急',
//     videotime:1,
//     date: '2017-3-3&nbsp;15:30',
//     img:'image/user4.jpg'
// },
// {
//     name:'李四',
//     content:'老师的声音很好听，哈哈哈',
//     videotime:15,
//     date: '2017-4-8&nbsp;16:30',
//     img:'image/user2.jpg'
// },
//  {
//     name:'王五',
//     content:'这个课程给我了很多帮助多谢老师的教导',
//     videotime:11,
//     date: '2017-4-7&nbsp;15:30',
//     img:'image/user3.jpg'
// },
// {
//     name:'小红',
//     content:'这一点讲得非常的到位，可以从中学到很多。来得及发了房间辣会计分录看得开了罚款了房间打开',
//     videotime:20,
//     date: '2017-4-3&nbsp;15:30',
//     img:'image/user2.jpg'
// },
// {
//     name:'小郭',
//     content:'既返垃圾分类会计分录卡死机离开健康路附近大户等方式里地福建省地附近的司法急急急',
//     videotime:22,
//     date: '2017-3-3&nbsp;15:30',
//     img:'image/user4.jpg'
// }

// ]


var dataComments = JSON.parse(localStorage.getItem('dataComments'))
var dataNotes = JSON.parse(localStorage.getItem('dataNotes'))
