$(function(){
    //获取数组展示出学校-科目-年级的老师
    
    //对象池管理li
    var LiFactory 
    //加上click事件增加人选
    $('.add').on('click',function(ev){
        createLi = function(){
            var li = document.createElement('li')
            return li;
        }
        //创建li对象
        LiFactory = mycommonEvent.videoFactory(createLi)
        var liDom = LiFactory.create()
        var imgurl = $(this).siblings('img').attr('src')
        var name = $(this).siblings('.name').text()
        console.log(name)
        localStore.save(liDom,imgurl,name)
        //绑定删除人选
        liDom.innerHTML = '<img src="'+imgurl+'"><span>'+name+'</span><span class="del">删除</span>'
        $(liDom).on('click', function(){
            $(this.remove());
            LiFactory.recover(this)
            //这里用名字做标识符，后期需要改正！！！！！！！！！！
            console.log($(this).find('span:eq(0)').text())
            localStore.remove($(this).find('span:eq(0)').text())
        })
        $('.choosed-teacher').append(liDom)
    })

    $('#invite').on('click',function(){
        if(window.location.pathname === '/invite.html') {
            saveTolocalStorage('INVITED_PEOPLE',localStore.invites())
            window.location.href = 'myCourse.html';
        }else{
            saveTolocalStorage('INVITED_PEOPLE',localStore.invites())
            window.location.href = 'course.html?live=1'
        }
    })

    function saveTolocalStorage(name, data){
        if(typeof data === 'object') {
            data = JSON.stringify(data)
        }
        if(typeof name !== 'string') {
            name = name + ''
        }
        localStorage.removeItem(name)
        localStorage.setItem(name ,data)
    }
    

    //这里暂且用名字作为唯一标识符。实际上应该会有一个userid！！！！invites只可读取，不可外边设置
    var localStore = (function  () {
        var invites = {}
        function save(dom,imgurl,name) {
            if(!invites[name]) {
                invites[name] = {}
                invites[name].img = imgurl
                invites[name].dom = dom
            }
        }
        function remove(name)  {
            if(!invites[name]) {
                return false 
            }
            delete invites[name]
        }
        //这里我已经设置的默认的二级层级，所以直接两级递归
        function getInvites() {
           var obj = {}
           for(var i in invites) {
                obj[i] = {}
                for(var j in invites[i]) {
                    obj[i][j] =  invites[i][j]
                }
           }
           return obj;
        }
        return {
            save: save,
            remove: remove,
            invites:getInvites
        }

    })()

})