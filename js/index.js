document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        const randomDuration = (Math.random() * 2 + 2).toFixed(2); // Duration between 2s and 4s
        const randomDelay = (Math.random() * 2).toFixed(2); // Delay between 0s and 2s

        circle.style.animationDuration = `${randomDuration}s`;
        circle.style.animationDelay = `${randomDelay}s`;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Sample data for skills and their proficiency levels
    const skillsData = [
        { skill: "JavaScript", level: 85 },
        { skill: "Python", level: 90 },
        { skill: "Django", level: 75 },
        { skill: "Data Analysis", level: 80 },
        { skill: "Machine Learning", level: 70 },
        { skill: "SQL", level: 85 },
        { skill: "HTML/CSS", level: 95 },
        { skill: "React", level: 80 },
    ];

    // Dimensions and margins for the SVG
    const margin = { top: 20, right: 30, bottom: 60, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Create the SVG element
    const svg = d3.select("#skills-visualization")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Set the scales
    const x = d3.scaleBand()
        .domain(skillsData.map(d => d.skill))
        .range([0, width])
        .padding(0.3); // Adjust the padding as needed

    const y = d3.scaleLinear()
        .domain([0, 100])
        .nice()
        .range([height, 0]);

    // Add the x-axis
    const xAxis = svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

    // Rotate the x-axis labels slightly (e.g., 15 degrees)
    xAxis.selectAll("text")
        .attr("transform", "rotate(15)")
        .attr("text-anchor", "start") // Align text to the start after rotation
        .style("font-size", "12px"); // Optional: Adjust font size

    // Add the y-axis
    svg.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(y));

    // Create the bars
    svg.selectAll(".bar")
        .data(skillsData)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.skill))
        .attr("y", d => y(d.level))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d.level))
        .attr("fill", "steelblue")
        .attr("opacity", 0.7)
        .on("mouseover", function() {
            d3.select(this)
                .transition()
                .duration(200)
                .attr("opacity", 1);
        })
        .on("mouseout", function() {
            d3.select(this)
                .transition()
                .duration(200)
                .attr("opacity", 0.7);
        });
});
