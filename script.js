const cep = document.getElementById('cep');

cep.addEventListener('focusout', cepFinder);

function fillTabs(json){
    document.getElementById('adress').value = json.logradouro;
    document.getElementById('district').value = json.bairro;
    document.getElementById('city').value = json.localidade;
    document.getElementById('state').value = json.uf;

}

async function cepFinder(){
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    const endpoint= await fetch(url);
    const infos_json = await endpoint.json();
    fillTabs(infos_json);
}
