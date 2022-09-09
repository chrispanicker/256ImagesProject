let categories = ["music", "skate", "film", "shoes", "clothing", "tools", "games", "art", "web", "type", "cars", "tech"];
let type = ["album", "photo", "poster", "anime", "sfx", "3d", "animation", "digital"];
let color = ["black","gray","white","earth","pink","red","orange","yellow","green","blue","purple"];
let theme = ["cyberpunk", "people", "city", "existentialism", "buttons", "space", "outside", "indoors", "making", "monochrome", "vibrant"];

function reset(){
	let gallery = document.getElementById("gallery");
	gallery.innerHTML = ""
}

function populateCategory(x){
	let gallery = document.getElementById("gallery")
	gallery.innerHTML = ""
	for (i=0; i<allPics.length; i++){
		console.log(i)
		let check = allPics[i].category.includes(categories[x])

		if (check===true){
			console.log("Success, we have some " + categories[x] + " pics!" );
			let parent = document.createElement('div');
			let image = document.createElement("img");
			let imageCaption = allPics[i].caption;
			let caption = document.createElement("p");
			image.src = allPics[i].src; 
			caption.innerText = imageCaption;
			parent.classList.add("galleryDiv")
			parent.append(image, caption);
			gallery.append(parent);
		}else{
			console.log("Not an example of "+categories[x] + " pics...")
		}
	}
}

function populateType(x){
	let gallery = document.getElementById("gallery")
	gallery.innerHTML = ""
	for (i=0; i<allPics.length; i++){
		console.log(i)
		let check = allPics[i].type.includes(type[x])

		if (check===true){
			console.log("Success, we have some " +type[x] +" pics!" );
			let parent = document.createElement('div');
			let image = document.createElement("img");
			let imageCaption = allPics[i].caption;
			let caption = document.createElement("p");
			image.src = allPics[i].src; 
			caption.innerText = imageCaption;
			parent.classList.add("galleryDiv")
			parent.append(image, caption);
			gallery.append(parent);
		}else{
			console.log("Not an example of "+type[x]+ " pics...")
		}
	}
}

function populateColor(x){
	let gallery = document.getElementById("gallery")
	gallery.innerHTML = ""
	for (i=0; i<allPics.length; i++){
		console.log(i)
		let check = allPics[i].color.includes(color[x])

		if (check===true){
			console.log("Success, we have some " +color[x]+ " pics!" );
			let parent = document.createElement('div');
			let image = document.createElement("img");
			let imageCaption = allPics[i].caption;
			let caption = document.createElement("p");
			image.src = allPics[i].src; 
			caption.innerText = imageCaption;
			parent.classList.add("galleryDiv")
			parent.append(image, caption);
			gallery.append(parent);
		}else{
			console.log("Not an example of "+color[x]+ " pics...")
		}
	}
}

function populateTheme(x){
	let gallery = document.getElementById("gallery")
	gallery.innerHTML = ""
	for (i=0; i<allPics.length; i++){
		console.log(i)
		let check = allPics[i].theme.includes(theme[x])

		if (check===true){
			console.log("Success, we have some " +theme[x]+ " pics!" );
			let parent = document.createElement('div');
			let image = document.createElement("img");
			let imageCaption = allPics[i].caption;
			let caption = document.createElement("p");
			image.src = allPics[i].src; 
			caption.innerText = imageCaption;
			parent.classList.add("galleryDiv")
			parent.append(image, caption);
			gallery.append(parent);
		}else{
			console.log("Not an example of "+theme[x]+ " pics...")
		}
	}
}