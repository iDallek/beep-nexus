<template>
  <div>
    <v-file-input
      accept=".xlsx"
      label="Escolha o arquivo"
      :show-size="1000"
      @change="onChange"
    >
      <template v-slot:selection="{ fileNames }">
        <template v-for="(fileName, index) in fileNames" :key="fileName">
          <v-chip v-if="index < 2" label class="me-2">
            {{ fileName }}
          </v-chip>
        </template>
      </template>
    </v-file-input>
  </div>
</template>

<script lang="ts">
import { read, utils } from 'xlsx'
import moment from 'moment'
import typesOfDatasheet from '../common/rubDatasheetTypes'

function identifyDatasheet(firstRow: any): string {
  const types = typesOfDatasheet

  const notAvailable: string[] = []
  let keyName = ""
  let datasheetType = "undefinedType"

  for (const el of types) {
    keyName = Object.keys(el)[0]
    let matchLoops = 0

    el[keyName].forEach((key: string) => {
      if (firstRow.hasOwnProperty(key)) {
        matchLoops += 1
      }
    })

    if (matchLoops == el[keyName].length) {
      datasheetType = keyName
      break
    }
  }

  console.log(datasheetType)

  if (notAvailable.length == 0) {
    return keyName
  } else {
    return 'undefinedType'
  }
}

async function onChange(e: any): Promise<void> {
  const files = await e.srcElement?.files
  const xlsxData = {
    date: `${moment().format('L')} ${moment().format('dddd')}`
  }

  for (const file of files) {
    const content = await file.arrayBuffer()
    const wb = read(content)

    const data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {defval:""})
    const type = identifyDatasheet(data[0])

    if (type != 'undefinedType') {
      xlsxData['datasheetType'] = type
      xlsxData['data'] = data
    } else {
      xlsxData['datasheetType'] = type
    }
  }

  console.log(xlsxData)
}

export default {
  methods: {
    onChange
  }
}
</script>
<style scoped></style>
