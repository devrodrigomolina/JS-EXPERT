const { error } = require("./src/constants");
const File = require("./src/file");
const assert = require('assert');

;(async () => {
    // variaveis criadas nesse bloco, só são valçidas durante sua execução
    {
        const filePath = './mocks/emptyFile-invalid.csv';
        const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);
        await assert.rejects(result, expected)
    } 

    {
        const filePath = './mocks/invalid-header.csv';
        const expected = new Error(error.FILE_FIELD_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);
        await assert.rejects(result, expected)
    } 

    {
        const filePath = './mocks/fiveItems-invalid.csv';
        const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);
        await assert.rejects(result, expected)
    } 

    {
        const filePath = './mocks/threeItems.valid.csv';
        const expected = [
            {
                id: 1,
                name: 'eric da silva',
                profession: 'vagabundo',
                age: 120
            },
            {
                id: 2,
                name: 'ana da silva',
                profession: 'analiosta',
                age: 50
            },
            {
                id: 3,
                name: 'wendy da silva',
                profession: 'developer',
                age: 60
            }
        ];
        const result = await File.csvToJson(filePath);
        assert.deepEqual(result, expected)
    } 

})()