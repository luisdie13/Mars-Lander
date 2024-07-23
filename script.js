const surfaceN = parseInt(readline());
for (let i = 0; i < surfaceN; ++i) {
    readline();
}


while (true) {
    let inputs = readline ().split(' ');
    let vSpeed = parseInt(inputs[3]);
    let power = 0;
    let angle = 0;
    if (vSpeed <= -40)

{

power = 4;

}

print(`${angle} ${power}`);
}