;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shanchu" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M414.9711 800.7861c21.951 0 39.7457-17.7929 39.7457-39.7441v-476.92664373554726c0-21.9481-17.7937-39.7441-39.7457-39.7441-21.949 0-39.7457 17.7949-39.7457 39.7441v476.92664373554726C375.2254 782.9931 393.022 800.7861 414.9711 800.7861zM911.7911 125.1402H573.9529659136789V85.39610144322148c0-21.9501-17.7937-39.7441-39.7457-39.7441h-39.74572172098545c-21.949 0-39.7457 17.7929-39.7457 39.7441v39.744053531705504H116.87966453335677c-21.951 0-39.7457 17.7929-39.7457 39.7441 0 21.9501 17.7937 39.7441 39.7457 39.7441h59.61808289927606V840.530120578248c0 43.9012 35.5904 79.4881 79.4914 79.4881h516.6923836440023c43.9031 0 79.4914-35.5869 79.4914-79.4881V204.628262038338h59.61808289927606c21.951 0 39.7457-17.7929 39.7457-39.7441C951.5358 142.9331 933.7421 125.1402 911.7911 125.1402zM772.6816 800.7861c0 21.9501-17.7937 39.7441-39.7457 39.7441H295.7349125955892c-21.949 0-39.7457-17.7929-39.7457-39.7441V204.628262038338h516.6923836440023V800.7860670465424zM613.6987 800.7861c21.951 0 39.7457-17.7929 39.7457-39.7441v-476.92664373554726c0-21.9481-17.7937-39.7441-39.7457-39.7441-21.951 0-39.7457 17.7949-39.7457 39.7441v476.92664373554726C573.953 782.9931 591.7476 800.7861 613.6987 800.7861z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiazai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M495.897106 752.797251c0.645733 0.937348 1.371286 1.836835 2.202245 2.669806 0.831982 0.829901 1.727412 1.551332 2.660705 2.194992 0.096195 0.065492 0.184203 0.140193 0.279374 0.203638 0.083915 0.058328 0.173969 0.104377 0.25993 0.157589 3.006597 1.956561 6.588315 3.103688 10.441221 3.103688 3.855976 0 7.437694-1.147126 10.441221-3.103688 0.085961-0.054235 0.176016-0.102331 0.261977-0.157589 0.096195-0.064468 0.186249-0.138146 0.279374-0.203638 0.933293-0.64366 1.828723-1.36509 2.660705-2.194992 0.833005-0.832971 1.558559-1.732457 2.204292-2.671852l304.705998-304.71091c7.400854-7.383154 7.400854-19.394722 0-26.797319-7.400854-7.421017-19.413937-7.421017-26.814791 0L530.931429 695.823656l0-529.530258c0-10.605545-8.582821-19.188015-19.187777-19.188015s-19.189824 8.582469-19.189824 19.188015l0 529.530258L218.005898 421.286975c-7.401877-7.421017-19.414961-7.421017-26.815814 0-7.401877 7.399527-7.401877 19.414165 0 26.797319L495.897106 752.797251zM876.332912 837.879022 147.152344 837.879022c-10.60598 0-19.188801 8.582469-19.188801 19.189038 0 10.587126 8.582821 19.186991 19.188801 19.186991l729.180568 0c10.58756 0 19.189824-8.599865 19.189824-19.186991C895.522736 846.461491 886.920472 837.879022 876.332912 837.879022z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontedit" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M800 960 224 960c-52.928 0-96-43.072-96-96L128 224c0-52.928 43.072-96 96-96l448 0c17.696 0 32 14.336 32 32s-14.304 32-32 32L224 192C206.368 192 192 206.368 192 224l0 640c0 17.664 14.368 32 32 32l576 0c17.664 0 32-14.336 32-32L832 352c0-17.664 14.304-32 32-32s32 14.336 32 32l0 512C896 916.928 852.928 960 800 960zM612 448c-8.192 0-16.384-3.136-22.624-9.376-12.512-12.512-12.512-32.736 0-45.248l318.016-318.016c12.512-12.512 32.736-12.512 45.248 0s12.512 32.736 0 45.248l-318.016 318.016C628.384 444.896 620.192 448 612 448zM480 448 288 448c-17.664 0-32-14.336-32-32s14.336-32 32-32l192 0c17.664 0 32 14.336 32 32S497.664 448 480 448zM672 640 288 640c-17.664 0-32-14.304-32-32s14.336-32 32-32l384 0c17.696 0 32 14.304 32 32S689.696 640 672 640z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bianji-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M0 1024 0 0l654.222222 0 0 56.888889L56.888889 56.888889l0 910.222222 910.222222 0L967.111111 369.777778l56.888889 0 0 654.222222L0 1024zM947.569778 197.091556 826.88 76.401778l40.220444-40.220444c18.944-18.972444 55.239111-25.287111 100.551111 20.110222 45.312 45.397333 39.708444 80.981333 20.110222 100.579556L947.569778 197.091556zM344.177778 559.104l120.689778 120.689778-181.020444 60.330667L344.177778 559.104zM907.349333 237.312 505.088 639.573333l-120.689778-120.689778L786.659556 116.622222 907.349333 237.312z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-triangle-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M166.692 234.795h692.46l-343.068 593.65z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M844.837402 185.961776 179.163815 185.961776C139.038934 185.961776 106.517212 218.488363 106.517212 258.607162l0 508.542028c0 40.123665 32.521721 72.650251 72.646602 72.650251l665.673587 0c40.123665 0 72.645386-32.526587 72.645386-72.650251L917.482788 258.607162C917.482788 218.488363 884.961066 185.961776 844.837402 185.961776L844.837402 185.961776zM356.454511 718.16835 356.454511 307.592868l355.572685 205.279227L356.454511 718.16835 356.454511 718.16835zM390.46378 688.331027"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangchuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M956.146717 622.420791c-1.273137-23.396137-20.23628-42.102455-43.948003-42.102455s-42.674067 18.706317-43.948203 42.102455l-0.466684 0 0 194.499529c0 23.861822-16.108079 43.290649-35.913451 43.290649L189.353602 860.210969c-19.799976 0-35.916649-19.428827-35.916649-43.290649l0-194.499529-0.468682 0c-1.26914-23.396137-20.233682-42.102455-43.945605-42.102455-23.706927 0-42.676865 18.706317-43.945605 42.102455l-0.469282 0 0 194.499529c0 72.870394 55.951865 132.120023 124.745622 132.120023l642.511777 0c68.798155 0 124.748221-59.254625 124.748221-132.120023l0-194.499529L956.146717 622.420791 956.146717 622.420791zM524.729417 71.000054c-3.521612-4.107215-8.694105-6.499593-14.118428-6.499593-5.431318 0-10.596815 2.392378-14.116829 6.499593L246.23044 363.797737c-4.7198 5.51626-5.788076 13.282395-2.75813 19.849942 3.033943 6.609918 9.613482 10.817666 16.875558 10.817666l141.850425 0 0 376.390407c0 20.542072 16.639718 37.162604 37.162604 37.162604l142.496587 0c20.527083 0 37.169799-16.620731 37.169799-37.162604L619.027284 394.465344l141.842431 0c7.259078 0 13.841615-4.207547 16.876558-10.817666 3.030945-6.567547 1.960671-14.333682-2.761128-19.849942L524.729417 71.000054 524.729417 71.000054z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-huanyipi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M704 320l192 0L896 128l-64 0 0 78.976C768 106.56 638.592 64 499.008 64 252.032 64 57.472 265.024 57.472 512s204.224 448 451.264 448c147.264 0 279.36-71.744 361.088-181.824l-51.456-36.416C748.288 835.264 637.376 896 511.616 896c-212.032 0-383.808-171.968-383.808-384S299.968 124.48 512 126.976C681.152 129.024 727.616 192 798.016 256L704 256 704 320zM857.984 272.384l0 1.6-2.432 0L857.984 272.384z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-word1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M960.984615 0H63.015385C27.569231 0 0 27.569231 0 63.015385v897.96923c0 35.446154 27.569231 63.015385 63.015385 63.015385h894.030769c35.446154 0 63.015385-27.569231 63.015384-63.015385V63.015385C1024 27.569231 996.430769 0 960.984615 0z m-192.984615 685.292308c0 11.815385-11.815385 23.630769-23.630769 23.630769-7.876923 0-43.323077-11.815385-47.261539-19.692308L512 480.492308l-181.169231 208.738461c-7.876923 7.876923-39.384615 19.692308-47.261538 19.692308-15.753846 0-27.569231-11.815385-27.569231-23.630769V338.707692c0-15.753846 11.815385-23.630769 27.569231-23.630769s27.569231 11.815385 27.569231 23.630769v303.261539l181.16923-208.738462c3.938462-7.876923 15.753846-7.876923 23.63077-7.876923 7.876923 0 15.753846 0 23.630769 7.876923l181.169231 208.738462V338.707692c0-11.815385 11.815385-23.630769 27.56923-23.630769 15.753846 0 23.630769 11.815385 23.63077 23.630769v346.584616h-3.938462z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M716.705 213.684c-138.888-138.934-364.124-138.934-503.059 0s-138.934 364.17 0 503.059c138.914 138.924 364.14 138.924 503.059 0.015v-0.015c138.924-138.904 138.924-364.13 0.015-503.044 0-0.005-0.015-0.005-0.015-0.015zM136.238 794.151c-181.64-181.69-181.64-476.225 0-657.921 181.68-181.64 476.2-181.64 657.921 0 181.65 181.696 181.65 476.23 0 657.921-181.721 181.64-476.235 181.64-657.92 0z m869.113 211.238c-24.836 24.801-65.069 24.801-89.885 0l-89.84-89.885c-24.806-24.822-24.806-65.039 0-89.845 24.801-24.8 65.018-24.8 89.84 0l89.885 89.845c24.863 24.862 24.863 65.069 0 89.885z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)