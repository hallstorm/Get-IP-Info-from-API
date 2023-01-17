const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '04371f12a3msh8b282e799f5a34fp18c0a6jsn373fa156c24c',
		'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
	}
};

const fetchIpInfo = ip => fetch(`https://ip-geo-location.p.rapidapi.com/ip/${ip}?format=json`, OPTIONS)
	.then(response => response.json())
	.catch(err => console.error(err));

const form = document.querySelector('#form')
const input = document.querySelector('#input')
const submit = document.querySelector('#submit')
const results = document.querySelector('#results')

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const {value} = input
    if (!value) return

    submit.setAttribute('disabled', '')
    submit.setAttribute('aria-busy', 'true')

    const ipInfo =  await fetchIpInfo(value)

    if(ipInfo){
        results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    submit.removeAttribute('disabled')
    submit.removeAttribute('aria-busy')
})