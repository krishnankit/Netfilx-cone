const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
console.log(tabContentItems);

// Select item after click
function selectItem(e){
  removeBorder();
  removeShow();
  // Add border class to current tab
  this.classList.add('tab-border');

  // Grab the tab-content-element
  console.log(this.id);
  // Add show class
  var tabContentItem = document.querySelector("#"+this.id+"-content");
  tabContentItem.classList.add('show');
}

// Remove borders from all tabs
function removeBorder(){
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

//remove show class from all tab contents
function removeShow() {
	tabContentItems.forEach(item => {item.classList.remove('show');});
}

// Listen to tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));