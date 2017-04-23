
function Tab(dom) {
	this.tab = dom;
	this.id = this.tab.attr('herf')
}
Tab.prototype.switch = function(){
	this.tab.on('click',function(){
		$(this.id).show()
				.siblings()
				.hide();
	})
	
}


function getSingle (fn) {
	var result;
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
 * [createSearchUl description] 搜索结果ul内容的清理
 * @return {[type]} [description]
 */
function createSearchUl (dom) {
	dom.innerHTML = '';

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