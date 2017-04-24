var mycommonEvent = (function(){
	//这里只支持a标签，可以优化一下去data-herf
	function Tab(dom) {
		this.tab = dom;
		this.id = this.tab.attr('href')
		this.switch()
	}
	Tab.prototype.switch = function(){
		var id = this.id
		this.tab.on('click',function(ev){
			ev.preventDefault()
			$(this).addClass('active')
					.siblings()
					.removeClass('active');
			$(id).show()
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

	return {
		Tab: Tab,
		getSingle: getSingle,
		saveSearchResult: saveSearchResult,
		videoFactory: videoFactory,
		Validator: Validator
	}
})()
 $('.searchBar .icon-sousuo-sousuo').on('click', function(){
            window.location.href="search.html";
  })