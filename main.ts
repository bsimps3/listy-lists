let list: number[] = []
let keepGoing = true
while (keepGoing) {
    list.push(game.askForNumber("what number?"))
    keepGoing = game.ask("add another?")
}
game.splash(list)
let menuChoice = game.askForNumber("1 for display; 2 for edit, 3 for add")
