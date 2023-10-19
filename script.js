document.addEventListener('DOMContentLoaded', () =>{
    const btn = document.querySelector('#btn-nao')
    btn.addEventListener('mouseover', () =>{
        const x = Math.floor(Math.random() * (window.innerWidth - btn.clientWidth))
        const y = Math.floor(Math.random() * (window.innerHeight - btn.clientHeight))
        btn.style.position = 'absolute'
        btn.style.left = `${x}px`
        btn.style.top = `${y}px`

    })
})

function vaiRolarCoisas(){
    const nome = prompt('Agora estamos namorando! Me diga o seu nome, pq namorar sem saber o nome não dá né?')
    alert(`Prazer em lhe conhecer, ${nome}!`)
}