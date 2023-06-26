const chars = [];
// Adicionando caracteres ASCII maiúsculos (A-Z)
// for (let i = 65; i <= 90; i++) {
//   chars.push(String.fromCharCode(i));
// }
// // Adicionando caracteres ASCII minúsculos (a-z)
// for (let i = 97; i <= 122; i++) {
//   chars.push(String.fromCharCode(i));
// }
// Adicionando números (0-9)
for (let i = 0; i <= 9; i++) {
  chars.push(i.toString());
}
// Adicionando caracteres especiais
// const specialChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
// chars.push(...specialChars.split(""));

function force() {
    const pass = document.getElementById('pass').value;
    const passLength = pass.length;
    let trial = "";
    
    const elements = [];
    for(let i = 0; i < passLength; i++) {
        const content = document.getElementById('numbers')
        const element = document.createElement('div');
        element.className = `number ${i}`;
        content.appendChild(element);
        elements.push(element);
    }

    function genTrial(pos) {
        for(let i = 0; i < chars.length; i++) {
            trial += chars[i];

            setTimeout(() => {
                elements[pos].innerHTML = chars[i];
            }, 500);

            if(trial === pass) {
                return trial;
            }

            if(pos < passLength - 1) {
                const nextPos = pos + 1;
                const result = genTrial(nextPos);
                if(result) {
                    return result;
                }
            }
    
            trial = trial.slice(0, -1);
        }

        return null;
    }

    return genTrial(0)  ||  "Senha não encontrada.";
}