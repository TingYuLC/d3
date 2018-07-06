<template>
  <div id="dpie"></div>
</template>
<script>
import * as d3 from 'd3'
export default {
  name: 'DPie',
  mounted () {
    const width = 400
    const height = 400
    const dataset = [10, 56, 17, 24, 18, 6]
    const svg = d3.select('#dpie')
                  .append('svg')
                  .attr('width', width)
                  .attr('height', height)
    const pie = d3.layout.pie()
    const piedata = pie(dataset)
    const outerRadius = 150
    const innerRadius = 0
    const arc = d3.svg.arc()
                  .outerRadius(outerRadius)
                  .innerRadius(innerRadius)
    const color = d3.scale.category10()
    const arcs = svg.selectAll('g')
                    .data(piedata)
                    .enter()
                    .append('g')
                    .attr('transform', `translate(${width/2}, ${height/2})`)
    arcs.append('path')
        .attr('fill', (d, i) => {
          return color(i)
        })
        .attr('d', d => {
          return arc(d)
        })
    arcs.append('text')
        .attr('transform', d => {
          return `translate(${arc.centroid(d)})`
        })
        .attr('text-anchor', 'middle')
        .text(d => {
          return d.data
        })
  }
}
</script>
<style scoped>
</style>
