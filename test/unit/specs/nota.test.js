const Nota = require('../src/models/nota');

describe('Cálculo da média final e retorno do conceito', () => {

    //Teste para nota superior 
    test('retorna o conceito SS - Superior para média >= 9,0', () => {
        let nota = new Nota(null, 9.5, 9, 9.9);
        expect(nota.MediaFinal()).toEqual('SS - Superior');
    });
    
    //Teste para nota média superior 
    test('retorna o conceito MS - Médio Superior para média entre 7,0 e 8,9', () => {
        let nota = new Nota(null, 7.2, 8, 8.5);
        expect(nota.MediaFinal()).toEqual('MS - Médio Superior');
    });
    
    //Teste para nota média
    test('retorna o conceito MM - Médio para média entre 5,0 e 6,9', () => {
        let nota = new Nota(null, 5, 5.2, 6.5);
        expect(nota.MediaFinal()).toEqual('MM - Médio');
    }); 
    
    //Teste para nota média inferior 
    test('retorna o conceito MI - Médio Inferior para média entre 3,0 e 4,9', () => {
        let nota = new Nota(null, 3.2, 4.5, 3);
        expect(nota.MediaFinal()).toEqual('MI - Médio Inferior');
    });
    
    //Teste para nota inferior 
    test('retorna o conceito II - Inferior para média entre 0,1 e 2,9', () => {
        let nota = new Nota(null, 1, 2.5, 1.3);
        expect(nota.MediaFinal()).toEqual('II - Inferior');
    });
    
    //Teste para nota sem rendimento 
    test('retorna o conceito SR - Sem rendimento para média igual a 0,0', () => {
        let nota = new Nota(null, 0, 0, 0);
        expect(nota.MediaFinal()).toEqual('SR - Sem rendimento');
    });
});
