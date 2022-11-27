// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot(); 

    // 1. Create the trace for the bubble chart.
    var bubbleData = [
      {
        x: otu_lids,
        y: sample_values,
        text: otu_lables,
        mode: "markers",
        marker:{
          size: sample_values,
          color: otu_ids,
          colorscale: "green"
        }
      }
   
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Sample per Cultures",
      maergin:{t: 0},
      hovermode: "closest",
      xaxis: {title: "OTU_ID"},
      margin: {t: 20} 
      
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  });
}
