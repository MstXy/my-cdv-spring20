let viz = d3.select("#container")
  .append("svg")
    .attr("id", "viz")
;
// how to read it
viz.append("text")
    .text("How to Read It.")
    .attr("fill", "black")
    .attr("x", 10)
    .attr("y", 270)
    .attr("font-family", "Roboto")
    .attr("font-size", 40)
    .attr("font-weight", 400)
;

// top right
// top right circle
viz.append("circle")
    .attr("cx", 1075)
    .attr("cy", 125)
    .attr("r", 500)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
;

// top right small circle
viz.append("circle")
    .attr("cx", 1050)
    .attr("cy", 150)
    .attr("r", 15)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
;
// line tip small circle
viz.append("circle")
    .attr("cx", 610)
    .attr("cy", 480)
    .attr("r", 10)
    .attr("fill", "black")
    .attr("stroke", "black")
    .attr("stroke-width", 0)
;
// fork up line
viz.append("line")
    .attr("x1", 540)
    .attr("y1", 450)
    .attr("x2", 440)
    .attr("y2", 525)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
;
// fork bot line
viz.append("line")
    .attr("x1", 615)
    .attr("y1", 550)
    .attr("x2", 515)
    .attr("y2", 625)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
;
// fork tip small circle
viz.append("circle")
    .attr("cx", 440)
    .attr("cy", 525)
    .attr("r", 10)
    .attr("fill", "black")
    .attr("stroke", "black")
    .attr("stroke-width", 0)
;
viz.append("circle")
    .attr("cx", 515)
    .attr("cy", 625)
    .attr("r", 10)
    .attr("fill", "black")
    .attr("stroke", "black")
    .attr("stroke-width", 0)
;

// connection line x2
viz.append("line")
    .attr("x1", 615)
    .attr("y1", 550)
    .attr("x2", 610)
    .attr("y2", 480)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
;
viz.append("line")
    .attr("x1", 540)
    .attr("y1", 450)
    .attr("x2", 610)
    .attr("y2", 480)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
;

// long line
viz.append("line")
    .attr("x1", 1050)
    .attr("y1", 150)
    .attr("x2", 610)
    .attr("y2", 480)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
;

// text
viz.append("text")
    .text("Breakfast")
    .attr("fill", "black")
    .attr("x", 950)
    .attr("y", 50)
    .attr("font-family", "Roboto")
    .attr("font-size", 40)
    .attr("font-weight", 350)
;
viz.append("text")
    .text("Lunch")
    .attr("fill", "black")
    .attr("x", 800)
    .attr("y", 50)
    .attr("font-family", "Roboto")
    .attr("font-size", 40)
    .attr("font-weight", 350)
;
viz.append("text")
    .text("Dinner")
    .attr("fill", "black")
    .attr("x", 650)
    .attr("y", 50)
    .attr("font-family", "Roboto")
    .attr("font-size", 40)
    .attr("font-weight", 350)
;
// duration text
viz.append("text")
    .text("Each Block")
    .attr("fill", "black")
    .attr("x", 1015)
    .attr("y", 350)
    .attr("font-family", "Roboto")
    .attr("font-size", 30)
    .attr("font-weight", 350)
;
viz.append("text")
    .text("is 5 Minutes")
    .attr("fill", "black")
    .attr("x", 1000)
    .attr("y", 400)
    .attr("font-family", "Roboto")
    .attr("font-size", 30)
    .attr("font-weight", 350)
;
viz.append("text")
    .text("of Having")
    .attr("fill", "black")
    .attr("x", 1030)
    .attr("y", 450)
    .attr("font-family", "Roboto")
    .attr("font-size", 30)
    .attr("font-weight", 350)
;
viz.append("text")
    .text("the Food.")
    .attr("fill", "black")
    .attr("x", 1040)
    .attr("y", 500)
    .attr("font-family", "Roboto")
    .attr("font-size", 30)
    .attr("font-weight", 350)
;

// arrow
viz.append("path")
    .attr("d", "M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z")
    .attr("stroke", "black")
    .attr("stroke-width", 3)
    .attr("fill-rule", "evenodd")
    .attr("clip-rule", "evenodd")
    .attr("transform", "translate(720,80) rotate(115)")
;
viz.append("path")
    .attr("d", "M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z")
    .attr("stroke", "black")
    .attr("stroke-width", 3)
    .attr("fill-rule", "evenodd")
    .attr("clip-rule", "evenodd")
    .attr("transform", "translate(850,80) rotate(115)")
;
viz.append("path")
    .attr("d", "M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z")
    .attr("stroke", "black")
    .attr("stroke-width", 3)
    .attr("fill-rule", "evenodd")
    .attr("clip-rule", "evenodd")
    .attr("transform", "translate(980,80) rotate(115)")
;
// duration polygon
// breakfast
viz.append("polygon")
    .attr("points", "-20,-50 6.6666,-46.6666 6.6666,46.6666 -20,50")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("transform", "translate(980,200) rotate(-37)")
;
// lunch
viz.append("polygon")
    .attr("points", "-20,-50 6.6666,-46.6666 6.6666,46.6666 -20,50")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("transform", "translate(858,235) rotate(-30)")
;
viz.append("polygon")
    .attr("points", "-20,-50 6.6666,-46.6666 6.6666,46.6666 -20,50")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("transform", "translate(915,310) rotate(-44)")
;

// dinner
viz.append("polygon")
    .attr("points", "-20,-50 6.6666,-46.6666 6.6666,46.6666 -20,50")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("transform", "translate(775,355) rotate(-37)")
;
viz.append("polygon")
    .attr("points", "-20,-50 6.6666,-46.6666 6.6666,46.6666 -20,50")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("transform", "translate(727.5,272.5) rotate(-23)")
;
viz.append("polygon")
    .attr("points", "-20,-50 6.6666,-46.6666 6.6666,46.6666 -20,50")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("transform", "translate(701.5,182.5) rotate(-9)")
;
viz.append("polygon")
    .attr("points", "-20,-50 6.6666,-46.6666 6.6666,46.6666 -20,50")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("transform", "translate(841, 423.5) rotate(-51)")
;
viz.append("polygon")
    .attr("points", "-20,-50 6.6666,-46.6666 6.6666,46.6666 -20,50")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("transform", "translate(921,474) rotate(-65)")
;




// main circle
// moodb rect
viz.append("rect")
    .attr("x", 100)
    .attr("y", 500)
    .attr("width", 50)
    .attr("height", 100)
    .attr("fill", "#55e6a9")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
;
// mooda poly
viz.append("polygon")
    .attr("points", "360,430 410,520 320,570 270,480")
    .attr("fill", "#f75cbc")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
;

// mid big circle
viz.append("circle")
    .attr("cx", 250)
    .attr("cy", 550)
    .attr("r", 115)
    .attr("fill", "#4a67e8")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
;

// phone rect
viz.append("rect")
    .attr("x", 150)
    .attr("y", 425)
    .attr("width", 2 * 30)
    .attr("height", 3 * 30)
    .attr("fill", "#c9c9ff")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
;


// sep line
viz.append("line")
    .attr("x1", 10)
    .attr("y1", 280)
    .attr("x2", 590)
    .attr("y2", 280)
    .attr("fill", "none")
    .attr("stroke", "grey")
    .attr("stroke-width", 2)
;


// circle x3
viz.append("circle")
    .attr("cx", 500)
    .attr("cy", 100)
    .attr("r", 30)
    .attr("fill", "none")
    .attr("stroke", "#1f4000")
    .attr("stroke-width", 4)
;
viz.append("circle")
    .attr("cx", 350)
    .attr("cy", 100)
    .attr("r", 30)
    .attr("fill", "none")
    .attr("stroke", "#540000")
    .attr("stroke-width", 4)
;
viz.append("circle")
    .attr("cx", 175)
    .attr("cy", 100)
    .attr("r", 40)
    .attr("fill", "none")
    .attr("stroke", "#000354")
    .attr("stroke-width", 4)
;

// fork 1
viz.append("line")
    .attr("x1", 230)
    .attr("y1", 100)
    .attr("x2", 305)
    .attr("y2", 100)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
;
viz.append("line")
    .attr("x1", 230)
    .attr("y1", 80)
    .attr("x2", 260)
    .attr("y2", 80)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
;
viz.append("line")
    .attr("x1", 230)
    .attr("y1", 120)
    .attr("x2", 260)
    .attr("y2", 120)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
;
viz.append("circle")
    .attr("cx", 230)
    .attr("cy", 80)
    .attr("r", 3)
    .attr("fill", "black")
    .attr("stroke", "black")
    .attr("stroke-width", 0)
;
viz.append("circle")
    .attr("cx", 230)
    .attr("cy", 100)
    .attr("r", 3)
    .attr("fill", "black")
    .attr("stroke", "black")
    .attr("stroke-width", 0)
;
viz.append("circle")
    .attr("cx", 230)
    .attr("cy", 120)
    .attr("r", 3)
    .attr("fill", "black")
    .attr("stroke", "black")
    .attr("stroke-width", 0)
;
viz.append("line")
    .attr("x1", 260)
    .attr("y1", 80)
    .attr("x2", 275)
    .attr("y2", 100)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
;
viz.append("line")
    .attr("x1", 260)
    .attr("y1", 120)
    .attr("x2", 275)
    .attr("y2", 100)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
;
viz.append("circle")
    .attr("cx", 305)
    .attr("cy", 100)
    .attr("r", 3)
    .attr("fill", "black")
    .attr("stroke", "black")
    .attr("stroke-width", 0)
;

// fork 2
viz.append("line")
    .attr("x1", 430)
    .attr("y1", 100)
    .attr("x2", 460)
    .attr("y2", 100)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
;
viz.append("line")
    .attr("x1", 390)
    .attr("y1", 90)
    .attr("x2", 420)
    .attr("y2", 90)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
;
viz.append("line")
    .attr("x1", 390)
    .attr("y1", 110)
    .attr("x2", 420)
    .attr("y2", 110)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
;
viz.append("circle")
    .attr("cx", 390)
    .attr("cy", 90)
    .attr("r", 3)
    .attr("fill", "black")
    .attr("stroke", "black")
    .attr("stroke-width", 0)
;

viz.append("circle")
    .attr("cx", 390)
    .attr("cy", 110)
    .attr("r", 3)
    .attr("fill", "black")
    .attr("stroke", "black")
    .attr("stroke-width", 0)
;
viz.append("line")
    .attr("x1", 420)
    .attr("y1", 90)
    .attr("x2", 430)
    .attr("y2", 100)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
;
viz.append("line")
    .attr("x1", 420)
    .attr("y1", 110)
    .attr("x2", 430)
    .attr("y2", 100)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
;

viz.append("circle")
    .attr("cx", 460)
    .attr("cy", 100)
    .attr("r", 3)
    .attr("fill", "black")
    .attr("stroke", "black")
    .attr("stroke-width", 0)
;

// text
viz.append("text")
    .text("Breakfast")
    .attr("fill", "black")
    .attr("x", 450)
    .attr("y", 30)
    .attr("font-family", "Roboto")
    .attr("font-size", 25)
    .attr("font-weight", 350)
;
viz.append("text")
    .text("Lunch")
    .attr("fill", "black")
    .attr("x", 320)
    .attr("y", 30)
    .attr("font-family", "Roboto")
    .attr("font-size", 25)
    .attr("font-weight", 350)
;
viz.append("text")
    .text("Dinner")
    .attr("fill", "black")
    .attr("x", 140)
    .attr("y", 30)
    .attr("font-family", "Roboto")
    .attr("font-size", 25)
    .attr("font-weight", 350)
;
// text line
viz.append("line")
    .attr("x1", 175)
    .attr("y1", 40)
    .attr("x2", 175)
    .attr("y2", 50)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1.5)
;
viz.append("line")
    .attr("x1", 350)
    .attr("y1", 40)
    .attr("x2", 350)
    .attr("y2", 50)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1.5)
;
viz.append("line")
    .attr("x1", 500)
    .attr("y1", 40)
    .attr("x2", 500)
    .attr("y2", 50)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1.5)
;

// ingredients poly
viz.append("polygon")
    .attr("points", "0,7.5 0,-7.5 6,-6 6,6")
    .attr("fill", "Orange")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("transform", "translate(100,20)")
;
viz.append("polygon")
    .attr("points", "0,7.5 0,-7.5 6,-6 6,6")
    .attr("fill", "#fffaf0")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("transform", "translate(100,45)")
;
viz.append("polygon")
    .attr("points", "0,7.5 0,-7.5 6,-6 6,6")
    .attr("fill", "Brown")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("transform", "translate(100,70)")
;
viz.append("polygon")
    .attr("points", "0,7.5 0,-7.5 6,-6 6,6")
    .attr("fill", "Yellow")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("transform", "translate(100,95)")
;
viz.append("polygon")
    .attr("points", "0,7.5 0,-7.5 6,-6 6,6")
    .attr("fill", "Green")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("transform", "translate(100,120)")
;
viz.append("polygon")
    .attr("points", "0,7.5 0,-7.5 6,-6 6,6")
    .attr("fill", "Pink")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("transform", "translate(100,145)")
;

// ingredients rect
viz.append("rect")
    .attr("width", 40)
    .attr("height", 15)
    .attr("fill", "Orange")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("transform", "translate(55, 12.5)")
;
viz.append("rect")
    .attr("width", 80)
    .attr("height", 15)
    .attr("fill", "#fffaf0")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("transform", "translate(15, 37.5)")
;
viz.append("rect")
    .attr("width", 50)
    .attr("height", 15)
    .attr("fill", "Brown")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("transform", "translate(45, 62.5)")
;
viz.append("rect")
    .attr("width", 65)
    .attr("height", 15)
    .attr("fill", "Yellow")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("transform", "translate(30, 87.5)")
;
viz.append("rect")
    .attr("width", 30)
    .attr("height", 15)
    .attr("fill", "Green")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("transform", "translate(65, 112.5)")
;
viz.append("rect")
    .attr("width", 35)
    .attr("height", 15)
    .attr("fill", "Pink")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("transform", "translate(60, 137.5)")
;

// small arrow
viz.append("path")
    .attr("d", "M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z")
    .attr("stroke", "black")
    .attr("stroke-width", 1)
    .attr("fill-rule", "evenodd")
    .attr("clip-rule", "evenodd")
    .attr("transform", "translate(130,170) rotate(-135)")
;
viz.append("path")
    .attr("d", "M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z")
    .attr("stroke", "black")
    .attr("stroke-width", 1)
    .attr("fill-rule", "evenodd")
    .attr("clip-rule", "evenodd")
    .attr("transform", "translate(375,170) rotate(-135)")
;
// text
viz.append("text")
    .text("Color of Ingredients")
    .attr("fill", "black")
    .attr("x", 10)
    .attr("y", 190)
    .attr("font-family", "Roboto")
    .attr("font-size", 25)
    .attr("font-weight", 350)
;
viz.append("text")
    .text("With its Proportion.")
    .attr("fill", "black")
    .attr("x", 10)
    .attr("y", 220)
    .attr("font-family", "Roboto")
    .attr("font-size", 25)
    .attr("font-weight", 350)
;
viz.append("text")
    .text("Size of the Circle")
    .attr("fill", "black")
    .attr("x", 300)
    .attr("y", 190)
    .attr("font-family", "Roboto")
    .attr("font-size", 25)
    .attr("font-weight", 350)
;
viz.append("text")
    .text("Is Size of the Food.")
    .attr("fill", "black")
    .attr("x", 300)
    .attr("y", 220)
    .attr("font-family", "Roboto")
    .attr("font-size", 25)
    .attr("font-weight", 350)
;

// color - maker
// title text
viz.append("text")
    .text("Color - Maker")
    .attr("fill", "black")
    .attr("x", 15)
    .attr("y", 310)
    .attr("font-family", "Roboto")
    .attr("font-size", 25)
    .attr("font-weight", 400)
;

// color circle
viz.append("circle")
    .attr("cx", 25)
    .attr("cy", 330)
    .attr("r", 8)
    .attr("fill", "#4a67e8")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
;
// -
viz.append("line")
    .attr("x1", 40)
    .attr("y1", 330)
    .attr("x2", 50)
    .attr("y2", 330)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1)
;
// text
viz.append("text")
    .text("Dad")
    .attr("fill", "black")
    .attr("x", 55)
    .attr("y", 337)
    .attr("font-family", "Roboto")
    .attr("font-size", 20)
    .attr("font-weight", 350)
;

// color circle
viz.append("circle")
    .attr("cx", 25)
    .attr("cy", 350)
    .attr("r", 8)
    .attr("fill", "#ff4545")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
;
// -
viz.append("line")
    .attr("x1", 40)
    .attr("y1", 350)
    .attr("x2", 50)
    .attr("y2", 350)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1)
;
// text
viz.append("text")
    .text("Mom")
    .attr("fill", "black")
    .attr("x", 55)
    .attr("y", 357)
    .attr("font-family", "Roboto")
    .attr("font-size", 20)
    .attr("font-weight", 350)
;

// color circle
viz.append("circle")
    .attr("cx", 25)
    .attr("cy", 370)
    .attr("r", 8)
    .attr("fill", "#e5e84a")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
;
// -
viz.append("line")
    .attr("x1", 40)
    .attr("y1", 370)
    .attr("x2", 50)
    .attr("y2", 370)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1)
;
// text
viz.append("text")
    .text("I")
    .attr("fill", "black")
    .attr("x", 55)
    .attr("y", 377)
    .attr("font-family", "Roboto")
    .attr("font-size", 20)
    .attr("font-weight", 350)
;

// color circle
viz.append("circle")
    .attr("cx", 25)
    .attr("cy", 390)
    .attr("r", 8)
    .attr("fill", "#bb4ae8")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
;
// -
viz.append("line")
    .attr("x1", 40)
    .attr("y1", 390)
    .attr("x2", 50)
    .attr("y2", 390)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1)
;
// text
viz.append("text")
    .text("Mom & Dad")
    .attr("fill", "black")
    .attr("x", 55)
    .attr("y", 397)
    .attr("font-family", "Roboto")
    .attr("font-size", 20)
    .attr("font-weight", 350)
;

// color circle
viz.append("circle")
    .attr("cx", 25)
    .attr("cy", 410)
    .attr("r", 8)
    .attr("fill", "#4ae877")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
;
// -
viz.append("line")
    .attr("x1", 40)
    .attr("y1", 410)
    .attr("x2", 50)
    .attr("y2", 410)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1)
;
// text
viz.append("text")
    .text("Dad & I")
    .attr("fill", "black")
    .attr("x", 55)
    .attr("y", 417)
    .attr("font-family", "Roboto")
    .attr("font-size", 20)
    .attr("font-weight", 350)
;

// phone text
viz.append("text")
    .text("Appears If I Looked")
    .attr("fill", "black")
    .attr("x", 250)
    .attr("y", 340)
    .attr("font-family", "Roboto")
    .attr("font-size", 30)
    .attr("font-weight", 350)
;
viz.append("text")
    .text("At My Phone During Eating.")
    .attr("fill", "black")
    .attr("x", 275)
    .attr("y", 380)
    .attr("font-family", "Roboto")
    .attr("font-size", 30)
    .attr("font-weight", 350)
;
// viz.append("text")
//     .text("Phone")
//     .attr("fill", "#c9c9ff")
//     .attr("stroke", "black")
//     .attr("stroke-width", "0.5")
//     .attr("x", 344)
//     .attr("y", 380)
//     .attr("font-family", "Roboto")
//     .attr("font-size", 25)
//     .attr("font-weight", 350)
// ;

// phone arrow
viz.append("path")
    .attr("d", "M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z")
    .attr("stroke", "black")
    .attr("stroke-width", 1)
    .attr("fill-rule", "evenodd")
    .attr("clip-rule", "evenodd")
    .attr("transform", "translate(250,375) rotate(135)")
;

// moodb text & arrow
viz.append("path")
    .attr("d", "M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z")
    .attr("stroke", "black")
    .attr("stroke-width", 1)
    .attr("fill-rule", "evenodd")
    .attr("clip-rule", "evenodd")
    .attr("transform", "translate(50,660) rotate(-45)")
;
viz.append("text")
    .text("My Mood Before")
    .attr("fill", "black")
    .attr("x", 25)
    .attr("y", 720)
    .attr("font-family", "Roboto")
    .attr("font-size", 30)
    .attr("font-weight", 350)
;
viz.append("text")
    .text("The Food.")
    .attr("fill", "black")
    .attr("x", 50)
    .attr("y", 760)
    .attr("font-family", "Roboto")
    .attr("font-size", 30)
    .attr("font-weight", 350)
;


// mooda text & arrow
viz.append("path")
    .attr("d", "M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z")
    .attr("stroke", "black")
    .attr("stroke-width", 1)
    .attr("fill-rule", "evenodd")
    .attr("clip-rule", "evenodd")
    .attr("transform", "translate(400,620) rotate(-115)")
;
viz.append("text")
    .text("My Mood After")
    .attr("fill", "black")
    .attr("x", 350)
    .attr("y", 680)
    .attr("font-family", "Roboto")
    .attr("font-size", 30)
    .attr("font-weight", 350)
;
viz.append("text")
    .text("The Food.")
    .attr("fill", "black")
    .attr("x", 375)
    .attr("y", 720)
    .attr("font-family", "Roboto")
    .attr("font-size", 30)
    .attr("font-weight", 350)
;

// bowl text & line
viz.append("text")
    .text("How Many Bowls")
    .attr("fill", "black")
    .attr("x", 600)
    .attr("y", 600)
    .attr("font-family", "Roboto")
    .attr("font-size", 30)
    .attr("font-weight", 350)
;
viz.append("text")
    .text("I Have for Each Meal.")
    .attr("fill", "black")
    .attr("x", 625)
    .attr("y", 640)
    .attr("font-family", "Roboto")
    .attr("font-size", 30)
    .attr("font-weight", 350)
;
viz.append("line")
    .attr("x1", 455)
    .attr("y1", 530)
    .attr("x2", 525)
    .attr("y2", 540)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", "10,10")
;
viz.append("line")
    .attr("x1", 515)
    .attr("y1", 610)
    .attr("x2", 525)
    .attr("y2", 540)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", "10,10")
;
viz.append("line")
    .attr("x1", 600)
    .attr("y1", 580)
    .attr("x2", 525)
    .attr("y2", 540)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1.5)
;

// mood explain
// rect
viz.append("rect")
    .attr("width", 33.3333)
    .attr("height", 66.6666)
    .attr("fill", "#f75cbc")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("transform", "translate(580, 690) rotate(35)")
;
viz.append("rect")
    .attr("width", 33.3333)
    .attr("height", 66.6666)
    .attr("fill", "#55e6a9")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("transform", "translate(730, 690) rotate(35)")
;
viz.append("rect")
    .attr("width", 33.3333)
    .attr("height", 66.6666)
    .attr("fill", "#302e85")
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("transform", "translate(900, 690) rotate(35)")
;
viz.append("text")
    .text("High")
    .attr("fill", "black")
    .attr("x", 600)
    .attr("y", 755)
    .attr("font-family", "Roboto")
    .attr("font-size", 30)
    .attr("font-weight", 350)
;
viz.append("text")
    .text("Neutral")
    .attr("fill", "black")
    .attr("x", 750)
    .attr("y", 755)
    .attr("font-family", "Roboto")
    .attr("font-size", 30)
    .attr("font-weight", 350)
;
viz.append("text")
    .text("Low")
    .attr("fill", "black")
    .attr("x", 920)
    .attr("y", 755)
    .attr("font-family", "Roboto")
    .attr("font-size", 30)
    .attr("font-weight", 350)
;

// formal
viz.append("polygon")
    .attr("points", "-5,45 -5,35 -25,30 -30,35 -30,45 -25,50")
    .attr("fill", "grey")
    .attr("stroke", "black")
    .attr("stroke-width", 1.5)
    .attr("transform", "translate(1050, 625)")
;
viz.append("polygon")
    .attr("points", "-5,35 -5,45 -3,47 3,47 5,45 5,35 3,33 -3,33")
    .attr("fill", "grey")
    .attr("stroke", "black")
    .attr("stroke-width", 1.5)
    .attr("transform", "translate(1050, 625)")
;
viz.append("polygon")
    .attr("points", "5,45 25,50 30,45 30,35 25,30 5,35")
    .attr("fill", "grey")
    .attr("stroke", "black")
    .attr("stroke-width", 1.5)
    .attr("transform", "translate(1050, 625)")
;
viz.append("text")
    .text("That Means A")
    .attr("fill", "black")
    .attr("x", 1020)
    .attr("y", 725)
    .attr("font-family", "Roboto")
    .attr("font-size", 25)
    .attr("font-weight", 400)
;
viz.append("text")
    .text("Formal Dinner!")
    .attr("fill", "black")
    .attr("x", 1020)
    .attr("y", 755)
    .attr("font-family", "Roboto")
    .attr("font-size", 25)
    .attr("font-weight", 400)
;
// path
viz.append("path")
    .attr("d", "M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("fill-rule", "evenodd")
    .attr("clip-rule", "evenodd")
    .attr("transform", "translate(1100,700) rotate(-135)")
;
