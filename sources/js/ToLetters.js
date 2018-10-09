class ToLetters {
	constructor(opts = {}) {
		this.selector = [...document.querySelectorAll(opts.selector)];
		this.init();
	}

	init(){
		
		for(let item of this.selector){
		 	let content = [...item.innerHTML];
		 	let markup = `${content.map((a)=> `<span>${a}</span>`).join('')}`;
		 	item.innerHTML = markup;
		}
	}
}

export default ToLetters;