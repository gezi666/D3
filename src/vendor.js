
import * as d3 from "d3"

console.log("I am vendor!")

const dataset = [10,23,124,53,97]

d3.select(".parent").selectAll("h1")
  .data(dataset)
  .enter()
  .append("h1")
  .classed('title',true)
  .text((d,i)=>`${i}:${d}`)
  .style("width",(d,i)=>200+d+`px`)
  