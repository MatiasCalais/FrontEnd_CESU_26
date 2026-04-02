const produtos ={
	"123": {"nome": "lepo","preco":9.90},
	"456": {"nome": "vapo","preco":39.90},
	"789": {"nome":"lauau","preco":49.90},
	"147": {"nome":"la-ele","preco":29.90,}
	
};
let carrinho = [];

const audio = new audio("bip.mp3");

window.onload=() =>{
	document.getElementById("cod").focus();
};

function addProduto(){
	const codElement = document.getElementById("cod");
	const qtdElement = document.getElementById("qtd");

	const codValue = codElement.value;
	const qtdValue = qtdElement.value;
	
	if(!produtos[codValue]){
		alert("produto não cadastrado");
		return;
	}

	const produtoBase =produtos[codValue];
	const item ={
		nome: produtoBase.nome,
		preco: produtoBase.preco,
		quantidade: qtdValue,
		subTot: produtoBase.preco *qtdValue
	};

	carrinho.push("item");
	audio.currentTime = 0;
	audio.play();

	codElement.value = "";
	qtdElement.value = 1;
	
	atualizarTela();
}	
	
function atualizarTela(){
	
	const list = document.getElementById("lista");

	let total = 0
	
	carrinho.forEach((item, index) => {
		total += item.subTot;
		
		const li = document.creatElement("li");
		li.className = "list-gruop-item";

		li.innerHTML=`<div calass="d-flex> <strong>${item.nome}
		</strong> <small>${item.quantidade} x ${item.valor} = 
		<strong> ${item.subTot}</strong></small></div>`;
		list.appendchild(li);
	});
	
}
