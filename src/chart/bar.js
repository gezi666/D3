
import * as d3 from "d3"

class Bar{
  constructor(dataset){
    if (!dataset) {
      console.log("请传入数据源")
      return
    }
    // painting bar
    d3.select(".bar").selectAll("span")
      .data(dataset)
      .enter()
      .append("span")
      .classed("bar-item",true)
      .style("height",(d)=>`${d}px`)
      .text(d=>d)
  }
}

export default Bar
