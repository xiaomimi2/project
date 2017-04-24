$(function(){
    //获取数组展示出学校-科目-年级的老师
    
    //对象池管理li
    var LiFactory 
    //加上click事件增加
    $('.add').on('click',function(ev){
        createLi = function(){
            var li = document.createElement('li')
            return li;
        }
        LiFactory = mycommonEvent.videoFactory(createLi)
        var liDom = LiFactory.create()
        var imgurl = $(this).siblings('img').attr('src')
        var name = $(this).siblings('span').text()
        liDom.innerHTML = '<img src="'+imgurl+'"><span>'+name+'</span><span class="del">删除</span>'
        $(liDom).on('click', function(){
            $(this.remove())
        })
        $('.choosed-teacher').append(liDom)
    })

    $('#invite').one('click',function(){
        if(window.location.pathname === '/invite.html') {
            window.location.href = 'course.html'
        }else{
            window.location.href = 'course.html?live=1'
        }
    })
})