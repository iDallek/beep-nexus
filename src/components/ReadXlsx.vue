<template>
    <div>
        <v-file-input
            accept=".xlsx"
            counter
            label="Escolha o arquivo"
            multiple
            :show-size="1000"
            @change="onChange"
        >
            <template v-slot:selection="{ fileNames }">
                <template v-for="(fileName, index) in fileNames" :key="fileName">
                    <v-chip
                    v-if="index < 2"
                    label
                    size="small"
                    class="me-2"
                    >
                    {{ fileName }}
                    </v-chip>

                    <span
                    v-else-if="index === 2"
                    class="text-overline text-grey-darken-3 mx-2"
                    >
                    <!-- +{{ files.length - 2 }} File(s) -->
                    </span>
                </template>
            </template>
        </v-file-input>
    </div>
</template>
<script lang="ts">
    import { read, utils } from 'xlsx'
    import moment from 'moment'

    function identifyDatasheet(firstRow): string {
        const typesOfDatasheet = [
            { 'Reincidencia': ['Reincidências'] },
            { 'Estoque': ['Código', 'Nome',	'Complemento', 'Estoque', 	'Estoque Indisponível', 'Dias sem venda', 'Última venda', 'Última venda', 'Última Compra', 'Última Compra', 'Classe de Produto', 'Classe de Produto Raiz', 'Comprador', 'Curva ABC', 'Preço de Venda', 'Qtde Venda/Dia', 'Vida útil', 'Cadeia', 'Setor', 'Setor herdado', 'Fornecedor', 'Gerenciado', 'Ativo', 'Resíduo', 'Peso Variável', 'Custo', 'Alteração de Preço', 'Alteração de Preço', 'Verificador']}
        ]

        let datasheetType
        typesOfDatasheet.forEach(element => {
            // Refatorar, a linha abaixo demonstar apenas se o typesOfDatasheet tiver uma unica string em cada key
            const keyValue = element[`${Object.keys(element)}`][0]
            const keyName = Object.keys(element)[0]

            const notAvailable : string[] = [];
            const emptyVals: string[] = [];

            element[keyName].forEach((key) => {
                if (!firstRow.hasOwnProperty(key)) {
                    notAvailable.push(key);
                } else {
                    if (firstRow[key] == null || firstRow[key] == "") {
                        emptyVals.push(key);
                    }
                }
            })

            if (notAvailable.length == 0) {
                return keyName
            } else {
                return "undefinedType"
            }
        });

        return datasheetType
    }

    async function onChange(e: any) : Promise<void> {
        const files = await e.srcElement?.files
        const xlsxData = {
            date: `${moment().format('L')} ${moment().format('dddd')}`
        }
        
        for (const file of files) {
            const content = await file.arrayBuffer()
            const wb = read(content)

            const data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
            const type = identifyDatasheet(data[0])

            console.log(type)

            if (type != "undefinedType") {
                xlsxData["datasheetType"] = type
                xlsxData["data"] = data
            } else {
                xlsxData["datasheetType"] = type
            }
        }

        // console.log(xlsxData)
    }

export default {
    methods: {
        onChange
    }
}
</script>
<style scoped>
    
</style>