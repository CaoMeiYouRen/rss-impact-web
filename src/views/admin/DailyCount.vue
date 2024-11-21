<template>
    <div>
        <!-- 右上角添加按钮 -->
        <el-row :gutter="20" justify="end">
            <el-col
                :sm="24"
                :md="12"
                :lg="8"
            >
                <label>天数：</label>
                <el-input-number
                    v-model="dayNum"
                    :min="1"
                    :max="365"
                />
                &nbsp;
                <el-button type="warning" @click="onReCount">
                    <el-icon><Refresh /></el-icon>
                    &nbsp;
                    重新统计
                </el-button>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :sm="24">
                <label>时间范围：</label>
                <el-date-picker
                    v-model="datetimerange"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                />
            </el-col>
            <el-col :sm="24">
                <VChart class="chart" :option="chartOption" />
            </el-col>
            <el-col :sm="24">
                <CrudList model="daily-count" />
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
import VChart from 'vue-echarts'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'
import { useStatistics } from '@/hooks/use-statistics'
import { api } from '@/api'

use([GridComponent, LineChart, CanvasRenderer, TooltipComponent, LegendComponent])

const {
    datetimerange,
    chartOption,
    onSearch,
} = useStatistics('daily-count', 'date',
['articleCount', 'resourceCount', 'webhookLogCount', 'feedCount', 'categoryCount', 'hookCount', 'customQueryCount', 'proxyConfigCount', 'userCount'],
)

const dayNum = ref(30)

async function onReCount() {
    try {
        await ElMessageBox.confirm(`确定重新统计 ${dayNum.value} 天内的日志吗？此操作可以修复错误的统计数据，但不可回退！`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        })
        await api.api.dailyCountReCount({ dayNum: dayNum.value })
        ElMessage.success('重新统计成功')
        await onSearch()
    } catch (error) {
        console.error(error)
        if (error === 'cancel') {
            return
        }
        ElMessage.error('重新统计失败')
    }
}

</script>

<style lang="scss" scoped>
.chart {
    height: 500px;
}
</style>
