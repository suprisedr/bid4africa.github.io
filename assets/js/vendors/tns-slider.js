// Tiny Slider js

// Modal product
var modalSlider;
if (document.querySelectorAll('.productModal').length > 0) {
	// Initialize modal slider when modal is shown
	var quickViewModal = document.getElementById('quickViewModal');
	if (quickViewModal) {
		quickViewModal.addEventListener('shown.bs.modal', function () {
			if (modalSlider) {
				modalSlider.destroy();
			}
			modalSlider = tns({
				container: '#productModal',
				items: 1,
				startIndex: 0,
				navContainer: '#productModalThumbnails',
				navAsThumbnails: true,
				autoplay: false,
				autoplayTimeout: 1500,
				swipeAngle: false,
				speed: 1500,
				controls: false,
				autoplayButtonOutput: false,
				loop: false,
			});
		});
	}
}

// Slider for product
if (document.querySelectorAll('.product').length > 1) {
	var productSlider = tns({
		container: '#product',
		items: 1,
		startIndex: 0,
		navContainer: '#productThumbnails',
		navAsThumbnails: true,
		autoplay: false,
		autoplayTimeout: 1500,
		swipeAngle: false,
		speed: 1500,
		controls: false,
		autoplayButtonOutput: false,
	});
}
