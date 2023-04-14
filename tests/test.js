


const { exec } = require('node:child_process')


exec('cd /var; sudo tree -f -L 1', (err, output) => {
    if (err) {
        console.error("could not execute command: ", err)
        return
    }
    // log the output received from the command
    console.log("Output: \n", output)
})
