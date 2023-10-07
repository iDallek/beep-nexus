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

    async function onChange(e: any) : Promise<void> {
        console.log("Passou pela função 'onChange'")

        const files = await e.srcElement?.files
        
        for (const file of files) {
            const content = await file.arrayBuffer()

            console.log(content)
            const wb = read(content)

            console.log(`${moment().format('L')} ${moment().format('dddd')}`, utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]))
        }
    }

export default {
    methods: {
        onChange
    }
}
</script>
<style scoped>
    
</style>