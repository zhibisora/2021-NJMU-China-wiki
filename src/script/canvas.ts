function myDrawDashLine(id: string, fromPos: Pos, toQCPos: QCPos) {
    var c = <HTMLCanvasElement>document.getElementById(id)!
    var ctx = c.getContext("2d")!
    ctx.setLineDash([6, 6])
    ctx.beginPath()
    ctx.strokeStyle = "#30591c"
    ctx.lineWidth = 3
    ctx.lineCap = "round"
    ctx.moveTo(fromPos.x, fromPos.y)
    ctx.quadraticCurveTo(toQCPos.cpx, toQCPos.cpy, toQCPos.x, toQCPos.y)
    ctx.stroke()
}
function myDrawDashLineByQCLine(id: string, l: QCLine) {
    myDrawDashLine(id, l.Pos, l.QCPos)
}
function newPos(x: number, y: number) {
    return { x: x, y: y }
}
function newQCPos(cpx: number, cpy: number, x: number, y: number) {
    return { cpx: cpx, cpy: cpy, x: x, y: y }
}
function newQCLine(
    x: number,
    y: number,
    cpx: number,
    cpy: number,
    x2: number,
    y2: number
) {
    return { Pos: newPos(x, y), QCPos: newQCPos(cpx, cpy, x2, y2) }
}
interface QCLine {
    Pos: Pos
    QCPos: QCPos
}
interface Pos {
    x: number
    y: number
}
interface QCPos {
    cpx: number
    cpy: number
    x: number
    y: number
}
// class Pos {
//     x: number
//     y: number
//     constructor(x: number, y: number) {
//         this.x = x
//         this.y = y
//     }
// }
// type canvasLines = QCLine[]
class canvasLines {
    l1: QCLine
    l2: QCLine
    l3: QCLine
    l4: QCLine
    l5: QCLine
    l6: QCLine
    constructor(
        l1: QCLine,
        l2: QCLine,
        l3: QCLine,
        l4: QCLine,
        l5: QCLine,
        l6: QCLine
    ) {
        this.l1 = l1
        this.l2 = l2
        this.l3 = l3
        this.l4 = l4
        this.l5 = l5
        this.l6 = l6
    }
}
function myCanvas(l: canvasLines) {
    myDrawDashLineByQCLine("myCanvas", l.l1)

    // canvas曲线二
    myDrawDashLineByQCLine("myCanvas1", l.l2)

    // canvas曲线三
    myDrawDashLineByQCLine("myCanvas2", l.l3)

    // canvas曲线四
    myDrawDashLineByQCLine("myCanvas3", l.l4)

    // canvas曲线五
    myDrawDashLineByQCLine("myCanvas4", l.l5)

    // canvas曲线六
    myDrawDashLineByQCLine("myCanvas5", l.l6)
}
function newQCLineByArray(a: number[]) {
    return newQCLine(a[0], a[1], a[2], a[3], a[4], a[5])
}

function myDrawCanvas(l: number[][]) {
    let l1 = newQCLineByArray(l[0])
    let l2 = newQCLineByArray(l[1])
    let l3 = newQCLineByArray(l[2])
    let l4 = newQCLineByArray(l[3])
    let l5 = newQCLineByArray(l[4])
    let l6 = newQCLineByArray(l[5])

    let lines = new canvasLines(l1, l2, l3, l4, l5, l6)
    myCanvas(lines)
}

// canvas曲线大于899小于1050
function canvas() {
    myDrawCanvas([
        [140, 70, 200, 70, 200, 380],
        [400, 0, 390, 200, 240, 420],
        [80, 20, 0, 300, 270, 440],
        [500, 50, 300, 300, 180, 460],
        [340, 220, 450, 400, 380, 760],
        [500, 50, 300, 300, 180, 460],
    ])
}

// canvas曲线大于1049小于1150
function canvas1() {
    myDrawCanvas([
        [190, 70, 200, 70, 210, 380],
        [380, 0, 320, 200, 190, 420],
        [70, 20, -50, 200, 400, 440],
        [410, 40, 100, 420, 210, 460],
        [340, 120, 400, 400, 420, 760],
        [370, 10, 340, 350, 300, 440],
    ])
}

// canvas曲线小于850高度大于800
function canvas3() {
    myDrawCanvas([
        [110, 70, 200, 120, 190, 380],
        [400, 0, 400, 200, 240, 590],
        [140, 20, -100, 400, 270, 630],
        [560, 40, 580, 100, 290, 460],
        [260, 220, 400, 400, 420, 760],
        [410, 10, 380, 350, 320, 500],
    ])
}

// canvas曲线小于850高度
function canvas2() {
    myDrawCanvas([
        [110, 70, 150, 120, 190, 380],
        [420, 0, 420, 250, 240, 670],
        [200, 20, -100, 500, 260, 680],
        [530, 40, 640, 140, 340, 460],
        [220, 220, 380, 400, 400, 760],
        [410, 10, 380, 350, 320, 500],
    ])
}

// canvas曲线小于750高度
function canvas4() {
    myDrawCanvas([
        [110, 70, 120, 120, 190, 380],
        [400, 0, 400, 400, 240, 680],
        [220, 20, -150, 550, 260, 710],
        [520, 40, 680, 200, 320, 520],
        [220, 220, 350, 400, 390, 760],
        [410, 10, 380, 350, 300, 640],
    ])
}

// canvas曲线大于849小于900
function canvas5() {
    myDrawCanvas([
        [130, 70, 160, 120, 190, 380],
        [400, 0, 400, 250, 240, 530],
        [130, 20, -50, 460, 260, 560],
        [560, 40, 520, 200, 240, 470],
        [290, 220, 350, 400, 430, 760],
        [410, 10, 380, 350, 300, 640],
    ])
}

// canvas曲线大于849小于900
function canvas6() {
    myDrawCanvas([
        [130, 70, 160, 120, 190, 380],
        [400, 0, 360, 400, 240, 500],
        [100, 20, -30, 400, 260, 500],
        [520, 40, 480, 200, 230, 470],
        [320, 220, 390, 380, 430, 760],
        [410, 10, 380, 350, 300, 640],
    ])
}

// canvas曲线大于1124小于1200
function canvas7() {
    myDrawCanvas([
        [190, 70, 200, 70, 210, 380],
        [360, 0, 300, 200, 160, 420],
        [70, 20, 20, 200, 590, 440],
        [360, 40, 100, 420, 240, 460],
        [340, 40, 450, 400, 420, 760],
        [370, 10, 340, 350, 300, 440],
    ])
}

export function drawCanvas() {
    let w = window.innerWidth
    let h = window.innerHeight
    console.log(w)
    console.log(h)
    if (h < 760) {
        canvas4()
    } else if (h > 759 && h < 799) {
        canvas2()
    } else if (h > 800 && h < 850) {
        canvas3()
    } else if (h > 849 && h < 900) {
        canvas5()
    } else if (h > 899 && h < 980) {
        canvas6()
    } else if (h > 979 && h < 1050) {
        canvas()
    } else if (h > 1049 && h < 1125) {
        canvas1()
    } else if (h > 1124) {
        canvas7()
    }
}