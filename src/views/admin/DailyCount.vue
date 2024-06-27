<template>
    <div>
        <el-row :gutter="20">
            <el-col
                :sm="24"
            >
                <label>时间范围：</label>
                <el-date-picker
                    v-model="datetimerange"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                />
            </el-col>
            <el-col
                :sm="24"
            >
                <VChart class="chart" :option="chartOption" />
            </el-col>
            <el-col
                :sm="24"
            >
                <CrudList
                    model="daily-count"
                />
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import { TooltipComponent, GridComponent } from 'echarts/components'
import VChart from 'vue-echarts'
import { useStatistics } from '@/hooks/use-statistics'

use([GridComponent, LineChart, CanvasRenderer, TooltipComponent])

const {
    datetimerange,
    chartOption,
} = useStatistics('daily-count', 'date', ['articleCount', 'resourceCount', 'webhookLogCount'])

</script>

<style lang="scss" scoped>
.chart {
  height: 500px;
}
</style>
