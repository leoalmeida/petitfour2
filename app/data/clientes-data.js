"use strict";
/**
 * Created by LeonardoAlmeida on 07/05/16.
 */
var ClientesData = (function () {
    function ClientesData() {
    }
    ClientesData.prototype.createDb = function () {
        var data = [
            { "id": "1", "nome": "Windstorm", "cpf": "12345678900", "email": "abc@abc.com", "tipoCliente": "A", "telefone": [{ "id": "1", "numero": "12345678900", "tipo": "Residencial" }], "endereco": [{ "id": "1", "tipoEndereco": "Residencial", "tipoImovel": "Alugado", "cep": "13565090", "rua": "Ray Wesley Herrick", "numero": "1501", "complemento": "fundos", "bairro": "Jd. Capirama", "cidade": "São Mateus", "estado": "São Paulo", "pais": "Brasil" }] },
            { "id": "2", "nome": "Bombasto", "cpf": "12345678900", "email": "abc@abc.com", "tipoCliente": "A", "telefone": [{ "id": "1", "numero": "12345678900", "tipo": "Residencial" }], "endereco": [{ "id": "1", "tipoEndereco": "Residencial", "tipoImovel": "Alugado", "cep": "13565090", "rua": "Ray Wesley Herrick", "numero": "1501", "complemento": "fundos", "bairro": "Jd. Capirama", "cidade": "São Mateus", "estado": "São Paulo", "pais": "Brasil" }] },
            { "id": "3", "nome": "Magneta", "cpf": "12345678900", "email": "abc@abc.com", "tipoCliente": "A", "telefone": [{ "id": "1", "numero": "12345678900", "tipo": "Residencial" }], "endereco": [{ "id": "1", "tipoEndereco": "Residencial", "tipoImovel": "Alugado", "cep": "13565090", "rua": "Ray Wesley Herrick", "numero": "1501", "complemento": "fundos", "bairro": "Jd. Capirama", "cidade": "São Mateus", "estado": "São Paulo", "pais": "Brasil" }] },
            { "id": "4", "nome": "Tornado", "cpf": "12345678900", "email": "abc@abc.com", "tipoCliente": "A", "telefone": [{ "id": "1", "numero": "12345678900", "tipo": "Residencial" }], "endereco": [{ "id": "1", "tipoEndereco": "Residencial", "tipoImovel": "Alugado", "cep": "13565090", "rua": "Ray Wesley Herrick", "numero": "1501", "complemento": "fundos", "bairro": "Jd. Capirama", "cidade": "São Mateus", "estado": "São Paulo", "pais": "Brasil" }] }
        ];
        return { data: data };
    };
    return ClientesData;
}());
exports.ClientesData = ClientesData;
//# sourceMappingURL=clientes-data.js.map