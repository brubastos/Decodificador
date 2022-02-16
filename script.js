function codificar() {
    var normal = document.getElementById("entrada");
    var codificar = document.getElementById("saida");
    var texto = entrada.value;
    
    
    
    texto = texto.replace(/e/gi, "enter");
    texto = texto.replace(/i/gi, "imes");
    texto = texto.replace(/a/gi, "ai");
    texto = texto.replace(/o/gi, "ober");
    texto = texto.replace(/u/gi, "ufat");
    texto = texto.toLowerCase();  //para converter letras maiúsculas em minúsculas
    texto = texto.replace(/[^a-z ]/gi, ''); // Regex para filtrar caracteres especiais, acentuação e números
    
    
    saida.value = texto;
    }
    
 function decodificar() {
        var normal = document.getElementById("entrada");
        var codificar = document.getElementById("saida");
        var texto = entrada.value;
        
        
        texto = texto.replace(/enter/gi, "e");
        texto = texto.replace(/imes/gi, "i");
        texto = texto.replace(/ai/gi, "a");
        texto = texto.replace(/ober/gi, "o");
        texto = texto.replace(/ufat/gi, "u");
        
        
        saida.value = texto;
                 
    }

  

       // Função colar  
    function btnCopy() {
        let textoCopiado = document.getElementById("saida");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
    
       
    }

    
       

    