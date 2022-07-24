const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, "/teste"), (error) => {
//     if(error) {
//         console.log('Erro: ', error);
//     }

//     console.log("Pasta criada com sucesso!");
// });

fs.writeFile(path.join(__dirname, '/teste', 'teste.txt'), 
'hello node',
    (erro) => {
        if (erro) {
            return console.log("Erro: ", erro);
        }
        console.log("Arquivo criado com sucesso");

        fs.appendFile(
                path.join(__dirname, '/teste', 'teste.txt'), 
            'hello World',
                (erro) => {
                    if (erro) {
                        return console.log("Erro: ", erro);
                    }
                    console.log("Arquivo criado com sucesso");
                }
        );
                
        fs.readFile(
            path.join(__dirname, '/teste', 'teste.txt'), 
            'utf8', 
            (error, data) =>{
                if(error){
                    return console.log("erro: ", error);
                }

            console.log(data);

            }
        );
    }
);