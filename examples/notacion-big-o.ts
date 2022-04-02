//Complejidad temporal: constantete -> O(cte) -> No importa la cantidad de elemento del vector, siempre realizará el mismo número de operaciones
function getElementByIndex(arr: number[], index:number):number{
    //arr.length -> Los accesos a propiedades tienen una complejidad constante
    return arr[index];
}

//Complejidad temporal: variable -> O(n) . > la cantidad de operaciones crece linealmente con la cantidad de elementos del vector
const iterate = (arr:string[]):void => {
    arr.forEach = a =>{
        console.log(a);
    };
};

//Complejidad temporal: cuadrática -> 0(n*n)

const iterateTable = (arr:number[][]):void => {
    arr.forEach(arr2 => {
        arr2.forEach(item => {
            console.log(item);
        });
    });
};

const table : number[][] = [[1,2,3],[4,5,6],[7,8,9]];

console.log(iterateTable(table));