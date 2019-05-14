import * as d3 from "d3"

class Scatter{
  constructor(){
    const dataset = [
      [ 34, 78, 5 ],
      [ 109, 280, 16 ],
      [ 310, 120, 7 ],
      [ 79, 411, 6 ],
      [ 420, 220, 12 ],
      [ 233, 145, 20 ],
      [ 333, 96, 9 ],
      [ 222, 333, 10 ],
      [ 78, 320, 15 ],
      [ 21, 123, 8 ],
      [ 530, 350, 21 ]
    ]

    const duration = 300
    const w = 400
    const h = 300
    const padding = 30

    const xScale = d3.scaleLinear().domain([0,d3.max(dataset,d=>d[0])+100]).range([padding,w-padding])
    const yScale = d3.scaleLinear().domain([0,d3.max(dataset,d=>d[1])+30]).range([h-padding,padding])
    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)


    const svg = d3.select(".scatter").append("svg").style("width","100%")

    svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("fill","rgb(251, 118, 123)")
        .attr("cx",d=>xScale(d[0]))
        .attr("cy",d=>yScale(d[1]))
        .attr("r",d=>d[2])
        .on("mouseover",function(d,i){
            d3.select(this)
              .transition()
              .duration(duration)
              .attr("r",d=>d[2]+3)
        })
        .on("mouseout",function(d,i){
            d3.select(this)
              .transition()
              .duration(duration)
              .attr("r",d=>d[2])
        })

    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(d=>`${d[0]}, ${d[1]}`)
        .attr("x",d=>xScale(d[0]+d[2]+10))
        .attr("y",d=>yScale(d[1]))

    svg.append("g").attr("transform",`translate(0,${h-padding})`).call(xAxis)
    svg.append("g").attr("transform",`translate(${padding},0)`).call(yAxis)
  }
}

export default Scatter