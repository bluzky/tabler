webpackHotUpdate("vendor",{

/***/ "./core.js":
/*!*****************!*\
  !*** ./core.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _scss_bundle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/bundle.scss */ "../scss/bundle.scss");
/* harmony import */ var _scss_bundle_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_bundle_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 *
 */
let hexToRgba = function (hex, opacity) {
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	let rgb = result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;

	return 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + opacity + ')';
};

/**
 *
 */
$(document).ready(function () {
	/** Constant div card */
	const DIV_CARD = 'div.card';

	/** Initialize tooltips */
	$('[data-toggle="tooltip"]').tooltip();

	/** Initialize popovers */
	$('[data-toggle="popover"]').popover({
		html: true
	});

	/** Function for remove card */
	$('[data-toggle="card-remove"]').on('click', function (e) {
		let $card = $(this).closest(DIV_CARD);

		$card.remove();

		e.preventDefault();
		return false;
	});

	/** Function for collapse card */
	$('[data-toggle="card-collapse"]').on('click', function (e) {
		let $card = $(this).closest(DIV_CARD);

		$card.toggleClass('card-collapsed');

		e.preventDefault();
		return false;
	});

	/** Function for fullscreen card */
	$('[data-toggle="card-fullscreen"]').on('click', function (e) {
		let $card = $(this).closest(DIV_CARD);

		$card.toggleClass('card-fullscreen').removeClass('card-collapsed');

		e.preventDefault();
		return false;
	});

	/**  */
	if ($('[data-sparkline]').length) {
		let generateSparkline = function ($elem, data, params) {
			$elem.sparkline(data, {
				type: $elem.attr('data-sparkline-type'),
				height: '100%',
				barColor: params.color,
				lineColor: params.color,
				fillColor: 'transparent',
				spotColor: params.color,
				spotRadius: 0,
				lineWidth: 2,
				highlightColor: hexToRgba(params.color, 0.6),
				highlightLineColor: '#666',
				defaultPixelsPerValue: 5
			});
		};

		$('[data-sparkline]').each(function () {
			let $chart = $(this);

			generateSparkline($chart, JSON.parse($chart.attr('data-sparkline')), {
				color: $chart.attr('data-sparkline-color')
			});
		});
	}

	/**  */
	if ($('.chart-circle').length) {
		$('.chart-circle').each(function () {
			let $this = $(this);

			$this.circleProgress({
				fill: {
					color: tabler.colors[$this.attr('data-color')] || tabler.colors.blue
				},
				size: $this.height(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: '#F4F4F4',
				lineCap: 'round'
			});
		});
	}
});

window.tabler = {
	colors: {
		blue: '#467fcf',
		'blue-darkest': '#0e1929',
		'blue-darker': '#1c3353',
		'blue-dark': '#3866a6',
		'blue-light': '#7ea5dd',
		'blue-lighter': '#c8d9f1',
		'blue-lightest': '#edf2fa',
		azure: '#45aaf2',
		'azure-darkest': '#0e2230',
		'azure-darker': '#1c4461',
		'azure-dark': '#3788c2',
		'azure-light': '#7dc4f6',
		'azure-lighter': '#c7e6fb',
		'azure-lightest': '#ecf7fe',
		indigo: '#6574cd',
		'indigo-darkest': '#141729',
		'indigo-darker': '#282e52',
		'indigo-dark': '#515da4',
		'indigo-light': '#939edc',
		'indigo-lighter': '#d1d5f0',
		'indigo-lightest': '#f0f1fa',
		purple: '#a55eea',
		'purple-darkest': '#21132f',
		'purple-darker': '#42265e',
		'purple-dark': '#844bbb',
		'purple-light': '#c08ef0',
		'purple-lighter': '#e4cff9',
		'purple-lightest': '#f6effd',
		pink: '#f66d9b',
		'pink-darkest': '#31161f',
		'pink-darker': '#622c3e',
		'pink-dark': '#c5577c',
		'pink-light': '#f999b9',
		'pink-lighter': '#fcd3e1',
		'pink-lightest': '#fef0f5',
		red: '#e74c3c',
		'red-darkest': '#2e0f0c',
		'red-darker': '#5c1e18',
		'red-dark': '#b93d30',
		'red-light': '#ee8277',
		'red-lighter': '#f8c9c5',
		'red-lightest': '#fdedec',
		orange: '#fd9644',
		'orange-darkest': '#331e0e',
		'orange-darker': '#653c1b',
		'orange-dark': '#ca7836',
		'orange-light': '#feb67c',
		'orange-lighter': '#fee0c7',
		'orange-lightest': '#fff5ec',
		yellow: '#f1c40f',
		'yellow-darkest': '#302703',
		'yellow-darker': '#604e06',
		'yellow-dark': '#c19d0c',
		'yellow-light': '#f5d657',
		'yellow-lighter': '#fbedb7',
		'yellow-lightest': '#fef9e7',
		lime: '#7bd235',
		'lime-darkest': '#192a0b',
		'lime-darker': '#315415',
		'lime-dark': '#62a82a',
		'lime-light': '#a3e072',
		'lime-lighter': '#d7f2c2',
		'lime-lightest': '#f2fbeb',
		green: '#5eba00',
		'green-darkest': '#132500',
		'green-darker': '#264a00',
		'green-dark': '#4b9500',
		'green-light': '#8ecf4d',
		'green-lighter': '#cfeab3',
		'green-lightest': '#eff8e6',
		teal: '#2bcbba',
		'teal-darkest': '#092925',
		'teal-darker': '#11514a',
		'teal-dark': '#22a295',
		'teal-light': '#6bdbcf',
		'teal-lighter': '#bfefea',
		'teal-lightest': '#eafaf8',
		cyan: '#17a2b8',
		'cyan-darkest': '#052025',
		'cyan-darker': '#09414a',
		'cyan-dark': '#128293',
		'cyan-light': '#5dbecd',
		'cyan-lighter': '#b9e3ea',
		'cyan-lightest': '#e8f6f8',
		gray: '#868e96',
		'gray-darkest': '#1b1c1e',
		'gray-darker': '#36393c',
		'gray-dark': '#6b7278',
		'gray-light': '#aab0b6',
		'gray-lighter': '#dbdde0',
		'gray-lightest': '#f3f4f5',
		'gray-dark': '#343a40',
		'gray-dark-darkest': '#0a0c0d',
		'gray-dark-darker': '#15171a',
		'gray-dark-dark': '#2a2e33',
		'gray-dark-light': '#717579',
		'gray-dark-lighter': '#c2c4c6',
		'gray-dark-lightest': '#ebebec'
	}
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlLmpzIl0sIm5hbWVzIjpbImhleFRvUmdiYSIsImhleCIsIm9wYWNpdHkiLCJyZXN1bHQiLCJleGVjIiwicmdiIiwiciIsInBhcnNlSW50IiwiZyIsImIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIkRJVl9DQVJEIiwidG9vbHRpcCIsInBvcG92ZXIiLCJodG1sIiwib24iLCJlIiwiJGNhcmQiLCJjbG9zZXN0IiwicmVtb3ZlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsInJlbW92ZUNsYXNzIiwibGVuZ3RoIiwiZ2VuZXJhdGVTcGFya2xpbmUiLCIkZWxlbSIsImRhdGEiLCJwYXJhbXMiLCJzcGFya2xpbmUiLCJ0eXBlIiwiYXR0ciIsImhlaWdodCIsImJhckNvbG9yIiwiY29sb3IiLCJsaW5lQ29sb3IiLCJmaWxsQ29sb3IiLCJzcG90Q29sb3IiLCJzcG90UmFkaXVzIiwibGluZVdpZHRoIiwiaGlnaGxpZ2h0Q29sb3IiLCJoaWdobGlnaHRMaW5lQ29sb3IiLCJkZWZhdWx0UGl4ZWxzUGVyVmFsdWUiLCJlYWNoIiwiJGNoYXJ0IiwiSlNPTiIsInBhcnNlIiwiJHRoaXMiLCJjaXJjbGVQcm9ncmVzcyIsImZpbGwiLCJ0YWJsZXIiLCJjb2xvcnMiLCJibHVlIiwic2l6ZSIsInN0YXJ0QW5nbGUiLCJNYXRoIiwiUEkiLCJlbXB0eUZpbGwiLCJsaW5lQ2FwIiwid2luZG93IiwiYXp1cmUiLCJpbmRpZ28iLCJwdXJwbGUiLCJwaW5rIiwicmVkIiwib3JhbmdlIiwieWVsbG93IiwibGltZSIsImdyZWVuIiwidGVhbCIsImN5YW4iLCJncmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0EsSUFBSUEsWUFBWSxVQUFTQyxHQUFULEVBQWNDLE9BQWQsRUFBdUI7QUFDdEMsS0FBSUMsU0FBUyw0Q0FBNENDLElBQTVDLENBQWlESCxHQUFqRCxDQUFiO0FBQ0EsS0FBSUksTUFBTUYsU0FDUDtB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LFNBL0VUO0FBZ0ZQLGlCQUFlLFNBaEZSO0FBaUZQLGVBQWEsU0FqRk47QUFrRlAsZ0JBQWMsU0FsRlA7QUFtRlAsa0JBQWdCLFNBbkZUO0FBb0ZQLG1CQUFpQixTQXBGVjtBQXFGUEMsUUFBTSxTQXJGQztBQXNGUCxrQkFBZ0IsU0F0RlQ7QUF1RlAsaUJBQWUsU0F2RlI7QUF3RlAsZUFBYSxTQXhGTjtBQXlGUCxnQkFBYyxTQXpGUDtBQTBGUCxrQkFBZ0IsU0ExRlQ7QUEyRlAsbUJBQWlCLFNBM0ZWO0FBNEZQLGVBQWEsU0E1Rk47QUE2RlAsdUJBQXFCLFNBN0ZkO0FBOEZQLHNCQUFvQixTQTlGYjtBQStGUCxvQkFBa0IsU0EvRlg7QUFnR1AscUJBQW1CLFNBaEdaO0FBaUdQLHVCQUFxQixTQWpHZDtBQWtHUCx3QkFBc0I7QUFsR2Y7QUFETyxDQUFoQixDIiwiZmlsZSI6InZlbmRvci4wZTM0OWE3NzgxNTgwY2E1ZGQyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL2J1bmRsZS5zY3NzJ1xuLyoqXG4gKlxuICovXG5sZXQgaGV4VG9SZ2JhID0gZnVuY3Rpb24oaGV4LCBvcGFjaXR5KSB7XG5cdGxldCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KVxuXHRsZXQgcmdiID0gcmVzdWx0XG5cdFx0PyB7XG5cdFx0XHRcdHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuXHRcdFx0XHRnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcblx0XHRcdFx0YjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcblx0XHQgIH1cblx0XHQ6IG51bGxcblxuXHRyZXR1cm4gJ3JnYmEoJyArIHJnYi5yICsgJywgJyArIHJnYi5nICsgJywgJyArIHJnYi5iICsgJywgJyArIG9wYWNpdHkgKyAnKSdcbn1cblxuLyoqXG4gKlxuICovXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0LyoqIENvbnN0YW50IGRpdiBjYXJkICovXG5cdGNvbnN0IERJVl9DQVJEID0gJ2Rpdi5jYXJkJ1xuXG5cdC8qKiBJbml0aWFsaXplIHRvb2x0aXBzICovXG5cdCQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKClcblxuXHQvKiogSW5pdGlhbGl6ZSBwb3BvdmVycyAqL1xuXHQkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3Zlcih7XG5cdFx0aHRtbDogdHJ1ZVxuXHR9KVxuXG5cdC8qKiBGdW5jdGlvbiBmb3IgcmVtb3ZlIGNhcmQgKi9cblx0JCgnW2RhdGEtdG9nZ2xlPVwiY2FyZC1yZW1vdmVcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0bGV0ICRjYXJkID0gJCh0aGlzKS5jbG9zZXN0KERJVl9DQVJEKVxuXG5cdFx0JGNhcmQucmVtb3ZlKClcblxuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHJldHVybiBmYWxzZVxuXHR9KVxuXG5cdC8qKiBGdW5jdGlvbiBmb3IgY29sbGFwc2UgY2FyZCAqL1xuXHQkKCdbZGF0YS10b2dnbGU9XCJjYXJkLWNvbGxhcHNlXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGxldCAkY2FyZCA9ICQodGhpcykuY2xvc2VzdChESVZfQ0FSRClcblxuXHRcdCRjYXJkLnRvZ2dsZUNsYXNzKCdjYXJkLWNvbGxhcHNlZCcpXG5cblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRyZXR1cm4gZmFsc2Vcblx0fSlcblxuXHQvKiogRnVuY3Rpb24gZm9yIGZ1bGxzY3JlZW4gY2FyZCAqL1xuXHQkKCdbZGF0YS10b2dnbGU9XCJjYXJkLWZ1bGxzY3JlZW5cIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0bGV0ICRjYXJkID0gJCh0aGlzKS5jbG9zZXN0KERJVl9DQVJEKVxuXG5cdFx0JGNhcmQudG9nZ2xlQ2xhc3MoJ2NhcmQtZnVsbHNjcmVlbicpLnJlbW92ZUNsYXNzKCdjYXJkLWNvbGxhcHNlZCcpXG5cblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRyZXR1cm4gZmFsc2Vcblx0fSlcblxuXHQvKiogICovXG5cdGlmICgkKCdbZGF0YS1zcGFya2xpbmVdJykubGVuZ3RoKSB7XG5cdFx0bGV0IGdlbmVyYXRlU3BhcmtsaW5lID0gZnVuY3Rpb24oJGVsZW0sIGRhdGEsIHBhcmFtcykge1xuXHRcdFx0JGVsZW0uc3BhcmtsaW5lKGRhdGEsIHtcblx0XHRcdFx0dHlwZTogJGVsZW0uYXR0cignZGF0YS1zcGFya2xpbmUtdHlwZScpLFxuXHRcdFx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRcdFx0YmFyQ29sb3I6IHBhcmFtcy5jb2xvcixcblx0XHRcdFx0bGluZUNvbG9yOiBwYXJhbXMuY29sb3IsXG5cdFx0XHRcdGZpbGxDb2xvcjogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdFx0c3BvdENvbG9yOiBwYXJhbXMuY29sb3IsXG5cdFx0XHRcdHNwb3RSYWRpdXM6IDAsXG5cdFx0XHRcdGxpbmVXaWR0aDogMixcblx0XHRcdFx0aGlnaGxpZ2h0Q29sb3I6IGhleFRvUmdiYShwYXJhbXMuY29sb3IsIDAuNiksXG5cdFx0XHRcdGhpZ2hsaWdodExpbmVDb2xvcjogJyM2NjYnLFxuXHRcdFx0XHRkZWZhdWx0UGl4ZWxzUGVyVmFsdWU6IDVcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0JCgnW2RhdGEtc3BhcmtsaW5lXScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgJGNoYXJ0ID0gJCh0aGlzKVxuXG5cdFx0XHRnZW5lcmF0ZVNwYXJrbGluZShcblx0XHRcdFx0JGNoYXJ0LFxuXHRcdFx0XHRKU09OLnBhcnNlKCRjaGFydC5hdHRyKCdkYXRhLXNwYXJrbGluZScpKSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNvbG9yOiAkY2hhcnQuYXR0cignZGF0YS1zcGFya2xpbmUtY29sb3InKVxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0fSlcblx0fVxuXG5cdC8qKiAgKi9cblx0aWYgKCQoJy5jaGFydC1jaXJjbGUnKS5sZW5ndGgpIHtcblx0XHQkKCcuY2hhcnQtY2lyY2xlJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkdGhpcyA9ICQodGhpcylcblxuXHRcdFx0JHRoaXMuY2lyY2xlUHJvZ3Jlc3Moe1xuXHRcdFx0XHRmaWxsOiB7XG5cdFx0XHRcdFx0Y29sb3I6XG5cdFx0XHRcdFx0XHR0YWJsZXIuY29sb3JzWyR0aGlzLmF0dHIoJ2RhdGEtY29sb3InKV0gfHxcblx0XHRcdFx0XHRcdHRhYmxlci5jb2xvcnMuYmx1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzaXplOiAkdGhpcy5oZWlnaHQoKSxcblx0XHRcdFx0c3RhcnRBbmdsZTogLU1hdGguUEkgLyA0ICogMixcblx0XHRcdFx0ZW1wdHlGaWxsOiAnI0Y0RjRGNCcsXG5cdFx0XHRcdGxpbmVDYXA6ICdyb3VuZCdcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxufSlcblxud2luZG93LnRhYmxlciA9IHtcblx0Y29sb3JzOiB7XG5cdFx0Ymx1ZTogJyM0NjdmY2YnLFxuXHRcdCdibHVlLWRhcmtlc3QnOiAnIzBlMTkyOScsXG5cdFx0J2JsdWUtZGFya2VyJzogJyMxYzMzNTMnLFxuXHRcdCdibHVlLWRhcmsnOiAnIzM4NjZhNicsXG5cdFx0J2JsdWUtbGlnaHQnOiAnIzdlYTVkZCcsXG5cdFx0J2JsdWUtbGlnaHRlcic6ICcjYzhkOWYxJyxcblx0XHQnYmx1ZS1saWdodGVzdCc6ICcjZWRmMmZhJyxcblx0XHRhenVyZTogJyM0NWFhZjInLFxuXHRcdCdhenVyZS1kYXJrZXN0JzogJyMwZTIyMzAnLFxuXHRcdCdhenVyZS1kYXJrZXInOiAnIzFjNDQ2MScsXG5cdFx0J2F6dXJlLWRhcmsnOiAnIzM3ODhjMicsXG5cdFx0J2F6dXJlLWxpZ2h0JzogJyM3ZGM0ZjYnLFxuXHRcdCdhenVyZS1saWdodGVyJzogJyNjN2U2ZmInLFxuXHRcdCdhenVyZS1saWdodGVzdCc6ICcjZWNmN2ZlJyxcblx0XHRpbmRpZ286ICcjNjU3NGNkJyxcblx0XHQnaW5kaWdvLWRhcmtlc3QnOiAnIzE0MTcyOScsXG5cdFx0J2luZGlnby1kYXJrZXInOiAnIzI4MmU1MicsXG5cdFx0J2luZGlnby1kYXJrJzogJyM1MTVkYTQnLFxuXHRcdCdpbmRpZ28tbGlnaHQnOiAnIzkzOWVkYycsXG5cdFx0J2luZGlnby1saWdodGVyJzogJyNkMWQ1ZjAnLFxuXHRcdCdpbmRpZ28tbGlnaHRlc3QnOiAnI2YwZjFmYScsXG5cdFx0cHVycGxlOiAnI2E1NWVlYScsXG5cdFx0J3B1cnBsZS1kYXJrZXN0JzogJyMyMTEzMmYnLFxuXHRcdCdwdXJwbGUtZGFya2VyJzogJyM0MjI2NWUnLFxuXHRcdCdwdXJwbGUtZGFyayc6ICcjODQ0YmJiJyxcblx0XHQncHVycGxlLWxpZ2h0JzogJyNjMDhlZjAnLFxuXHRcdCdwdXJwbGUtbGlnaHRlcic6ICcjZTRjZmY5Jyxcblx0XHQncHVycGxlLWxpZ2h0ZXN0JzogJyNmNmVmZmQnLFxuXHRcdHBpbms6ICcjZjY2ZDliJyxcblx0XHQncGluay1kYXJrZXN0JzogJyMzMTE2MWYnLFxuXHRcdCdwaW5rLWRhcmtlcic6ICcjNjIyYzNlJyxcblx0XHQncGluay1kYXJrJzogJyNjNTU3N2MnLFxuXHRcdCdwaW5rLWxpZ2h0JzogJyNmOTk5YjknLFxuXHRcdCdwaW5rLWxpZ2h0ZXInOiAnI2ZjZDNlMScsXG5cdFx0J3BpbmstbGlnaHRlc3QnOiAnI2ZlZjBmNScsXG5cdFx0cmVkOiAnI2U3NGMzYycsXG5cdFx0J3JlZC1kYXJrZXN0JzogJyMyZTBmMGMnLFxuXHRcdCdyZWQtZGFya2VyJzogJyM1YzFlMTgnLFxuXHRcdCdyZWQtZGFyayc6ICcjYjkzZDMwJyxcblx0XHQncmVkLWxpZ2h0JzogJyNlZTgyNzcnLFxuXHRcdCdyZWQtbGlnaHRlcic6ICcjZjhjOWM1Jyxcblx0XHQncmVkLWxpZ2h0ZXN0JzogJyNmZGVkZWMnLFxuXHRcdG9yYW5nZTogJyNmZDk2NDQnLFxuXHRcdCdvcmFuZ2UtZGFya2VzdCc6ICcjMzMxZTBlJyxcblx0XHQnb3JhbmdlLWRhcmtlcic6ICcjNjUzYzFiJyxcblx0XHQnb3JhbmdlLWRhcmsnOiAnI2NhNzgzNicsXG5cdFx0J29yYW5nZS1saWdodCc6ICcjZmViNjdjJyxcblx0XHQnb3JhbmdlLWxpZ2h0ZXInOiAnI2ZlZTBjNycsXG5cdFx0J29yYW5nZS1saWdodGVzdCc6ICcjZmZmNWVjJyxcblx0XHR5ZWxsb3c6ICcjZjFjNDBmJyxcblx0XHQneWVsbG93LWRhcmtlc3QnOiAnIzMwMjcwMycsXG5cdFx0J3llbGxvdy1kYXJrZXInOiAnIzYwNGUwNicsXG5cdFx0J3llbGxvdy1kYXJrJzogJyNjMTlkMGMnLFxuXHRcdCd5ZWxsb3ctbGlnaHQnOiAnI2Y1ZDY1NycsXG5cdFx0J3llbGxvdy1saWdodGVyJzogJyNmYmVkYjcnLFxuXHRcdCd5ZWxsb3ctbGlnaHRlc3QnOiAnI2ZlZjllNycsXG5cdFx0bGltZTogJyM3YmQyMzUnLFxuXHRcdCdsaW1lLWRhcmtlc3QnOiAnIzE5MmEwYicsXG5cdFx0J2xpbWUtZGFya2VyJzogJyMzMTU0MTUnLFxuXHRcdCdsaW1lLWRhcmsnOiAnIzYyYTgyYScsXG5cdFx0J2xpbWUtbGlnaHQnOiAnI2EzZTA3MicsXG5cdFx0J2xpbWUtbGlnaHRlcic6ICcjZDdmMmMyJyxcblx0XHQnbGltZS1saWdodGVzdCc6ICcjZjJmYmViJyxcblx0XHRncmVlbjogJyM1ZWJhMDAnLFxuXHRcdCdncmVlbi1kYXJrZXN0JzogJyMxMzI1MDAnLFxuXHRcdCdncmVlbi1kYXJrZXInOiAnIzI2NGEwMCcsXG5cdFx0J2dyZWVuLWRhcmsnOiAnIzRiOTUwMCcsXG5cdFx0J2dyZWVuLWxpZ2h0JzogJyM4ZWNmNGQnLFxuXHRcdCdncmVlbi1saWdodGVyJzogJyNjZmVhYjMnLFxuXHRcdCdncmVlbi1saWdodGVzdCc6ICcjZWZmOGU2Jyxcblx0XHR0ZWFsOiAnIzJiY2JiYScsXG5cdFx0J3RlYWwtZGFya2VzdCc6ICcjMDkyOTI1Jyxcblx0XHQndGVhbC1kYXJrZXInOiAnIzExNTE0YScsXG5cdFx0J3RlYWwtZGFyayc6ICcjMjJhMjk1Jyxcblx0XHQndGVhbC1saWdodCc6ICcjNmJkYmNmJyxcblx0XHQndGVhbC1saWdodGVyJzogJyNiZmVmZWEnLFxuXHRcdCd0ZWFsLWxpZ2h0ZXN0JzogJyNlYWZhZjgnLFxuXHRcdGN5YW46ICcjMTdhMmI4Jyxcblx0XHQnY3lhbi1kYXJrZXN0JzogJyMwNTIwMjUnLFxuXHRcdCdjeWFuLWRhcmtlcic6ICcjMDk0MTRhJyxcblx0XHQnY3lhbi1kYXJrJzogJyMxMjgyOTMnLFxuXHRcdCdjeWFuLWxpZ2h0JzogJyM1ZGJlY2QnLFxuXHRcdCdjeWFuLWxpZ2h0ZXInOiAnI2I5ZTNlYScsXG5cdFx0J2N5YW4tbGlnaHRlc3QnOiAnI2U4ZjZmOCcsXG5cdFx0Z3JheTogJyM4NjhlOTYnLFxuXHRcdCdncmF5LWRhcmtlc3QnOiAnIzFiMWMxZScsXG5cdFx0J2dyYXktZGFya2VyJzogJyMzNjM5M2MnLFxuXHRcdCdncmF5LWRhcmsnOiAnIzZiNzI3OCcsXG5cdFx0J2dyYXktbGlnaHQnOiAnI2FhYjBiNicsXG5cdFx0J2dyYXktbGlnaHRlcic6ICcjZGJkZGUwJyxcblx0XHQnZ3JheS1saWdodGVzdCc6ICcjZjNmNGY1Jyxcblx0XHQnZ3JheS1kYXJrJzogJyMzNDNhNDAnLFxuXHRcdCdncmF5LWRhcmstZGFya2VzdCc6ICcjMGEwYzBkJyxcblx0XHQnZ3JheS1kYXJrLWRhcmtlcic6ICcjMTUxNzFhJyxcblx0XHQnZ3JheS1kYXJrLWRhcmsnOiAnIzJhMmUzMycsXG5cdFx0J2dyYXktZGFyay1saWdodCc6ICcjNzE3NTc5Jyxcblx0XHQnZ3JheS1kYXJrLWxpZ2h0ZXInOiAnI2MyYzRjNicsXG5cdFx0J2dyYXktZGFyay1saWdodGVzdCc6ICcjZWJlYmVjJ1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9