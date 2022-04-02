function sayHi(name:string):string{
    return "Hi " + name;
}

console.log(sayHi("Mauri"));

interface person {
    name: string,
    lastName: string,
}

const mauri : person = {
    name: "Mauricio",
    lastName: "Oruezabal"
}

//console.log(JSON.stringify(mauri));