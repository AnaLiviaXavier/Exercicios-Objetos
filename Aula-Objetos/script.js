/* const pessoa = {
    nome: 'Fulano',
    idade: 30,
    email: 'fulano@gmail.com',
  
}

console.log(pessoa.nome, pessoa.idade, pessoa.email)


const bicicleta = {
    cor: 'azul',
    marchas: 21,
    estilo: 'speed'
}

console.log(bicicleta['cor'], bicicleta['marchas'], bicicleta['estilo'])

bicicleta.marchas = 18
console.log(bicicleta.marchas)

pessoa['email']= 'emailFulano@gmail.com'
console.log(pessoa['email']) 



const filme = {
    direcao: 'Fulano da Silva',
    nome: 'Jurassic Dark',
    ano: 2023,
    elenco: ['Joãozinho da Silva', 'Mariazinha Maria', 'Aninha Julinha'],
    visto: true,
    avaliacao: 9.9
}

console.log('Direção: '+ filme.direcao+
    '\n Nome: '+ filme.nome+
    '\n Ano de lançamento: '+ filme.ano)

console.log('Elenco: '+filme.elenco[1]+
    '\n Já visto: '+ filme['visto']+
    '\n Avaliação:'+ filme['avaliacao'])

const person = {
    name: 'Orizco',
    age: '20',
    genMusical: 'samba'
}

console.log('O nome da pessoa é '+person.name+', ela tem '+ person.age+
 ' anos e gosta muito de '+ person.genMusical)



const compras = [
    {item: 'chá', quantidade: 1},
    {item: 'bolacha', quantidade: 2}
    
]

console.log(compras)
console.log(compras[1])
console.log(compras[1].item)


let curso = {
    nome: 'Front-end',
    professor: 'Fulanis'
}

curso.cargaHoraria = 90

curso['cargaHoraria'] = 70

console.log(curso.cargaHoraria)

*/


const filme = {
    direcao: 'Fulano da Silva',
    nome: 'Jurassic Dark',
    ano: 2023,
    elenco: ['Joãozinho da Silva', 'Mariazinha Maria', 'Aninha Julinha'],
    visto: true,
    avaliacao: 9.9

}


// adicionar personagens ao filme
filme.personagens = ['Tiranosauro', 'Jojo', 'Putin']
console.log(filme.personagens)


// ator e personagem array
personagem1 = [filme.elenco[0],filme.personagens[0]]
personagem2 = [filme.elenco[1],filme.personagens[1]]
personagem3 = [filme.elenco[2],filme.personagens[2]]
console.log(personagem1,personagem2,personagem3)


// ator e personagem em string
console.log(filme.elenco[0], 'as ', filme.personagens[0],'\n',
filme.elenco[1], 'como ', filme.personagens[1], '\n',
filme.elenco[2], 'como ', filme.personagens[2])


// mudar o primeiro do elenco 
filme.elenco[0] = 'Xuxa'
console.log(filme.elenco[0])

// imprime tudo
console.log(filme)



// filme alterado
const filme2 = {
    direcao: 'Fulano da Silva',
    nome: 'Jurassic Dark',
    ano: 2023,
    elenco: [{ator: 'Joãozinho da Silva', personagem: 'Tiranosauro'}, 
    {ator: 'Mariazinha Maria', personagem:'Jojo'},
     {ator:'Aninha Julinha', personagem:'Putin'}],
    visto: true,
    avaliacao: 9.9

}

console.log(filme2.elenco[2].ator + ' como '+ filme2.elenco[2].personagem)