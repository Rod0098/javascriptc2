function pessoa() {
    this.idade = 0

    setInterval(function() {
    this.idade++
    console.log(this.idade)
},1000)
}
new pessoa 