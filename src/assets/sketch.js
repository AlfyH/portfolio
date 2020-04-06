import $ from "jquery";

export default function sketch(p) {
    let canvas;

    p.setup = () => {
        canvas = p.createCanvas($(window).width(), $(window).height());
        p.background(102);
    }

    p.draw = () => {
        variableEllipse(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    }

    function variableEllipse(x, y, px, py) {
        var speed = p.abs(x - px) + p.abs(y - py);
        p.stroke(speed);
        p.ellipse(x, y, speed, speed);
    }

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
        if (canvas) //Make sure the canvas has been created
            p.fill(newProps.color);
    }
}




// export default function sketch(p) {
//     let canvas;

//     p.setup = () => {
//         canvas = p.createCanvas(710,400, p.WEBGL);
//     }

//     p.draw = () => {
//         p.background(250);
//         p.rotateY(p.frameCount * 0.01);

//         for (let j = 0; j < 5; j++) {
//             p.push();
//             for (let i = 0; i < 80; i++) {
//                 p.translate(
//                     p.sin(p.frameCount * 0.001 + j) * 100,
//                     p.sin(p.frameCount * 0.001 + j) * 100,
//                     i * 0.1
//                 );
//                 p.rotateZ(p.frameCount * 0.002);
//                 p.push();
//                 p.sphere(8, 6, 4);
//                 p.pop();
//             }
//             p.pop();
//         }
//     }

//     p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
//         if (canvas) //Make sure the canvas has been created
//             p.fill(newProps.color);
//     }
// }
