
import * as d3 from "d3"

class Bar{
  constructor(){

    const dataset = [100,34,146,67,235,200,80]

    // painting bar with span
    // d3.select(".bar").selectAll("span")
    //   .data(dataset)
    //   .enter()
    //   .append("span")
    //   .classed("bar-item",true)
    //   .style("height",(d)=>`${d}px`)
    //   .text(d=>d)

    // painting bar with SVG
    const padding = 30
    const w = 40
    const h = 300
    const duration = 200     //动画过度时间

    const xScale = d3.scaleLinear()
                      .domain([0,350])
                      .range([padding,400-padding])

    const yScale = d3.scaleLinear()
                      .domain([0,d3.max(dataset,d=>d)])
                      .range([h-padding,padding])
    
    const svg = d3.select(".bar")
                  .append("svg") 
                  .style("width","100%")

    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .style("width",w)
        .style("height",d=>d)
        .style("x",(d,i)=>xScale(50*i))
        // .style("y",(d,i)=> yScale(d))
        .style("y",d=> h-padding-d)
        .attr("fill","#188df0")
        .on("mouseover",function(d,i){
          d3.select(this)
            .transition()
            .duration(duration)
            .attr("fill","#2378f7")
        })
        .on("mouseout",function(d,i){
          d3.select(this)
            .transition()
            .duration(duration)
            .attr("fill","#188df0")
        })
        .on("click",function(d,i){
          alert(`元素信息   ${i} : ${d}`)
        })

    svg.selectAll("title")
     .data(dataset)
     .enter()
     .append("title")
     .text(d=>d)
      
    svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(d=>d)
      .attr("x",(d,i)=>xScale(50*i+10))
      // .attr("y",(d,i)=>yScale(d+15))
      .attr("y",(d,i)=>h-padding-d+15)
      .style("fill","#fff")

    // 坐标轴
    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)

    svg.append("g")
      .attr("transform",`translate(0,${300-padding})`) 
      .call(xAxis)
    svg.append("g")
      .attr("transform",`translate(${padding},0)`)
      .call(yAxis)

  }
}

export default Bar
