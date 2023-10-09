<template>
  <div class="inputs">
    <h2>Send the XLXS file of last week's Attendance audit</h2>
    <ReadXlsx v-model="lastWeekAttendanceAudit" />
    <h2>Send the XLXS file of this week's Attendance audit</h2>
    <ReadXlsx v-model="thisWeekAttendanceAudit" />
    <h2>Send the XLXS file of last week's Label audit</h2>
    <ReadXlsx v-model="lastWeekLabelAudit" />
    <h2>Send the XLXS file of this week's Etiquette audit</h2>
    <ReadXlsx v-model="thisWeekEtiquetteAudit" />
    <h2>Send the XLSX file of this month's Attendance accrual</h2>
    <ReadXlsx v-model="thisMonthAttendanceAccrual" />
    <h2>Send the XLSX file of this month's Etiquette accrual</h2>
    <ReadXlsx v-model="thisMonthEtiquetteAccrual" />
  </div>
</template>

<script>
import ReadXlsx from "@/components/ReadXlsx.vue";

export default {
  name: "PerfomanceAudits",
  components: {
    ReadXlsx,
  },
  data() {
    return {
      lastWeekAttendanceAudit: null,
      thisWeekAttendanceAudit: null,
      lastWeekLabelAudit: null,
      thisWeekEtiquetteAudit: null,
      thisMonthAttendanceAccrual: null,
      thisMonthEtiquetteAccrual: null,
    };
  },
};
</script>

<style scoped>
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .ReadXlsx {
    margin-bottom: 20px;
  }
</style>
