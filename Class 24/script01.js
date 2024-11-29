const data = new Date(2019, 3, 20, 15, 14, 27); /* ano, mês, dia, hora, minuto, segundo (milez. seg tbm) + 1000 vai para 28 */
// mês começa do zero
/* min só vai ate 59 e sec tbm, quando omitimos ele zera, podemos omitir ate o dia, mas quando omitimos o dia vai pra dia 1 */
console.log(data.toString())


const data1 = new Date('2023-11-29 15:26:02.100') // '2023-11-29T15:26:02.100'
console.log('Dia', data1.getDate())
console.log('Mês', data1.getMonth() + 1) // para corrigir o mês 
console.log('Ano', data1.getFullYear())
console.log('Hora', data1.getHours())
console.log('Min', data1.getMinutes())
console.log('Sec', data1.getSeconds())
console.log('MS', data1.getMilliseconds()) // 0 domingo
console.log('Dia semana', data1.getDay())

console.log(Date.now()) // obter os milezimos de segundos da data atual

console.log(data1.toString())